"""Verify public catalogue and all published N5 image download hashes."""
from pathlib import Path
from html.parser import HTMLParser
from concurrent.futures import ThreadPoolExecutor
import hashlib, json, time, urllib.request, sys

root = Path(__file__).resolve().parents[1]
expected = json.loads((root/'src/catalog-data.json').read_text(encoding='utf-8'))
base = 'https://utacub.github.io/cace_imgs/'
def fetch(url):
    request = urllib.request.Request(url, headers={'User-Agent': 'CACE-publication-verification'})
    with urllib.request.urlopen(request, timeout=45) as response:
        return response.read()
class Parser(HTMLParser):
    active = False
    def __init__(self):
        super().__init__(); self.parts = []
    def handle_starttag(self, tag, attrs):
        if tag == 'script' and dict(attrs).get('id') == 'catalog-data': self.active = True
    def handle_endtag(self, tag):
        if tag == 'script': self.active = False
    def handle_data(self, data):
        if self.active: self.parts.append(data)
p = Parser()
p.feed(fetch(base+'?verify='+expected['version']+'&t='+str(time.time_ns())).decode('utf-8'))
published = json.loads(''.join(p.parts))
if published != expected:
    print(json.dumps({'status': 'waiting', 'publicVersion': published['version'], 'expectedVersion': expected['version']}))
    sys.exit(75)
assets = [x for x in expected['assets'] if x.get('constructionId','').startswith('n5-')]
def verify(asset):
    raw = fetch(base+asset['src']+'?verify='+expected['version'])
    assert hashlib.sha256(raw).hexdigest() == asset['displaySha256'], asset['id']
    return asset['id']
with ThreadPoolExecutor(max_workers=8) as pool:
    verified = list(pool.map(verify, assets))
report = {'status': 'verified', 'version': expected['version'], 'catalogImages': len(expected['assets']),
          'n5DownloadsVerified': len(verified), 'verifiedIds': verified, 'verifiedAtUtc': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())}
(root/'output/n5-publication-verification.json').write_text(json.dumps(report, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
print(json.dumps({k:v for k,v in report.items() if k != 'verifiedIds'}))

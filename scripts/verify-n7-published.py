"""Verify public catalogue and all published N7 image download hashes."""
from pathlib import Path
from html.parser import HTMLParser
from concurrent.futures import ThreadPoolExecutor
import hashlib, json, time, urllib.request, sys, subprocess

root = Path(__file__).resolve().parents[1]
expected = json.loads((root/'src/catalog-data.json').read_text(encoding='utf-8'))
if len(sys.argv)>1:
    expected=json.loads(subprocess.check_output(['git','show',sys.argv[1]+':src/catalog-data.json'],cwd=root))
base = 'https://utacub.github.io/cace_imgs/'
retries = []
def fetch(url):
    for attempt in range(5):
        try:
            request = urllib.request.Request(url, headers={'User-Agent': 'CACE-publication-verification'})
            with urllib.request.urlopen(request, timeout=30) as response:
                return response.read()
        except Exception as error:
            if attempt == 4:
                raise
            retries.append({'url': url, 'attempt': attempt+1, 'error': str(error)})
            time.sleep(min(2*(attempt+1), 6))
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
assets = [x for x in expected['assets'] if x.get('constructionId','').startswith('n7-')]
def verify(asset):
    raw = fetch(base+asset['src']+'?verify='+expected['version'])
    assert hashlib.sha256(raw).hexdigest() == asset['displaySha256'], asset['id']
    return asset['id']
with ThreadPoolExecutor(max_workers=4) as pool:
    verified = list(pool.map(verify, assets))
report = {'status': 'verified', 'version': expected['version'], 'catalogImages': len(expected['assets']),
          'n7DownloadsVerified': len(verified), 'verifiedIds': verified, 'transientRetries': retries, 'verifiedAtUtc': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())}
(root/'output/n7-publication-verification.json').write_text(json.dumps(report, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
(root/f"output/n7-publication-{expected['version']}.json").write_text(json.dumps(report, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
print(json.dumps({k:v for k,v in report.items() if k != 'verifiedIds'}))

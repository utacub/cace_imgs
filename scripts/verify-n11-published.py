"""Compare the public catalog and checksum every public N11 download."""
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
import hashlib
import json
import subprocess
import sys
import time
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
SITE = 'https://utacub.github.io/cace_imgs/'


class CatalogParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.active = False
        self.chunks = []

    def handle_starttag(self, tag, attributes):
        if tag == 'script' and dict(attributes).get('id') == 'catalog-data':
            self.active = True

    def handle_endtag(self, tag):
        if tag == 'script':
            self.active = False

    def handle_data(self, data):
        if self.active:
            self.chunks.append(data)


def main():
    ref, run_id = sys.argv[1:3]
    commit = subprocess.check_output(['git', 'rev-parse', ref], cwd=ROOT, text=True).strip()
    expected = json.loads(subprocess.check_output(
        ['git', 'show', commit + ':src/catalog-data.json'], cwd=ROOT
    ))
    version = expected['version']
    retries = []

    def fetch(resource):
        for attempt in range(1, 6):
            try:
                request = Request(SITE + resource, headers={'User-Agent': 'CACE-publication-verification'})
                with urlopen(request, timeout=25) as response:
                    return response.read()
            except OSError as error:
                if attempt == 5:
                    raise
                retries.append({'resource': resource, 'attempt': attempt, 'error': str(error)})
                time.sleep(min(attempt * 2, 6))

    parser = CatalogParser()
    parser.feed(fetch(f'?verify={version}&t={time.time_ns()}').decode('utf-8'))
    published = json.loads(''.join(parser.chunks))
    assert published == expected, (published['version'], version)
    assets = [asset for asset in expected['assets'] if asset['levels'] == [11]]
    assert assets

    def verify(asset):
        raw = fetch(asset['src'] + '?verify=' + version)
        assert hashlib.sha256(raw).hexdigest() == asset['displaySha256'], asset['id']
        return asset['id']

    with ThreadPoolExecutor(max_workers=6) as pool:
        verified_ids = list(pool.map(verify, assets))
    report = {
        'status': 'verified', 'version': version, 'catalogImages': len(expected['assets']),
        'n11DownloadsVerified': len(verified_ids), 'verifiedIds': verified_ids,
        'transientRetries': retries, 'verifiedAtUtc': datetime.now(timezone.utc).isoformat(timespec='seconds'),
        'commit': commit, 'workflowRunId': int(run_id) if run_id != '-' else None,
    }
    report_path = ROOT / 'output' / f'n11-publication-{version}.json'
    report_path.parent.mkdir(exist_ok=True)
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(json.dumps({key: value for key, value in report.items() if key != 'verifiedIds'}))


if __name__ == '__main__':
    main()

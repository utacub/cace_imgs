"""Check the complete built image catalogue before publishing it."""
from collections import defaultdict
from html.parser import HTMLParser
from pathlib import Path, PurePosixPath
import hashlib
import json
from PIL import Image

root = Path(__file__).resolve().parents[1]
data = json.loads((root / 'src/catalog-data.json').read_text())
html = (root / 'dist/index.html').read_text()
assert html and '/*__DATA__*/' not in html

class CatalogueParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_catalogue = False
        self.chunks = []
    def handle_starttag(self, tag, attrs):
        if tag == 'script' and dict(attrs).get('id') == 'catalog-data':
            self.in_catalogue = True
    def handle_endtag(self, tag):
        if tag == 'script':
            self.in_catalogue = False
    def handle_data(self, text):
        if self.in_catalogue:
            self.chunks.append(text)

parser = CatalogueParser()
parser.feed(html)
assert json.loads(''.join(parser.chunks)) == data, 'Built HTML contains an outdated catalogue'
assert len({a['id'] for a in data['assets']}) == len(data['assets'])
words = {w['id'] for w in data['words']}
targets = defaultdict(set)
for asset in data['assets']:
    relative = PurePosixPath(asset['src'])
    assert not relative.is_absolute() and '..' not in relative.parts, relative
    image_path = root / 'dist' / relative
    assert image_path.is_file() and image_path.stat().st_size > 0, image_path
    assert hashlib.sha256(image_path.read_bytes()).hexdigest() == asset['displaySha256'], image_path
    with Image.open(image_path) as image:
        image.load()
    assert asset['tags'] and set(asset['tags']) <= words
    assert asset['levels'] and all(level in range(1, 13) for level in asset['levels'])
    if asset.get('origin') == 'generated':
        targets[asset['target']].add(asset['variant'])
assert all(variants == {'foto-01', 'foto-02', 'realista-01', 'pla-01'} for variants in targets.values())
assert not any(path.stat().st_size == 0 for path in (root / 'dist/assets').rglob('*') if path.is_file())
assert not list((root / 'dist').rglob('*.tmp'))
print(json.dumps({'version': data['version'], 'images_verified': len(data['assets']), 'generated_images': sum(a.get('origin') == 'generated' for a in data['assets']), 'complete_words': len(targets), 'vocabulary_entries': len(data['words'])}))

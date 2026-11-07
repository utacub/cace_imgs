"""Check the complete built image catalogue before publishing it."""
from collections import defaultdict
from html.parser import HTMLParser
from pathlib import Path, PurePosixPath
import hashlib
import json
from PIL import Image
from production_policy import required_variants

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
target_words = defaultdict(set)
n2_plan_path = root / 'production/n2-plan.json'
n2_plan = {item['id']: item for item in json.loads(n2_plan_path.read_text(encoding='utf-8'))['items']} if n2_plan_path.exists() else {}
n2_assets = defaultdict(list)
n3_plan_path = root / 'production/n3-plan.json'
n3_plan = {item['id']: item for item in json.loads(n3_plan_path.read_text(encoding='utf-8'))['items']} if n3_plan_path.exists() else {}
n3_assets = defaultdict(list)
word_records = {word['id']: word for word in data['words']}
for asset in data['assets']:
    relative = PurePosixPath(asset['src'])
    assert not relative.is_absolute() and '..' not in relative.parts, relative
    image_path = root / 'dist' / relative
    assert image_path.is_file() and image_path.stat().st_size > 0, image_path
    assert hashlib.sha256(image_path.read_bytes()).hexdigest() == asset['displaySha256'], image_path
    with Image.open(image_path) as image:
        image.load()
    assert asset['tags'] and set(asset['tags']) <= words
    assert asset.get('primaryWordId') in asset['tags'], asset['id']
    assert asset['levels'] and all(level in range(1, 13) for level in asset['levels'])
    if asset.get('constructionId'):
        is_n3 = asset['constructionId'] in n3_plan
        construction = (n3_plan if is_n3 else n2_plan)[asset['constructionId']]
        assert asset['origin'] == 'generated' and asset['levels'] == [3 if is_n3 else 2], asset['id']
        assert asset['targetWordIds'] == construction['wordIds'] == asset['tags'], asset['id']
        assert asset['variant'] == construction['variant'] and asset['kind'] == construction['kind'], asset['id']
        assert asset['primaryWordId'] == construction['wordIds'][0], asset['id']
        (n3_assets if is_n3 else n2_assets)[asset['constructionId']].append(asset['id'])
    elif asset.get('origin') == 'generated':
        targets[asset['target']].add(asset['variant'])
        target_words[asset['target']].update(asset['targetWordIds'])
for target, variants in targets.items():
    assert target_words[target]
    assert all(variants == required_variants(word_records[word_id]) for word_id in target_words[target]), target
assert all(len(assets) == 1 for assets in n2_assets.values()), 'Each N2 construction must have exactly one image'
assert all(len(assets) == 1 for assets in n3_assets.values()), 'Each N3 construction must have exactly one image'
assert not any(path.stat().st_size == 0 for path in (root / 'dist/assets').rglob('*') if path.is_file())
assert not list((root / 'dist').rglob('*.tmp'))
print(json.dumps({'version': data['version'], 'images_verified': len(data['assets']), 'generated_images': sum(a.get('origin') == 'generated' for a in data['assets']), 'complete_words': len(targets), 'complete_n2_constructions': len(n2_assets), 'complete_n3_constructions': len(n3_assets), 'vocabulary_entries': len(data['words'])}))

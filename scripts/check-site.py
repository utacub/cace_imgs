"""Check the complete built image catalogue before publishing it."""
from collections import defaultdict
from html.parser import HTMLParser
from pathlib import Path, PurePosixPath
import hashlib
import json
import argparse
import subprocess
from PIL import Image
from production_policy import required_variants

root = Path(__file__).resolve().parents[1]
arguments = argparse.ArgumentParser()
arguments.add_argument('--since', help='Reuse prior image decoding only when the current SHA-256 matches that committed catalogue.')
args = arguments.parse_args()
previous_hashes = {}
if args.since:
    previous = json.loads(subprocess.check_output(['git', 'show', args.since+':src/catalog-data.json'], cwd=root))
    previous_hashes = {a['src']: a['displaySha256'] for a in previous['assets']}
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
n4_plan_path = root / 'production/n4-plan.json'
n4_plan = {item['id']: item for item in json.loads(n4_plan_path.read_text(encoding='utf-8'))['items']} if n4_plan_path.exists() else {}
n4_assets = defaultdict(list)
n5_plan_path = root / 'production/n5-plan.json'
n5_plan = {item['id']: item for item in json.loads(n5_plan_path.read_text(encoding='utf-8'))['items']} if n5_plan_path.exists() else {}
n5_assets = defaultdict(list)
n6_plan_path = root / 'production/n6-plan.json'
n6_plan = {item['id']: item for item in json.loads(n6_plan_path.read_text(encoding='utf-8'))['items']} if n6_plan_path.exists() else {}
n6_assets = defaultdict(list)
n7_plan_path = root / 'production/n7-plan.json'
n7_plan = {item['id']: item for item in json.loads(n7_plan_path.read_text(encoding='utf-8'))['items']} if n7_plan_path.exists() else {}
n7_assets = defaultdict(list)
n8_plan_path = root / 'production/n8-plan.json'
n8_plan = {item['id']: item for item in json.loads(n8_plan_path.read_text(encoding='utf-8'))['items']} if n8_plan_path.exists() else {}
n8_assets = defaultdict(list)
n9_plan_path = root / 'production/n9-plan.json'
n9_plan = {item['id']: item for item in json.loads(n9_plan_path.read_text(encoding='utf-8'))['items']} if n9_plan_path.exists() else {}
n9_assets = defaultdict(list)
n10_plan_path = root / 'production/n10-plan.json'
n10_plan = {item['id']: item for item in json.loads(n10_plan_path.read_text(encoding='utf-8'))['items']} if n10_plan_path.exists() else {}
n10_assets = defaultdict(list)
n11_plan_path = root / 'production/n11-plan.json'
n11_plan = {item['id']: item for item in json.loads(n11_plan_path.read_text(encoding='utf-8'))['items']} if n11_plan_path.exists() else {}
n11_assets = defaultdict(list)
n12_plan_path = root / 'production/n12-plan.json'
n12_plan = {item['id']: item for item in json.loads(n12_plan_path.read_text(encoding='utf-8'))['items']} if n12_plan_path.exists() else {}
n12_assets = defaultdict(list)
construction_levels = [
    (2, n2_plan, n2_assets), (3, n3_plan, n3_assets), (4, n4_plan, n4_assets),
    (5, n5_plan, n5_assets), (6, n6_plan, n6_assets), (7, n7_plan, n7_assets),
    (8, n8_plan, n8_assets), (9, n9_plan, n9_assets), (10, n10_plan, n10_assets),
    (11, n11_plan, n11_assets), (12, n12_plan, n12_assets),
]
word_records = {word['id']: word for word in data['words']}
for asset in data['assets']:
    relative = PurePosixPath(asset['src'])
    assert not relative.is_absolute() and '..' not in relative.parts, relative
    image_path = root / 'dist' / relative
    assert image_path.is_file() and image_path.stat().st_size > 0, image_path
    assert hashlib.sha256(image_path.read_bytes()).hexdigest() == asset['displaySha256'], image_path
    if previous_hashes.get(asset['src']) != asset['displaySha256']:
        with Image.open(image_path) as image:
            image.load()
    assert asset['tags'] and set(asset['tags']) <= words
    assert asset.get('primaryWordId') in asset['tags'], asset['id']
    assert asset['levels'] and all(level in range(1, 13) for level in asset['levels'])
    if asset.get('constructionId'):
        level, plan, level_assets = next(entry for entry in construction_levels if asset['constructionId'] in entry[1])
        construction = plan[asset['constructionId']]
        assert asset['origin'] == 'generated' and asset['levels'] == [level], asset['id']
        assert asset['targetWordIds'] == construction['wordIds'] == asset['tags'], asset['id']
        expected_variant = 'foto-01' if level == 12 else construction['variant']
        assert asset['variant'] == expected_variant and asset['kind'] == construction['kind'], asset['id']
        assert asset['primaryWordId'] == construction['wordIds'][0], asset['id']
        if level == 8:
            assert asset['events'] == construction['events'], asset['id']
            assert asset['semanticRelation'] == construction['relation'], asset['id']
        if level in (9, 10):
            assert asset['moments'] == construction['moments'], asset['id']
            assert asset['continuity'] == construction['continuity'], asset['id']
            assert asset['semanticRelation'] == construction['relation'], asset['id']
        if level == 10:
            assert construction['relation']['causalClaim'] is True, asset['id']
            assert asset['semanticRelation']['type'] == 'causa-consequencia', asset['id']
        if level == 11:
            assert asset['moments'] == construction['moments'] and len(asset['moments']) == 4, asset['id']
            assert asset['continuity'] == construction['continuity'], asset['id']
            expected_relation = {
                'type': 'relat',
                **{key: construction[key] for key in ('familyId', 'participants', 'settings', 'narrative')},
            }
            assert asset['semanticRelation'] == expected_relation, asset['id']
        if level == 12:
            assert construction['sceneCount'] == 1 and asset['kind'] == 'photo', asset['id']
            assert asset['semanticRelation'] == {
                'type': 'absurd-visual',
                'mechanism': construction['mechanism'],
                'subtype': construction['subtype'],
            }, asset['id']
        level_assets[asset['constructionId']].append(asset['id'])
    elif asset.get('origin') == 'generated':
        targets[asset['target']].add(asset['variant'])
        target_words[asset['target']].update(asset['targetWordIds'])
for target, variants in targets.items():
    assert target_words[target]
    assert all(variants == required_variants(word_records[word_id]) for word_id in target_words[target]), target
assert all(len(assets) == 1 for assets in n2_assets.values()), 'Each N2 construction must have exactly one image'
assert all(len(assets) == 1 for assets in n3_assets.values()), 'Each N3 construction must have exactly one image'
assert all(len(assets) == 1 for assets in n4_assets.values()), 'Each N4 construction must have exactly one image'
assert all(len(assets) == 1 for assets in n5_assets.values()), 'Each N5 construction must have exactly one image'
assert all(len(assets) == 1 for assets in n6_assets.values()), 'Each N6 construction must have exactly one image'
assert all(len(assets) == 1 for assets in n7_assets.values()), 'Each N7 construction must have exactly one image'
assert all(len(assets) == 1 for assets in n9_assets.values()), 'Each N9 construction must have exactly one image'
assert all(len(assets) == 1 for assets in n8_assets.values()), 'Each N8 construction must have exactly one image'
assert all(len(assets) == 1 for assets in n10_assets.values()), 'Each N10 construction must have exactly one image'
if n10_assets:
    collection = next(collection for collection in data['collections'] if collection['id'] == 'cace-n10-causes')
    assert len(collection['items']) == len(n10_assets)
    assert set(collection['items']) == {ids[0] for ids in n10_assets.values()}
assert all(len(assets) == 1 for assets in n11_assets.values()), 'Each N11 construction must have exactly one image'
if n11_assets:
    collection = next(collection for collection in data['collections'] if collection['id'] == 'cace-n11-relats')
    assert len(collection['items']) == len(n11_assets)
    assert set(collection['items']) == {ids[0] for ids in n11_assets.values()}
assert all(len(assets) == 1 for assets in n12_assets.values()), 'Each N12 construction must have exactly one image'
if n12_assets:
    collection = next(collection for collection in data['collections'] if collection['id'] == 'cace-n12-absurds-visuals')
    assert len(collection['items']) == len(n12_assets)
    assert set(collection['items']) == {ids[0] for ids in n12_assets.values()}
assert not any(path.stat().st_size == 0 for path in (root / 'dist/assets').rglob('*') if path.is_file())
assert not list((root / 'dist').rglob('*.tmp'))
print(json.dumps({'version': data['version'], 'images_verified': len(data['assets']), 'generated_images': sum(a.get('origin') == 'generated' for a in data['assets']), 'complete_words': len(targets), 'complete_n2_constructions': len(n2_assets), 'complete_n3_constructions': len(n3_assets), 'complete_n4_constructions': len(n4_assets), 'complete_n5_constructions': len(n5_assets), 'complete_n6_constructions': len(n6_assets), 'complete_n8_constructions': len(n8_assets), 'complete_n9_constructions': len(n9_assets), 'complete_n10_constructions': len(n10_assets), 'vocabulary_entries': len(data['words'])}))

"""Import accepted local N5 originals without changing earlier catalogue entries."""
from pathlib import Path
from datetime import datetime, timezone
import hashlib, json, sys
from PIL import Image

root = Path(__file__).resolve().parents[1]
version = sys.argv[1]
plan = json.loads((root/'production/n5-plan.json').read_text(encoding='utf-8'))
path = root/'src/catalog-data.json'
catalog = json.loads(path.read_text(encoding='utf-8'))
words = {w['id']: w for w in catalog['words']}
existing = {a.get('constructionId'): a for a in catalog['assets'] if a.get('constructionId')}
selected = []
for item in plan['items']:
    record_path = root/'production/n5'/f"{item['id']}.json"
    if not record_path.exists():
        continue
    record = json.loads(record_path.read_text(encoding='utf-8'))
    if record.get('reviewed') is not True or record.get('status') != 'accepted':
        continue
    assert record['construction'] == item
    assert record['prompt'] and record['review'] and record['alt']['ca'] and record['alt']['es']
    assert len(set(item['wordIds'])) == 3
    assert [words[wid]['ca'] for wid in item['wordIds']] == item['labels']
    assert not {'FER PIPI', 'FER CACA'} & set(item['labels'])
    original = (root/record['file']).resolve()
    assert original == (root/'output/production/n5'/item['id']/'image.png').resolve()
    assert hashlib.sha256(original.read_bytes()).hexdigest() == record['originalSha256']
    with Image.open(original) as image:
        assert image.size == (record['width'], record['height'])
        image.verify()
    selected.append((item, record, record_path, original))
assert selected
collection_id = 'cace-n5-relacions'
collection = next((x for x in catalog['collections'] if x['id'] == collection_id), None)
if collection is None:
    collection = {'id': collection_id, 'name': 'N5 · Relacions', 'items': []}
    catalog['collections'].append(collection)
new = []
for item, record, record_path, original in selected:
    if item['id'] in existing:
        assert existing[item['id']]['originalSha256'] == record['originalSha256']
        continue
    source = f"assets/constructions/n5/{item['id']}.webp"
    destination = root/'dist'/source
    destination.parent.mkdir(parents=True, exist_ok=True)
    if not destination.exists():
        with Image.open(original) as image:
            image.save(destination, 'WEBP', quality=93, method=6)
    created = record['created']
    row = {'id': 'cace-'+item['id'], 'src': source, 'title': item['title'],
           'alt': record['alt'], 'tags': item['wordIds'], 'primaryWordId': item['wordIds'][0],
           'targetWordIds': item['wordIds'], 'levels': [5], 'kind': item['kind'],
           'origin': 'generated', 'credit': 'Imatge generada amb IA per a CACE Imatges.',
           'created': created, 'target': item['id'], 'constructionId': item['id'],
           'variant': item['variant'], 'originalSha256': record['originalSha256'],
           'displayEncoding': 'webp-quality-93-original-dimensions',
           'displaySha256': hashlib.sha256(destination.read_bytes()).hexdigest()}
    new.append(row)
    collection['items'].append(row['id'])
    record.update(publicationVersion=version, importedAt=datetime.now(timezone.utc).isoformat())
    record_path.write_text(json.dumps(record, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
    (original.parent/'brief.json').write_text(json.dumps(record, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
catalog['assets'] = new + catalog['assets']
catalog['version'] = version
temporary = path.with_suffix('.json.tmp')
temporary.write_text(json.dumps(catalog, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
temporary.replace(path)
package_path = root/'package.json'
package = json.loads(package_path.read_text(encoding='utf-8'))
package['version'] = version
package_path.write_text(json.dumps(package, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
progress_path = root/'production/n5-progress.json'
progress = json.loads(progress_path.read_text(encoding='utf-8'))
progress.update(catalogVersion=version, imported=len(selected), collectionId=collection_id,
                publicationAuthorization=progress['authorization'])
progress_path.write_text(json.dumps(progress, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
print(json.dumps({'version': version, 'imported': len(new), 'n5': len(collection['items']), 'images': len(catalog['assets'])}))

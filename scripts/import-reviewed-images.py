"""Import a complete, visually reviewed four-image concept from a JSON brief.

Usage: python scripts/import-reviewed-images.py output/brief.json
The brief records the exact prompts and local originals; all four variants are
required before the catalogue is changed. Existing assets are never replaced.
"""
from pathlib import Path
import copy
import hashlib
import json
import shutil
import sys
import time
from PIL import Image

root = Path(__file__).resolve().parents[1]
brief_path = Path(sys.argv[1]).resolve()
brief = json.loads(brief_path.read_text(encoding='utf-8'))
catalog_path = root / 'src/catalog-data.json'
catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
variants = {'foto-01', 'foto-02', 'realista-01', 'pla-01'}
assert set(brief['images']) == variants
word = next(w for w in catalog['words'] if w['id'] == brief['word_id'])
target = 'concept-' + hashlib.sha256(word['id'].encode()).hexdigest()[:12]
assert not any(word['id'] in a.get('targetWordIds', []) for a in catalog['assets'])
for record in brief['images'].values():
    assert record['reviewed'] is True and record['prompt']
    with Image.open(record['file']) as image:
        image.verify()

rows = []
archive_dir = root / 'output/production' / brief['slug']
archive_dir.mkdir(parents=True, exist_ok=True)
for variant, record in brief['images'].items():
    original = archive_dir / (variant + '.png')
    shutil.copy2(record['file'], original)
    source = f"assets/individuals/{word['category']}/{brief['slug']}/{variant}.webp"
    destination = root / 'dist' / source
    destination.parent.mkdir(parents=True, exist_ok=True)
    assert not destination.exists()
    with Image.open(original) as image:
        image.save(destination, 'WEBP', quality=93, method=6)
    template = next(a for a in catalog['assets'] if a.get('variant') == variant)
    row = copy.deepcopy(template)
    row.update(id=f'cace-{target}-{variant}', src=source,
               title={lang: word[lang] + ' · ' + template['title'][lang].split(' · ')[1] for lang in ('ca','es')},
               alt=record['alt'], tags=[word['id']], target=target,
               targetWordIds=[word['id']], created=brief['created'],
               originalSha256=hashlib.sha256(original.read_bytes()).hexdigest(),
               displaySha256=hashlib.sha256(destination.read_bytes()).hexdigest())
    rows.append(row)
    collection_id = 'cace-unitats-' + ('fotografies' if variant.startswith('foto') else 'realistes' if variant.startswith('realista') else 'planes')
    next(c for c in catalog['collections'] if c['id'] == collection_id)['items'].append(row['id'])
catalog['assets'] = rows + catalog['assets']
catalog['version'] = brief['version']
catalog_text = json.dumps(catalog, ensure_ascii=False, indent=2) + '\n'
temporary_catalog = catalog_path.with_suffix('.json.tmp')
for attempt in range(3):
    try:
        temporary_catalog.write_text(catalog_text, encoding='utf-8')
        temporary_catalog.replace(catalog_path)
        break
    except OSError:
        if attempt == 2:
            raise
        time.sleep(0.5)
(archive_dir / 'brief.json').write_text(json.dumps(brief, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'word': word['ca'], 'added': len(rows), 'images': len(catalog['assets'])}, ensure_ascii=False))

"""Give every catalogue image a primary CACE keyword, preserving reviewed choices."""
from pathlib import Path
import json
import time

root = Path(__file__).resolve().parents[1]
path = root / 'src/catalog-data.json'
catalog = json.loads(path.read_text(encoding='utf-8'))
words = {word['id']: word for word in catalog['words']}
# The initial scenes teach an action or relation rather than an isolated object.
sample_keywords = {
    'sample-girl-drawing': ('MENJAR', 'verbs'),
    'sample-girl-photo': ('MENJAR', 'verbs'),
    'sample-man-photo': ('LLEGIR', 'verbs'),
    'sample-man-drawing': ('LLEGIR', 'verbs'),
    'sample-ball-chair': ('SOBRE', 'espai'),
    'sample-apple': ('POMA', 'aliments'),
    'sample-dog': ('GOS', 'animals'),
    'sample-chair': ('CADIRA', 'mobles'),
}
updated = 0
for asset in catalog['assets']:
    primary = asset.get('primaryWordId')
    if primary in asset['tags'] and primary in words:
        continue
    candidates = [word_id for word_id in asset.get('targetWordIds', []) if word_id in asset['tags'] and word_id in words]
    if not candidates and asset['id'] in sample_keywords:
        label, category = sample_keywords[asset['id']]
        candidates = [word_id for word_id in asset['tags'] if words[word_id]['ca'] == label and words[word_id]['category'] == category]
    assert candidates, f"Choose a primary keyword for {asset['id']} before building"
    asset['primaryWordId'] = candidates[0]
    updated += 1
if updated:
    temporary = path.with_suffix('.json.tmp')
    for attempt in range(3):
        try:
            temporary.write_text(json.dumps(catalog, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
            temporary.replace(path)
            break
        except OSError:
            if attempt == 2:
                raise
            time.sleep(0.5)
print(json.dumps({'primary_keywords_added': updated, 'catalogue_images': len(catalog['assets'])}))

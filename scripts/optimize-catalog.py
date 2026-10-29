"""Encode display copies for the app; production-package originals stay untouched."""
from pathlib import Path
import hashlib
import json
import os
from PIL import Image

root = Path(__file__).resolve().parents[1]
path = root / 'src/catalog-data.json'
data = json.loads(path.read_text())
converted = 0
before = after = 0
obsolete_copies = []
referenced = {a['src'] for a in data['assets']}
for asset in data['assets']:
    source = root / 'dist' / asset['src']
    if source.suffix.lower() == '.webp':
        assert source.is_file(), source
        with Image.open(source) as image:
            image.load()
        checksum = hashlib.sha256(source.read_bytes()).hexdigest()
        assert not asset.get('displaySha256') or asset['displaySha256'] == checksum, source
        asset['displaySha256'] = checksum
        for suffix in ('.png', '.jpg', '.jpeg'):
            sibling = source.with_suffix(suffix)
            if sibling.is_file() and sibling.relative_to(root/'dist').as_posix() not in referenced:
                obsolete_copies.append(sibling)
        continue
    assert source.suffix.lower() in {'.png', '.jpg', '.jpeg'}, source
    destination = source.with_suffix('.webp')
    encoded = destination.with_name(destination.name + '.tmp')
    original = source.read_bytes()
    with Image.open(source) as image:
        dimensions = image.size
        image.save(encoded, 'WEBP', quality=93, method=6)
    with Image.open(encoded) as image:
        assert image.size == dimensions
        image.load()
    with encoded.open('rb') as handle:
        os.fsync(handle.fileno())
    encoded.replace(destination)
    asset['src'] = destination.relative_to(root / 'dist').as_posix()
    asset['originalSha256'] = hashlib.sha256(original).hexdigest()
    asset['displayEncoding'] = 'webp-quality-93-original-dimensions'
    asset['displaySha256'] = hashlib.sha256(destination.read_bytes()).hexdigest()
    before += len(original)
    after += destination.stat().st_size
    converted += 1
    # Only the app's copied runtime file is replaced, never generated originals.
    obsolete_copies.append(source)
temporary = path.with_suffix('.json.tmp')
temporary.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
temporary.replace(path)
for source in obsolete_copies:
    source.unlink(missing_ok=True)
print(json.dumps({'display_copies_encoded': converted, 'source_bytes': before, 'display_bytes': after}))

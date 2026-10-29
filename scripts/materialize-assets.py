"""Restore missing runtime images from the versioned, checksum-verified bank."""
from pathlib import Path, PurePosixPath
import hashlib
import json
import tempfile
import zipfile

root = Path(__file__).resolve().parents[1]
data = json.loads((root / 'src/catalog-data.json').read_text())
missing = [asset for asset in data['assets'] if not (root / 'dist' / asset['src']).is_file()]
if not missing:
    print(json.dumps({'images_restored': 0}))
    raise SystemExit(0)
bank = root / 'bank'
manifest = json.loads((bank / 'manifest.json').read_text())
assert manifest['format'] == 'cace-imatges-image-bank' and manifest['version'] == 1
with tempfile.TemporaryFile() as assembled:
    checksum = hashlib.sha256()
    total = 0
    for part in manifest['parts']:
        relative = PurePosixPath(part['path'])
        assert len(relative.parts) == 1 and not relative.is_absolute()
        raw = (bank / relative).read_bytes()
        assert len(raw) == part['bytes'] and hashlib.sha256(raw).hexdigest() == part['sha256'], relative
        assembled.write(raw)
        checksum.update(raw)
        total += len(raw)
    assert total == manifest['archive_bytes']
    assert checksum.hexdigest() == manifest['archive_sha256']
    assembled.seek(0)
    with zipfile.ZipFile(assembled) as archive:
        for asset in missing:
            relative = PurePosixPath(asset['src'])
            assert relative.parts[0] == 'assets' and '..' not in relative.parts and not relative.is_absolute()
            raw = archive.read(relative.as_posix())
            assert hashlib.sha256(raw).hexdigest() == asset['displaySha256'], relative
            destination = root / 'dist' / relative
            destination.parent.mkdir(parents=True, exist_ok=True)
            temporary = destination.with_name(destination.name + '.tmp')
            temporary.write_bytes(raw)
            temporary.replace(destination)
print(json.dumps({'images_restored': len(missing)}))

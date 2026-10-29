"""Version the current display-image bank in Git-friendly 4 MiB parts."""
from pathlib import Path, PurePosixPath
import hashlib
import json
import tempfile
import zipfile

root = Path(__file__).resolve().parents[1]
data = json.loads((root / 'src/catalog-data.json').read_text())
bank = root / 'bank'
bank.mkdir(exist_ok=True)
parts = []
with tempfile.TemporaryFile() as assembled:
    with zipfile.ZipFile(assembled, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=6) as archive:
        for asset in sorted(data['assets'], key=lambda asset: asset['src']):
            relative = PurePosixPath(asset['src'])
            assert relative.parts[0] == 'assets' and '..' not in relative.parts and not relative.is_absolute()
            path = root / 'dist' / relative
            raw = path.read_bytes()
            assert hashlib.sha256(raw).hexdigest() == asset['displaySha256'], relative
            archive.writestr(relative.as_posix(), raw)
    assembled.seek(0)
    checksum = hashlib.sha256()
    total = 0
    while raw := assembled.read(4 * 1024 * 1024):
        name = f'images.zip.part-{len(parts):04d}'
        destination = bank / name
        temporary = destination.with_name(destination.name + '.tmp')
        temporary.write_bytes(raw)
        temporary.replace(destination)
        parts.append({'path': name, 'bytes': len(raw), 'sha256': hashlib.sha256(raw).hexdigest()})
        checksum.update(raw)
        total += len(raw)
manifest = {'format': 'cace-imatges-image-bank', 'version': 1, 'archive_sha256': checksum.hexdigest(), 'archive_bytes': total, 'images': len(data['assets']), 'parts': parts}
temporary = bank / 'manifest.json.tmp'
temporary.write_text(json.dumps(manifest, indent=2) + '\n')
temporary.replace(bank / 'manifest.json')
for previous in bank.glob('images.zip.part-*'):
    if previous.name not in {part['path'] for part in parts}:
        previous.unlink()
print(json.dumps({'images_packed': len(data['assets']), 'parts': len(parts), 'archive_bytes': total, 'archive_sha256': checksum.hexdigest()}))

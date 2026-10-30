"""Version the current display-image bank in Git-friendly 4 MiB parts."""
from pathlib import Path, PurePosixPath
import hashlib
import json
import tempfile
import zipfile

root = Path(__file__).resolve().parents[1]
data = json.loads((root / 'src/catalog-data.json').read_text(encoding='utf-8'))
bank = root / 'bank'
bank.mkdir(exist_ok=True)
parts = []
expected = {asset['src']: asset for asset in data['assets']}
assert len(expected) == len(data['assets'])
for name in expected:
    relative = PurePosixPath(name)
    assert relative.parts[0] == 'assets' and '..' not in relative.parts and not relative.is_absolute()
with tempfile.TemporaryFile() as assembled:
    existing_names = set()
    incremental = False
    if (bank / 'manifest.json').exists():
        previous_manifest = json.loads((bank / 'manifest.json').read_text(encoding='utf-8'))
        previous_checksum = hashlib.sha256()
        for index, part in enumerate(previous_manifest['parts']):
            assert part['path'] == f'images.zip.part-{index:04d}'
            raw = (bank / part['path']).read_bytes()
            assert len(raw) == part['bytes'] and hashlib.sha256(raw).hexdigest() == part['sha256']
            assembled.write(raw)
            previous_checksum.update(raw)
        assert assembled.tell() == previous_manifest['archive_bytes']
        assert previous_checksum.hexdigest() == previous_manifest['archive_sha256']
        assembled.seek(0)
        with zipfile.ZipFile(assembled) as previous_archive:
            names = previous_archive.namelist()
            existing_names = set(names)
            incremental = len(names) == len(existing_names) and existing_names <= expected.keys()
            if incremental:
                incremental = all(hashlib.sha256(previous_archive.read(name)).hexdigest() == expected[name]['displaySha256'] for name in names)
    if not incremental:
        assembled.seek(0)
        assembled.truncate()
        existing_names = set()
    added = 0
    with zipfile.ZipFile(assembled, 'a' if incremental else 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=6) as archive:
        for asset in sorted(data['assets'], key=lambda asset: asset['src']):
            if asset['src'] in existing_names:
                continue
            relative = PurePosixPath(asset['src'])
            assert relative.parts[0] == 'assets' and '..' not in relative.parts and not relative.is_absolute()
            path = root / 'dist' / relative
            raw = path.read_bytes()
            assert hashlib.sha256(raw).hexdigest() == asset['displaySha256'], relative
            entry = zipfile.ZipInfo(relative.as_posix(), date_time=(1980, 1, 1, 0, 0, 0))
            entry.compress_type = zipfile.ZIP_DEFLATED
            archive.writestr(entry, raw, compresslevel=6)
            added += 1
    assembled.seek(0)
    with zipfile.ZipFile(assembled) as verified:
        assert len(verified.namelist()) == len(expected) and set(verified.namelist()) == expected.keys()
        for name, asset in expected.items():
            assert hashlib.sha256(verified.read(name)).hexdigest() == asset['displaySha256'], name
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
print(json.dumps({'images_packed': len(data['assets']), 'images_added_to_archive': added, 'incremental': incremental, 'parts': len(parts), 'archive_bytes': total, 'archive_sha256': checksum.hexdigest()}))

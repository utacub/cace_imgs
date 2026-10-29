"""Verify every catalog display image inside the exact deployment archive."""
from pathlib import Path
import hashlib
import io
import json
import sys
import tarfile
from PIL import Image

root=Path(__file__).resolve().parents[1]
data=json.loads((root/'src/catalog-data.json').read_text())
with tarfile.open(sys.argv[1]) as archive:
    members={m.name.removeprefix('./'):m for m in archive.getmembers()}
    for asset in data['assets']:
        name='dist/'+asset['src']
        member=members[name]
        assert member.size>0,name
        raw=archive.extractfile(member).read()
        assert hashlib.sha256(raw).hexdigest()==asset['displaySha256'],name
        with Image.open(io.BytesIO(raw)) as image:
            image.load()
    assert not any(m.isfile() and m.name.endswith(('.png','.jpg','.webp')) and not m.size for m in members.values())
print(json.dumps({'archive_images_verified':len(data['assets']),'archive_bytes':Path(sys.argv[1]).stat().st_size}))

"""Verify additions and retired entries preserve existing ZIP image bytes."""
import hashlib
import json
from pathlib import Path
import subprocess
import tempfile
import unittest
import zipfile
import io

ROOT = Path(__file__).resolve().parents[1]

class IncrementalBankTest(unittest.TestCase):
    def test_retirement_and_addition(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            for name in ('scripts', 'src', 'dist/assets'):
                (root / name).mkdir(parents=True)
            (root / 'scripts/pack-bank.py').write_bytes((ROOT / 'scripts/pack-bank.py').read_bytes())
            def catalog(names):
                assets = []
                for name in names:
                    raw = (name * 100).encode()
                    path = 'assets/' + name + '.webp'
                    (root / 'dist' / path).write_bytes(raw)
                    assets.append({'src': path, 'displaySha256': hashlib.sha256(raw).hexdigest()})
                (root / 'src/catalog-data.json').write_text(json.dumps({'assets': assets}))
            def pack():
                result = subprocess.run(['python', 'scripts/pack-bank.py'], cwd=root, capture_output=True, text=True, check=True)
                return json.loads(result.stdout)
            catalog(['retired', 'retained'])
            self.assertFalse(pack()['incremental'])
            before = (root / 'bank/images.zip.part-0000').read_bytes()
            with zipfile.ZipFile(io.BytesIO(before)) as archive:
                directory_offset = archive.start_dir
            catalog(['retained', 'added'])
            result = pack()
            self.assertTrue(result['incremental'])
            self.assertEqual(result['images_added_to_archive'], 1)
            after = (root / 'bank/images.zip.part-0000').read_bytes()
            self.assertEqual(before[:directory_offset], after[:directory_offset])
            with zipfile.ZipFile(io.BytesIO(after)) as archive:
                self.assertEqual(set(archive.namelist()), {'assets/retained.webp', 'assets/added.webp'})
                self.assertEqual(archive.read('assets/retained.webp'), b'retained' * 100)
            self.assertEqual(pack()['images_added_to_archive'], 0)
            self.assertEqual(after, (root / 'bank/images.zip.part-0000').read_bytes())

if __name__ == '__main__':
    unittest.main()

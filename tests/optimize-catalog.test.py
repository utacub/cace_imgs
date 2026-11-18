"""Ensure incremental builds reuse only committed, byte-identical images."""
from pathlib import Path
import hashlib, json, runpy, shutil, sys, tempfile, unittest
from unittest.mock import patch
from PIL import Image

SCRIPT = Path(__file__).resolve().parents[1] / 'scripts/optimize-catalog.py'

class IncrementalImageValidation(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        (self.root/'scripts').mkdir()
        (self.root/'src').mkdir()
        (self.root/'dist/assets').mkdir(parents=True)
        self.script = self.root/'scripts/optimize-catalog.py'
        shutil.copyfile(SCRIPT, self.script)
        self.image = self.root/'dist/assets/example.webp'
        Image.new('RGB', (16, 16), 'white').save(self.image, 'WEBP')
        self.data = {'assets': [{'src': 'assets/example.webp', 'displaySha256': hashlib.sha256(self.image.read_bytes()).hexdigest()}]}
        (self.root/'src/catalog-data.json').write_text(json.dumps(self.data), encoding='utf-8')

    def run_script(self, baseline):
        with patch.object(sys, 'argv', [str(self.script), '--since', 'baseline']), patch('subprocess.check_output', return_value=json.dumps(baseline).encode()):
            runpy.run_path(str(self.script), run_name='__main__')

    def test_unchanged_committed_hash_reuses_decoding(self):
        with patch('PIL.Image.open', side_effect=AssertionError('Unexpected decoding')):
            self.run_script(self.data)
        self.assertEqual(json.loads((self.root/'src/catalog-data.json').read_text()), self.data)

    def test_new_image_is_decoded(self):
        with patch('PIL.Image.open', wraps=Image.open) as opened:
            self.run_script({'assets': []})
            self.assertEqual(opened.call_count, 1)

    def test_corrupted_old_image_is_rejected(self):
        self.image.write_bytes(self.image.read_bytes()+b'changed')
        with self.assertRaises(AssertionError):
            self.run_script(self.data)

if __name__ == '__main__':
    unittest.main()

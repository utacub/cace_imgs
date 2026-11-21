const fs = require('node:fs');
const cp = require('node:child_process');
const assert = require('node:assert/strict');
const {createHash} = require('node:crypto');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const plan = JSON.parse(fs.readFileSync('production/n9-plan.json', 'utf8'));
const catalog = JSON.parse(fs.readFileSync('src/catalog-data.json', 'utf8'));
const baseline = JSON.parse(cp.execFileSync('git', ['show', plan.baseline.head + ':src/catalog-data.json'], {maxBuffer: 64 * 1024 * 1024}));
for (const key of ['words', 'levels', 'categories']) assert.deepEqual(catalog[key], baseline[key]);
const assetsById = new Map(catalog.assets.map(asset => [asset.id, asset]));
for (const asset of baseline.assets) assert.deepEqual(assetsById.get(asset.id), asset);
for (const collection of baseline.collections) {
  assert.deepEqual(catalog.collections.find(entry => entry.id === collection.id), collection);
}
const rows = catalog.assets.filter(asset => asset.constructionId?.startsWith('n9-'));
assert.equal(new Set(rows.map(asset => asset.id)).size, rows.length);
assert.equal(catalog.assets.length, baseline.assets.length + rows.length);
for (const asset of rows) {
  const item = plan.items.find(item => item.id === asset.constructionId);
  const record = JSON.parse(fs.readFileSync('production/n9/' + item.id + '.json', 'utf8'));
  assert.equal(record.reviewed, true);
  assert.equal(record.status, 'accepted');
  assert.ok(record.review && record.prompt);
  assert.deepEqual(record.construction, item);
  assert.deepEqual(asset.tags, item.wordIds);
  assert.deepEqual(asset.moments, item.moments);
  assert.deepEqual(asset.continuity, item.continuity);
  assert.deepEqual(asset.levels, [9]);
  assert.equal(hash(fs.readFileSync(record.file)), asset.originalSha256);
  assert.equal(hash(fs.readFileSync('dist/' + asset.src)), asset.displaySha256);
}
const report = {
  status: 'valid', checkedAt: new Date().toISOString(), catalogVersion: catalog.version,
  catalogImages: catalog.assets.length, preservedImages: baseline.assets.length,
  preservedWords: baseline.words.length, importedN9: rows.length,
  habitual: rows.filter(asset => asset.kind === 'photo').length,
  insolita: rows.filter(asset => asset.kind === 'drawing').length
};
fs.writeFileSync('production/n9-production-audit.json', JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report));

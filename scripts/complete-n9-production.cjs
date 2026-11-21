const fs = require('node:fs');
const cp = require('node:child_process');
const assert = require('node:assert/strict');
const read = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const write = (p, data) => fs.writeFileSync(p, JSON.stringify(data, null, 2) + '\n');
const commit = process.argv[2];
assert.ok(commit, 'Content commit required');
cp.execFileSync('node', ['scripts/audit-n9-production.cjs'], {stdio: 'inherit'});
const audit = read('production/n9-production-audit.json');
const plan = read('production/n9-plan.json');
const catalog = read('src/catalog-data.json');
const progress = read('production/n9-progress.json');
const publicReport = read('output/n9-publication-verification.json');
const records = plan.items.map(item => read('production/n9/' + item.id + '.json'));
assert.equal(records.length, 200);
assert.ok(records.every(r => r.reviewed && r.status === 'accepted' && r.review));
assert.equal(new Set(records.map(r => r.originalSha256)).size, 200);
assert.equal(audit.importedN9, 200);
assert.equal(audit.habitual, 100);
assert.equal(audit.insolita, 100);
assert.equal(audit.catalogImages, 4069);
assert.equal(publicReport.status, 'verified');
assert.equal(publicReport.version, catalog.version);
assert.equal(publicReport.n9DownloadsVerified, 200);
assert.equal(publicReport.catalogImages, 4069);
// Preserve all four N9 images already published before this continuation.
const resumed = JSON.parse(cp.execFileSync('git', ['show', '5261848:src/catalog-data.json'], {maxBuffer: 64 * 1024 * 1024}));
for (const asset of resumed.assets) assert.deepEqual(catalog.assets.find(a => a.id === asset.id), asset);
const rejectedAttempts = records.reduce((sum, r) => sum + (r.rejectedAttempts?.length || 0), 0);
const finalAudit = {...audit, generatedAndReviewed: 200, uniqueOriginalHashes: 200,
  previousCataloguePreserved: true, resumeBaselinePreserved: true,
  resumedSessionImagesPreserved: 3873, rejectedAttempts, recordsAwaitingReview: [],
  totalMoments: plan.items.reduce((sum, item) => sum + item.moments.length, 0),
  publicVerification: publicReport};
write('production/n9-final-audit.json', finalAudit);
write('production/n9-session-2026-11-21.json', {
  status: 'complete', level: 9, planned: 200, reviewed: 200, imported: 200, published: 200,
  habitual: 100, insolita: 100, pending: [], catalogVersion: catalog.version,
  catalogImages: 4069, preservedImagesAtResume: 3873, preservedCaceEntries: 861,
  originalPlanningBaseline: plan.baseline.head, lastContentCommit: commit,
  completedAt: new Date().toISOString(), publicVerifiedAt: publicReport.verifiedAtUtc,
  rejectedAttempts, searchTestsPassed: 19,
  originals: 'output/production/n9', records: 'production/n9', gallery: 'output/n9-review.html',
  publicationEvidence: 'production/n9-publications.json', siteUrl: 'https://utacub.github.io/cace_imgs/',
  note: '200 N9 generades amb ImageGen integrat i revisades individualment; proporcions, perspectiva, continuïtat i quantitats revisades. Catàleg anterior preservat. No generar més N9.'
});
write('production/n9-progress.json', {...progress, status: 'complete', complete: 200, published: 200,
  pending: [], completedAt: new Date().toISOString(), finalAudit: 'production/n9-final-audit.json'});
const notice = '# N9 · 200 imatges completades i publicades · 21/11/2026\n\n' +
  `200/200 N9 revisades i publicades: 100 fotografies habituals i 100 dibuixos plans insòlits. Catàleg ${catalog.version}: 4069 imatges i 861 entrades CACE. Les 3869 imatges anteriors i les quatre N9 existents en reprendre es preserven exactament. Les 200 descàrregues públiques han estat verificades amb SHA-256 a ${publicReport.verifiedAtUtc}.\n\n` +
  'Revisió individual reforçada de proporcions, perspectiva, dimensions, anatomia, quantitats i continuïtat entre vinyetes. Originals i descartats: output/production/n9; prompts i revisions: production/n9. Registre: production/n9-session-2026-11-21.json; auditoria: production/n9-final-audit.json. No generar més N9.\n\n---\n\n';
for (const file of ['PAUSA.md', 'production/CRITERIS.md']) fs.writeFileSync(file, notice + fs.readFileSync(file, 'utf8'));
console.log(JSON.stringify({status: 'complete', published: 200, catalogVersion: catalog.version, rejectedAttempts}));

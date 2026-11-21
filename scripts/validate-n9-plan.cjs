const assert = require('node:assert/strict');
const {execFileSync} = require('node:child_process');
const {createHash} = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
process.chdir(root);

const planPath = 'production/n9-plan.json';
const guidePath = 'production/n9-plan.md';
const reportPath = 'production/n9-plan-validation.json';
const catalogPath = 'src/catalog-data.json';
const bankPath = 'bank/manifest.json';
const allowedPaths = new Set([planPath, guidePath, reportPath, 'scripts/validate-n9-plan.cjs']);
const readJson = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const git = (...args) => execFileSync('git', args, {maxBuffer: 64 * 1024 * 1024});
const toLf = bytes => bytes.toString('utf8').replace(/\r\n/g, '\n');
const id = number => 'n9-' + String(number).padStart(3, '0');

const plan = readJson(planPath);
const guide = fs.readFileSync(guidePath, 'utf8');
const catalog = readJson(catalogPath);
const bank = readJson(bankPath);
const baseline = plan.baseline;
assert.match(baseline.head, /^[a-f0-9]{40}$/);
const baselineCatalog = git('show', baseline.head + ':' + catalogPath);
assert.equal(sha256(baselineCatalog), baseline.catalogSha256);
assert.equal(toLf(fs.readFileSync(catalogPath)), toLf(baselineCatalog), 'El catàleg difereix del punt de partida');
assert.equal(catalog.version, baseline.version);
assert.equal(catalog.assets.length, baseline.totalAssets);
assert.equal(catalog.words.length, baseline.words);
assert.ok(catalog.assets.every(asset => !asset.levels.includes(9)), 'El catàleg ja conté imatges de N9');

const changed = new Set([
  ...git('diff', '--no-renames', '--name-only', '-z', baseline.head, '--').toString('utf8').split('\0'),
  ...git('ls-files', '--others', '--exclude-standard', '-z').toString('utf8').split('\0')
].filter(Boolean));
const unexpected = [...changed].filter(file => !allowedPaths.has(file));
assert.deepEqual(unexpected, [], 'Fitxers modificats fora del pla N9');

assert.deepEqual(bank, JSON.parse(git('show', baseline.head + ':' + bankPath)));
assert.equal(bank.images, baseline.totalAssets);
const archiveHash = createHash('sha256');
let archiveBytes = 0;
for (const part of bank.parts) {
  assert.match(part.path, /^images\.zip\.part-\d{4}$/);
  const bytes = fs.readFileSync(path.join('bank', part.path));
  assert.equal(bytes.length, part.bytes, part.path);
  assert.equal(sha256(bytes), part.sha256, part.path);
  archiveHash.update(bytes);
  archiveBytes += bytes.length;
}
assert.equal(archiveBytes, bank.archive_bytes);
assert.equal(archiveHash.digest('hex'), bank.archive_sha256);
for (const asset of catalog.assets) {
  assert.match(asset.displaySha256, /^[a-f0-9]{64}$/, asset.id);
  assert.equal(sha256(fs.readFileSync(path.join('dist', asset.src))), asset.displaySha256, asset.id);
}

const level = catalog.levels.find(entry => entry.id === 9);
assert.equal(plan.level, level.id);
assert.equal(plan.name, level.ca);
assert.equal(plan.description, level.desc.ca);
assert.equal(plan.status, 'proposal-only');
assert.deepEqual(plan.authorization, {planning: true, generation: false, import: false, publication: false});
assert.deepEqual(plan.compositionPolicy, {
  readingOrder: 'esquerra-dreta', sameAgent: true, sameViewpoint: true, oneImagePerItem: true
});
assert.equal(plan.variantsPerConstruction, 1);
assert.equal(plan.habitual, 100);
assert.equal(plan.insolita, 100);
assert.equal(plan.items.length, 200);

const framesByType = {
  'preparacio-us': 2,
  'activitat-tancament': 2,
  forma: 3,
  aspecte: 3,
  'disposicio-contingut': 3
};
const types = Object.keys(framesByType);
const expectedTypes = Object.fromEntries(types.map(type => [type, 20]));
assert.deepEqual(plan.distributionPerGroup, expectedTypes);
const groups = ['habitual', 'insolita'];
const distribution = Object.fromEntries(groups.map(group => [group, {
  total: 0, sequenceTypes: Object.fromEntries(types.map(type => [type, 0])),
  framesPerImage: {2: 0, 3: 0}, agents: {}
}]));
const wordsById = new Map(catalog.words.map(word => [word.id, word]));
const titles = new Set();
const itemsById = new Map();
const signatures = new Set();
const guideIds = [...guide.matchAll(/\*\*(n9-\d{3})\*\*/g)].map(match => match[1]).sort();
assert.deepEqual(guideIds, plan.items.map(item => item.id).sort());
const guideRows = new Map(guide.split(/\r?\n/).flatMap(line =>
  [...line.matchAll(/\*\*(n9-\d{3})\*\*/g)].map(match => [match[1], line])
));

function verifyTerm(term, category, itemId) {
  const word = wordsById.get(term.wordId);
  assert.ok(word, itemId + ': ID desconegut ' + term.wordId);
  assert.equal(term.label, word.ca, itemId);
  if (category) assert.equal(word.category, category, itemId + ': ' + term.label);
}

let totalMoments = 0;
let targetOccurrences = 0;
for (const [index, item] of plan.items.entries()) {
  const group = groups[Math.floor(index / 100)];
  const family = index % 100 + 1;
  const frameCount = framesByType[item.sequenceType];
  assert.ok(frameCount, item.id);
  assert.equal(item.id, id(index + 1));
  assert.equal(item.number, index + 1);
  assert.equal(item.level, 9);
  assert.equal(item.group, group);
  assert.equal(item.familyId, 'n9-f-' + String(family).padStart(3, '0'));
  assert.equal(item.counterpartId, id(group === 'habitual' ? family + 100 : family));
  assert.equal(item.kind, group === 'habitual' ? 'photo' : 'drawing');
  assert.equal(item.variant, group === 'habitual' ? 'foto-01' : 'pla-01');
  assert.equal(item.reviewStatus, 'pendent-de-revisio-usuari');
  assert.equal(typeof item.adultOnly, 'boolean');
  verifyTerm(item.agent, group === 'habitual' ? 'persones' : 'animals', item.id);
  if (group === 'habitual' && item.adultOnly) {
    assert.ok(['DONA', 'HOME'].includes(item.agent.label), 'Cal un agent adult: ' + item.id);
  }
  assert.equal(item.actions.length, frameCount === 2 ? 2 : 1, item.id);
  assert.ok(item.referents.length >= 1 && item.referents.length <= 2, item.id);
  for (const action of item.actions) verifyTerm(action, 'verbs', item.id);
  for (const referent of item.referents) verifyTerm(referent, null, item.id);
  assert.equal(item.relation.type, 'ordre-temporal');
  assert.equal(item.relation.causalClaim, false);
  assert.deepEqual(item.relation.markers.map(term => term.label), ['ABANS', 'DESPRÉS']);
  for (const marker of item.relation.markers) verifyTerm(marker, 'temps', item.id);
  assert.equal(item.primaryWordId, item.agent.wordId);
  const terms = [item.agent, ...item.actions, ...item.referents, ...item.relation.markers];
  assert.deepEqual(item.wordIds, terms.map(term => term.wordId));
  assert.deepEqual(item.labels, terms.map(term => term.label));
  assert.equal(new Set(item.wordIds).size, item.wordIds.length, item.id);
  assert.equal(item.continuity.sameAgent, true);
  assert.ok(item.continuity.anchor.trim(), item.id);
  assert.deepEqual(item.composition, {frameCount, readingOrder: 'esquerra-dreta', sharedViewpoint: true});
  assert.deepEqual(item.moments.map(moment => moment.number), frameCount === 2 ? [1, 2] : [1, 2, 3], item.id);
  assert.deepEqual(item.moments.map(moment => moment.role),
    frameCount === 2 ? ['inici', 'final'] : ['inici', 'transicio', 'final'], item.id);
  assert.deepEqual(item.moments.map(moment => moment.actionWordId),
    frameCount === 2 ? item.actions.map(action => action.wordId) : [null, item.actions[0].wordId, null], item.id);
  const cues = item.moments.map(moment => moment.evidence.trim());
  assert.ok(cues.every(Boolean), item.id);
  assert.equal(new Set(cues).size, cues.length, item.id);
  const guideRow = guideRows.get(item.id);
  assert.ok(guideRow.includes('**' + item.id + '** ' + item.agent.label), item.id);
  assert.ok(guideRow.includes(item.continuity.anchor), item.id);
  for (const moment of item.moments) {
    assert.ok(guideRow.includes('**' + moment.number + '.** ' + moment.evidence), item.id);
  }
  assert.ok(item.title.ca.trim() && !titles.has(item.title.ca), item.id);
  assert.ok(!itemsById.has(item.id), item.id);
  titles.add(item.title.ca);
  itemsById.set(item.id, item);
  totalMoments += item.moments.length;
  targetOccurrences += terms.length;

  const stats = distribution[group];
  stats.total++;
  stats.sequenceTypes[item.sequenceType]++;
  stats.framesPerImage[frameCount]++;
  stats.agents[item.agent.label] = (stats.agents[item.agent.label] ?? 0) + 1;
}

for (const photo of plan.items.slice(0, 100)) {
  const drawing = itemsById.get(photo.counterpartId);
  assert.equal(drawing.counterpartId, photo.id);
  for (const key of ['familyId', 'sequenceType', 'actions', 'referents', 'moments', 'relation', 'continuity', 'composition', 'adultOnly']) {
    assert.deepEqual(photo[key], drawing[key], photo.familyId + ': ' + key);
  }
  const signature = JSON.stringify([photo.actions.map(term => term.wordId), photo.referents.map(term => term.wordId).sort()]);
  assert.ok(!signatures.has(signature), 'Família amb verbs i referents repetits: ' + photo.familyId);
  signatures.add(signature);
}
for (const group of groups) {
  assert.equal(distribution[group].total, 100);
  assert.deepEqual(distribution[group].sequenceTypes, expectedTypes);
  assert.deepEqual(distribution[group].framesPerImage, {2: 40, 3: 60});
}
assert.equal(totalMoments, 520);
assert.equal(Object.keys(distribution.habitual.agents).length, 6);
assert.ok(Object.values(distribution.habitual.agents).every(count => count === 16 || count === 17));
assert.equal(Object.keys(distribution.insolita.agents).length, 10);
assert.ok(Object.values(distribution.insolita.agents).every(count => count === 10));

const report = {
  status: 'valid',
  scope: 'Validació estructural del pla i de la preservació local. Les pistes visuals només s’han revisat en els briefs.',
  baseline,
  catalogUnchanged: true,
  catalogAssetsPreserved: catalog.assets.length,
  catalogWordsPreserved: catalog.words.length,
  localDisplayHashesChecked: catalog.assets.length,
  bankPartHashesChecked: bank.parts.length,
  bankArchiveSha256: bank.archive_sha256,
  changesOutsidePlanningFiles: unexpected,
  totalItems: plan.items.length,
  uniqueIds: itemsById.size,
  uniqueTitles: titles.size,
  homologousFamilies: signatures.size,
  totalMoments,
  targetOccurrencesChecked: targetOccurrences,
  distinctTargetWordIds: new Set(plan.items.flatMap(item => item.wordIds)).size,
  distribution,
  authorization: plan.authorization,
  planSha256: sha256(toLf(fs.readFileSync(planPath))),
  readablePlanSha256: sha256(toLf(fs.readFileSync(guidePath)))
};
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({
  status: report.status,
  totalItems: report.totalItems,
  homologousFamilies: report.homologousFamilies,
  totalMoments,
  localDisplayHashesChecked: report.localDisplayHashesChecked,
  bankPartHashesChecked: report.bankPartHashesChecked
}, null, 2));

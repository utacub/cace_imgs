const assert = require('node:assert/strict');
const {execFileSync} = require('node:child_process');
const {createHash} = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

process.chdir(path.resolve(__dirname, '..'));

const planPath = 'production/n10-plan.json';
const guidePath = 'production/n10-plan.md';
const reportPath = 'production/n10-plan-validation.json';
const catalogPath = 'src/catalog-data.json';
const bankPath = 'bank/manifest.json';
const allowedPaths = new Set([planPath, guidePath, reportPath, 'scripts/validate-n10-plan.cjs']);
const readJson = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const git = (...args) => execFileSync('git', args, {maxBuffer: 64 * 1024 * 1024});
const normalize = bytes => bytes.toString('utf8').replace(/\r\n/g, '\n');
const pad = number => String(number).padStart(3, '0');
const id = number => 'n10-' + pad(number);

const plan = readJson(planPath);
const guide = fs.readFileSync(guidePath, 'utf8');
const catalog = readJson(catalogPath);
const bank = readJson(bankPath);
const baseline = plan.baseline;
const baselineHead = 'd13757abc7a0fea7b1fd1c2bcd228e967f811759';
assert.equal(baseline.head, baselineHead);
const baselineCatalog = git('show', baselineHead + ':' + catalogPath);
assert.equal(sha256(baselineCatalog), baseline.catalogSha256);
assert.equal(normalize(fs.readFileSync(catalogPath)), normalize(baselineCatalog), 'Canvi al catàleg');
assert.equal(catalog.version, baseline.version);
assert.equal(catalog.assets.length, baseline.totalAssets);
assert.equal(catalog.words.length, baseline.words);
assert.ok(catalog.assets.every(asset => !asset.levels.includes(10)), 'El catàleg ja conté imatges N10');

const changed = new Set([
  ...git('diff', '--no-renames', '--name-only', '-z', baselineHead, '--').toString('utf8').split('\0'),
  ...git('ls-files', '--others', '--exclude-standard', '-z').toString('utf8').split('\0')
].filter(Boolean));
const unexpected = [...changed].filter(file => !allowedPaths.has(file));
assert.deepEqual(unexpected, [], 'Fitxers modificats fora del pla N10');

assert.deepEqual(bank, JSON.parse(git('show', baselineHead + ':' + bankPath)));
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
assert.equal(bank.archive_sha256, baseline.bankArchiveSha256);
for (const asset of catalog.assets) {
  assert.match(asset.displaySha256, /^[a-f0-9]{64}$/, asset.id);
  assert.equal(sha256(fs.readFileSync(path.join('dist', asset.src))), asset.displaySha256, asset.id);
}

const level = catalog.levels.find(entry => entry.id === 10);
assert.equal(plan.level, level.id);
assert.equal(plan.name, level.ca);
assert.equal(plan.description, level.desc.ca);
assert.equal(plan.status, 'proposal-only');
assert.deepEqual(plan.authorization, {planning: true, generation: false, import: false, publication: false});
assert.deepEqual(plan.compositionPolicy, {
  readingOrder: 'esquerra-dreta', sameAgent: true, sameViewpoint: true, oneImagePerItem: true
});
assert.equal(plan.reviewGuide, guidePath);
for (const file of plan.sources) assert.ok(fs.existsSync(file), file);
assert.equal(plan.variantsPerConstruction, 1);
assert.equal(plan.habitual, 100);
assert.equal(plan.insolita, 100);
assert.equal(plan.items.length, 200);

const types = ['impacte', 'suport-barrera', 'transferencia', 'deformacio', 'mecanisme'];
const expectedTypes = Object.fromEntries(types.map(type => [type, 20]));
assert.deepEqual(plan.distributionPerGroup, expectedTypes);
const groups = ['habitual', 'insolita'];
const distribution = Object.fromEntries(groups.map(group => [group, {
  total: 0, causalTypes: Object.fromEntries(types.map(type => [type, 0])),
  framesPerImage: {3: 0}, agents: {}, outcomesWithCaceTerm: 0, adultOnly: 0
}]));
const humans = ['NENA', 'NEN', 'NOIA', 'NOI', 'DONA', 'HOME'];
const animals = ['CONILL', 'GAT', 'GOS', 'ÓS', 'MICO', 'VACA', 'ZEBRA', 'RUC', 'PORC', 'ESQUIROL'];
const referentCategories = ['objectes', 'animals', 'mobles', 'roba', 'aliments', 'jocs', 'cos', 'transports', 'atributs'];
const wordsById = new Map(catalog.words.map(word => [word.id, word]));
const titles = new Set();
const itemsById = new Map();
const signatures = new Set();
const physicalCues = new Set();
const guideIds = [...guide.matchAll(/\*\*(n10-\d{3})\*\*/g)].map(match => match[1]).sort();
assert.deepEqual(guideIds, plan.items.map(item => item.id).sort());
const guideRows = new Map(guide.split(/\r?\n/).flatMap(line =>
  [...line.matchAll(/\*\*(n10-\d{3})\*\*/g)].map(match => [match[1], line])
));

function verifyTerm(term, categories, itemId) {
  const word = wordsById.get(term.wordId);
  assert.ok(word, itemId + ': ID desconegut ' + term.wordId);
  assert.equal(term.label, word.ca, itemId);
  assert.ok(categories.includes(word.category), itemId + ': categoria incorrecta per a ' + term.label);
}

let totalMoments = 0;
let targetOccurrences = 0;
for (const [index, item] of plan.items.entries()) {
  const number = index + 1;
  const photo = index < 100;
  const group = photo ? 'habitual' : 'insolita';
  const family = index % 100 + 1;
  const context = id(number);
  assert.equal(item.id, context);
  assert.equal(item.number, number, context);
  assert.equal(item.level, 10, context);
  assert.equal(item.group, group, context);
  assert.equal(item.causalType, types[Math.floor((family - 1) / 20)], context);
  assert.equal(item.familyId, 'n10-f-' + pad(family), context);
  assert.equal(item.counterpartId, id(photo ? family + 100 : family), context);
  assert.equal(item.kind, photo ? 'photo' : 'drawing', context);
  assert.equal(item.variant, photo ? 'foto-01' : 'pla-01', context);
  assert.equal(item.reviewStatus, 'pendent-de-revisio-usuari', context);
  verifyTerm(item.agent, [photo ? 'persones' : 'animals'], context);
  assert.ok((photo ? humans : animals).includes(item.agent.label), context);
  verifyTerm(item.trigger, ['verbs'], context);
  assert.ok(item.referents.length >= 1 && item.referents.length <= 3, context);
  for (const referent of item.referents) verifyTerm(referent, referentCategories, context);
  if (item.outcome !== null) verifyTerm(item.outcome, ['verbs', 'atributs', 'colors'], context);
  assert.equal(item.adultOnly, item.referents.some(term => term.label === 'TISORES'), context);
  if (photo && item.adultOnly) assert.ok(['DONA', 'HOME'].includes(item.agent.label), context);
  assert.equal(item.relation.type, 'causa-consequencia', context);
  assert.equal(item.relation.causalClaim, true, context);
  assert.deepEqual(item.relation.markers.map(term => term.label), ['PERQUÈ'], context);
  verifyTerm(item.relation.markers[0], ['particules'], context);
  assert.equal(item.primaryWordId, item.agent.wordId, context);

  const candidates = [item.agent, item.trigger, ...item.referents, item.outcome, ...item.relation.markers].filter(Boolean);
  const terms = [...new Map(candidates.map(term => [term.wordId, term])).values()];
  assert.deepEqual(item.wordIds, terms.map(term => term.wordId), context);
  assert.deepEqual(item.labels, terms.map(term => term.label), context);
  assert.ok(item.title.ca.trim() && !titles.has(item.title.ca), context);
  assert.equal(item.continuity.sameAgent, true, context);
  assert.ok(item.continuity.anchor.trim(), context);
  assert.deepEqual(item.composition, {frameCount: 3, readingOrder: 'esquerra-dreta', sharedViewpoint: true}, context);
  assert.deepEqual(item.moments.map(moment => moment.number), [1, 2, 3], context);
  assert.deepEqual(item.moments.map(moment => moment.role), ['estat-inicial', 'desencadenant', 'consequencia'], context);
  const cues = item.moments.map(moment => moment.evidence.trim());
  assert.ok(cues.every(Boolean), context);
  assert.equal(new Set(cues).size, 3, context);

  const row = guideRows.get(item.id);
  const termText = item.trigger.label + ' · ' + item.referents.map(term => term.label).join(' · ')
    + (item.outcome ? ' → ' + item.outcome.label : '');
  const momentsText = item.moments.map(moment => '**' + moment.number + '.** ' + moment.evidence).join('<br>');
  assert.ok(row.includes('**' + item.id + '** ' + item.agent.label), context);
  assert.ok(row.endsWith('<br>' + termText + ' | ' + momentsText + ' | ' + item.continuity.anchor + ' |'), context);
  titles.add(item.title.ca);
  itemsById.set(item.id, item);
  totalMoments += item.moments.length;
  targetOccurrences += terms.length;

  const stats = distribution[group];
  stats.total++;
  stats.causalTypes[item.causalType]++;
  stats.framesPerImage[3]++;
  stats.agents[item.agent.label] = (stats.agents[item.agent.label] ?? 0) + 1;
  stats.outcomesWithCaceTerm += Number(item.outcome !== null);
  stats.adultOnly += Number(item.adultOnly);
}

for (const photo of plan.items.slice(0, 100)) {
  const drawing = itemsById.get(photo.counterpartId);
  assert.equal(drawing.counterpartId, photo.id);
  for (const key of ['familyId', 'causalType', 'trigger', 'referents', 'outcome', 'moments', 'relation', 'continuity', 'composition', 'adultOnly']) {
    assert.deepEqual(photo[key], drawing[key], photo.familyId + ': ' + key);
  }
  const signature = JSON.stringify([
    photo.trigger.wordId, photo.referents.map(term => term.wordId).sort(), photo.outcome?.wordId
  ]);
  assert.ok(!signatures.has(signature), 'Duplicació de desencadenant, referents i resultat: ' + photo.familyId);
  signatures.add(signature);
  const cue = photo.moments[1].evidence.trim();
  assert.ok(!physicalCues.has(cue), 'Pista física duplicada: ' + photo.familyId);
  physicalCues.add(cue);
}
for (const group of groups) {
  assert.equal(distribution[group].total, 100);
  assert.deepEqual(distribution[group].causalTypes, expectedTypes);
  assert.deepEqual(distribution[group].framesPerImage, {3: 100});
  assert.equal(distribution[group].adultOnly, 1);
}
assert.equal(Object.keys(distribution.habitual.agents).length, humans.length);
assert.ok(Object.values(distribution.habitual.agents).every(count => count === 16 || count === 17));
assert.deepEqual(distribution.insolita.agents, Object.fromEntries(animals.map(agent => [agent, 10])));
assert.equal(totalMoments, 600);

const report = {
  status: 'valid',
  scope: 'Validació estructural del pla i de la preservació local. La revisió semàntica és textual. La verificació visual queda pendent.',
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
  distinctPhysicalCues: physicalCues.size,
  totalMoments,
  targetOccurrencesChecked: targetOccurrences,
  distinctTargetWordIds: new Set(plan.items.flatMap(item => item.wordIds)).size,
  distribution,
  authorization: plan.authorization,
  planSha256: sha256(normalize(fs.readFileSync(planPath))),
  readablePlanSha256: sha256(normalize(fs.readFileSync(guidePath)))
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

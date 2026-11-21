const assert = require('node:assert/strict');
const {execFileSync} = require('node:child_process');
const {createHash} = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

process.chdir(path.resolve(__dirname, '..'));

const BASE = '79a48a3c4ca737ca81350ce8ebc36ba23cd0df18';
const planPath = 'production/n11-plan.json';
const guidePath = 'production/n11-plan.md';
const reportPath = 'production/n11-plan-validation.json';
const catalogPath = 'src/catalog-data.json';
const bankPath = 'bank/manifest.json';
const allowedPaths = new Set([planPath, guidePath, reportPath, 'scripts/validate-n11-plan.cjs']);
const themes = {escola: 20, joc: 20, casa: 20, barri: 20, natura: 20};
const frameRoles = ['plantejament', 'primer-episodi', 'segon-episodi', 'desenllac'];
const participantKeys = ['A', 'B'];

const git = (...args) => execFileSync('git', args, {maxBuffer: 32 * 1024 * 1024});
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const normalize = bytes => bytes.toString('utf8').replace(/\r\n/g, '\n');
const read = file => normalize(fs.readFileSync(file));
const readJson = file => JSON.parse(read(file));
const pad = value => String(value).padStart(3, '0');
const stimulusId = number => 'n11-' + pad(number);
const familyId = number => 'n11-f-' + pad(number);
const catalog = readJson(catalogPath);
const planText = read(planPath);
const plan = JSON.parse(planText);
const guide = read(guidePath);
const bank = readJson(bankPath);

function changedPaths() {
  return [...new Set([
    ...git('diff', '--no-renames', '--name-only', '-z', BASE, '--').toString('utf8').split('\0'),
    ...git('ls-files', '--others', '--exclude-standard', '-z').toString('utf8').split('\0')
  ].filter(Boolean))].sort();
}

function verifyPreservation() {
  const unexpected = changedPaths().filter(file => !allowedPaths.has(file));
  assert.deepEqual(unexpected, [], 'Fitxers modificats fora de la proposta N11');

  const baseCatalog = git('show', BASE + ':' + catalogPath);
  assert.equal(read(catalogPath), normalize(baseCatalog), 'Canvi al catàleg de referència');
  assert.equal(read(bankPath), normalize(git('show', BASE + ':' + bankPath)), 'Canvi al manifest del banc');
  assert.equal(catalog.version, '0.1.169');
  assert.equal(catalog.assets.length, 4269);
  assert.equal(catalog.words.length, 861);
  assert.equal(bank.images, catalog.assets.length);
  assert.equal(bank.parts.length, 133);
  assert.deepEqual(plan.baseline, {
    head: BASE, version: catalog.version, totalAssets: catalog.assets.length, words: catalog.words.length,
    catalogSha256: sha256(baseCatalog), bankArchiveSha256: bank.archive_sha256
  });

  const archiveHash = createHash('sha256');
  let archiveBytes = 0;
  for (const [index, part] of bank.parts.entries()) {
    assert.equal(part.path, 'images.zip.part-' + String(index).padStart(4, '0'));
    const bytes = fs.readFileSync(path.join('bank', part.path));
    assert.equal(bytes.length, part.bytes, part.path);
    assert.equal(sha256(bytes), part.sha256, part.path);
    archiveHash.update(bytes);
    archiveBytes += bytes.length;
  }
  assert.equal(archiveBytes, bank.archive_bytes);
  assert.equal(archiveHash.digest('hex'), bank.archive_sha256);

  const assetsByLevel = Object.fromEntries(catalog.levels.map(level => [level.id, 0]));
  const n10ByKind = {photo: 0, drawing: 0};
  for (const asset of catalog.assets) {
    assert.ok(asset.src.startsWith('assets/'), asset.id);
    assert.match(asset.displaySha256, /^[a-f0-9]{64}$/, asset.id);
    assert.equal(sha256(fs.readFileSync(path.join('dist', asset.src))), asset.displaySha256, asset.id);
    for (const level of asset.levels) assetsByLevel[level]++;
    if (asset.levels.includes(10)) n10ByKind[asset.kind]++;
  }
  assert.deepEqual(n10ByKind, {photo: 100, drawing: 100});
  assert.equal(assetsByLevel[11], 0);
  const audit = readJson('production/n10-final-audit.json');
  assert.equal(audit.status, 'valid');
  assert.equal(audit.catalogVersion, catalog.version);
  assert.equal(audit.publicVerification.status, 'verified');
  assert.equal(audit.publicVerification.n10DownloadsVerified, 200);

  return {
    catalogUnchanged: true,
    catalogAssetsPreserved: catalog.assets.length,
    catalogWordsPreserved: catalog.words.length,
    catalogLevelsPreserved: catalog.levels.length,
    assetsByLevel,
    localDisplayHashesChecked: catalog.assets.length,
    bankPartHashesChecked: bank.parts.length,
    bankArchiveSha256: bank.archive_sha256,
    n10LocalByKind: n10ByKind,
    n10PublicDownloadsInExistingAudit: audit.publicVerification.n10DownloadsVerified,
    changesOutsidePlanningFiles: unexpected
  };
}

const vocabulary = new Map(catalog.words.map(word => [word.id, word]));
const targetCategories = new Set([
  'verbs', 'animals', 'jocs', 'objectes', 'mobles', 'roba', 'aliments', 'activitats', 'cos'
]);

function verifyTerm(term, categories, context) {
  const word = vocabulary.get(term.wordId);
  assert.ok(word, context + ' ID desconegut ' + term.wordId);
  assert.equal(word.ca, term.label, context);
  assert.ok(categories.has(word.category), context + ' categoria de ' + term.label);
  assert.ok(word.refs.length > 0, context + ' referència al tauler');
}

function verifyHeader() {
  const reference = catalog.levels.find(level => level.id === 11);
  assert.deepEqual([plan.level, plan.name, plan.description], [11, reference.ca, reference.desc.ca]);
  assert.equal(plan.status, 'proposal-only');
  assert.deepEqual(plan.authorization, {planning: true, generation: false, import: false, publication: false});
  assert.equal(plan.reviewGuide, guidePath);
  assert.deepEqual(plan.compositionPolicy, {
    readingOrder: 'esquerra-dreta', rows: 1, panels: 4, oneImagePerItem: true,
    sustainedParticipants: 2, ending: 'tancat', sameViewpointWithinSetting: true
  });
  assert.deepEqual(plan.distributionPerGroup, themes);
  assert.equal(plan.variantsPerConstruction, 1);
  assert.equal(plan.habitual, 100);
  assert.equal(plan.insolita, 100);
  assert.equal(plan.items.length, 200);
  for (const file of plan.sources) assert.ok(fs.statSync(file).isFile(), file);
  for (const source of [planText, guide]) assert.ok(!/[ \t]+\n/.test(source), 'Espais sobrers a final de línia');
}

function verifyMoments(item) {
  assert.deepEqual(item.moments.map(moment => moment.number), [1, 2, 3, 4], item.id);
  assert.deepEqual(item.moments.map(moment => moment.role), frameRoles, item.id);
  for (const moment of item.moments) {
    const keys = moment.visibleParticipants;
    assert.ok(keys.length && keys.every(key => participantKeys.includes(key)), item.id + ' repartiment de la vinyeta ' + moment.number);
    assert.equal(new Set(keys).size, keys.length, item.id);
    assert.ok(moment.evidence.trim().length >= 45, item.id);
  }
  assert.equal(new Set(item.moments.map(moment => moment.evidence)).size, 4, item.id);
  assert.deepEqual(new Set(item.moments.slice(1, 3).flatMap(moment => moment.visibleParticipants)), new Set(participantKeys), item.id);
}

function verifyItem(item, index) {
  const number = index + 1;
  const familyNumber = index % 100 + 1;
  const photo = index < 100;
  assert.equal(item.id, stimulusId(number));
  assert.equal(item.number, number);
  assert.equal(item.level, 11);
  assert.equal(item.familyId, familyId(familyNumber));
  assert.equal(item.counterpartId, stimulusId(familyNumber + (photo ? 100 : 0)));
  assert.equal(item.group, photo ? 'habitual' : 'insolita');
  assert.equal(item.kind, photo ? 'photo' : 'drawing');
  assert.equal(item.variant, photo ? 'foto-01' : 'pla-01');
  assert.ok(Object.hasOwn(themes, item.theme), item.id);
  assert.deepEqual(item.participants.map(p => p.key), participantKeys, item.id);
  assert.notEqual(item.participants[0].role, item.participants[1].role, item.id);
  assert.notEqual(item.participants[0].visualMarker, item.participants[1].visualMarker, item.id);
  for (const participant of item.participants) {
    verifyTerm(participant, new Set([photo ? 'persones' : 'animals']), item.id);
    assert.ok(participant.role.trim().length >= 8 && participant.visualMarker.trim().length >= 12, item.id);
  }

  assert.ok(item.settings.length >= 1 && item.settings.length <= 2, item.id);
  item.settings.forEach(term => verifyTerm(term, new Set(['llocs']), item.id));
  item.targets.forEach(term => verifyTerm(term, targetCategories, item.id));
  assert.ok(item.targets.filter(term => vocabulary.get(term.wordId).category === 'verbs').length >= 2, item.id);
  const terms = [...item.participants, ...item.targets, ...item.settings];
  assert.deepEqual(item.labels, terms.map(term => term.label), item.id);
  assert.deepEqual(item.wordIds, terms.map(term => term.wordId), item.id);
  assert.equal(new Set(item.wordIds).size, item.wordIds.length, item.id);
  assert.equal(item.primaryWordId, item.participants[0].wordId, item.id);
  assert.equal(item.continuity.sameParticipants, true, item.id);
  assert.ok(item.continuity.anchor.trim().length >= 40 && item.narrative.trim().length >= 45, item.id);
  assert.equal(item.title.ca, item.familyTitle + (photo ? ' · foto' : ' · dibuix'), item.id);
  verifyMoments(item);
}

function guideRow(photo, drawing) {
  const showCast = item => item.participants.map(p => p.key + ' ' + p.label).join(' · ');
  const ids = '**' + photo.familyTitle + '**<br>**' + photo.id + '** ' + showCast(photo)
    + '<br>**' + drawing.id + '** ' + showCast(drawing);
  const terms = [...photo.targets, ...photo.settings].map(term => term.label).join(' · ');
  const roles = photo.participants.map(p => p.key + ' ' + p.role).join(' · ');
  const scenes = photo.moments.map(moment => '**' + moment.number + '.** ' + moment.evidence).join('<br>');
  return '| ' + ids + ' | ' + terms + '<br>' + roles + ' | ' + photo.continuity.anchor
    + '<br>' + scenes + ' | ' + photo.narrative + ' |';
}

function verifyFamilies() {
  const guideRows = guide.split('\n').filter(line => line.startsWith('| **') && /\*\*n11-\d{3}\*\*/.test(line));
  assert.equal(guideRows.length, 100, 'Files de famílies al pla llegible');
  const familyTitles = new Set();
  const narrativeAnswers = new Set();
  const episodeEvidence = new Set();
  for (const [index, photo] of plan.items.slice(0, 100).entries()) {
    const drawing = plan.items[index + 100];
    for (const key of ['theme', 'familyId', 'familyTitle', 'settings', 'targets', 'moments', 'continuity', 'narrative']) {
      assert.deepEqual(photo[key], drawing[key], photo.familyId + ' ' + key);
    }
    for (const [roleIndex, participant] of photo.participants.entries()) {
      assert.equal(participant.role, drawing.participants[roleIndex].role, photo.familyId);
      assert.equal(participant.visualMarker, drawing.participants[roleIndex].visualMarker, photo.familyId);
    }
    assert.equal(guideRows[index], guideRow(photo, drawing), 'Fitxa llegible ' + photo.familyId);
    familyTitles.add(photo.familyTitle);
    narrativeAnswers.add(photo.narrative);
    for (const moment of photo.moments) episodeEvidence.add(moment.evidence);
  }
  assert.equal(familyTitles.size, 100);
  assert.equal(narrativeAnswers.size, 100);
  assert.equal(episodeEvidence.size, 400);
  return familyTitles.size;
}

function summarizeGroup(group) {
  const items = plan.items.filter(item => item.group === group);
  const byTheme = {...themes};
  Object.keys(byTheme).forEach(theme => { byTheme[theme] = 0; });
  const cast = {};
  let twoSettings = 0;
  for (const item of items) {
    byTheme[item.theme]++;
    if (item.settings.length === 2) twoSettings++;
    for (const participant of item.participants) {
      cast[participant.label] ??= {A: 0, B: 0};
      cast[participant.label][participant.key]++;
    }
  }
  assert.deepEqual(byTheme, themes, group);
  assert.equal(Object.keys(cast).length, group === 'habitual' ? 6 : 10);
  assert.ok(Object.values(cast).every(counts => counts.A > 0 && counts.B > 0), group);
  return {total: items.length, byTheme, twoSettings, cast};
}

verifyHeader();
plan.items.forEach(verifyItem);
const homologousFamilies = verifyFamilies();
const distribution = {habitual: summarizeGroup('habitual'), insolita: summarizeGroup('insolita')};
const preservation = verifyPreservation();
const report = {
  status: 'valid',
  scope: 'Validació estructural del pla textual i comprovació de preservació local. L’auditoria pública de N10 es consulta al repositori. Les comprovacions visuals N11 corresponen a una fase posterior.',
  baseline: plan.baseline,
  ...preservation,
  totalItems: plan.items.length,
  homologousFamilies,
  totalMoments: plan.items.reduce((sum, item) => sum + item.moments.length, 0),
  distinctTargetWordIds: new Set(plan.items.flatMap(item => item.wordIds)).size,
  distribution,
  authorization: plan.authorization,
  planSha256: sha256(planText),
  readablePlanSha256: sha256(guide)
};
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({
  status: report.status,
  totalItems: report.totalItems,
  homologousFamilies,
  totalMoments: report.totalMoments,
  localDisplayHashesChecked: report.localDisplayHashesChecked,
  bankPartHashesChecked: report.bankPartHashesChecked
}, null, 2));

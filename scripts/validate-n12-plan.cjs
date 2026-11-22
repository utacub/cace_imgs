const assert = require('node:assert/strict');
const {execFileSync} = require('node:child_process');
const {createHash} = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const base = '5e9618e1626700b06e9100fe4ea3a1d2b493b774';
const publication = 'd2c37b9d5ff9bfaf28520a620e72e2ce8df9feff';
const planPath = 'production/n12-plan.json';
const guidePath = 'production/n12-plan.md';
const reportPath = 'production/n12-plan-validation.json';
const catalogPath = 'src/catalog-data.json';
const bankPath = 'bank/manifest.json';
const allowedPaths = [guidePath, planPath, reportPath, 'scripts/validate-n12-plan.cjs'];
const quotas = {
  estri: {'estris-de-precisio': 18, 'eines-de-forca-i-moviment': 18},
  objecte: {'materials-equivocats': 18, 'peces-i-respostes-equivocades': 18},
  us: {'extrem-o-cara-inadequats': 18, 'pas-o-connexio-blocats': 18},
  context: {'ubicacio-destinataria': 16, 'espai-de-lactivitat': 16},
  equipament: {'part-del-cos': 10, 'talla-i-capacitat': 10, 'funcio-incompatible': 12},
  omissio: {'encaix-positiu': 14, 'element-de-servei': 14}
};
const mechanisms = {
  estri: 'Estri substituït',
  objecte: 'Objecte equivocat',
  us: 'Ús inadequat o orientació funcional',
  context: 'Context o ubicació inadequats',
  equipament: 'Roba, mida o equipament incongruents',
  omissio: 'Omissió d’una peça necessària'
};
const subtypes = {
  'estris-de-precisio': 'Estris de precisió',
  'eines-de-forca-i-moviment': 'Força, suport o moviment',
  'materials-equivocats': 'Materials o destinataris inadequats',
  'peces-i-respostes-equivocades': 'Peces o funcions assignades',
  'extrem-o-cara-inadequats': 'Cara, extrem o direcció',
  'pas-o-connexio-blocats': 'Accés, pas o connexió impedits',
  'ubicacio-destinataria': 'Ubicació final',
  'espai-de-lactivitat': 'Espai de l’activitat',
  'part-del-cos': 'Part del cos',
  'talla-i-capacitat': 'Talla o capacitat',
  'funcio-incompatible': 'Funció incompatible',
  'encaix-positiu': 'Encaix o muntatge',
  'element-de-servei': 'Element de servei, suport o ajust'
};
const personLabels = {
  NEN: 'Un nen', NENA: 'Una nena', NOI: 'Un noi', NOIA: 'Una noia', HOME: 'Un home', DONA: 'Una dona'
};

const read = file => fs.readFileSync(path.join(root, file));
const normalized = bytes => bytes.toString('utf8').replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
const readJson = file => JSON.parse(normalized(read(file)));
const git = (...args) => execFileSync('git', args, {cwd: root, maxBuffer: 32 * 1024 * 1024});
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const sameAsBase = file => assert.equal(normalized(read(file)), normalized(git('show', base + ':' + file)), file);

function verifyPreservation(plan, catalog) {
  const changes = new Set([
    ...git('diff', '--no-renames', '--name-only', '-z', base, '--').toString('utf8').split('\0'),
    ...git('ls-files', '--others', '--exclude-standard', '-z').toString('utf8').split('\0')
  ].filter(Boolean));
  const outsidePlan = [...changes].filter(file => !allowedPaths.includes(file)).sort();
  assert.deepEqual(outsidePlan, [], 'Canvis fora de la planificació N12');
  for (const file of allowedPaths.filter(file => file !== reportPath)) {
    assert.ok(changes.has(file), 'Falta un lliurable N12: ' + file);
  }

  for (const file of [catalogPath, bankPath, ...plan.sources]) sameAsBase(file);
  assert.equal(normalized(read(catalogPath)), normalized(git('show', publication + ':' + catalogPath)));
  assert.equal(git('rev-parse', base + '^').toString().trim(), publication);
  assert.deepEqual([catalog.version, catalog.assets.length, catalog.words.length, catalog.levels.length],
    ['0.1.177', 4469, 861, 12]);

  const audit = readJson('production/n11-final-audit.json');
  assert.equal(audit.status, 'valid');
  assert.equal(audit.catalogVersion, catalog.version);
  assert.equal(audit.catalogImages, catalog.assets.length);
  assert.equal(audit.preservedWords, catalog.words.length);
  assert.equal(audit.publishedN11, 200);
  assert.equal(audit.publicVerification.status, 'verified');
  assert.equal(audit.publicVerification.n11DownloadsVerified, 200);

  const bank = readJson(bankPath);
  assert.equal(bank.images, catalog.assets.length);
  assert.equal(bank.parts.length, 144);
  assert.equal(audit.bankArchiveSha256, bank.archive_sha256);
  const archiveHash = createHash('sha256');
  let archiveBytes = 0;
  for (const [index, part] of bank.parts.entries()) {
    assert.equal(part.path, 'images.zip.part-' + String(index).padStart(4, '0'));
    const bytes = read(path.join('bank', part.path));
    assert.equal(bytes.length, part.bytes, part.path);
    assert.equal(sha256(bytes), part.sha256, part.path);
    archiveHash.update(bytes);
    archiveBytes += bytes.length;
  }
  assert.equal(archiveBytes, bank.archive_bytes);
  assert.equal(archiveHash.digest('hex'), bank.archive_sha256);

  const assetsByLevel = Object.fromEntries(catalog.levels.map(level => [level.id, 0]));
  const n11ByKind = {photo: 0, drawing: 0};
  for (const asset of catalog.assets) {
    assert.ok(asset.src.startsWith('assets/'), asset.id);
    assert.match(asset.displaySha256, /^[a-f0-9]{64}$/, asset.id);
    assert.equal(sha256(read(path.join('dist', asset.src))), asset.displaySha256, asset.id);
    for (const level of asset.levels) assetsByLevel[level]++;
    if (asset.levels.includes(11)) n11ByKind[asset.kind]++;
  }
  assert.equal(assetsByLevel[11], 200);
  assert.equal(assetsByLevel[12], 0);
  assert.deepEqual(n11ByKind, {photo: 100, drawing: 100});

  const baseline = {
    head: base, publication, version: catalog.version, totalAssets: catalog.assets.length,
    words: catalog.words.length, publishedN11: assetsByLevel[11],
    catalogSha256: sha256(git('show', base + ':' + catalogPath)), bankArchiveSha256: bank.archive_sha256
  };
  assert.deepEqual(plan.baseline, baseline);
  return {
    baseline, catalogUnchanged: true, vocabularyUnchanged: true, levelsUnchanged: true,
    collectionsUnchanged: true, assetsByLevel, localDisplayHashesChecked: catalog.assets.length,
    bankPartHashesChecked: bank.parts.length, bankArchiveBytesChecked: archiveBytes,
    n11LocalByKind: n11ByKind, n11PublicDownloadsInExistingAudit: audit.publicVerification.n11DownloadsVerified,
    changesOutsidePlanningFiles: outsidePlan
  };
}

function verifyHeader(plan, catalog) {
  const level = catalog.levels.find(item => item.id === 12);
  assert.deepEqual([plan.level, plan.name, plan.description], [12, level.ca, level.desc.ca]);
  assert.ok(normalized(read('scripts/extract-vocabulary.py')).includes(
    "('Absurds visuals','Absurdos visuales','Explicar combinacions atípiques.','Explicar combinaciones atípicas.')"
  ));
  assert.equal(plan.status, 'proposal-only');
  assert.deepEqual(plan.authorization, {
    planning: true, generation: false, import: false, publication: false, push: false
  });
  assert.deepEqual(plan.compositionPolicy, {
    oneImagePerItem: true, scenes: 1, kind: 'drawing', agent: 'humà', responseOutsideImage: true
  });
  assert.equal(plan.reviewGuide, guidePath);
  assert.equal(plan.variantsPerConstruction, 1);
  assert.deepEqual([plan.habitual, plan.insolita], [0, 200]);
  assert.equal(plan.items.length, 200);
  assert.deepEqual(plan.historicalReference, {
    threadId: '01a1b552-03cc-7a82-9632-db37040193e0', title: 'Analitza els absurds visuals',
    providedFiles: '1.jpg–25.jpg', filesLocated: 25, originalsViewed: [1, 3, 7, 12, 18, 24]
  });
  for (const file of [catalogPath, 'scripts/extract-vocabulary.py', 'production/CRITERIS.md',
    'PAUSA.md', 'production/n11-final-audit.json', ...['n7', 'n10', 'n11'].flatMap(level => [
      'production/' + level + '-plan.md', 'scripts/validate-' + level + '-plan.cjs'
    ])]) {
    assert.ok(plan.sources.includes(file), file);
  }
}

function verifyItem(item, index, vocabulary) {
  const id = 'n12-' + String(index + 1).padStart(3, '0');
  assert.equal(item.id, id);
  assert.deepEqual([item.kind, item.group, item.sceneCount], ['drawing', 'insolita', 1], id);
  assert.ok(Object.hasOwn(quotas, item.mechanism), id);
  assert.ok(Object.hasOwn(quotas[item.mechanism], item.subtype), id);

  assert.ok(Array.isArray(item.participants) && item.participants.length >= 1 && item.participants.length <= 2, id);
  for (const [field, value] of Object.entries({
    scene: item.scene, contact: item.contact, breach: item.breach, cue: item.cue,
    repair: item.expectedResponse.repair, explanation: item.expectedResponse.explanation
  })) {
    assert.ok(typeof value === 'string' && value.trim() === value && value.length >= (field === 'repair' ? 12 : 24), id + ' ' + field);
    assert.doesNotMatch(value, /[|\r\n<>]|\b(?:TODO|TBD)\b/i, id + ' ' + field);
    assert.match(value, /[.!?]$/, id + ' ' + field);
  }
  assert.ok(typeof item.title === 'string' && item.title.trim() === item.title && item.title.length >= 8, id);
  assert.doesNotMatch(item.title, /[|\r\n<>]/, id);
  assert.notEqual(item.contact, item.cue, id);
  assert.notEqual(item.breach, item.expectedResponse.repair, id);
  assert.notEqual(item.expectedResponse.repair, item.expectedResponse.explanation, id);
  assert.ok(item.terms.length >= 3 && item.terms.length <= 8, id);
  assert.deepEqual(item.wordIds, item.terms.map(term => term.wordId), id);
  assert.equal(new Set(item.wordIds).size, item.wordIds.length, id);
  assert.equal(item.primaryWordId, item.wordIds[0], id);
  for (const term of item.terms) {
    const actual = vocabulary.get(term.wordId);
    assert.ok(actual, id + ' ' + term.wordId);
    assert.equal(term.label, actual.ca, id);
    assert.ok(actual.refs.length > 0, id);
    assert.notEqual(actual.category, 'personal', id);
  }
  const [agent, verb] = item.terms;
  const location = item.terms.at(-1);
  assert.equal(item.participants[0], personLabels[agent.label], id);
  assert.ok(item.participants[0], id);
  assert.equal(vocabulary.get(agent.wordId).category, 'persones', id);
  assert.equal(vocabulary.get(verb.wordId).category, 'verbs', id);
  assert.equal(vocabulary.get(location.wordId).category, 'llocs', id);
  assert.equal(item.setting, location.label, id);
  for (const supporting of item.participants.slice(1)) {
    assert.ok(supporting.length >= 20, id);
    assert.doesNotMatch(supporting, /[|\r\n<>]/, id);
    assert.ok(item.terms.some(term => term.label === 'PERSONA'), id);
  }
}

const fold = value => value.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase()
  .replace(/[^\p{L}\p{N}]+/gu, ' ').trim();

function buildGuideRows(items) {
  const lines = [];
  let lastMechanism;
  let lastSubtype;
  for (const item of items) {
    if (item.mechanism !== lastMechanism) {
      lines.push('', '### ' + mechanisms[item.mechanism]);
      lastMechanism = item.mechanism;
    }
    if (item.subtype !== lastSubtype) {
      lines.push('', '#### ' + subtypes[item.subtype], '',
        '| Estímul i etiquetes CACE | Participants, escena i contacte | Incongruència i indici | Resposta esperada |',
        '| --- | --- | --- | --- |');
      lastSubtype = item.subtype;
    }
    const people = item.participants.map(person => person.replace(/\.$/, '')).join(' · ');
    lines.push('| **' + item.id + ' · ' + item.title + '**<br>' +
      item.terms.map(term => term.label).join(' · ') + ' | **' + people + '**<br>' +
      item.scene + '<br>' + item.contact + ' | ' + item.breach + '<br>**Indici** · ' +
      item.cue + ' | ' + item.expectedResponse.repair + '<br>' + item.expectedResponse.explanation + ' |');
  }
  return lines.join('\n') + '\n';
}

function verifyItems(plan, catalog) {
  const vocabulary = new Map(catalog.words.map(word => [word.id, word]));
  const distribution = {};
  const seen = {ids: new Set(), titles: new Set(), tags: new Set(), scenes: new Set(), scenarios: new Set()};
  const settings = new Set();
  const participants = {};
  for (const [index, item] of plan.items.entries()) {
    verifyItem(item, index, vocabulary);
    const group = distribution[item.mechanism] ??= {total: 0, subtypes: {}};
    group.total++;
    group.subtypes[item.subtype] = (group.subtypes[item.subtype] ?? 0) + 1;
    settings.add(item.setting);
    const agent = item.terms[0].label;
    participants[agent] = (participants[agent] ?? 0) + 1;
    const keys = {
      ids: item.id, titles: fold(item.title), tags: [...item.wordIds].sort().join('|'),
      scenes: fold(item.scene), scenarios: fold([item.contact, item.breach, item.cue].join(' '))
    };
    for (const [dimension, key] of Object.entries(keys)) {
      assert.ok(!seen[dimension].has(key), item.id + ' duplicat a ' + dimension);
      seen[dimension].add(key);
    }
  }
  assert.deepEqual(Object.fromEntries(Object.entries(distribution).map(([name, group]) => [name, group.subtypes])), quotas);
  assert.deepEqual(plan.distribution, distribution);
  const guide = normalized(read(guidePath));
  const marker = '\n### Estri substituït\n';
  const tableStart = guide.indexOf(marker);
  assert.ok(tableStart > 0, 'Falten les taules de les fitxes');
  assert.equal(guide.slice(tableStart), buildGuideRows(plan.items), 'Les taules Markdown i les fitxes JSON han de coincidir');
  assert.ok(!/[ \t]+\n/.test(guide), 'Espais sobrers al pla Markdown');
  return {
    totalItems: plan.items.length, imagesPlanned: plan.items.length, scenesPlanned: plan.items.length,
    byFormat: {drawing: plan.items.length, photo: 0}, distribution,
    uniqueIds: seen.ids.size, uniqueTitles: seen.titles.size, uniqueLabelSets: seen.tags.size,
    distinctSceneDescriptions: seen.scenes.size, distinctContactBreachCueSets: seen.scenarios.size,
    exactTermOccurrencesChecked: plan.items.reduce((total, item) => total + item.terms.length, 0),
    distinctWordIds: new Set(plan.items.flatMap(item => item.wordIds)).size,
    distinctSettings: settings.size, mainParticipants: participants,
    markdownRowsMatched: plan.items.length
  };
}

function main() {
  const plan = readJson(planPath);
  const catalog = readJson(catalogPath);
  verifyHeader(plan, catalog);
  const coverage = verifyItems(plan, catalog);
  const preservation = verifyPreservation(plan, catalog);
  const report = {
    status: 'valid',
    scope: 'Validació local del pla textual i comprovació d’integritat. La verificació pública N11 procedeix de l’auditoria històrica.',
    ...preservation,
    ...coverage,
    historicalReference: plan.historicalReference,
    semanticReview: {
      textualBriefsReviewed: plan.items.length,
      method: 'Redacció i revisió de cada escena, contrast entre la pista i la reparació i lectura creuada dels 200 títols i ruptures per detectar repeticions.',
      pending: [
        'Verificar a mida de l’app la identificació espontània de l’acció i la incongruència a cada imatge.',
        'Comprovar contacte, anatomia, enquadrament, perspectiva, escala, quantitats i absència de pistes alternatives.',
        'Comprovar la resposta amb suport CACE i la claredat escolar amb la imatge present.',
        'Verificar el desplegament N12 si més endavant se n’autoritza la publicació.'
      ]
    },
    authorization: plan.authorization
  };
  fs.writeFileSync(path.join(root, reportPath), JSON.stringify(report, null, 2) + '\n', 'utf8');
  console.log(JSON.stringify({
    status: report.status, stimuli: report.totalItems, mechanisms: Object.keys(report.distribution).length,
    wordIds: report.distinctWordIds, termsChecked: report.exactTermOccurrencesChecked,
    localDisplayHashesChecked: report.localDisplayHashesChecked, bankPartHashesChecked: report.bankPartHashesChecked,
    changesOutsidePlanningFiles: report.changesOutsidePlanningFiles, reportPath
  }, null, 2));
}

if (require.main === module) main();
module.exports = {buildGuideRows};

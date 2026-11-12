const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'src/catalog-data.json'), 'utf8'));
const source = fs.readFileSync(path.join(root, 'src/app.js'), 'utf8').replace(/\ninit\(\);\s*$/, '');
const appleId = catalog.words.find(w => w.ca === 'POMA').id;

// Run the real app functions without opening IndexedDB or starting the UI.
function app(data = catalog) {
  const elements = new Map();
  const element = selector => {
    if (!elements.has(selector)) elements.set(selector, {
      value: '', hidden: false, innerHTML: '', addEventListener() {},
      setAttribute() {}, removeAttribute() {}, querySelectorAll() { return []; },
      classList: { add() {}, remove() {}, toggle() {} },
    });
    return elements.get(selector);
  };
  const context = vm.createContext({
    document: {
      getElementById: () => ({ textContent: JSON.stringify(data) }),
      querySelector: element, addEventListener() {},
    },
    window: {}, localStorage: { getItem() { return null; } },
    console, structuredClone, setTimeout() {}, clearTimeout() {},
  });
  new vm.Script(source, { filename: 'src/app.js' }).runInContext(context);
  return {
    run: code => vm.runInContext(code, context),
    read: code => JSON.parse(JSON.stringify(vm.runInContext(code, context))),
  };
}

test('Catalan search and suggestions do not read Spanish fields', () => {
  const a = app();
  a.run("lang='ca'; state.query='manzana'");
  assert.equal(a.read('results().length'), 0);
  assert.equal(a.read("wordCandidates('manzana').length"), 0);
});

test('Spanish search is symmetric, including after a language change', () => {
  const a = app();
  a.run("lang='es'; state.query='poma'");
  assert.equal(a.read('results().length'), 0);
  assert.equal(a.read("wordCandidates('poma').length"), 0);
  a.run("state.query='manzana'");
  assert.ok(a.read('results().length') > 0);
  a.run("lang='ca'");
  assert.equal(a.read('results().length'), 0);
});

test('Primary apple concepts rank ahead of incidental apple mentions in both languages', () => {
  const direct = catalog.assets.filter(a => a.targetWordIds?.includes(appleId) || a.id === 'sample-apple').map(a => a.id);
  assert.ok(direct.length >= 5);
  for (const [language, query] of [['ca', 'poma'], ['es', 'manzana']]) {
    const a = app();
    a.run(`lang=${JSON.stringify(language)}; state.query=${JSON.stringify(query)}`);
    const ids = a.read('results().map(a=>a.id)');
    assert.deepEqual(new Set(ids.slice(0, direct.length)), new Set(direct));
    assert.ok(ids.length > direct.length, 'Related scenes should remain available after the direct images');
  }
});

test('Selecting a suggested word also puts its primary images first', () => {
  const a = app();
  a.run(`state.tags=[${JSON.stringify(appleId)}]`);
  const rows = a.read('results()');
  const expected = catalog.assets.filter(row => row.tags.includes(appleId));
  const primaryCount = expected.filter(row => row.primaryWordId === appleId).length;
  assert.deepEqual(new Set(rows.map(row => row.id)), new Set(expected.map(row => row.id)));
  assert.ok(rows.slice(0, primaryCount).every(row => row.primaryWordId === appleId));
  assert.ok(rows.slice(primaryCount).every(row => row.primaryWordId !== appleId));
  assert.match(a.read('filterToolbar()'), /Rellevància/);
});

test('Multiword queries cannot combine Catalan and Spanish descriptions', () => {
  const a = app();
  a.run("state.query='poma roja'");
  assert.equal(a.read('results().length'), 0);
  a.run("state.query='poma vermella'");
  assert.ok(a.read('results().length') > 0);
  a.run("lang='es'; state.query='manzana roja'");
  assert.ok(a.read('results().length') > 0);
});

test('Exact primary keywords beat secondary tags, prefixes and repeated incidental mentions', () => {
  const word = catalog.words.find(w => w.ca === 'MENJAR' && w.category === 'verbs');
  const data = { ...catalog, words: [...catalog.words, { id: 'ointment', ca: 'POMADA', es: 'POMADA', category: 'cos' }] };
  const image = (id, primary, tags, title, description = '') => ({
    id, primaryWordId: primary, tags, title: { ca: title }, alt: { ca: description }, kind: 'drawing', levels: [1],
  });
  data.assets = [
    image('incidental', word.id, [word.id], 'Escena', 'poma '.repeat(40)),
    image('prefix', 'ointment', ['ointment'], 'Pomada'),
    image('secondary', word.id, [word.id, appleId], 'Escena amb fruita'),
    image('direct', appleId, [appleId], 'Fruita'),
  ];
  const a = app(data);
  a.run("state.query='poma'");
  assert.deepEqual(a.read('results().map(a=>a.id)'), ['direct', 'secondary', 'prefix', 'incidental']);
});

test('Missing translations do not fall back to the other language while searching', () => {
  const a = app();
  a.run(`stored.assets=[{id:'personal',title:{es:'Imagen exclusiva'},alt:{es:'contraseña especial'},tags:[${JSON.stringify(appleId)}],levels:[1],kind:'photo'}]; state.query='contraseña'`);
  assert.equal(a.read('results().length'), 0);
  a.run("lang='es'");
  assert.deepEqual(a.read('results().map(a=>a.id)'), ['personal']);
});

test('Accents, exact suggestions and exclusions still work in the active language', () => {
  const hand = catalog.words.find(w => w.ca === 'MÀ');
  const a = app();
  assert.equal(a.read("wordCandidates('ma')[0].id"), hand.id);
  assert.ok(!a.read(`wordCandidates('ma',[${JSON.stringify(hand.id)}]).map(w=>w.id)`).includes(hand.id));
  a.run("lang='es'");
  assert.equal(a.read("wordCandidates('lapiz')[0].es"), 'LÁPIZ');
});

test('Category, type, level, favorites, collections and all/any tag filters are preserved', () => {
  const a = app();
  const redId = catalog.words.find(w => w.ca === 'VERMELL').id;
  a.run(`state.tags=[${JSON.stringify(appleId)},${JSON.stringify(redId)}]; state.kind='photo'; state.level=1; state.category='aliments'`);
  let rows = a.read('results()');
  assert.equal(rows.length, 2);
  assert.ok(rows.every(row => row.tags.includes(appleId) && row.tags.includes(redId)));
  a.run("state.wordMode='any'");
  assert.ok(a.read('results().length') > rows.length);
  const id = rows[0].id;
  a.run(`stored.favorites=[${JSON.stringify(id)}]; state.view='favorites'`);
  assert.deepEqual(a.read('results().map(a=>a.id)'), [id]);
  a.run(`stored.collections=[{id:'test-collection',items:[${JSON.stringify(id)}]}]; state.view='collection'; state.collection='test-collection'`);
  assert.deepEqual(a.read('results().map(a=>a.id)'), [id]);
});

test('Explicit alphabetical/recent order works and an empty search retains catalogue order', () => {
  const a = app();
  assert.deepEqual(a.read('results().map(a=>a.id)'), catalog.assets.map(row => row.id));
  a.run("state.query='poma'; state.sort='alpha'");
  const titles = a.read('results().map(a=>a.title.ca)');
  assert.deepEqual(titles, [...titles].sort((a, b) => a.localeCompare(b, 'ca')));
  a.run("state.sort='new'");
  const dates = a.read("results().map(a=>a.created||'')");
  assert.deepEqual(dates, [...dates].sort((a, b) => b.localeCompare(a)));
});

test('N2 constructions work with both CACE tags, the level filter and their catalogue collection', () => {
  const construction = catalog.assets.find(row => row.constructionId === 'n2-076');
  assert.ok(construction, 'The pink cow construction must be present');
  const a = app();
  a.run(`state.level=2; state.tags=${JSON.stringify(construction.tags)}; state.wordMode='all'`);
  assert.deepEqual(a.read('results().map(row=>row.id)'), [construction.id]);
  a.run("state.tags=[]; state.query='vaca rosa'; lang='ca'");
  assert.deepEqual(a.read('results().map(row=>row.id)'), [construction.id]);
  a.run("state.level=1");
  assert.equal(a.read('results().length'), 0);
  a.run("state.level=2; state.query=''; stored.collections=[]; stored.catalogImports={}; syncCatalogCollections(); state.view='collection'; state.collection='cace-n2-entitat-atribut'");
  const ids = a.read('results().map(row=>row.id)');
  assert.deepEqual(new Set(ids), new Set(catalog.assets.filter(row => row.constructionId?.startsWith('n2-')).map(row => row.id)));
});

test('N3 subject and action combinations respect both tags, the level and their own collection', () => {
  const construction = catalog.assets.find(row => row.constructionId === 'n3-076');
  assert.ok(construction, 'The dancing cow must be present');
  const a = app();
  a.run(`state.level=3; state.tags=${JSON.stringify(construction.tags)}; state.wordMode='all'`);
  assert.deepEqual(a.read('results().map(row=>row.id)'), [construction.id]);
  a.run("state.level=2");
  assert.equal(a.read('results().length'), 0);
  a.run("state.tags=[]; state.level=3; stored.collections=[]; stored.catalogImports={}; syncCatalogCollections(); state.view='collection'; state.collection='cace-n3-subjecte-accio'");
  assert.deepEqual(new Set(a.read('results().map(row=>row.id)')), new Set(catalog.assets.filter(row => row.constructionId?.startsWith('n3-')).map(row => row.id)));
});

test('N4 combines subject, action and object with the level and collection filters', () => {
  const construction = catalog.assets.find(row => row.constructionId === 'n4-076');
  assert.ok(construction, 'The cow reading a story must be present');
  assert.equal(construction.tags.length, 3);
  const a = app();
  a.run(`state.level=4; state.tags=${JSON.stringify(construction.tags)}; state.wordMode='all'`);
  assert.deepEqual(a.read('results().map(row=>row.id)'), [construction.id]);
  a.run('state.level=3');
  assert.equal(a.read('results().length'), 0);
  a.run("state.tags=[]; state.level=4; stored.collections=[]; stored.catalogImports={}; syncCatalogCollections(); state.view='collection'; state.collection='cace-n4-subjecte-accio-objecte'");
  assert.deepEqual(new Set(a.read('results().map(row=>row.id)')), new Set(catalog.assets.filter(row => row.constructionId?.startsWith('n4-')).map(row => row.id)));
});

test('N5 relations support exact CACE tags, search and their collection without mixing levels', () => {
  const a = app();
  for (const id of ['n5-001', 'n5-041', 'n5-071', 'n5-112']) {
    const row = catalog.assets.find(x => x.constructionId === id);
    assert.ok(row, id);
    a.run(`state.view='all'; state.query=''; state.level=5; state.tags=${JSON.stringify(row.tags)}; state.wordMode='all'`);
    assert.deepEqual(a.read('results().map(x=>x.id)'), [row.id]);
    a.run('state.level=4');
    assert.equal(a.read('results().length'), 0);
  }
  a.run("state.level=5; state.tags=[]; state.query='elefant dins tassa'; lang='ca'");
  assert.deepEqual(a.read('results().map(x=>x.constructionId)'), ['n5-112']);
  a.run("state.query=''; stored.collections=[]; stored.catalogImports={}; syncCatalogCollections(); state.view='collection'; state.collection='cace-n5-relacions'");
  const expected = catalog.assets.filter(x => x.constructionId?.startsWith('n5-')).map(x => x.id);
  assert.ok(expected.length >= 95);
  assert.deepEqual(new Set(a.read('results().map(x=>x.id)')), new Set(expected));
});

test('N6 instruments, recipients and places keep exact tags and a separate collection', () => {
  const a=app();
  const rows=catalog.assets.filter(x=>x.constructionId?.startsWith('n6-'));
  assert.ok(rows.length>=6);
  const plan=require('../production/n6-plan.json');
  for(const type of ['instrument','destinatari','lloc']) {
    const row=rows.find(x=>plan.items.find(p=>p.id===x.constructionId).informationType===type);
    assert.ok(row,type);
    assert.equal(row.tags.length,type==='instrument'?5:4);
    a.run(`state.view='all'; state.query=''; state.level=6; state.tags=${JSON.stringify(row.tags)}; state.wordMode='all'`);
    assert.deepEqual(a.read('results().map(x=>x.id)'),[row.id]);
    a.run('state.level=5');assert.equal(a.read('results().length'),0);
  }
  a.run("state.level=6; state.tags=[]; state.query=''; stored.collections=[]; stored.catalogImports={}; syncCatalogCollections(); state.view='collection'; state.collection='cace-n6-mes-informacio'");
  assert.deepEqual(new Set(a.read('results().map(x=>x.id)')),new Set(rows.map(x=>x.id)));
});

test('N7 selects the specified referent without indexing its opposing distractor', () => {
  const rows=catalog.assets.filter(x=>x.constructionId?.startsWith('n7-'));
  assert.ok(rows.length>=4);
  const plan=require('../production/n7-plan.json');
  const a=app();
  for(const row of rows.slice(0,12)) {
    const item=plan.items.find(p=>p.id===row.constructionId);
    assert.ok(!row.tags.includes(item.contrast.distractor.specifier.wordId));
    a.run(`state.view='all'; state.query=''; state.level=7; state.tags=${JSON.stringify(row.tags)}; state.wordMode='all'`);
    assert.deepEqual(a.read('results().map(x=>x.id)'),[row.id]);
    a.run('state.level=6'); assert.equal(a.read('results().length'),0);
  }
  a.run("state.level=7; state.tags=[]; state.query=''; stored.collections=[]; stored.catalogImports={}; syncCatalogCollections(); state.view='collection'; state.collection='cace-n7-precisio'");
  assert.deepEqual(new Set(a.read('results().map(x=>x.id)')),new Set(rows.map(x=>x.id)));
});

test('Every catalogue asset has a valid primary keyword, including the initial scenes', () => {
  for (const row of catalog.assets) {
    assert.ok(row.tags.includes(row.primaryWordId), row.id);
    assert.ok(catalog.words.some(w => w.id === row.primaryWordId), row.id);
    if (row.targetWordIds?.length === 1) assert.equal(row.primaryWordId, row.targetWordIds[0], row.id);
  }
  const scene = catalog.assets.find(a => a.id === 'sample-girl-photo');
  assert.equal(catalog.words.find(w => w.id === scene.primaryWordId).ca, 'MENJAR');
});

test('New backups preserve the chosen primary keyword and older backups remain compatible', () => {
  const a = app();
  const row = structuredClone(catalog.assets.find(row => row.id === 'sample-girl-photo'));
  row.src = 'data:image/png;base64,AA==';
  row.primaryWordId = appleId;
  const backup = { format: 'cace-imatges-backup', version: 1, assets: [row], favorites: [], collections: [] };
  assert.equal(a.read(`validateBackup(${JSON.stringify(backup)}).assets[0].primaryWordId`), appleId);
  delete row.primaryWordId;
  const restored = a.read(`validateBackup(${JSON.stringify(backup)}).assets[0]`);
  assert.equal(restored.primaryWordId, catalog.assets.find(a => a.id === row.id).primaryWordId);
  row.title = { es: 'Imagen exclusiva' };
  row.alt = { es: 'contraseña especial' };
  const localized = a.read(`validateBackup(${JSON.stringify(backup)}).assets[0]`);
  assert.equal(localized.title.ca, '');
  assert.equal(localized.alt.ca, '');
  row.primaryWordId = 'unknown-word';
  assert.throws(() => a.run(`validateBackup(${JSON.stringify(backup)})`), /Primary word/);
});

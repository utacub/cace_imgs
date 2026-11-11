const fs = require('node:fs');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const cp = require('node:child_process');
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const catalogBytes = fs.readFileSync('src/catalog-data.json');
const catalog = JSON.parse(catalogBytes);
const plan = JSON.parse(fs.readFileSync('production/n6-plan.json', 'utf8'));
const previous = [4, 5].flatMap(n => JSON.parse(fs.readFileSync(`production/n${n}-plan.json`, 'utf8')).items);
const words = new Map(catalog.words.map(w => [w.id, w]));
const level = catalog.levels.find(l => l.id === 6);
assert.equal(plan.name, level.ca);
assert.equal(plan.description, level.desc.ca);
assert.equal(plan.status, 'proposal-only');
assert.equal(plan.authorization.scope, 'planificacio-i-revisio-nomes');
for (const key of ['generationAuthorized', 'catalogImportAuthorized', 'commitAuthorized', 'pushAuthorized', 'deploymentAuthorized']) {
  assert.equal(plan.authorization[key], false);
}
assert.equal(plan.baseline.head, cp.execFileSync('git', ['rev-parse', 'HEAD'], {encoding:'utf8'}).trim());
assert.equal(plan.baseline.catalogSha256, hash(catalogBytes));
assert.equal(catalog.version, '0.1.116');
assert.equal(catalog.words.length, 861);
assert.equal(catalog.assets.length, 3269);
const n5 = catalog.assets.filter(a => a.levels?.includes(5) && a.constructionId?.startsWith('n5-'));
assert.equal(n5.length, 200);
assert.equal(n5.filter(a => a.kind === 'photo').length, 100);
assert.equal(n5.filter(a => a.kind === 'drawing').length, 100);
const protectedDiff = cp.execFileSync('git', ['diff', 'HEAD', '--name-only', '--', ...plan.baseline.protectedPaths], {encoding:'utf8'}).trim();
assert.equal(protectedDiff, '', 'La producció protegida ha canviat');
assert.deepEqual(plan.distributionPerGroup, {instrument:34, destinatari:33, lloc:33});
assert.equal(plan.variantsPerConstruction, 1);
assert.equal(plan.items.length, 200);
for (const getKey of [x=>x.id, x=>x.title.ca, x=>x.wordIds.join('|'), x=>x.compositionKey]) {
  assert.equal(new Set(plan.items.map(getKey)).size, 200);
}
const schemas = {
  instrument:['agent','action','patient','connector','instrument'],
  destinatari:['agent','action','theme','recipient'],
  lloc:['agent','action','patient','location'],
};
const distribution = {};
let occurrences = 0;
const inheritedCores = [];
for (const [index,item] of plan.items.entries()) {
  assert.equal(item.number, index+1);
  assert.equal(item.id, `n6-${String(index+1).padStart(3,'0')}`);
  assert.equal(item.level, 6);
  assert.equal(item.group, index<100?'habitual':'insolita');
  assert.equal(item.kind, index<100?'photo':'drawing');
  assert.equal(item.variant, index<100?'foto-01':'pla-01');
  assert.equal(item.reviewStatus, 'pendent-de-revisio-usuari');
  assert.deepEqual(item.roles.map(r=>r.role), schemas[item.informationType]);
  assert.equal(item.labels.length, item.roles.length);
  assert.equal(item.wordIds.length, item.roles.length);
  assert.equal(new Set(item.wordIds).size, item.wordIds.length);
  assert.ok(item.visualDescription.length>120);
  assert.ok(item.title.ca.length>0 && item.compositionKey.length>0);
  for (const [i,role] of item.roles.entries()) {
    const w=words.get(item.wordIds[i]);
    assert.ok(w, `${item.id}: wordId absent`);
    assert.equal(w.ca, item.labels[i]);
    assert.equal(role.label, w.ca);
    assert.equal(role.wordId, w.id);
    assert.ok(!['FER PIPI','FER CACA'].includes(w.ca));
    if (role.role==='action') assert.equal(w.category, 'verbs');
    if (role.role==='location') assert.equal(w.category, 'llocs');
    if (['expressions','particules','atributs','sensacions','espai','personal'].includes(w.category)) {
      assert.equal(w.ca, 'AMB');
      assert.equal(role.role, 'connector');
    }
    occurrences++;
  }
  const getRole=r=>item.roles.find(x=>x.role===r);
  if(item.informationType==='instrument') {
    assert.equal(item.labels[3], 'AMB');
    assert.ok(item.visualDescription.includes('L’eina actua sobre l’objecte'));
    assert.ok(item.visualDescription.includes('sense escenari de lloc recognoscible'));
  } else if(item.informationType==='destinatari') {
    assert.equal(item.labels[1], 'DONAR');
    assert.equal(words.get(getRole('recipient').wordId).category, 'persones');
    assert.ok(item.visualDescription.includes('Un sol objecte compartit en el traspàs'));
  } else {
    assert.ok(item.visualDescription.includes('L’acció té lloc dins aquest espai funcional'));
  }
  assert.ok(index<100 ? ['NEN','NENA','NOI','NOIA','DONA','HOME'].includes(item.labels[0]) : (words.get(item.wordIds[0]).category==='animals' || ['MONSTRE','VAMPIR'].includes(item.labels[0])));
  const core=item.wordIds.slice(0,3).join('|');
  const matches=previous.filter(p=>p.wordIds.join('|')===core);
  if(item.informationType==='instrument') assert.equal(matches.length,0,'Instrument que només reetiqueta un nucli N4 existent');
  if(matches.length) inheritedCores.push({id:item.id,from:matches.map(p=>p.id),additionalRole:item.informationType,visibleDifference:item.informationType==='instrument'?'Eina identificable en contacte; sense decorat de lloc.':'Conjunt contextual de lloc recognoscible.'});
  assert.ok(!previous.some(p=>p.wordIds.join('|')===item.wordIds.join('|')));
  distribution[item.group] ||= {total:0,instrument:0,destinatari:0,lloc:0,locations:{},instrumentPairs:0,instrumentSingletons:0};
  const g=distribution[item.group];
  g.total++;
  g[item.informationType]++;
  if(item.informationType==='lloc') {
    const place=getRole('location').label;
    g.locations[place]=(g.locations[place]||0)+1;
  }
}
for(const group of ['habitual','insolita']) {
  const d=distribution[group];
  assert.equal(d.total,100);
  for(const [type,count] of Object.entries(plan.distributionPerGroup)) assert.equal(d[type],count);
  assert.equal(Object.keys(d.locations).length,11);
  for(const count of Object.values(d.locations)) assert.equal(count,3);
  const cores=Object.groupBy(plan.items.filter(x=>x.group===group && x.informationType==='instrument'),x=>x.wordIds.slice(0,3).join('|'));
  for(const entries of Object.values(cores)) {
    assert.ok(entries.length<=2);
    if(entries.length===2) { assert.notEqual(entries[0].wordIds[4],entries[1].wordIds[4]); d.instrumentPairs++; }
    else d.instrumentSingletons++;
  }
  assert.equal(d.instrumentPairs,14);
  assert.equal(d.instrumentSingletons,6);
}
const readable=fs.readFileSync('production/n6-plan.md','utf8');
for(const x of plan.items) {
  assert.ok(readable.includes(`**${x.id} ·`));
  assert.ok(readable.includes(x.visualDescription));
  assert.ok(readable.includes(x.wordIds.join(' · ')));
}
const report={
 status:'valid',scope:'Coherència estructural, referències exactes i preservació local. Revisió semàntica de planificació; cap imatge generada ni avaluada, cap validació clínica.',
 catalogVersion:catalog.version,catalogSha256:hash(catalogBytes),catalogWords:catalog.words.length,catalogAssets:catalog.assets.length,n5Assets:n5.length,protectedTrackedPathsUnchanged:true,
 totalItems:200,uniqueIds:200,uniqueTitles:200,uniqueLabelTuples:200,uniqueCompositionKeys:200,exactN4N5TupleDuplicates:0,
 validatedLabelOccurrences:occurrences,distinctWordIds:new Set(plan.items.flatMap(x=>x.wordIds)).size,distribution,excludedLabelsFound:[],
 inheritedN4CoresWithExplicitN6Complement:inheritedCores,
 manualSemanticReview:'Escenes amb papers visibles; contrast TOVALLOLA/TOVALLÓ i MIRAR/LLEGIR retirats. Signatures automàtiques sense duplicats; la possible semblança perceptiva resta subjecta a revisió de les futures imatges.',
 authorization:plan.authorization,
};
fs.writeFileSync('production/n6-plan-validation.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({...report,inheritedN4CoresWithExplicitN6Complement:inheritedCores.length},null,2));

const fs = require('node:fs');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const catalogBytes = fs.readFileSync('src/catalog-data.json');
const catalog = JSON.parse(catalogBytes);
const plan = JSON.parse(fs.readFileSync('production/n5-plan.json','utf8'));
assert.equal(catalog.words.length,861);
assert.equal(plan.name,catalog.levels.find(x=>x.id===5).ca);
assert.equal(plan.description,catalog.levels.find(x=>x.id===5).desc.ca);
assert.equal(plan.status,'proposal-only');
assert.equal(plan.items.length,200);
assert.equal(new Set(plan.items.map(x=>x.id)).size,200);
assert.equal(new Set(plan.items.map(x=>x.title.ca)).size,200);
assert.equal(new Set(plan.items.map(x=>x.wordIds.join('|'))).size,200);
// DINS and AMB can otherwise describe the same scene with reversed labels.
const semanticKeys=plan.items.map(x=>x.labels[1]==='DINS'
 ? `${x.wordIds[2]}|contingut|${x.wordIds[0]}`
 : x.labels[1]==='AMB' ? `${x.wordIds[0]}|contingut|${x.wordIds[2]}`
 : x.wordIds.join('|'));
assert.equal(new Set(semanticKeys).size,200);
const spatial = ['SOTA','SOBRE','DINS','FORA','DAVANT','DARRERE','AL COSTAT','ENTRE'];
const distribution = {};
for(const [index,item] of plan.items.entries()) {
 assert.equal(item.number,index+1);
 assert.equal(item.id,`n5-${String(index+1).padStart(3,'0')}`);
 assert.equal(item.level,5);
 assert.equal(item.group,index<100?'habitual':'insolita');
 assert.equal(item.kind,index<100?'photo':'drawing');
 assert.equal(item.variant,index<100?'foto-01':'pla-01');
 assert.equal(item.labels.length,3);
 assert.equal(item.wordIds.length,3);
 assert.equal(new Set(item.wordIds).size,3);
 for(let i=0;i<3;i++) {
  const w=catalog.words.find(w=>w.id===item.wordIds[i]);
  assert.ok(w);
  assert.equal(w.ca,item.labels[i]);
  assert.ok(!['FER PIPI','FER CACA'].includes(w.ca));
 }
 if(item.relationType==='espai') assert.ok(spatial.includes(item.labels[1]));
 else assert.equal(item.labels[1],item.relationType==='possessio'?'TENIR':'AMB');
 if(item.labels[1]==='ENTRE') assert.ok(item.visualNote);
 const key=item.group;
 distribution[key] ||= {total:0,espai:0,possessio:0,contingut:0,spatialRelations:{}};
 distribution[key].total++;
 distribution[key][item.relationType]++;
 if(item.relationType==='espai') distribution[key].spatialRelations[item.labels[1]]=(distribution[key].spatialRelations[item.labels[1]]||0)+1;
}
for(const group of ['habitual','insolita']) {
 assert.equal(distribution[group].total,100);
 for(const [type,count] of Object.entries(plan.distributionPerGroup)) assert.equal(distribution[group][type],count);
 for(const relation of spatial) assert.equal(distribution[group].spatialRelations[relation],5);
}
const report={status:'valid',catalogVersion:catalog.version,catalogSha256:crypto.createHash('sha256').update(catalogBytes).digest('hex'),catalogWords:861,items:200,uniqueIds:200,uniqueLabelTuples:200,uniqueScenesAfterNormalizingDinsAmb:200,validatedLabelOccurrences:600,distinctWordIds:new Set(plan.items.flatMap(x=>x.wordIds)).size,distribution,excludedLabelsFound:[],scope:'Proposta sense generació, importació ni publicació. Només validació estructural i revisió semàntica del pla; no validació clínica ni visual d’imatges.'};
fs.writeFileSync('production/n5-plan-validation.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));

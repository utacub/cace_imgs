const fs=require('node:fs'),cp=require('node:child_process'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const p=read('production/n8-plan.json'),currentBytes=fs.readFileSync('src/catalog-data.json'),c=JSON.parse(currentBytes);
const baselineBytes=cp.execFileSync('git',['show',p.baseline.head+':src/catalog-data.json'],{maxBuffer:64*1024*1024}),baseline=JSON.parse(baselineBytes);
assert.deepEqual(c,baseline,'El catàleg de planificació ha canviat');
assert.equal(hash(currentBytes),p.baseline.catalogSha256);
assert.equal(c.version,'0.1.135');assert.equal(c.assets.length,3669);assert.equal(c.words.length,861);
assert.equal(p.baseline.version,c.version);assert.equal(p.baseline.totalAssets,c.assets.length);assert.equal(p.baseline.words,c.words.length);
const changedProtected=cp.execFileSync('git',['diff','--name-only',p.baseline.head,'--',...p.baseline.protectedPaths.filter(v=>v!=='dist/')],{encoding:'utf8'}).trim();
assert.equal(changedProtected,'','Fitxers protegits modificats: '+changedProtected);
assert.equal(c.assets.filter(a=>a.constructionId?.startsWith('n8-')).length,0);
assert.equal(p.level,8);assert.equal(p.name,c.levels.find(l=>l.id===8).ca);assert.equal(p.description,c.levels.find(l=>l.id===8).desc.ca);
assert.equal(p.status,'proposal-only');assert.equal(p.authorization.scope,'planificacio-i-revisio-nomes');
for(const k of ['generationAuthorized','catalogImportAuthorized','commitAuthorized','pushAuthorized','deploymentAuthorized'])assert.equal(p.authorization[k],false);
assert.equal(p.items.length,200);assert.equal(p.variantsPerConstruction,1);assert.equal(p.habitual,100);assert.equal(p.insolita,100);
assert.deepEqual(p.distributionPerGroup,{'accio-accio':50,'accio-estat':30,'estat-estat':20});
assert.equal(p.relationPolicy.connectorWordId,null);assert.equal(p.relationPolicy.relationIsCatalogEntry,false);
const words=new Map(c.words.map(w=>[w.id,w]));
const checkWord=w=>{assert.ok(words.has(w.wordId),'wordId desconegut');assert.equal(words.get(w.wordId).ca,w.label);assert.ok(!['FER PIPI','FER CACA','ABANS','DESPRÉS','PERQUÈ'].includes(w.label));};
const md=fs.readFileSync('production/n8-plan.md','utf8'),distribution={},families=new Map();
let targetOccurrences=0,contextOccurrences=0;
for(const get of [x=>x.id,x=>x.title.ca,x=>x.wordIds.join('|'),x=>x.compositionKey])assert.equal(new Set(p.items.map(get)).size,200,'Duplicació de construccions');
const allSignatures=new Set(c.assets.map(a=>(a.targetWordIds||a.tags||[]).join('|')));
for(const [i,x] of p.items.entries()){
 assert.equal(x.number,i+1);assert.equal(x.id,`n8-${String(i+1).padStart(3,'0')}`);assert.equal(x.level,8);
 assert.equal(x.group,i<100?'habitual':'insolita');assert.equal(x.kind,i<100?'photo':'drawing');assert.equal(x.variant,i<100?'foto-01':'pla-01');
 assert.equal(x.reviewStatus,'pendent-de-revisio-usuari');assert.equal(x.events.length,2);
 assert.equal(x.eventType,x.events.map(e=>e.type).join('-'));assert.ok(Object.hasOwn(p.distributionPerGroup,x.eventType));
 assert.notEqual(x.events[0].roles[0].wordId,x.events[1].roles[0].wordId,'Un sol agent');
 assert.notEqual(x.events[0].roles[1].wordId,x.events[1].roles[1].wordId,'Predicats iguals');
 for(const [j,e] of x.events.entries()){
  assert.equal(e.id,`e${j+1}`);assert.ok(['accio','estat'].includes(e.type));
  assert.deepEqual(e.roles.map(r=>r.role),['agent',e.type==='accio'?'action':'state',...(e.roles.length===3?['patient']:[])]);
  assert.ok(e.roles.length>=2&&e.roles.length<=3);assert.equal(words.get(e.roles[1].wordId)?.category,'verbs');
  if(e.type==='estat'){assert.equal(e.roles.length,2);assert.ok(['SEURE','DORMIR','RIURE','PLORAR'].includes(e.roles[1].label));}
  const agent=e.roles[0];if(x.group==='habitual')assert.ok(['NENA','NEN','NOIA','NOI','DONA','HOME'].includes(agent.label));else assert.equal(words.get(agent.wordId)?.category,'animals');
  assert.deepEqual(e.labels,e.roles.map(r=>r.label));assert.deepEqual(e.wordIds,e.roles.map(r=>r.wordId));
  for(const r of e.roles){checkWord(r);targetOccurrences++;}
  for(const w of e.context){checkWord(w);contextOccurrences++;}
  assert.ok(e.evidence.length>75);assert.ok(x.visualDescription.includes(e.evidence));
 }
 assert.deepEqual(x.labels,[...new Set(x.events.flatMap(e=>e.labels))]);
 assert.deepEqual(x.wordIds,[...new Set(x.events.flatMap(e=>e.wordIds))]);assert.equal(x.labels.length,x.wordIds.length);assert.ok(x.labels.length>=4&&x.labels.length<=6);
 assert.equal(x.primaryWordId,x.events[0].roles[0].wordId);assert.ok(x.wordIds.includes(x.primaryWordId));
 assert.ok(!allSignatures.has(x.wordIds.join('|')),'Tupla de catàleg preexistent');
 assert.equal(x.compositionKey,x.events.map(e=>e.wordIds.join('|')).sort().join('||'));
 assert.deepEqual(x.relation,{type:p.relationPolicy.type,wordId:null,simultaneous:true,causalClaim:false,temporalOrder:false});
 assert.equal(x.composition.sharedSpace,true);assert.equal(x.composition.frameCount,1);assert.notEqual(x.composition.event1Side,x.composition.event2Side);
 assert.ok(['esquerra','dreta'].includes(x.composition.event1Side));assert.ok(['esquerra','dreta'].includes(x.composition.event2Side));
 assert.ok(md.includes(`**${x.id} · ${x.title.ca}**`));assert.ok(md.includes(x.wordIds.join(' · ')));assert.ok(md.includes(x.visualDescription));
 for(const e of x.events){for(const r of e.roles)assert.ok(md.includes(`${r.role}=${r.label} (${r.wordId})`));for(const w of e.context)assert.ok(md.includes(`${w.label} (${w.wordId})`));}
 assert.ok(x.visualDescription.includes('una mateixa escena contínua'));assert.ok(x.visualDescription.includes('Exactament dues predicacions'));
 if(x.kind==='photo'){assert.ok(x.visualDescription.includes('mai allargar extremitats'));assert.ok(x.visualDescription.includes('flexionar els genolls'));}
 const g=distribution[x.group]||={total:0,types:{},event1Sides:{},predicates:{},agents:{}};g.total++;
 g.types[x.eventType]=(g.types[x.eventType]||0)+1;g.event1Sides[x.composition.event1Side]=(g.event1Sides[x.composition.event1Side]||0)+1;
 for(const e of x.events){g.predicates[e.roles[1].label]=(g.predicates[e.roles[1].label]||0)+1;g.agents[e.roles[0].label]=(g.agents[e.roles[0].label]||0)+1;}
 const family=families.get(x.familyId)||[];family.push(x);families.set(x.familyId,family);
}
assert.equal(families.size,100);
for(const pair of families.values()){
 assert.equal(pair.length,2);const [a,b]=pair;assert.equal(a.counterpartId,b.id);assert.equal(b.counterpartId,a.id);assert.equal(a.eventType,b.eventType);
 assert.notEqual(a.composition.event1Side,b.composition.event1Side);assert.notEqual(a.group,b.group);
 for(let j=0;j<2;j++){assert.deepEqual(a.events[j].roles.slice(1),b.events[j].roles.slice(1));assert.equal(a.events[j].evidence,b.events[j].evidence);assert.deepEqual(a.events[j].context,b.events[j].context);}
}
for(const g of Object.values(distribution)){assert.equal(g.total,100);assert.deepEqual(g.types,p.distributionPerGroup);assert.deepEqual(g.event1Sides,{esquerra:50,dreta:50});}
assert.equal(p.futureBatches.length,11);assert.deepEqual(p.futureBatches.map(b=>b.count),[10,20,20,20,20,20,20,20,20,20,10]);
const batched=p.futureBatches.flatMap(b=>b.items);assert.equal(batched.length,200);assert.equal(new Set(batched).size,200);assert.deepEqual([...batched].sort(),p.items.map(x=>x.id).sort());
for(const b of p.futureBatches){assert.equal(b.count,b.items.length);assert.equal(b.habitual,b.count/2);assert.equal(b.insolita,b.count/2);assert.equal(b.items.filter(id=>p.items.find(x=>x.id===id)?.group==='habitual').length,b.habitual);}
const pilot=p.futureBatches[0].items.map(id=>p.items.find(x=>x.id===id));assert.equal(new Set(pilot.map(x=>x.eventType)).size,3);
for(const s of ['DORMIR','RIURE','PLORAR'])assert.ok(pilot.some(x=>x.labels.includes(s)),'Pilot sense estat facial: '+s);
assert.equal(p.futurePublication.expectedNewAssets,200);assert.equal(p.futurePublication.expectedTotalAssets,c.assets.length+200);assert.equal(p.futurePublication.expectedWords,861);
let hashedAssets=0,legacyAssets=0;
for(const a of c.assets){const path='dist/'+a.src;assert.ok(fs.existsSync(path),'Falta imatge local: '+a.id);if(a.displaySha256){assert.equal(hash(fs.readFileSync(path)),a.displaySha256,'Imatge alterada: '+a.id);hashedAssets++;}else legacyAssets++;}
const report={status:'valid',checkedOn:'2026-11-13',scope:'Planificació local N8. No s’han generat imatges ni verificat el desplegament remot.',baseline:p.baseline,catalogUnchanged:true,protectedTrackedPathsUnchanged:true,catalogAssetsPreserved:c.assets.length,catalogWordsPreserved:c.words.length,localDisplayHashesChecked:hashedAssets,legacyAssetsWithoutDisplayHash:legacyAssets,bankTrackedFilesUnchanged:true,totalItems:200,eventCount:400,homologousFamilies:100,uniqueIds:200,uniqueTitles:200,uniqueTargetTuples:200,uniqueCompositionKeys:200,targetRoleOccurrencesChecked:targetOccurrences,contextOccurrencesChecked:contextOccurrences,distinctTargetWordIds:new Set(p.items.flatMap(x=>x.wordIds)).size,distribution,batches:p.futureBatches.map(b=>({id:b.id,count:b.count,habitual:b.habitual,insolita:b.insolita})),planningReview:{method:'Revisió de les 10 accions principals, 5 accions companyes, 4 estats, 5 parelles d’estats, assignació dels 200 parells de participants i continuïtat espacial dels briefs. Les comprovacions no substitueixen revisar les imatges futures.',limits:['La distribució i la coexistència en un sol instant són decisions proposades, no quotes imposades per les fonts.','100 famílies homologues humanes/animals; no són 200 situacions independents.','DORMIR, RIURE i PLORAR, la lectura i els contactes petits necessiten revisió perceptiva futura.','No hi ha imatges N8 existents ni validació clínica o psicomètrica.','El catàleg i el banc versionat es conserven intactes; els assets antics sense displaySha256 es comproven per existència i preservació del banc, sense atribuir-los un hash històric inexistent.']},authorization:p.authorization,planSha256:hash(fs.readFileSync('production/n8-plan.json')),readablePlanSha256:hash(fs.readFileSync('production/n8-plan.md'))};
fs.writeFileSync('production/n8-plan-validation.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({status:report.status,totalItems:report.totalItems,eventCount:report.eventCount,homologousFamilies:report.homologousFamilies,catalogAssetsPreserved:report.catalogAssetsPreserved,catalogWordsPreserved:report.catalogWordsPreserved,localDisplayHashesChecked:report.localDisplayHashesChecked,legacyAssetsWithoutDisplayHash:report.legacyAssetsWithoutDisplayHash,batches:report.batches.map(b=>b.count)},null,2));

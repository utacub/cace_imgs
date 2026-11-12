const fs=require('node:fs'),cp=require('node:child_process'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const p=JSON.parse(fs.readFileSync('production/n7-plan.json','utf8'));
// El pla es valida contra la instantània de planificació, també després de producció autoritzada.
const bytes=cp.execFileSync('git',['show',p.baseline.head+':src/catalog-data.json'],{maxBuffer:64*1024*1024}),c=JSON.parse(bytes);
const current=JSON.parse(fs.readFileSync('src/catalog-data.json','utf8'));
assert.deepEqual(current.words,c.words);assert.deepEqual(current.levels,c.levels);assert.deepEqual(current.categories,c.categories);
for(const old of c.assets)assert.deepEqual(current.assets.find(x=>x.id===old.id),old);
for(const old of c.collections)assert.deepEqual(current.collections.find(x=>x.id===old.id),old);
assert.ok([hash(bytes),hash(Buffer.from(bytes.toString('utf8').replace(/\r?\n/g,'\r\n')))].includes(p.baseline.catalogSha256));
const level=c.levels.find(l=>l.id===7),words=new Map(c.words.map(w=>[w.id,w]));
assert.equal(p.name,level.ca);assert.equal(p.description,level.desc.ca);
assert.equal(p.status,'proposal-only');assert.equal(p.authorization.scope,'planificacio-i-revisio-nomes');
for(const k of ['generationAuthorized','catalogImportAuthorized','commitAuthorized','pushAuthorized','deploymentAuthorized'])assert.equal(p.authorization[k],false);
assert.equal(c.version,p.baseline.version);assert.equal(c.words.length,861);assert.equal(c.assets.length,3469);
assert.equal(c.assets.filter(a=>a.constructionId?.startsWith('n7-')).length,0);
assert.equal(p.items.length,200);assert.equal(p.variantsPerConstruction,1);
assert.deepEqual(p.distributionPerGroup,{aspecte:40,estat:30,posicio:30});
const previous=[4,5,6].flatMap(n=>JSON.parse(fs.readFileSync(`production/n${n}-plan.json`,'utf8')).items);
const readable=fs.readFileSync('production/n7-plan.md','utf8');
const pairs=new Map(),distribution={},inheritedCores=[];
let labelOccurrences=0,contextOccurrences=0,displayHashesChecked=0,legacyWithoutHash=0;
for(const get of [x=>x.id,x=>x.title.ca,x=>x.wordIds.join('|'),x=>x.compositionKey])assert.equal(new Set(p.items.map(get)).size,200);
const subtypes={color:['VERMELL','BLAU','GROC','VERD','LILA'],mida:['GRAN','PETITA','LLARG','CURT'],estampat:['RATLLES','TOPOS'],neteja:['NET','BRUT'],humitat:['SEC','MULLAT'],contingut:['PLE','BUIT'],interior:['DINS','FORA'],vertical:['SOBRE','SOTA']};
const allowedActions=['AGAFAR','AIXECAR','PORTAR','TOCAR'];
const roleValue=(x,r)=>x.roles.find(v=>v.role===r);
for(const [i,x] of p.items.entries()){
 const at=x.id;
 assert.equal(x.number,i+1);assert.equal(at,`n7-${String(i+1).padStart(3,'0')}`);assert.equal(x.level,7);
 assert.equal(x.group,i<100?'habitual':'insolita');assert.equal(x.kind,i<100?'photo':'drawing');assert.equal(x.variant,i<100?'foto-01':'pla-01');
 assert.equal(x.reviewStatus,'pendent-de-revisio-usuari');
 assert.deepEqual(x.roles.map(r=>r.role),x.precisionType==='posicio'?['agent','action','patient','specifier','anchor']:['agent','action','patient','specifier']);
 assert.equal(x.labels.length,x.roles.length);assert.equal(x.wordIds.length,x.roles.length);assert.equal(new Set(x.wordIds).size,x.wordIds.length);
 for(const [j,r] of x.roles.entries()){
  const w=words.get(r.wordId);assert.ok(w,at);assert.equal(r.label,w.ca,at);assert.equal(x.labels[j],w.ca,at);assert.equal(x.wordIds[j],w.id,at);
  assert.ok(!p.vocabularyPolicy.absoluteExclusions.includes(w.ca));labelOccurrences++;
 }
 const action=roleValue(x,'action'),patient=roleValue(x,'patient'),specifier=roleValue(x,'specifier'),agent=roleValue(x,'agent'),anchor=roleValue(x,'anchor');
 assert.equal(words.get(action.wordId).category,'verbs');assert.ok(allowedActions.includes(action.label));
 if(i<100)assert.ok(['NENA','NEN','NOIA','NOI','DONA','HOME'].includes(agent.label));else assert.equal(words.get(agent.wordId).category,'animals');
 assert.ok(subtypes[x.contrastSubtype].includes(specifier.label));
 if(['neteja','humitat'].includes(x.contrastSubtype))assert.equal(words.get(specifier.wordId).category,'atributs');
 else assert.equal(words.get(specifier.wordId).category,x.precisionType==='posicio'?'espai':'colors');
 assert.equal(x.contrast.candidateCount,2);assert.equal(x.contrast.sameClass,true);assert.deepEqual(x.contrast.targetSpecifier,specifier);
 const d=x.contrast.distractor;
 assert.equal(d.wordId,patient.wordId);assert.equal(d.label,patient.label);assert.equal(words.get(d.wordId).ca,d.label);contextOccurrences++;
 assert.equal(words.get(d.specifier.wordId).ca,d.specifier.label);contextOccurrences++;
 assert.ok(subtypes[x.contrastSubtype].includes(d.specifier.label));assert.notEqual(d.specifier.wordId,specifier.wordId);
 assert.ok(!x.wordIds.includes(d.specifier.wordId),'Propietat distractora indexada com a objectiu');
 if(anchor){assert.deepEqual(x.contrast.anchor,anchor);assert.equal(action.label,'TOCAR');assert.equal(x.precisionType,'posicio');}
 else assert.equal(x.contrast.anchor,null);
 if(x.contrastSubtype==='contingut')assert.equal(action.label,'TOCAR');
 assert.ok(['esquerra','dreta'].includes(x.contrast.targetSide));assert.ok(x.contrast.evidence.length>80);assert.ok(x.visualDescription.includes(x.contrast.evidence));
 assert.ok(x.visualDescription.includes('dos exemplars'));assert.ok(x.visualDescription.includes('una sola acció'));
 assert.ok(readable.includes(`**${at} ·`));assert.ok(readable.includes(x.visualDescription));assert.ok(readable.includes(x.wordIds.join(' · ')));
 assert.ok(!previous.some(old=>old.wordIds.join('|')===x.wordIds.join('|')),'Tupla N4–N6 repetida');
 const inherited=previous.filter(old=>old.wordIds.join('|')===x.wordIds.slice(0,3).join('|'));
 if(inherited.length)inheritedCores.push({id:at,from:inherited.map(v=>v.id),newRequirement:'Dos candidats simultanis de la mateixa classe; qualificador contrastiu i contacte exclusiu amb el seleccionat.'});
 const list=pairs.get(x.pairId)||[];list.push(x);pairs.set(x.pairId,list);
 const g=distribution[x.group]||={total:0,types:{},subtypes:{},actions:{},agents:{},targetSides:{}};
 g.total++;
 for(const [field,key] of [['types',x.precisionType],['subtypes',x.contrastSubtype],['actions',action.label],['agents',agent.label],['targetSides',x.contrast.targetSide]])g[field][key]=(g[field][key]||0)+1;
}
assert.equal(pairs.size,100);
for(const list of pairs.values()){
 assert.equal(list.length,2);const [a,b]=list;
 assert.equal(a.counterpartId,b.id);assert.equal(b.counterpartId,a.id);
 for(const r of ['agent','action','patient','anchor'])assert.deepEqual(roleValue(a,r),roleValue(b,r));
 assert.equal(a.contrast.evidence,b.contrast.evidence);assert.equal(a.contrastSubtype,b.contrastSubtype);
 assert.equal(a.contrast.distractor.specifier.wordId,roleValue(b,'specifier').wordId);
 assert.equal(b.contrast.distractor.specifier.wordId,roleValue(a,'specifier').wordId);
 assert.notEqual(a.contrast.targetSide,b.contrast.targetSide);
}
for(const g of Object.values(distribution)){
 assert.equal(g.total,100);assert.deepEqual(g.types,p.distributionPerGroup);assert.deepEqual(g.subtypes,p.subdistributionPerGroup);
 assert.deepEqual(g.targetSides,{esquerra:50,dreta:50});
}
// Les còpies locals preexistents també han de conservar el contingut del catàleg.
for(const a of c.assets){
 const path='dist/'+a.src;assert.ok(fs.existsSync(path),'Còpia local absent: '+a.id);
 if(a.displaySha256){assert.equal(hash(fs.readFileSync(path)),a.displaySha256,'Imatge alterada: '+a.id);displayHashesChecked++;}
 else legacyWithoutHash++;
}
const report={status:'valid',checkedOn:'2026-11-12',scope:'Planificació local: referències exactes, parelles inverses, distribució, signatures i preservació. Sense generació ni validació perceptiva o clínica.',baseline:p.baseline,catalogUnchanged:true,protectedTrackedPathsUnchanged:true,catalogWordsPreserved:861,catalogAssetsPreserved:3469,localDisplayHashesChecked:displayHashesChecked,legacyAssetsWithoutDisplayHash:legacyWithoutHash,totalItems:200,uniqueIds:200,uniqueTitles:200,uniqueLabelTuples:200,uniqueCompositionKeys:200,contrastPairs:100,candidatesPerScene:2,validatedTargetLabelOccurrences:labelOccurrences,validatedDistractorOccurrences:contextOccurrences,distinctTargetWordIds:new Set(p.items.flatMap(x=>x.wordIds)).size,distinctAllWordIds:new Set(p.items.flatMap(x=>[...x.wordIds,x.contrast.distractor.specifier.wordId])).size,exactN4N5N6TupleDuplicates:0,exactExistingCatalogTargetTupleDuplicates:p.items.filter(x=>c.assets.some(a=>(a.targetWordIds||a.tags||[]).join('|')===x.wordIds.join('|'))).map(x=>x.id),distribution,inheritedN4CoresWithExplicitN7Discrimination:inheritedCores,semanticReview:{reviewedBriefs:200,reviewedPairDesigns:100,method:'Lectura de les 50 famílies, comprovació dels dos qualificadors i revisió del canvi humà/animal. Selecció per contacte, dues instàncies de la mateixa classe i una sola diferència rellevant.',decisions:p.reviewDecisions,limits:['No hi ha imatges N7 per revisar: la presència, la llegibilitat i l’absència de pistes alternatives són requisits futurs, no resultats demostrats.','Les parelles inverses comparteixen intencionadament escena; zero tuples duplicades no garanteix diferenciació perceptiva.','50 famílies de contrast, amb homòlegs humans i animals: no són 200 situacions independents.','No s’ha verificat de nou el desplegament remot ni es pretén validació clínica.']},authorization:p.authorization};
assert.equal(report.exactExistingCatalogTargetTupleDuplicates.length,0);
report.catalogUnchanged=JSON.stringify(current)===JSON.stringify(c);
delete report.protectedTrackedPathsUnchanged;
report.baselineProductionPreserved=true;
report.currentCatalogVersion=current.version;
report.currentCatalogAssets=current.assets.length;
report.planSha256=hash(fs.readFileSync('production/n7-plan.json'));
report.readablePlanSha256=hash(fs.readFileSync('production/n7-plan.md'));
fs.writeFileSync('production/n7-plan-validation.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({...report,semanticReview:'Vegeu l’informe complet',inheritedN4CoresWithExplicitN7Discrimination:inheritedCores.length},null,2));

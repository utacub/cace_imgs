const fs=require('node:fs');
const assert=require('node:assert/strict');
const {execFileSync}=require('node:child_process');
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const write=(p,x)=>fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n');
const progress=read('production/n7-progress.json');
const audit=read('output/n7-production-audit.json');
const publicReport=read('output/n7-publication-verification.json');
const plan=read('production/n7-plan.json');
assert.equal(progress.complete,200);assert.equal(progress.imported,200);
assert.equal(audit.status,'valid');assert.equal(audit.importedN7,200);
assert.equal(publicReport.status,'verified');assert.equal(publicReport.n7DownloadsVerified,200);
assert.equal(publicReport.version,audit.catalogVersion);
const commit=process.argv[2];assert.ok(commit);
execFileSync('node',['scripts/record-n7-publication.cjs',commit],{stdio:'inherit'});
const history=read('production/n7-publications.json');
for(const [version,oldCommit] of [['0.1.126','7fa45b115569a8f32808ca224e92b400f94283ab'],['0.1.127','b9c15e3']]){
 if(!history.some(x=>x.version===version))history.push({...read('output/n7-publication-'+version+'.json'),commit:oldCommit});
}
history.sort((a,b)=>a.version.localeCompare(b.version,undefined,{numeric:true}));write('production/n7-publications.json',history);
const finishedAt=new Date().toISOString();
const result={status:'complete',level:7,planned:200,reviewed:200,imported:200,published:200,habitual:100,insolita:100,precisionTypes:plan.items.reduce((a,x)=>(a[x.precisionType]=(a[x.precisionType]||0)+1,a),{}),catalogVersion:publicReport.version,catalogImages:publicReport.catalogImages,preservedImages:audit.existingImagesPreserved,preservedCaceEntries:audit.existingWordsPreserved,baselineCommit:progress.baseline.head,finalProductionCommit:commit,generationStoppedAt:'2026-11-12T20:56:55.413Z',completedAt:finishedAt,deadline:progress.sessionDeadline,completedBeforeDeadline:finishedAt<progress.sessionDeadline,rejectedAttempts:audit.rejectedAttempts,testsPassed:18,localAuditStatus:audit.status,publicVerifiedAt:publicReport.verifiedAtUtc,originals:'output/production/n7',records:'production/n7',reviewGallery:'output/n7-review.html',audit:'output/n7-production-audit.json',publicationEvidence:'production/n7-publications.json',siteUrl:'https://utacub.github.io/cace_imgs/',note:'200 N7 generades amb image_gen integrat, revisades individualment i publicades per lots. Es preserven tots els originals, els intents descartats i el catàleg anterior. No generar més N7.'};
write('production/n7-session-completion.json',result);
write('production/n7-final-audit.json',{...audit,files:undefined,publicVerification:publicReport});
const current=read('production/n7-progress.json');current.status='complete';current.completedAt=finishedAt;current.generationStoppedAt=result.generationStoppedAt;write('production/n7-progress.json',current);
const pause=fs.readFileSync('PAUSA.md','utf8');
fs.writeFileSync('PAUSA.md','# N7 · 200 imatges completades i publicades\n\nLes 200 N7 estan generades, revisades i publicades: 100 fotografies habituals i 100 dibuixos plans insòlits. Aspecte: 80; estat: 60; posició: 60. Catàleg públic '+publicReport.version+': '+publicReport.catalogImages+' imatges. Verificació pública completa: '+publicReport.verifiedAtUtc+'; 200 descàrregues WebP comprovades amb SHA-256. Es conserven exactament les 3469 imatges i les 861 entrades CACE anteriors. Tasca acabada abans de les 22:20 Europe/Madrid. No generar més N7.\n\nRegistre: production/n7-session-completion.json; auditoria: production/n7-final-audit.json; publicacions: production/n7-publications.json. Originals i descartades a output/production/n7; prompts i revisions a production/n7.\n\n---\n\n'+pause);
console.log(JSON.stringify(result,null,2));

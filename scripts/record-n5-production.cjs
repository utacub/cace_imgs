const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const plan=JSON.parse(fs.readFileSync('production/n5-plan.json','utf8'));
const [mode,id,...args]=process.argv.slice(2);
const prior=fs.existsSync('production/n5-progress.json')?JSON.parse(fs.readFileSync('production/n5-progress.json','utf8')):{};
if(mode==='prepare' || mode==='retry') {
 if(prior.status!=='active') throw Error('Production session is not active.');
 if(prior.generationCutoff && Date.now()>=Date.parse(prior.generationCutoff)) throw Error('Generation cutoff reached; reserve remaining time for publication.');
}
const item=plan.items.find(x=>x.id===id);
if(!item) throw Error('Unknown construction');
fs.mkdirSync('production/n5',{recursive:true});
const recordPath=`production/n5/${id}.json`;
if(mode==='prepare'){
 const prompt=args[0];
 if(!prompt) throw Error('Prompt required');
 if(fs.existsSync(recordPath)) {
  const existing=JSON.parse(fs.readFileSync(recordPath,'utf8'));
  if(existing.reviewed || existing.prompt!==prompt)throw Error('Record already exists with a different prompt or accepted image');
 }else fs.writeFileSync(recordPath,JSON.stringify({constructionId:id,file:`output/production/n5/${id}/image.png`,prompt,kind:item.kind,variant:item.variant,reviewed:false,status:'pending-generation',construction:item,created:new Date().toISOString()},null,2)+'\n');
}else if(mode==='retry'){
 const [source,reason,prompt]=args;
 const rec=JSON.parse(fs.readFileSync(recordPath,'utf8'));
 if(rec.reviewed)throw Error('Already accepted');
 if(!reason||!prompt)throw Error('Reason and revised prompt required');
 rec.rejectedAttempts ||= [];
 const file=`output/production/n5/${id}/rejected-${String(rec.rejectedAttempts.length+1).padStart(2,'0')}.png`;
 fs.mkdirSync(path.dirname(file),{recursive:true});
 fs.copyFileSync(source,file,fs.constants.COPYFILE_EXCL);
 rec.rejectedAttempts.push({file,reason,prompt:rec.prompt,rejectedAt:new Date().toISOString()});
 Object.assign(rec,{prompt,status:'pending-generation'});
 fs.writeFileSync(recordPath,JSON.stringify(rec,null,2)+'\n');
}else if(mode==='accept'){
 const [source,review]=args;
 const rec=JSON.parse(fs.readFileSync(recordPath,'utf8'));
 if(rec.reviewed) throw Error('Already reviewed');
 if(!review) throw Error('Visual review required');
 if(fs.existsSync(rec.file)) throw Error('Output already exists');
 const bytes=fs.readFileSync(source);
 if(bytes.subarray(0,8).toString('hex')!=='89504e470d0a1a0a')throw Error('Expected original PNG');
 fs.mkdirSync(path.dirname(rec.file),{recursive:true});
 fs.copyFileSync(source,rec.file,fs.constants.COPYFILE_EXCL);
 Object.assign(rec,{reviewed:true,status:'accepted',review,alt:{ca:item.title.ca+'.',es:item.title.es+'.'},originalSha256:crypto.createHash('sha256').update(bytes).digest('hex'),width:bytes.readUInt32BE(16),height:bytes.readUInt32BE(20),generatedWith:'built-in image_gen',reviewedAt:new Date().toISOString()});
 fs.writeFileSync(recordPath,JSON.stringify(rec,null,2)+'\n');
}else throw Error('Mode must be prepare, retry or accept');
const records=fs.readdirSync('production/n5').filter(f=>/^n5-\d{3}\.json$/.test(f)).map(f=>JSON.parse(fs.readFileSync(`production/n5/${f}`,'utf8')));
const done=new Set(records.filter(r=>r.reviewed&&r.status==='accepted').map(r=>r.constructionId));
const progress={...prior,level:5,status:done.size===plan.items.length?'complete':'active',planned:plan.items.length,complete:done.size,pending:plan.items.filter(x=>!done.has(x.id)).map(x=>x.id),completedHabitual:plan.items.filter(x=>x.group==='habitual'&&done.has(x.id)).length,completedInsolita:plan.items.filter(x=>x.group==='insolita'&&done.has(x.id)).length,updated:new Date().toISOString()};
fs.writeFileSync('production/n5-progress.json',JSON.stringify(progress,null,2)+'\n');
const escape=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const accepted=records.filter(r=>done.has(r.constructionId)).sort((a,b)=>a.construction.number-b.construction.number);
fs.writeFileSync('output/n5-review.html','<!doctype html><html lang="ca"><meta charset="utf-8"><title>N5 · Revisió local</title><style>body{font:18px system-ui;margin:2rem;background:#f0f2f4}main{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem}article{background:white;padding:1rem;border-radius:10px}img{width:100%;height:280px;object-fit:contain}p{font-size:14px}</style><h1>N5 · Relacions · '+done.size+'/200</h1><p>Generació local revisada. Sense publicació. '+progress.updated+'</p><main>'+accepted.map(r=>'<article><a href="production/n5/'+r.constructionId+'/image.png"><img src="production/n5/'+r.constructionId+'/image.png" alt="'+escape(r.alt.ca)+'"></a><h2>'+escape(r.constructionId)+'</h2><strong>'+escape(r.construction.labels.join(' · '))+'</strong><p>'+escape(r.review)+'</p></article>').join('')+'</main></html>');
console.log(JSON.stringify({id,mode,complete:done.size}));

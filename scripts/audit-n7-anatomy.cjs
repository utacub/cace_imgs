const fs=require('node:fs'),assert=require('node:assert/strict'),crypto=require('node:crypto'),{execFileSync}=require('node:child_process');
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')),sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const review=read('production/n7-anatomy-review.json'),data=read('src/catalog-data.json');
const before=JSON.parse(execFileSync('git',['show',review.baselineCommit+':src/catalog-data.json'],{maxBuffer:64*1024*1024}));
assert.deepEqual(data.words,before.words);assert.deepEqual(data.collections,before.collections);assert.deepEqual(data.levels,before.levels);assert.deepEqual(data.categories,before.categories);assert.equal(data.assets.length,before.assets.length);
const allowed=new Set(review.replacements),replaced=[];let untouched=0,drawings=0;
for(const old of before.assets){
 const current=data.assets.find(x=>x.id===old.id);assert.ok(current);
 if(!allowed.has(old.constructionId)){
  assert.deepEqual(current,old);assert.equal(sha('dist/'+current.src),old.displaySha256);untouched++;
  if(old.constructionId?.startsWith('n7-')&&old.kind==='drawing')drawings++;
 }else{
  assert.equal(old.kind,'photo');const j=read('production/n7-anatomy/'+old.constructionId+'.json'),r=read('production/n7/'+old.constructionId+'.json');
  assert.ok(['accepted','imported'].includes(j.status));assert.ok(j.review&&j.prompt);assert.notEqual(current.src,old.src);
  assert.deepEqual({...current,src:old.src,originalSha256:old.originalSha256,displaySha256:old.displaySha256},old);
  assert.equal(sha(r.file),current.originalSha256);assert.equal(sha('dist/'+current.src),current.displaySha256);
  assert.equal(sha(r.revisions.at(-1).previousOriginal),old.originalSha256);assert.equal(sha(r.revisions.at(-1).previousWebP),old.displaySha256);
  replaced.push({id:old.constructionId,src:current.src,beforeSha256:old.originalSha256,afterSha256:current.originalSha256,displaySha256:current.displaySha256,review:j.review});
 }
}
assert.equal(drawings,100);assert.equal(replaced.length,24);assert.equal(untouched,3645);
const report={status:'valid',checkedAt:new Date().toISOString(),version:data.version,reviewedPhotos:100,replacedPhotos:24,unchangedPhotos:76,unchangedN7Drawings:drawings,allOtherAssetsUnchanged:untouched,caceEntriesPreserved:data.words.length,totalImages:data.assets.length,baselineCommit:review.baselineCommit,replacements:replaced};
fs.writeFileSync('production/n7-anatomy-audit.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({...report,replacements:undefined},null,2));

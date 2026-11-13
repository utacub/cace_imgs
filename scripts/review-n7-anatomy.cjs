const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
for(const d of JSON.parse(fs.readFileSync(process.argv[2],'utf8'))){
 const f='production/n7-anatomy/'+d.id+'.json',j=JSON.parse(fs.readFileSync(f));
 const dir='output/n7-anatomy-review/'+d.id;fs.mkdirSync(dir,{recursive:true});
 if(d.action==='retry'){
  j.rejectedAttempts||=[];const dest=dir+'/rejected-'+(j.rejectedAttempts.length+1)+'.png';
  fs.copyFileSync(d.source,dest,fs.constants.COPYFILE_EXCL);j.rejectedAttempts.push({file:dest,reason:d.review,prompt:j.prompt});
  j.prompt+='\nCORRECTION: '+d.correction;j.status='pending';
 }else{
  const dest=dir+'/replacement.png';fs.copyFileSync(d.source,dest,fs.constants.COPYFILE_EXCL);
  const b=fs.readFileSync(dest);Object.assign(j,{status:'accepted',file:dest,review:d.review,reviewedAt:new Date().toISOString(),originalSha256:crypto.createHash('sha256').update(b).digest('hex'),width:b.readUInt32BE(16),height:b.readUInt32BE(20),generatedWith:'built-in image_gen'});
 }
 fs.writeFileSync(f,JSON.stringify(j,null,2)+'\n');console.log(d.id+': '+j.status);
}

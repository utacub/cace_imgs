const fs=require('node:fs');
const c=JSON.parse(fs.readFileSync('src/catalog-data.json','utf8'));
const p=JSON.parse(fs.readFileSync('production/n5-progress.json','utf8'));
const rows=c.assets.filter(x=>x.constructionId?.startsWith('n5-'));
const h=rows.filter(x=>x.kind==='photo').length,d=rows.length-h;
let s=fs.readFileSync('README.md','utf8');
s=s.replace(/La versió [\d.]+ conté \*\*\d+ imatges\*\*/,`La versió ${c.version} conté **${c.assets.length} imatges**`)
 .replace(/\*\*\d+ construccions N5\*\*/,`**${rows.length} construccions N5**`)
 .replace(/El N5 incorpora \*\*\d+ de les 200 construccions proposades\*\*: \d+ fotografies habituals i \d+ dibuixos insòlits\./,`El N5 incorpora **${rows.length} de les 200 construccions proposades**: ${h} fotografies habituals i ${d} dibuixos insòlits.`)
 .replace(/Les \d+ restants continuen pendents\. La represa de producció i publicació està autoritzada fins a les 18:30 Europe\/Madrid de l’11\/11\/2026\./,rows.length===200?'El pla N5 està complet.':`Les ${200-rows.length} restants s’estan completant sota la nova autorització de l’usuari.`)
 .replace(/Les \d+ restants s’estan completant sota la nova autorització de l’usuari\./,rows.length===200?'El pla N5 està complet.':`Les ${200-rows.length} restants s’estan completant sota la nova autorització de l’usuari.`)
 .replace(/`bank\/`: les \d+ imatges/,`\`bank/\`: les ${c.assets.length} imatges`);
fs.writeFileSync('README.md',s);
const g=JSON.parse(fs.readFileSync('production/progress.json','utf8'));
g.catalogVersion=c.version;g.totalImages=c.assets.length;
fs.writeFileSync('production/progress.json',JSON.stringify(g,null,2)+'\n');
const session=JSON.parse(fs.readFileSync('production/n5-session-completion.json','utf8'));
Object.assign(session,{generated:p.complete-session.initialPublished,imported:rows.length-session.initialPublished,totalN5:rows.length,catalogVersion:c.version,status:rows.length===200?'awaiting-public-verification':'active',updated:new Date().toISOString()});
fs.writeFileSync('production/n5-session-completion.json',JSON.stringify(session,null,2)+'\n');
console.log(JSON.stringify({version:c.version,total:c.assets.length,n5:rows.length,habitual:h,insolita:d}));

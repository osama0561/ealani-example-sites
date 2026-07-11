const fs=require('fs');
const paths=['index.html','filter-car-services/index.html','touch-levantine-salon/index.html','black-stores/index.html'];
let ok=true;
for(const p of paths){
  const s=fs.readFileSync(p,'utf8');
  if(!s.includes('<!doctype html>') && !s.includes('<!DOCTYPE html>')) { console.error('missing doctype',p); ok=false; }
  if(!s.includes('غير رسمي') && !s.includes('غير رسمية')) { console.error('missing unofficial label',p); ok=false; }
  if(s.includes('عميلنا') || s.includes('عملاؤنا') || s.includes('client')) { console.error('forbidden client claim',p); ok=false; }
}
process.exit(ok?0:1);

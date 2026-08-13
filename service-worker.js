const CACHE='globologia-hq-v6';
const REMOVE=['GLOBOLOGIA 1000 — Presentation (4:3)','Globologia Banner Logos','🎈 Globología Visual System','nina lorenita logo with cloud'];
const THUMBS={
  'GLOBOLOGIA 4000A':'https://design.canva.ai/380Qo6s8GLqbMcv',
  'globologia spreads':'https://design.canva.ai/luT-BaAVXI7gUJ1',
  'globologia 3000 spreads':'https://design.canva.ai/r9A0EVhGPJVZV3o',
  'globologia 3000.pdf':'https://design.canva.ai/Zz0Iom6W7pLN14p',
  'globologia 3000 COPY/TEXT only':'https://design.canva.ai/Z848_QoEO9kN4tq',
  'GLOBOLOGIA 2000':'https://design.canva.ai/CfJQnSv_XCQtXB-',
  'GLOBOLOGÍA 1000':'https://design.canva.ai/d1XC5T3GgtA7PbJ',
  'Globologia 200':'https://design.canva.ai/UsAa3UTcBzKtYmN',
  'GLOBOLOGIA 1000 — 11 x 8.5 in':'https://design.canva.ai/TUqYvGsFoGQFk_l',
  'globologia_copyright_page.pdf':'https://design.canva.ai/KsFxAdXs_xBtYCv',
  'globologia_copyright_page_compact.pdf':'https://design.canva.ai/6cg82KMQWTq1lO3',
  "logo's de globologia":'https://design.canva.ai/14JeNuJLEwkXPbk',
  'Lorenita AKA Nina':'https://design.canva.ai/hQ3S9Mkj1qhoRK3',
  'portadas y mockups para globologia':'https://design.canva.ai/eU7fon_VqkppTln',
  'ADVERTISEMENTS FOR SOCIAL MEDIA FOR GLOBOLOGIA':'https://design.canva.ai/4juX1MCusSc__hb',
  'GLOBOLOGIA SOCIAL MEDIA ASSETS':'https://design.canva.ai/X91fwsFzg_Y1b_x'
};
const INJECT=`<style>
.canva-preview{padding:0!important;background:#fff!important;min-height:0!important;overflow:hidden!important;display:block!important}
.canva-preview img,.remote-asset .file-preview img{display:block!important;width:100%!important;height:auto!important;max-height:480px!important;object-fit:contain!important;background:#fff!important;padding:8px!important}
.remote-asset .file-preview{padding:0!important;background:#fff!important;min-height:0!important}
</style><script>(function(){
const banned=${JSON.stringify(['GLOBOLOGIA 1000 — Presentation (4:3)','Globologia Banner Logos','🎈 Globología Visual System','nina lorenita logo with cloud'])};
const thumbs=${JSON.stringify({
  'GLOBOLOGIA 4000A':'https://design.canva.ai/380Qo6s8GLqbMcv',
  'globologia spreads':'https://design.canva.ai/luT-BaAVXI7gUJ1',
  'globologia 3000 spreads':'https://design.canva.ai/r9A0EVhGPJVZV3o',
  'globologia 3000.pdf':'https://design.canva.ai/Zz0Iom6W7pLN14p',
  'globologia 3000 COPY/TEXT only':'https://design.canva.ai/Z848_QoEO9kN4tq',
  'GLOBOLOGIA 2000':'https://design.canva.ai/CfJQnSv_XCQtXB-',
  'GLOBOLOGÍA 1000':'https://design.canva.ai/d1XC5T3GgtA7PbJ',
  'Globologia 200':'https://design.canva.ai/UsAa3UTcBzKtYmN',
  'GLOBOLOGIA 1000 — 11 x 8.5 in':'https://design.canva.ai/TUqYvGsFoGQFk_l',
  'globologia_copyright_page.pdf':'https://design.canva.ai/KsFxAdXs_xBtYCv',
  'globologia_copyright_page_compact.pdf':'https://design.canva.ai/6cg82KMQWTq1lO3',
  "logo's de globologia":'https://design.canva.ai/14JeNuJLEwkXPbk',
  'Lorenita AKA Nina':'https://design.canva.ai/hQ3S9Mkj1qhoRK3',
  'portadas y mockups para globologia':'https://design.canva.ai/eU7fon_VqkppTln',
  'ADVERTISEMENTS FOR SOCIAL MEDIA FOR GLOBOLOGIA':'https://design.canva.ai/4juX1MCusSc__hb',
  'GLOBOLOGIA SOCIAL MEDIA ASSETS':'https://design.canva.ai/X91fwsFzg_Y1b_x'
})};
function clean(){try{
  if(typeof CANVA_ASSETS!=='undefined'){for(let i=CANVA_ASSETS.length-1;i>=0;i--)if(banned.includes(CANVA_ASSETS[i].title))CANVA_ASSETS.splice(i,1)}
  document.querySelectorAll('.canva-asset').forEach(c=>{const t=c.querySelector('.asset-copy strong')?.textContent?.trim();if(banned.includes(t)){c.remove();return;}const p=c.querySelector('.canva-preview');const src=thumbs[t];if(p&&src&&!p.querySelector('img'))p.innerHTML='<img src="'+src+'" alt="'+String(t||'Canva preview').replace(/"/g,'&quot;')+'">';});
  document.querySelectorAll('.remote-asset .file-preview[href]').forEach(a=>{const u=a.getAttribute('href')||'';if(/\.(png|jpe?g|webp|gif|svg|avif)(\?|$)/i.test(u)&&!a.querySelector('img'))a.innerHTML='<img src="'+u+'" alt="Preview">';});
}catch(e){}}
addEventListener('load',()=>{clean();setTimeout(clean,400);setTimeout(clean,1200)});new MutationObserver(clean).observe(document.documentElement,{childList:true,subtree:true});})();<\/script>`;
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())await caches.delete(k);await self.clients.claim()})()));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.hostname==='api.github.com'||u.hostname==='raw.githubusercontent.com'||u.hostname==='design.canva.ai')return;if(e.request.mode==='navigate')e.respondWith(fetch(e.request,{cache:'no-store'}).then(async r=>{let t=await r.text();t=t.replace('</body>',INJECT+'</body>');return new Response(t,{status:r.status,statusText:r.statusText,headers:{'content-type':'text/html; charset=utf-8'}})}).catch(()=>caches.match('./index.html')))});
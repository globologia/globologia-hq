const CACHE='globologia-hq-v7';
const CORE=['./','./index.html','./manifest.webmanifest','./icon.svg'];

self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).catch(()=>{}));
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);

  // Asset discovery and real uploaded files should always come from the network.
  if(url.hostname==='api.github.com'||url.hostname==='raw.githubusercontent.com')return;

  if(request.mode==='navigate'){
    event.respondWith(
      fetch(request,{cache:'no-store'}).then(response=>{
        const copy=response.clone();
        caches.open(CACHE).then(cache=>cache.put('./index.html',copy)).catch(()=>{});
        return response;
      }).catch(()=>caches.match('./index.html').then(cached=>cached||Response.error()))
    );
    return;
  }

  if(url.origin===self.location.origin){
    event.respondWith(caches.match(request).then(cached=>cached||fetch(request)));
  }
});

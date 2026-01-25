import 'piccolore';
import { n as decodeKey } from './chunks/astro/server_CqNpwnCI.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_C8rMMyMJ.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/yoan/Desktop/anubisreal/","cacheDir":"file:///Users/yoan/Desktop/anubisreal/node_modules/.astro/","outDir":"file:///Users/yoan/Desktop/anubisreal/dist/","srcDir":"file:///Users/yoan/Desktop/anubisreal/src/","publicDir":"file:///Users/yoan/Desktop/anubisreal/public/","buildClientDir":"file:///Users/yoan/Desktop/anubisreal/dist/client/","buildServerDir":"file:///Users/yoan/Desktop/anubisreal/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/save-data","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/save-data\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"save-data","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/save-data.ts","pathname":"/api/save-data","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-cid-3nssi2tu]{margin:0;padding:0;box-sizing:border-box}body{font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif;background:#0b0c0e;color:#fff;min-height:100vh;padding:20px}.container[data-astro-cid-3nssi2tu]{max-width:1200px;margin:0 auto}header[data-astro-cid-3nssi2tu]{display:flex;justify-content:space-between;align-items:center;margin-bottom:40px;padding:30px;background:#ffffff0d;border:1px solid rgba(255,255,255,.1);border-radius:16px}h1[data-astro-cid-3nssi2tu]{font-size:32px;font-weight:700}h2[data-astro-cid-3nssi2tu]{font-size:18px;font-weight:600;margin-bottom:20px;color:#ffffffe6}.section[data-astro-cid-3nssi2tu]{margin-bottom:40px;padding:30px;background:#ffffff08;border:1px solid rgba(255,255,255,.08);border-radius:16px}#socialCards[data-astro-cid-3nssi2tu]{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:20px}.card[data-astro-cid-3nssi2tu]{background:#ffffff14;border:1.5px solid rgba(255,255,255,.12);border-radius:16px;padding:20px;transition:all .3s ease}.card[data-astro-cid-3nssi2tu]:hover{border-color:#fff3;box-shadow:0 8px 24px #0000004d}.card-header[data-astro-cid-3nssi2tu]{margin-bottom:18px;padding-bottom:12px;border-bottom:1.5px solid rgba(255,255,255,.1)}.card-header[data-astro-cid-3nssi2tu] h3[data-astro-cid-3nssi2tu]{font-size:15px;color:#47c675;font-weight:600}.form-group[data-astro-cid-3nssi2tu]{margin-bottom:16px}.form-row[data-astro-cid-3nssi2tu]{display:grid;grid-template-columns:1fr 1fr;gap:12px}label[data-astro-cid-3nssi2tu]{display:block;font-size:10px;font-weight:600;color:#ffffff80;margin-bottom:6px;text-transform:uppercase;letter-spacing:.8px}input[data-astro-cid-3nssi2tu][type=text],input[data-astro-cid-3nssi2tu]{width:100%;padding:14px 16px;background:#141419cc!important;border:2px solid rgba(255,255,255,.15)!important;border-radius:10px!important;color:#fff!important;font-size:14px!important;font-family:Inter,sans-serif!important;transition:all .3s ease}input[data-astro-cid-3nssi2tu]:focus{outline:none!important;border-color:#47c675!important;background:#141419e6!important;box-shadow:0 0 0 3px #47c67533!important}input[data-astro-cid-3nssi2tu]::placeholder{color:#ffffff4d!important}input[data-astro-cid-3nssi2tu][type=file]{display:none}label[data-astro-cid-3nssi2tu][for^=file-]:hover{background:#47c6754d!important}.save-btn[data-astro-cid-3nssi2tu]{padding:14px 32px;background:#47c675;color:#0b0c0e;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;transition:all .3s ease}.save-btn[data-astro-cid-3nssi2tu]:hover{background:#3ab563;transform:translateY(-2px)}.add-btn[data-astro-cid-3nssi2tu]{padding:12px 24px;background:#ffffff14;color:#fff;border:1px solid rgba(255,255,255,.2);border-radius:10px;font-size:14px;font-weight:600;cursor:pointer}.add-btn[data-astro-cid-3nssi2tu]:hover{background:#ffffff1f}#videosList[data-astro-cid-3nssi2tu]{display:flex;flex-direction:column;gap:12px;margin-bottom:20px}.video-item[data-astro-cid-3nssi2tu]{display:flex;gap:12px;align-items:center;padding:16px;background:#ffffff0d;border:2px solid rgba(255,255,255,.1);border-radius:12px}.video-item[data-astro-cid-3nssi2tu] input[data-astro-cid-3nssi2tu]{flex:1}.delete-btn[data-astro-cid-3nssi2tu]{width:40px;height:40px;background:#ff3b3033;color:#ff3b30;border:2px solid rgba(255,59,48,.3);border-radius:10px;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center}.delete-btn[data-astro-cid-3nssi2tu]:hover{background:#ff3b304d}.notification[data-astro-cid-3nssi2tu]{position:fixed;bottom:30px;right:30px;padding:16px 28px;background:#47c675f2;color:#fff;border-radius:12px;font-size:14px;font-weight:600;opacity:0;transform:translateY(20px);transition:all .4s ease;pointer-events:none}.notification[data-astro-cid-3nssi2tu].show{opacity:1;transform:translateY(0)}\n"}],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.C1yh3ZcE.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/yoan/Desktop/anubisreal/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["/Users/yoan/Desktop/anubisreal/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/save-data@_@ts":"pages/api/save-data.astro.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CnVx0vtY.mjs","/Users/yoan/Desktop/anubisreal/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/yoan/Desktop/anubisreal/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DuPVYW0P.mjs","/Users/yoan/Desktop/anubisreal/src/pages/dashboard.astro?astro&type=script&index=0&lang.ts":"_astro/dashboard.astro_astro_type_script_index_0_lang.OHC48lKY.js","/Users/yoan/Desktop/anubisreal/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.C-gJEkG4.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/yoan/Desktop/anubisreal/src/pages/index.astro?astro&type=script&index=0&lang.ts","async function y(){let e;const r=localStorage.getItem(\"anubisreal-data\");if(r)e=JSON.parse(r),console.log(\"Datos cargados desde localStorage\");else try{e=await(await fetch(\"/data.json\")).json()}catch{console.log(\"No se pudo cargar data.json, usando datos por defecto\");return}if(e.socialCards){const t=document.querySelectorAll(\".social-card\");e.socialCards.forEach((o,a)=>{if(t[a]){const s=t[a],u=s.querySelector(\".username\"),f=s.querySelector(\".stats\"),m=s.querySelector(\".visit-button\"),i=s.querySelector(\".profile-pic\");if(u&&(u.textContent=o.username),f){const c=f.querySelectorAll(\"span\");c[0]&&(c[0].innerHTML=`<strong>${o.followers}</strong> Seguidores`),c[1]&&(c[1].innerHTML=`<strong>${o.following}</strong> Siguiendo`)}m&&o.url&&(m.href=o.url),i&&o.profileImage&&(i.style.backgroundImage=`url(${o.profileImage})`,i.style.backgroundSize=\"cover\",i.style.backgroundPosition=\"center\")}})}if(e.spotify&&e.spotify.embedUrl){const t=document.querySelector(\".spotify-container iframe\");t&&(t.src=e.spotify.embedUrl)}if(e.videos){const t=document.querySelector('[data-tab=\"videos\"] .videos-container');t&&(t.innerHTML=e.videos.map(o=>`\n\t\t\t\t\t<div class=\"video-item\">\n\t\t\t\t\t\t<iframe \n\t\t\t\t\t\t\tsrc=\"${o.url}\" \n\t\t\t\t\t\t\ttitle=\"YouTube video player\" \n\t\t\t\t\t\t\tframeborder=\"0\" \n\t\t\t\t\t\t\tallow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" \n\t\t\t\t\t\t\treferrerpolicy=\"strict-origin-when-cross-origin\" \n\t\t\t\t\t\t\tallowfullscreen>\n\t\t\t\t\t\t</iframe>\n\t\t\t\t\t</div>\n\t\t\t\t`).join(\"\"))}}y();window.addEventListener(\"storage\",e=>{e.key===\"anubisreal-data\"&&y()});document.querySelectorAll(\".nav-item\").forEach(e=>{e.addEventListener(\"click\",r=>{r.preventDefault(),document.querySelectorAll(\".nav-item\").forEach(a=>a.classList.remove(\"active\")),e.classList.add(\"active\");const t=e.textContent.trim().toLowerCase().replace(\" \",\"-\");document.querySelectorAll(\".tab-content\").forEach(a=>{a.classList.remove(\"active\")});const o=document.querySelector(`.tab-content[data-tab=\"${t}\"]`);o&&o.classList.add(\"active\")})});const v=\"ontouchstart\"in window||navigator.maxTouchPoints>0;if(v){const e=document.querySelectorAll(\".social-card\");e.forEach(r=>{r.addEventListener(\"click\",t=>{t.target.classList.contains(\"visit-button\")||(t.preventDefault(),t.stopPropagation(),e.forEach(o=>{o!==r&&o.classList.remove(\"active\")}),r.classList.toggle(\"active\"))})}),document.addEventListener(\"click\",r=>{r.target.closest(\".social-card\")||e.forEach(t=>t.classList.remove(\"active\"))})}const l=document.querySelector(\".magic-sphere\"),n=document.querySelector(\".dead\");let d=!1;function p(){if(d)return;d=!0,l.style.opacity=\"1\",n.style.opacity=\"0\";let e=0;const r=setInterval(()=>{if(l.style.backgroundPosition=`-${e*128}px 0`,e++,e>=16){clearInterval(r),l.style.opacity=\"0\",n.style.opacity=\"1\";let t=0;const o=setInterval(()=>{n.style.backgroundPosition=`-${t*128}px 0`,t++,t>=4&&(clearInterval(o),setTimeout(()=>{n.style.opacity=\"0\",d=!1;const a=Math.random()*5e3+5e3;setTimeout(p,a)},100))},150)}},150)}setTimeout(p,500);"]],"assets":["/_astro/index.C1yh3ZcE.css","/Dead.png","/Flame_jet.png","/Magic_sphere.png","/data.json","/favicon.ico","/favicon.svg","/_astro/dashboard.astro_astro_type_script_index_0_lang.OHC48lKY.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"TtQJJHMtecBbjBolsq/84SarYoBGggzAmrxJIdPor0M=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/yoan/Desktop/anubisreal/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };

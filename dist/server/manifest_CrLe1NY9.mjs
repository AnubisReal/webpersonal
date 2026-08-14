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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/yoan/Documents/GitHub/webpersonal/","cacheDir":"file:///Users/yoan/Documents/GitHub/webpersonal/node_modules/.astro/","outDir":"file:///Users/yoan/Documents/GitHub/webpersonal/dist/","srcDir":"file:///Users/yoan/Documents/GitHub/webpersonal/src/","publicDir":"file:///Users/yoan/Documents/GitHub/webpersonal/public/","buildClientDir":"file:///Users/yoan/Documents/GitHub/webpersonal/dist/client/","buildServerDir":"file:///Users/yoan/Documents/GitHub/webpersonal/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-cid-j7pv25f6]{margin:0;padding:0;box-sizing:border-box}body{width:100%;background:#fff;font-family:Space Grotesk,sans-serif;overflow-x:hidden}.site-header[data-astro-cid-j7pv25f6]{position:fixed;top:0;left:0;width:100%;padding:28px 34px;display:flex;align-items:center;justify-content:space-between;z-index:20;mix-blend-mode:difference;color:#fff}.brand[data-astro-cid-j7pv25f6]{color:inherit;font-size:18px;letter-spacing:-.8px;text-decoration:none}.brand[data-astro-cid-j7pv25f6] span[data-astro-cid-j7pv25f6]{opacity:.45}.header-tag[data-astro-cid-j7pv25f6]{font-size:10px;letter-spacing:.18em}.sticky-wrapper[data-astro-cid-j7pv25f6]{height:800vh}.section[data-astro-cid-j7pv25f6]{position:sticky;top:0;width:100%;height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden}.intro-copy[data-astro-cid-j7pv25f6]{position:absolute;top:calc(50% + clamp(54px,8vw,96px));left:50%;transform:translate(-50%);z-index:5;width:min(90vw,680px);text-align:center;transition:opacity .25s ease,transform .25s ease}.eyebrow[data-astro-cid-j7pv25f6]{font-size:10px;letter-spacing:.22em;margin-bottom:8px}.intro-description[data-astro-cid-j7pv25f6]{font-size:clamp(15px,2vw,20px);font-weight:700;letter-spacing:-.04em;color:#5d5d5d}.quick-links[data-astro-cid-j7pv25f6]{position:absolute;left:34px;bottom:28px;display:flex;gap:8px;z-index:10;transition:opacity .25s ease,transform .25s ease}.quick-links[data-astro-cid-j7pv25f6] a[data-astro-cid-j7pv25f6]{display:flex;align-items:center;gap:12px;padding:11px 14px;border:1px solid #dedede;border-radius:999px;color:#0a0a0a;text-decoration:none;font-size:11px;transition:color .2s ease,background .2s ease,border-color .2s ease}.quick-links[data-astro-cid-j7pv25f6] a[data-astro-cid-j7pv25f6]:hover,.quick-links[data-astro-cid-j7pv25f6] a[data-astro-cid-j7pv25f6]:focus-visible{background:#0a0a0a;border-color:#0a0a0a;color:#fff;outline:none}.quick-links[data-astro-cid-j7pv25f6] span[data-astro-cid-j7pv25f6]{color:#777}.social-svg[data-astro-cid-j7pv25f6]{width:400px;height:400px;display:block;-webkit-mask-image:linear-gradient(to bottom,black 20%,transparent 80%);mask-image:linear-gradient(to bottom,black 20%,transparent 80%)}.social-link[data-astro-cid-j7pv25f6]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(-20deg);color:#dcdcdc;z-index:1;opacity:.15;cursor:pointer}#ttLink[data-astro-cid-j7pv25f6]{z-index:1}#igLink[data-astro-cid-j7pv25f6]{z-index:2}.main-text[data-astro-cid-j7pv25f6]{font-size:clamp(48px,10vw,110px);font-weight:700;color:#0a0a0a;letter-spacing:-4px;text-transform:uppercase;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:3;text-decoration:none;cursor:pointer;display:flex;overflow:visible;white-space:nowrap}.main-text[data-astro-cid-j7pv25f6] .char[data-astro-cid-j7pv25f6]{display:inline-block;will-change:transform,opacity,filter}.scroll-indicator[data-astro-cid-j7pv25f6]{position:absolute;bottom:44px;left:50%;transform:translate(-50%);z-index:4}.scroll-indicator[data-astro-cid-j7pv25f6] svg[data-astro-cid-j7pv25f6]{width:22px;height:34px}.scroll-dot[data-astro-cid-j7pv25f6]{animation:scrolldown 1.8s ease infinite}@keyframes scrolldown{0%{transform:translateY(0);opacity:1}80%{transform:translateY(12px);opacity:0}to{transform:translateY(0);opacity:0}}@media(max-width:600px){.site-header[data-astro-cid-j7pv25f6]{padding:22px 20px}.header-tag[data-astro-cid-j7pv25f6]{display:none}.intro-copy[data-astro-cid-j7pv25f6]{top:calc(50% + 66px)}.quick-links[data-astro-cid-j7pv25f6]{left:20px;right:20px;bottom:24px}.quick-links[data-astro-cid-j7pv25f6] a[data-astro-cid-j7pv25f6]{flex:1;justify-content:center;padding:11px 8px}.quick-links[data-astro-cid-j7pv25f6] span[data-astro-cid-j7pv25f6]{display:none}.scroll-indicator[data-astro-cid-j7pv25f6]{bottom:94px}}@media(prefers-reduced-motion:reduce){.scroll-dot[data-astro-cid-j7pv25f6]{animation:none}.quick-links[data-astro-cid-j7pv25f6],.intro-copy[data-astro-cid-j7pv25f6]{transition:none}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/yoan/Documents/GitHub/webpersonal/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CrLe1NY9.mjs","/Users/yoan/Documents/GitHub/webpersonal/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/yoan/Documents/GitHub/webpersonal/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BqmtWKM0.mjs","/Users/yoan/Documents/GitHub/webpersonal/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.zVLs1Zbw.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/data.json","/favicon.ico","/favicon.svg","/_astro/index.astro_astro_type_script_index_0_lang.zVLs1Zbw.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"PMasDug740N7S8z/6Ck4XunLZEouAFuGCLc0ZoDIMLQ=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/yoan/Documents/GitHub/webpersonal/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };

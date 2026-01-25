import { e as createComponent, k as renderHead, l as renderScript, r as renderTemplate } from '../chunks/astro/server_CqNpwnCI.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es" data-astro-cid-3nssi2tu> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Dashboard - AnubisReal</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-3nssi2tu> <div class="container" data-astro-cid-3nssi2tu> <header data-astro-cid-3nssi2tu> <h1 data-astro-cid-3nssi2tu>Dashboard</h1> <button id="saveBtn" class="save-btn" data-astro-cid-3nssi2tu>Guardar Cambios</button> </header> <section class="section" data-astro-cid-3nssi2tu> <h2 data-astro-cid-3nssi2tu>Redes Sociales</h2> <div id="socialCards" data-astro-cid-3nssi2tu></div> </section> <section class="section" data-astro-cid-3nssi2tu> <h2 data-astro-cid-3nssi2tu>Spotify</h2> <div class="form-group" style="display: flex; align-items: center; gap: 12px;" data-astro-cid-3nssi2tu> <label style="min-width: 100px; margin-bottom: 0;" data-astro-cid-3nssi2tu>URL del Embed</label> <input type="text" id="spotifyUrl" placeholder="https://open.spotify.com/embed/..." style="flex: 1; padding: 10px 12px; background: rgba(20, 20, 25, 0.8) !important; border: 1.5px solid rgba(255, 255, 255, 0.2) !important; border-radius: 8px !important; color: #ffffff !important; font-size: 13px !important; font-family: 'Inter', sans-serif !important;" data-astro-cid-3nssi2tu> </div> </section> <section class="section" data-astro-cid-3nssi2tu> <h2 data-astro-cid-3nssi2tu>Videos de YouTube</h2> <div id="videosList" data-astro-cid-3nssi2tu></div> <button id="addVideoBtn" class="add-btn" data-astro-cid-3nssi2tu>+ Agregar Video</button> </section> </div> <div id="notification" class="notification" data-astro-cid-3nssi2tu></div> ${renderScript($$result, "/Users/yoan/Desktop/anubisreal/src/pages/dashboard.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/yoan/Desktop/anubisreal/src/pages/dashboard.astro", void 0);

const $$file = "/Users/yoan/Desktop/anubisreal/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dashboard,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

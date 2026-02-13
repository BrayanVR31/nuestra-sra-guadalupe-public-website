import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_euEs5M2M.mjs';
import { manifest } from './manifest_c2bdazWH.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/contacto.astro.mjs');
const _page3 = () => import('./pages/horarios.astro.mjs');
const _page4 = () => import('./pages/servicios.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.16.6_@types+node@25.0.3_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_0da69b95fe7cb00b4af6bc6eb537e8b9/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/astro@5.16.6_@types+node@25.0.3_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_0da69b95fe7cb00b4af6bc6eb537e8b9/node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/contacto/index.astro", _page2],
    ["src/pages/horarios/index.astro", _page3],
    ["src/pages/servicios/index.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f32b5eb8-f63c-4c30-ad4f-b21946b19d8b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };

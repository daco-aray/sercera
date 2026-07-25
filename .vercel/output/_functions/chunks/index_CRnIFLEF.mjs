import { c as createComponent } from './astro-component_rrSDsGFx.mjs';
import 'piccolore';
import { v as createRenderInstruction, b as renderTemplate } from './entrypoint_C8Tnuy9F.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "C:/Users/PC/Desktop/ser-ceramico/src/pages/index.astro?astro&type=script&index=0&lang.ts")}
//Hello`;
}, "C:/Users/PC/Desktop/ser-ceramico/src/pages/index.astro", void 0);

const $$file = "C:/Users/PC/Desktop/ser-ceramico/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

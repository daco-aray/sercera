import { c as createComponent } from './astro-component_rrSDsGFx.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_C8Tnuy9F.mjs';
import { $ as $$BaseLayout } from './BaseLayout_DfgMXi7R.mjs';

const $$Cart = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Consultas — Ser Cerámico", "description": "Consulta disponibilidad y compra por WhatsApp." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main-content" class="mx-auto max-w-screen-xl px-6 py-28 text-center"> <p class="text-xs uppercase tracking-[0.25em] text-faded">Ser Cerámico</p> <h1 class="mt-5 font-serif text-5xl">Compra por WhatsApp</h1> <p class="mx-auto mt-6 max-w-lg leading-relaxed text-faded">Selecciona una pieza del catálogo para consultar disponibilidad y concretar tu compra directamente por WhatsApp.</p> <a href="/catalog" class="mt-10 inline-flex rounded-full bg-ink px-7 py-4 text-xs uppercase tracking-widest text-[var(--color-base)] transition-colors hover:bg-accent">Ver catálogo</a> </main> ` })}`;
}, "C:/Users/PC/Desktop/ser-ceramico/src/pages/cart.astro", void 0);

const $$file = "C:/Users/PC/Desktop/ser-ceramico/src/pages/cart.astro";
const $$url = "/cart";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cart,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

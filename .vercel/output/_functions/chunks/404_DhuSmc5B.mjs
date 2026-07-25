import { c as createComponent } from './astro-component_rrSDsGFx.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_C8Tnuy9F.mjs';
import { g as getLocaleFromUrl, $ as $$BaseLayout, t } from './BaseLayout_DfgMXi7R.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$404;
  const locale = getLocaleFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": locale === "en" ? "Page not found — Ser Cerámico" : "Página no encontrada — Ser Cerámico", "description": locale === "en" ? "The page you're looking for doesn't exist or has been moved." : "La página que buscas no existe o ha sido movida.", "noindex": true, "includeHeader": false, "includeFooter": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main-content" class="flex min-h-screen items-center justify-center bg-base px-4"> <div class="max-w-md text-center"> <h1 class="font-serif text-7xl">404</h1> <h2 class="mt-4 font-serif text-2xl">${t(locale, "notFoundTitle")}</h2> <p class="mt-2 text-sm text-faded">${t(locale, "notFoundCopy")}</p> <div class="mt-6"> <a href="/catalog" class="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-xs uppercase tracking-widest text-[var(--color-base)] transition-colors hover:bg-accent"> ${t(locale, "notFoundCta")} </a> </div> </div> </main> ` })}`;
}, "C:/Users/PC/Desktop/ser-ceramico/src/pages/404.astro", void 0);

const $$file = "C:/Users/PC/Desktop/ser-ceramico/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

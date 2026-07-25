import { c as createComponent } from './astro-component_rrSDsGFx.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, u as unescapeHTML, c as addAttribute, m as maybeRenderHead } from './entrypoint_C8Tnuy9F.mjs';
import { $ as $$Image } from './_astro_assets_CrkzhpUn.mjs';
import { g as getProducts, f as formatPrice, $ as $$ProductCard } from './ProductCard_Dj4taJeN.mjs';
import { a as getLocaleFromParams, $ as $$BaseLayout, t, b as getUrlWithLocale } from './BaseLayout_DfgMXi7R.mjs';
import { a as sercera4Img, s as sercera3Img } from './sercera_4_8-wQCcdf.mjs';

const heroImg = new Proxy({"src":"/_astro/sercera_1.Qjp_nZ_V.png","width":1248,"height":1245,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC/Desktop/ser-ceramico/src/assets/sercera_1.png";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const locale = getLocaleFromParams(Astro2.params);
  const products = await getProducts();
  const featured = products.slice(0, 3);
  const solo = products[3] ?? products[0];
  if (!solo) {
    throw new Error("Missing required featured product: monolith-bench");
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": locale === "en" ? "Ser Cerámico — Ceramics inspired by biodiversity and Costa Rican culture" : "Ser Cerámico — Cerámica inspirada en la biodiversidad y la cultura costarricense", "description": locale === "en" ? "Ceramic beings inspired by biodiversity and Costa Rican culture. Handmade pieces with identity, texture, and presence." : "Seres de cerámica inspirados en la biodiversidad y la cultura costarricense. Piezas artesanales con identidad, textura y presencia.", "image": heroImg }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<main id="main-content"> <h1 class="sr-only">Ser Cerámico — cerámica inspirada en la biodiversidad y la cultura costarricense</h1> <section class="relative overflow-hidden bg-base"> <div class="md:hidden"> <div class="aspect-[4/3] w-full"> ', ' </div> <div class="space-y-6 px-6 py-12"> <p class="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-faded"> <span class="inline-block h-px w-8 bg-ink/40"></span>\nCosta Rica · Cerámica artesanal\n</p> <p class="text-balance font-serif text-4xl leading-[0.95]"> ', ' <br> <span class="italic text-accent">', '</span> </p> <p class="max-w-[48ch] text-pretty leading-relaxed text-faded">\nCada pieza nace como una celebración de la naturaleza, la memoria y el arte handmade de Costa Rica.\n</p> <div class="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center"> <a', ' class="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-base)] transition-colors hover:bg-accent">\nExplora la colección\n<span aria-hidden="true" class="transition-transform group-hover:translate-x-1">→</span> </a> <a', ' class="text-[11px] uppercase tracking-[0.2em] text-faded transition-colors hover:text-ink">\nNuestro proceso →\n</a> </div> </div> </div> <div class="relative hidden h-[88vh] max-h-[920px] min-h-[640px] w-full md:block"> ', ' <div aria-hidden="true" class="absolute inset-0" style="background: linear-gradient(90deg, var(--color-base) 0%, var(--color-base) 30%, color-mix(in oklab, var(--color-base) 55%, transparent) 45%, color-mix(in oklab, var(--color-base) 5%, transparent) 65%, transparent 80%)"></div> <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-40" style="background: linear-gradient(180deg, transparent, var(--color-base))"></div> <div class="relative mx-auto flex h-full max-w-screen-xl items-center px-6"> <div class="max-w-[480px] space-y-8"> <p class="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-faded"> <span class="inline-block h-px w-8 bg-ink/40"></span> ', ' </p> <p class="text-balance font-serif text-5xl leading-[0.95] lg:text-6xl"> ', ' <br> <span class="italic text-accent">', '</span> </p> <p class="max-w-[48ch] text-pretty leading-relaxed text-faded md:text-lg"> ', ' </p> <div class="flex items-center gap-6 pt-2"> <a', ' class="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-base)] transition-colors hover:bg-accent"> ', ' <span aria-hidden="true" class="transition-transform group-hover:translate-x-1">→</span> </a> <a', ' class="hidden text-[11px] uppercase tracking-[0.2em] text-faded transition-colors hover:text-ink md:inline-block"> ', ' →\n</a> </div> </div> </div> <div class="absolute bottom-10 right-10 hidden flex-col items-end gap-1 text-[10px] uppercase tracking-[0.3em] text-ink/70 md:flex"> <span>Ser Cerámico</span> <span class="text-faded">Inspirada en Costa Rica · 2026</span> </div> </div> </section> <section class="mx-auto max-w-screen-xl px-6 pt-24 md:pt-32"> <div class="mb-12 flex items-end justify-between gap-6 border-t border-line pt-10"> <div> <p class="mb-4 text-[11px] uppercase tracking-[0.3em] text-faded">', '</p> <h2 class="max-w-[20ch] text-balance font-serif text-3xl md:text-5xl"> ', ' <span class="italic text-accent">', "</span> </h2> </div> <a", ' class="hidden items-center gap-2 whitespace-nowrap text-[11px] uppercase tracking-[0.2em] text-faded transition-colors hover:text-ink md:inline-flex"> ', ' <span aria-hidden="true">→</span> </a> </div> <div class="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3"> ', ' </div> <div class="mt-10 flex justify-center md:hidden"> <a', ' class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-faded transition-colors hover:text-ink"> ', ' </a> </div> </section> <section class="mx-auto mt-32 max-w-screen-xl px-6 md:mt-48"> <div class="border-t border-line pt-12"> <p class="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-faded"> <span class="inline-block h-px w-8 bg-ink/40"></span> ', ' </p> <h2 class="max-w-[20ch] text-balance font-serif text-3xl leading-[0.95] md:text-5xl"> ', ' <span class="italic text-accent">', '</span> </h2> <p class="mt-8 mb-16 max-w-[60ch] text-lg leading-relaxed text-faded"> ', ' </p> </div> </section> <section class="relative w-full px-6 md:px-8"> <div class="mx-auto max-w-screen-xl"> <div class="grid gap-4 md:grid-cols-[1.05fr_0.95fr] md:gap-6"> <div class="overflow-hidden rounded-[1.75rem] border border-line bg-paper shadow-[0_24px_80px_rgba(0,0,0,0.08)]"> ', ' </div> <div class="overflow-hidden rounded-[1.75rem] border border-line bg-paper shadow-[0_24px_80px_rgba(0,0,0,0.08)] md:-translate-y-6"> ', ' </div> </div> </div> </section> <section class="mt-32 md:mt-48"> <div class="mx-auto max-w-screen-2xl px-6"> <div class="grid items-center gap-10 md:grid-cols-12 md:gap-16"> <div class="md:col-span-7 lg:col-span-8"> <a', ' class="group block aspect-[5/4] overflow-hidden rounded-[min(1vw,16px)] bg-paper md:aspect-[16/11]"> <img', "", "", "", ' loading="lazy" class="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02]"> </a> </div> <div class="space-y-6 md:col-span-5 lg:col-span-4"> <p class="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-faded"> <span class="inline-block h-px w-8 bg-ink/40"></span> ', ' </p> <h2 class="text-balance font-serif text-4xl leading-[1.02] md:text-5xl"> ', ' <span class="italic text-accent">', '</span> </h2> <p class="text-pretty leading-relaxed text-faded"> ', ' </p> <dl class="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-line pt-2 text-xs"> <dt class="pt-3 uppercase tracking-[0.2em] text-faded">Dimensions</dt> <dd class="pt-3">', '</dd> <dt class="uppercase tracking-[0.2em] text-faded">Finish</dt> <dd>', '</dd> <dt class="uppercase tracking-[0.2em] text-faded">Lead time</dt> <dd>', '</dd> <dt class="uppercase tracking-[0.2em] text-faded">From</dt> <dd class="tabular-nums">', "</dd> </dl> <a", ' class="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-base)] transition-colors hover:bg-accent"> ', ' </a> </div> </div> </div> </section> <section class="mx-auto mt-32 max-w-screen-xl px-6 md:mt-48"> <div class="border-t border-line pt-12"> <p class="mb-4 text-[11px] uppercase tracking-[0.3em] text-faded">', '</p> <h2 class="mb-12 max-w-[24ch] text-balance font-serif text-3xl md:text-5xl"> ', ' <span class="italic text-accent">', '</span> </h2> <div class="grid gap-x-8 gap-y-10 md:grid-cols-3"> ', ' </div> </div> </section> <section class="mx-auto mt-32 max-w-screen-xl px-6 md:mt-48"> <div class="border-t border-line pt-12"> <div class="mx-auto max-w-xl space-y-6 text-center"> <p class="text-[11px] uppercase tracking-[0.3em] text-faded">', '</p> <h2 class="text-balance font-serif text-3xl md:text-5xl"> ', ' <span class="italic text-accent">', '</span> </h2> <p class="mx-auto max-w-[52ch] text-sm leading-relaxed text-faded"> ', ' </p> <a href="https://wa.me/50684234581" class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-base)] transition-colors hover:bg-accent"> ', ' </a> </div> </div> </section> <script type="application/ld+json">', "<\/script> </main> "])), maybeRenderHead(), renderComponent($$result2, "Image", $$Image, { "src": heroImg, "alt": "Featured sercera image on the home hero", "width": 1600, "height": 1280, "format": "webp", "loading": "eager", "decoding": "sync", "class": "h-full w-full object-cover object-right", "style": "transform: scaleX(-1);" }), t(locale, "homeHeroTitle"), t(locale, "homeHeroTitleAccent"), addAttribute(getUrlWithLocale("/catalog", locale), "href"), addAttribute(getUrlWithLocale("/about", locale), "href"), renderComponent($$result2, "Image", $$Image, { "src": heroImg, "alt": "Featured sercera image on the home hero", "width": 1600, "height": 1280, "format": "webp", "loading": "eager", "decoding": "sync", "class": "absolute inset-0 h-full w-full object-cover object-right", "style": "transform: scaleX(-1);" }), t(locale, "homeHeroEyebrow"), t(locale, "homeHeroTitle"), t(locale, "homeHeroTitleAccent"), t(locale, "homeHeroCopy"), addAttribute(getUrlWithLocale("/catalog", locale), "href"), t(locale, "homeExplore"), addAttribute(getUrlWithLocale("/about", locale), "href"), t(locale, "homeProcess"), t(locale, "homeStudioEyebrow"), t(locale, "homeStudioTitle"), t(locale, "homeStudioTitleAccent"), addAttribute(getUrlWithLocale("/catalog", locale), "href"), t(locale, "homeViewAll"), featured.map((product) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "product": product })}`), addAttribute(getUrlWithLocale("/catalog", locale), "href"), t(locale, "homeMobileCatalog"), t(locale, "aboutBadge"), t(locale, "aboutTitle"), t(locale, "aboutTitleAccent"), t(locale, "aboutDescription"), renderComponent($$result2, "Image", $$Image, { "src": sercera3Img, "alt": "Sercera piece inspired by Costa Rican biodiversity", "width": 1600, "height": 1200, "format": "webp", "loading": "lazy", "class": "h-[45vh] w-full object-cover md:h-[70vh]" }), renderComponent($$result2, "Image", $$Image, { "src": sercera4Img, "alt": "Second Sercera piece presented alongside the first", "width": 1600, "height": 1200, "format": "webp", "loading": "lazy", "class": "h-[45vh] w-full object-cover md:h-[70vh]" }), addAttribute(getUrlWithLocale(`/products/${solo.slug}`, locale), "href"), addAttribute(solo.images[0], "src"), addAttribute(`${solo.name} — ${solo.shortDescription}`, "alt"), addAttribute(1600, "width"), addAttribute(1100, "height"), t(locale, "homeCollectionEyebrow"), t(locale, "homeCollectionTitle"), t(locale, "homeCollectionTitleAccent"), t(locale, "homeCollectionCopy"), solo.dimensions, solo.finish, solo.leadTime, formatPrice(solo.price, solo.currencyCode), addAttribute(getUrlWithLocale(`/products/${solo.slug}`, locale), "href"), t(locale, "homeCollectionLink"), t(locale, "homeInspirationEyebrow"), t(locale, "homeInspirationTitle"), t(locale, "homeInspirationTitleAccent"), [
    {
      name: "Colección Marina",
      tag: "Mar · calma",
      copy: "Piezas inspiradas en animales y paisajes marinos, donde el océano se convierte en una fuente de paz y observación."
    },
    {
      name: "Cerámica viva",
      tag: "Textura · presencia",
      copy: "Formas orgánicas y esmaltes que dialogan con la tierra, el cuerpo y la memoria de lo artesanal."
    },
    {
      name: "Presente consciente",
      tag: "Meditación · ritual",
      copy: "Cada pieza nace de un momento de atención plena, donde la materia y el mar nos devuelven al aquí y ahora."
    }
  ].map((material) => renderTemplate`<div class="space-y-3 pt-2"> <p class="text-[10px] uppercase tracking-[0.3em] text-faded">${material.tag}</p> <h3 class="font-serif text-2xl">${material.name}</h3> <p class="text-sm leading-relaxed text-faded">${material.copy}</p> </div>`), t(locale, "homeContactEyebrow"), t(locale, "homeContactTitle"), t(locale, "homeContactTitleAccent"), t(locale, "homeContactCopy"), t(locale, "homeContactCta"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Atelier Kō",
    url: Astro2.site?.href ?? "https://atelier-ko-topaz.vercel.app/",
    slogan: "Furniture, made by hand",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Småland",
      addressCountry: "SE"
    }
  }))) })}`;
}, "C:/Users/PC/Desktop/ser-ceramico/src/pages/[locale]/index.astro", void 0);

const $$file = "C:/Users/PC/Desktop/ser-ceramico/src/pages/[locale]/index.astro";
const $$url = "/[locale]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

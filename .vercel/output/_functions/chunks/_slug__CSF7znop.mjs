import { c as createComponent } from './astro-component_rrSDsGFx.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, u as unescapeHTML, c as addAttribute, m as maybeRenderHead } from './entrypoint_C8Tnuy9F.mjs';
import { g as getProducts, b as getRelated, $ as $$ProductCard, f as formatPrice } from './ProductCard_Dj4taJeN.mjs';
import { a as getLocaleFromParams, $ as $$BaseLayout, t, b as getUrlWithLocale } from './BaseLayout_DfgMXi7R.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const locale = getLocaleFromParams(Astro2.params);
  const products = await getProducts();
  const product = products.find((item) => item.slug === Astro2.params.slug);
  if (!product) return new Response(null, { status: 404 });
  const related = getRelated(products, product.slug);
  const productUrl = new URL(`/${locale}/products/${product.slug}`, Astro2.site ?? Astro2.url.origin).href;
  const whatsappUrl = `https://wa.me/50684234581?text=${encodeURIComponent(locale === "en" ? `Hello, I am interested in ${product.name}: ${productUrl}` : `Hola, me interesa ${product.name}: ${productUrl}`)}`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${product.name} — Ser Cerámico`, "description": product.description.slice(0, 155), "image": product.images[0] }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<main id="main-content"> <div class="mx-auto max-w-screen-xl px-6 pt-8"> <nav class="flex gap-2 text-xs uppercase tracking-widest text-faded" aria-label="Breadcrumb"> <a', ' class="hover:text-ink">', '</a> <span aria-hidden="true">/</span> <span class="text-ink" aria-current="page">', '</span> </nav> </div> <div class="mx-auto max-w-screen-xl px-6 py-12"> <section class="grid grid-cols-1 items-start gap-16 lg:grid-cols-12"> <div class="space-y-6 lg:col-span-7" data-product-gallery> <div class="relative aspect-[4/5] overflow-hidden rounded-[min(1vw,12px)] bg-paper"> ', ' </div> <div class="grid grid-cols-3 gap-4"> ', ' </div> </div> <div class="space-y-12 lg:sticky lg:top-24 lg:col-span-5"> <div class="space-y-4"> <div class="text-xs uppercase tracking-widest text-faded">', '</div> <h1 class="text-balance font-serif text-4xl leading-tight md:text-5xl">', '</h1> <p class="font-serif text-2xl">', '</p> </div> <div class="space-y-6"> <p class="max-w-[44ch] text-pretty leading-relaxed text-faded">', '</p> <dl class="space-y-3"> <div class="flex justify-between border-b border-line py-2 text-sm"> <dt class="text-faded">Info 1</dt> <dd>', '</dd> </div> <div class="flex justify-between border-b border-line py-2 text-sm"> <dt class="text-faded">Info 2</dt> <dd>', '</dd> </div> <div class="flex justify-between border-b border-line py-2 text-sm"> <dt class="text-faded">Info 3</dt> <dd>', '</dd> </div> <div class="flex justify-between border-b border-line py-2 text-sm"> <dt class="text-faded">Info 4</dt> <dd>', "</dd> </div> </dl> </div> ", ' <p class="text-[11px] uppercase tracking-widest text-faded">\nFree white-glove delivery in EU · Worldwide on request\n</p> </div> </section> <section class="mt-40 space-y-12 border-t border-line pt-16"> <div class="flex items-end justify-between gap-6"> <h2 class="font-serif text-3xl md:text-4xl">', "</h2> <a", ' class="text-xs uppercase tracking-widest underline underline-offset-4 hover:text-accent"> ', ' </a> </div> <div class="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3"> ', ' </div> </section> </div> <script type="application/ld+json">', '<\/script> <script>\n    const gallery = document.querySelector("[data-product-gallery]");\n    if (gallery) {\n      const panels = Array.from(gallery.querySelectorAll("[data-gallery-panel]"));\n      const thumbs = Array.from(gallery.querySelectorAll("[data-gallery-thumb]"));\n\n      thumbs.forEach((thumb) => {\n        thumb.addEventListener("click", () => {\n          const active = thumb.dataset.galleryThumb;\n          panels.forEach((panel) => panel.classList.toggle("hidden", panel.dataset.galleryPanel !== active));\n          thumbs.forEach((button) => {\n            const selected = button.dataset.galleryThumb === active;\n            button.classList.toggle("ring-ink", selected);\n            button.classList.toggle("ring-line", !selected);\n            button.setAttribute("aria-pressed", selected ? "true" : "false");\n          });\n        });\n      });\n    }\n\n  <\/script> </main> '])), maybeRenderHead(), addAttribute(getUrlWithLocale("/catalog", locale), "href"), t(locale, "productBreadcrumbCatalog"), product.name, product.images.map((image, index) => renderTemplate`<div${addAttribute(["absolute inset-0", index !== 0 && "hidden"], "class:list")}${addAttribute(index, "data-gallery-panel")}> <img${addAttribute(image, "src")}${addAttribute(`${product.name} — view ${index + 1}`, "alt")}${addAttribute(1440, "width")}${addAttribute(1800, "height")}${addAttribute(index === 0 ? "eager" : "lazy", "loading")} class="atelier-fade-in h-full w-full object-cover"> </div>`), product.images.map((image, index) => renderTemplate`<button type="button"${addAttribute([
    "aspect-square overflow-hidden rounded-[min(1vw,12px)] bg-paper ring-1 transition-all",
    index === 0 ? "ring-ink" : "ring-line hover:ring-ink/40"
  ], "class:list")}${addAttribute(index, "data-gallery-thumb")}${addAttribute(`Show view ${index + 1}`, "aria-label")}${addAttribute(index === 0 ? "true" : "false", "aria-pressed")}> <img${addAttribute(image, "src")} alt=""${addAttribute(360, "width")}${addAttribute(360, "height")} loading="lazy" class="h-full w-full object-cover"> </button>`), product.collection, product.name, formatPrice(product.price, product.currencyCode), product.description, product.material, product.dimensions, product.finish, product.leadTime, product.availableForSale ? renderTemplate`<a${addAttribute(whatsappUrl, "href")} target="_blank" rel="noopener noreferrer" class="flex w-full items-center justify-center rounded-full bg-ink py-4 text-sm font-medium text-[var(--color-base)] ring-1 ring-ink transition-all hover:bg-accent hover:ring-accent active:scale-[0.98]"> ${t(locale, "productWhatsapp")} </a>` : renderTemplate`<p class="rounded-full border border-line py-4 text-center text-sm text-faded">${locale === "en" ? "Currently sold out" : "Actualmente agotado"}</p>`, t(locale, "productRelatedTitle"), addAttribute(getUrlWithLocale("/catalog", locale), "href"), t(locale, "productRelatedViewAll"), related.map((item) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "product": item })}`), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    brand: {
      "@type": "Brand",
      name: "Ser Cerámico"
    },
    material: product.material,
    url: productUrl,
    offers: {
      "@type": "Offer",
      priceCurrency: product.currencyCode,
      price: product.price,
      availability: product.availableForSale ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      url: productUrl
    }
  }))) })}`;
}, "C:/Users/PC/Desktop/ser-ceramico/src/pages/[locale]/products/[slug].astro", void 0);

const $$file = "C:/Users/PC/Desktop/ser-ceramico/src/pages/[locale]/products/[slug].astro";
const $$url = "/[locale]/products/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

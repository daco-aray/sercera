import { c as createComponent } from './astro-component_rrSDsGFx.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as renderTemplate, c as addAttribute, p as renderHead, r as renderComponent, q as renderSlot } from './entrypoint_C8Tnuy9F.mjs';
import 'clsx';

const DEFAULT_LOCALE = "es";
function getLocaleFromUrl(url) {
  const parsed = typeof url === "string" ? new URL(url, "https://example.com") : url;
  const pathname = parsed?.pathname ?? "/";
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0]?.toLowerCase();
  if (firstSegment === "en") return "en";
  if (firstSegment === "es") return "es";
  return DEFAULT_LOCALE;
}
function getLocaleFromParams(params) {
  const locale = params?.locale?.toLowerCase();
  if (locale === "en") return "en";
  if (locale === "es") return "es";
  return DEFAULT_LOCALE;
}
function getLocaleSwitchUrl(pathname, locale) {
  const path = typeof pathname === "string" ? pathname : pathname.pathname;
  const segments = path.split("/").filter(Boolean);
  const withoutLocale = segments[0] !== "es" && segments[0] !== "en" ? segments : segments.slice(1);
  return `/${locale}${withoutLocale.length > 0 ? "/" + withoutLocale.join("/") : ""}`;
}
function getLocaleLabel(locale) {
  return locale === "en" ? "ES" : "EN";
}
function getUrlWithLocale(path, locale) {
  let cleanPath = path.replace(/^\//, "").replace(/^(es|en)\//, "");
  return `/${locale}${cleanPath ? "/" + cleanPath : ""}`;
}
const translations = {
  es: {
    navHome: "Inicio",
    navCatalog: "Catálogo",
    navAbout: "Sobre nosotros",
    navToggle: "EN",
    navCartAria: "Carrito, 0 artículos",
    footerDescription: "Piezas cerámicas hechas a mano, con identidad, textura y presencia, inspiradas en la biodiversidad y la cultura de Costa Rica.",
    footerInquiries: "Consultas",
    footerCustomOrders: "Pedidos a medida",
    footerTradePortal: "Portal para distribuidores",
    footerStudioVisits: "Visitas al estudio",
    footerContact: "Contacto",
    footerWhatsApp: "WhatsApp",
    footerEmail: "Correo",
    footerMadeToOrder: "Todas las piezas se hacen a pedido.",
    homeHeroEyebrow: "Costa Rica · Cerámica artesanal",
    homeHeroTitle: "Seres de cerámica",
    homeHeroTitleAccent: "inspirados en la biodiversidad y la cultura costarricense.",
    homeHeroCopy: "Cada pieza nace como una celebración de la naturaleza, la memoria y el arte handmade de Costa Rica.",
    homeExplore: "Explora la colección",
    homeProcess: "Nuestro proceso",
    homeStudioEyebrow: "Actualmente en el estudio",
    homeStudioTitle: "Algunas piezas",
    homeStudioTitleAccent: "listas para llegar.",
    homeViewAll: "Ver todo",
    homeMobileCatalog: "Ver el catálogo completo →",
    homeCollectionEyebrow: "Colección Marina",
    homeCollectionTitle: "El mar,",
    homeCollectionTitleAccent: "la materia y el presente.",
    homeCollectionCopy: "Inspirada en animales y paisajes marinos, esta colección une calma, observación y una presencia serena que invita a detenerse.",
    homeCollectionLink: "Ver la pieza →",
    homeInspirationEyebrow: "Inspiración y proceso",
    homeInspirationTitle: "De la costa,",
    homeInspirationTitleAccent: "del mar y de la arcilla.",
    homeContactEyebrow: "Contáctanos",
    homeContactTitle: "Hablemos por",
    homeContactTitleAccent: "WhatsApp.",
    homeContactCopy: "Para pedidos, dudas o piezas personalizadas, escríbenos directamente y te responderemos pronto.",
    homeContactCta: "Escríbenos por WhatsApp",
    catalogBadge: "El catálogo",
    catalogTitle: "Cada pieza,",
    catalogTitleAccent: "hecha a mano.",
    catalogDescription: "Un catálogo pequeño y pausado — tres piezas, tres materiales. Filtra para encontrar lo que encaja en tu espacio y luego empezamos a elegir la pieza.",
    catalogCountLabel: "piezas",
    catalogFilterAll: "Todas las piezas",
    catalogFilterAllMaterials: "Todos los materiales",
    catalogSort: "Ordenar",
    catalogSortFeatured: "Destacadas",
    catalogSortPriceAsc: "Precio · Menor a mayor",
    catalogSortPriceDesc: "Precio · Mayor a menor",
    catalogEmpty: "No hay piezas que coincidan con esa combinación.",
    aboutBadge: "Sobre Ser Cerámico",
    aboutTitle: "Seres de cerámica,",
    aboutTitleAccent: "nacidos de la tierra.",
    aboutDescription: "Mariana vive en Guanacaste y crea seres cerámicos inspirados en la biodiversidad costarricense y en referencias de la cultura precolombina. Cada pieza nace de la observación del entorno, de la memoria y de una sensibilidad que une lo orgánico con lo ceremonial.",
    aboutInspiration: "Inspiración",
    aboutInspirationTitle: "Del mar, la tierra y la memoria.",
    aboutTechnique: "Técnica y proceso",
    aboutMaterialsLabel: "Sobre los materiales",
    aboutVisitTitle: "Visita el estudio o empieza con una pieza.",
    aboutCatalogCta: "Ver el catálogo →",
    aboutContactCta: "Escríbenos",
    productCatalogLink: "Catálogo",
    productWhatsapp: "Comprar por WhatsApp",
    productMaterial: "Material",
    productDimensions: "Dimensiones",
    productFinish: "Acabado",
    productLeadTime: "Plazo",
    productBreadcrumbCatalog: "Catálogo",
    productRelatedTitle: "Piezas que combinan bien",
    productRelatedViewAll: "Ver todo",
    notFoundTitle: "Página no encontrada",
    notFoundCopy: "La página que buscas no existe o ha sido movida.",
    notFoundCta: "Volver al catálogo"
  },
  en: {
    navHome: "Home",
    navCatalog: "Catalogue",
    navAbout: "About",
    navToggle: "ES",
    navCartAria: "Cart, 0 items",
    footerDescription: "Handmade ceramic pieces with identity, texture, and presence, inspired by the biodiversity and culture of Costa Rica.",
    footerInquiries: "Inquiries",
    footerCustomOrders: "Custom orders",
    footerTradePortal: "Trade portal",
    footerStudioVisits: "Studio visits",
    footerContact: "Contact",
    footerWhatsApp: "WhatsApp",
    footerEmail: "Email",
    footerMadeToOrder: "All pieces are made to order.",
    homeHeroEyebrow: "Costa Rica · Handmade ceramics",
    homeHeroTitle: "Ceramic beings",
    homeHeroTitleAccent: "inspired by biodiversity and Costa Rican culture.",
    homeHeroCopy: "Each piece is born as a celebration of nature, memory, and the handmade art of Costa Rica.",
    homeExplore: "Explore the collection",
    homeProcess: "Our process",
    homeStudioEyebrow: "Currently in the studio",
    homeStudioTitle: "Some pieces",
    homeStudioTitleAccent: "ready to arrive.",
    homeViewAll: "View all",
    homeMobileCatalog: "View the full catalogue →",
    homeCollectionEyebrow: "Marine Collection",
    homeCollectionTitle: "The sea,",
    homeCollectionTitleAccent: "the material and the present.",
    homeCollectionCopy: "Inspired by marine animals and landscapes, this collection brings calm, observation, and a serene presence that invites you to pause.",
    homeCollectionLink: "See the piece →",
    homeInspirationEyebrow: "Inspiration and process",
    homeInspirationTitle: "From the coast,",
    homeInspirationTitleAccent: "from the sea and from clay.",
    homeContactEyebrow: "Contact us",
    homeContactTitle: "Let’s talk on",
    homeContactTitleAccent: "WhatsApp.",
    homeContactCopy: "For orders, questions, or custom pieces, write to us directly and we will answer soon.",
    homeContactCta: "Write us on WhatsApp",
    catalogBadge: "The catalogue",
    catalogTitle: "Every piece,",
    catalogTitleAccent: "made by hand.",
    catalogDescription: "A small, slow catalogue — three pieces, three materials. Filter to find what fits your space and then we begin choosing the piece.",
    catalogCountLabel: "pieces",
    catalogFilterAll: "All pieces",
    catalogFilterAllMaterials: "All materials",
    catalogSort: "Sort",
    catalogSortFeatured: "Featured",
    catalogSortPriceAsc: "Price · Low to high",
    catalogSortPriceDesc: "Price · High to low",
    catalogEmpty: "No pieces match that combination.",
    aboutBadge: "About Ser Cerámico",
    aboutTitle: "Ceramic beings,",
    aboutTitleAccent: "born from the earth.",
    aboutDescription: "Mariana lives in Guanacaste and creates ceramic beings inspired by Costa Rican biodiversity and references from pre-Columbian culture. Each piece emerges from observing the environment, memory, and a sensitivity that unites the organic with the ceremonial.",
    aboutInspiration: "Inspiration",
    aboutInspirationTitle: "From the sea, the earth, and memory.",
    aboutTechnique: "Technique and process",
    aboutMaterialsLabel: "On materials",
    aboutVisitTitle: "Visit the studio or begin with a piece.",
    aboutCatalogCta: "See the catalogue →",
    aboutContactCta: "Write to us",
    productCatalogLink: "Catalogue",
    productWhatsapp: "Buy via WhatsApp",
    productMaterial: "Material",
    productDimensions: "Dimensions",
    productFinish: "Finish",
    productLeadTime: "Lead time",
    productBreadcrumbCatalog: "Catalogue",
    productRelatedTitle: "Pieces that sit well together",
    productRelatedViewAll: "View all",
    notFoundTitle: "Page not found",
    notFoundCopy: "The page you are looking for does not exist or has been moved.",
    notFoundCta: "Back to the catalogue"
  }
};
function t(locale, key) {
  return translations[locale][key] ?? translations[DEFAULT_LOCALE][key] ?? key;
}

const $$SiteFooter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SiteFooter;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const locale = getLocaleFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<footer id="studio" class="mt-32 border-t border-line py-24"> <div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-12 px-6 md:grid-cols-3"> <div class="space-y-4"> <div class="font-serif text-lg italic tracking-tight">Ser Cerámico</div> <p class="max-w-[30ch] text-sm leading-relaxed text-faded"> ${t(locale, "footerDescription")} </p> </div> <div class="space-y-4"> <h2 class="text-xs font-medium uppercase tracking-widest">${t(locale, "footerInquiries")}</h2> <ul class="space-y-2 text-sm"> <li><a href="/about#studio" class="text-faded transition-colors hover:text-ink">${t(locale, "footerCustomOrders")}</a></li> <!-- <li><a href="/about#studio" class="text-faded transition-colors hover:text-ink">{t(locale, "footerTradePortal")}</a></li> --> <!-- <li><a href="/about#studio" class="text-faded transition-colors hover:text-ink">{t(locale, "footerStudioVisits")}</a></li> --> </ul> </div> <div class="space-y-4"> <h2 class="text-xs font-medium uppercase tracking-widest">${t(locale, "footerContact")}</h2> <ul class="space-y-2 text-sm"> <li><a href="https://wa.me/50684234581" class="text-faded transition-colors hover:text-ink">${t(locale, "footerWhatsApp")}</a></li> <li><a href="mailto:contacto@serceramico.com" class="text-faded transition-colors hover:text-ink">${t(locale, "footerEmail")}</a></li> </ul> </div> </div> <div class="mx-auto mt-16 max-w-screen-xl px-6 text-[10px] uppercase tracking-[0.2em] text-faded">
© ${year} Ser Cerámico — ${t(locale, "footerMadeToOrder")} </div> </footer>`;
}, "C:/Users/PC/Desktop/ser-ceramico/src/components/SiteFooter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$SiteHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SiteHeader;
  const { currentPath = "/" } = Astro2.props;
  const locale = getLocaleFromUrl(Astro2.url);
  const isActive = (href = "") => {
    if (href === getUrlWithLocale("/", locale)) return currentPath === "/" || currentPath === `/${locale}`;
    return currentPath.startsWith(href);
  };
  const navItems = [
    { href: getUrlWithLocale("/", locale), label: t(locale, "navHome") },
    { href: getUrlWithLocale("/catalog", locale), label: t(locale, "navCatalog") },
    { href: getUrlWithLocale("/about", locale), label: t(locale, "navAbout") }
  ];
  const languageToggleHref = getLocaleSwitchUrl(Astro2.url, locale === "en" ? "es" : "en");
  return renderTemplate(_a || (_a = __template(["", '<nav class="sticky top-0 z-50 border-b border-line bg-base/80 backdrop-blur-md" aria-label="Main navigation"> <div class="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-6"> <a', ' class="font-serif text-xl italic tracking-tight" aria-label="Ser Cerámico home">\nSer Cerámico\n</a> <div class="hidden items-center gap-8 text-sm md:flex"> ', ' </div> <div class="flex items-center gap-3"> <a', " data-lang-toggle", ' class="text-sm font-medium uppercase tracking-[0.2em] text-faded transition-colors hover:text-accent"', "> ", ' </a>   <button type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:text-accent md:hidden" aria-label="Open menu" aria-controls="mobile-menu" aria-expanded="false" data-mobile-menu-open> <span class="sr-only">Open menu</span> <span class="flex w-4 flex-col gap-1.5" aria-hidden="true"> <span class="h-px w-full bg-current"></span> <span class="h-px w-full bg-current"></span> <span class="h-px w-full bg-current"></span> </span> </button> </div> </div> </nav> <div id="mobile-menu" class="fixed inset-0 z-[60] hidden h-dvh overflow-hidden bg-base text-ink md:hidden" role="dialog" aria-modal="true" aria-label="Mobile menu" data-mobile-menu> <div class="flex h-full flex-col px-6 pb-6 pt-5"> <div class="flex h-11 items-center justify-between"> <a href="/" class="font-serif text-xl italic tracking-tight" aria-label="Ser Cerámico home" data-mobile-menu-link>\nSer Cerámico\n</a> <button type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:text-accent" aria-label="Close menu" data-mobile-menu-close> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"> <path d="M6 6l12 12"></path> <path d="M18 6L6 18"></path> </svg> </button> </div> <div class="flex min-h-0 flex-1 flex-col gap-5 pt-7"> <div class="space-y-2.5"> ', '   </div> <!-- <a\n          href={`/products/${featuredProduct.slug}`}\n          class="group block border-y border-line py-4"\n          data-mobile-menu-link\n        >\n          <div class="aspect-[16/10] max-h-[32dvh] overflow-hidden rounded-md bg-paper">\n            <Image\n              src={featuredProduct.images[0]}\n              alt={`${featuredProduct.name} - ${featuredProduct.shortDescription}`}\n              width={900}\n              height={560}\n              format="webp"\n              loading="lazy"\n              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"\n            />\n          </div>\n          <div class="mt-3 flex items-end justify-between gap-4">\n            <div class="min-w-0 space-y-1.5">\n              <p class="text-[10px] uppercase tracking-[0.3em] text-faded">Featured piece</p>\n              <p class="font-serif text-3xl leading-none">{featuredProduct.name}</p>\n              <p class="text-sm leading-relaxed text-faded">{featuredProduct.shortDescription}</p>\n            </div>\n            <p class="shrink-0 pb-0.5 text-xs uppercase tracking-[0.2em] text-accent">\n              {formatPrice(featuredProduct.price)}\n            </p>\n          </div>\n        </a> --> <div class="mt-auto space-y-2 text-sm"> <p class="text-[10px] uppercase tracking-[0.3em] text-faded">Contact</p> <a href="mailto:studio@atelier-ko.com" class="block transition-colors hover:text-accent" data-mobile-menu-link>\nstudio@atelier-ko.com\n</a> </div> </div> </div> </div> <script>\n  (() => {\n    const menu = document.querySelector("[data-mobile-menu]");\n    const openButton = document.querySelector("[data-mobile-menu-open]");\n    const closeButton = document.querySelector("[data-mobile-menu-close]");\n\n    if (!menu || !openButton || !closeButton) return;\n\n    const focusableSelector = [\n      "a[href]",\n      "button:not([disabled])",\n      "input:not([disabled])",\n      "select:not([disabled])",\n      "textarea:not([disabled])",\n      \'[tabindex]:not([tabindex="-1"])\',\n    ].join(",");\n    let lastFocusedElement;\n\n    function getFocusable() {\n      return Array.from(menu.querySelectorAll(focusableSelector)).filter((element) => {\n        return element instanceof HTMLElement && element.offsetParent !== null;\n      });\n    }\n\n    function lockScroll() {\n      document.documentElement.style.overflow = "hidden";\n      document.body.style.overflow = "hidden";\n    }\n\n    function unlockScroll() {\n      document.documentElement.style.overflow = "";\n      document.body.style.overflow = "";\n    }\n\n    function openMenu() {\n      lastFocusedElement = document.activeElement;\n      menu.classList.remove("hidden");\n      openButton.setAttribute("aria-expanded", "true");\n      lockScroll();\n      closeButton.focus({ preventScroll: true });\n    }\n\n    function closeMenu({ restoreFocus = true } = {}) {\n      menu.classList.add("hidden");\n      openButton.setAttribute("aria-expanded", "false");\n      unlockScroll();\n\n      if (restoreFocus && lastFocusedElement instanceof HTMLElement) {\n        lastFocusedElement.focus({ preventScroll: true });\n      }\n    }\n\n    openButton.addEventListener("click", openMenu);\n    closeButton.addEventListener("click", () => closeMenu());\n\n    menu.querySelectorAll("[data-mobile-menu-link]").forEach((link) => {\n      link.addEventListener("click", () => closeMenu({ restoreFocus: false }));\n    });\n\n    document.addEventListener("keydown", (event) => {\n      if (menu.classList.contains("hidden")) return;\n\n      if (event.key === "Escape") {\n        event.preventDefault();\n        closeMenu();\n        return;\n      }\n\n      if (event.key !== "Tab") return;\n\n      const focusable = getFocusable();\n      const first = focusable[0];\n      const last = focusable[focusable.length - 1];\n\n      if (!first || !last) return;\n\n      if (event.shiftKey && document.activeElement === first) {\n        event.preventDefault();\n        last.focus();\n      } else if (!event.shiftKey && document.activeElement === last) {\n        event.preventDefault();\n        first.focus();\n      }\n    });\n\n    window.addEventListener("resize", () => {\n      if (window.matchMedia("(min-width: 768px)").matches && !menu.classList.contains("hidden")) {\n        closeMenu({ restoreFocus: false });\n      }\n    });\n  })();\n<\/script>'], ["", '<nav class="sticky top-0 z-50 border-b border-line bg-base/80 backdrop-blur-md" aria-label="Main navigation"> <div class="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-6"> <a', ' class="font-serif text-xl italic tracking-tight" aria-label="Ser Cerámico home">\nSer Cerámico\n</a> <div class="hidden items-center gap-8 text-sm md:flex"> ', ' </div> <div class="flex items-center gap-3"> <a', " data-lang-toggle", ' class="text-sm font-medium uppercase tracking-[0.2em] text-faded transition-colors hover:text-accent"', "> ", ' </a>   <button type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:text-accent md:hidden" aria-label="Open menu" aria-controls="mobile-menu" aria-expanded="false" data-mobile-menu-open> <span class="sr-only">Open menu</span> <span class="flex w-4 flex-col gap-1.5" aria-hidden="true"> <span class="h-px w-full bg-current"></span> <span class="h-px w-full bg-current"></span> <span class="h-px w-full bg-current"></span> </span> </button> </div> </div> </nav> <div id="mobile-menu" class="fixed inset-0 z-[60] hidden h-dvh overflow-hidden bg-base text-ink md:hidden" role="dialog" aria-modal="true" aria-label="Mobile menu" data-mobile-menu> <div class="flex h-full flex-col px-6 pb-6 pt-5"> <div class="flex h-11 items-center justify-between"> <a href="/" class="font-serif text-xl italic tracking-tight" aria-label="Ser Cerámico home" data-mobile-menu-link>\nSer Cerámico\n</a> <button type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:text-accent" aria-label="Close menu" data-mobile-menu-close> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"> <path d="M6 6l12 12"></path> <path d="M18 6L6 18"></path> </svg> </button> </div> <div class="flex min-h-0 flex-1 flex-col gap-5 pt-7"> <div class="space-y-2.5"> ', '   </div> <!-- <a\n          href={\\`/products/\\${featuredProduct.slug}\\`}\n          class="group block border-y border-line py-4"\n          data-mobile-menu-link\n        >\n          <div class="aspect-[16/10] max-h-[32dvh] overflow-hidden rounded-md bg-paper">\n            <Image\n              src={featuredProduct.images[0]}\n              alt={\\`\\${featuredProduct.name} - \\${featuredProduct.shortDescription}\\`}\n              width={900}\n              height={560}\n              format="webp"\n              loading="lazy"\n              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"\n            />\n          </div>\n          <div class="mt-3 flex items-end justify-between gap-4">\n            <div class="min-w-0 space-y-1.5">\n              <p class="text-[10px] uppercase tracking-[0.3em] text-faded">Featured piece</p>\n              <p class="font-serif text-3xl leading-none">{featuredProduct.name}</p>\n              <p class="text-sm leading-relaxed text-faded">{featuredProduct.shortDescription}</p>\n            </div>\n            <p class="shrink-0 pb-0.5 text-xs uppercase tracking-[0.2em] text-accent">\n              {formatPrice(featuredProduct.price)}\n            </p>\n          </div>\n        </a> --> <div class="mt-auto space-y-2 text-sm"> <p class="text-[10px] uppercase tracking-[0.3em] text-faded">Contact</p> <a href="mailto:studio@atelier-ko.com" class="block transition-colors hover:text-accent" data-mobile-menu-link>\nstudio@atelier-ko.com\n</a> </div> </div> </div> </div> <script>\n  (() => {\n    const menu = document.querySelector("[data-mobile-menu]");\n    const openButton = document.querySelector("[data-mobile-menu-open]");\n    const closeButton = document.querySelector("[data-mobile-menu-close]");\n\n    if (!menu || !openButton || !closeButton) return;\n\n    const focusableSelector = [\n      "a[href]",\n      "button:not([disabled])",\n      "input:not([disabled])",\n      "select:not([disabled])",\n      "textarea:not([disabled])",\n      \'[tabindex]:not([tabindex="-1"])\',\n    ].join(",");\n    let lastFocusedElement;\n\n    function getFocusable() {\n      return Array.from(menu.querySelectorAll(focusableSelector)).filter((element) => {\n        return element instanceof HTMLElement && element.offsetParent !== null;\n      });\n    }\n\n    function lockScroll() {\n      document.documentElement.style.overflow = "hidden";\n      document.body.style.overflow = "hidden";\n    }\n\n    function unlockScroll() {\n      document.documentElement.style.overflow = "";\n      document.body.style.overflow = "";\n    }\n\n    function openMenu() {\n      lastFocusedElement = document.activeElement;\n      menu.classList.remove("hidden");\n      openButton.setAttribute("aria-expanded", "true");\n      lockScroll();\n      closeButton.focus({ preventScroll: true });\n    }\n\n    function closeMenu({ restoreFocus = true } = {}) {\n      menu.classList.add("hidden");\n      openButton.setAttribute("aria-expanded", "false");\n      unlockScroll();\n\n      if (restoreFocus && lastFocusedElement instanceof HTMLElement) {\n        lastFocusedElement.focus({ preventScroll: true });\n      }\n    }\n\n    openButton.addEventListener("click", openMenu);\n    closeButton.addEventListener("click", () => closeMenu());\n\n    menu.querySelectorAll("[data-mobile-menu-link]").forEach((link) => {\n      link.addEventListener("click", () => closeMenu({ restoreFocus: false }));\n    });\n\n    document.addEventListener("keydown", (event) => {\n      if (menu.classList.contains("hidden")) return;\n\n      if (event.key === "Escape") {\n        event.preventDefault();\n        closeMenu();\n        return;\n      }\n\n      if (event.key !== "Tab") return;\n\n      const focusable = getFocusable();\n      const first = focusable[0];\n      const last = focusable[focusable.length - 1];\n\n      if (!first || !last) return;\n\n      if (event.shiftKey && document.activeElement === first) {\n        event.preventDefault();\n        last.focus();\n      } else if (!event.shiftKey && document.activeElement === last) {\n        event.preventDefault();\n        first.focus();\n      }\n    });\n\n    window.addEventListener("resize", () => {\n      if (window.matchMedia("(min-width: 768px)").matches && !menu.classList.contains("hidden")) {\n        closeMenu({ restoreFocus: false });\n      }\n    });\n  })();\n<\/script>'])), maybeRenderHead(), addAttribute(getUrlWithLocale("/", locale), "href"), navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
    "transition-colors hover:text-accent",
    isActive(item.href) ? "text-ink" : "text-faded"
  ], "class:list")}${addAttribute(isActive(item.href) ? "page" : void 0, "aria-current")}> ${item.label} </a>`), addAttribute(languageToggleHref, "href"), addAttribute(locale === "en" ? "es" : "en", "data-lang-target"), addAttribute(`Switch language to ${locale === "en" ? "Spanish" : "English"}`, "aria-label"), getLocaleLabel(locale), navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
    "block font-serif text-4xl leading-none transition-colors hover:text-accent",
    isActive(item.href) ? "text-ink" : "text-faded"
  ], "class:list")}${addAttribute(isActive(item.href) ? "page" : void 0, "aria-current")} data-mobile-menu-link> ${item.label} </a>`));
}, "C:/Users/PC/Desktop/ser-ceramico/src/components/SiteHeader.astro", void 0);

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Ser Cerámico — Cerámica inspirada en la biodiversidad y la cultura costarricense",
    description = "Seres de cerámica inspirados en la biodiversidad y la cultura costarricense. Piezas artesanales con identidad, textura y presencia.",
    image,
    noindex = false,
    includeHeader = true,
    includeFooter = true
  } = Astro2.props;
  const locale = getLocaleFromUrl(Astro2.url);
  const canonicalUrl = new URL(Astro2.url.pathname, Astro2.site ?? Astro2.url.origin);
  const ogImage = image ? new URL(image.src ?? image, Astro2.site ?? Astro2.url.origin).href : void 0;
  return renderTemplate`<html${addAttribute(locale === "en" ? "en" : "es", "lang")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="author" content="Ser Cerámico"><meta name="theme-color" content="#f8f7f4"><link rel="canonical"${addAttribute(canonicalUrl.href, "href")}><link rel="icon" type="image/svg+xml" href="/favicon.svg">${noindex && renderTemplate`<meta name="robots" content="noindex,nofollow">`}<meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:site_name" content="Ser Cerámico"><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalUrl.href, "content")}>${ogImage && renderTemplate`<meta property="og:image"${addAttribute(ogImage, "content")}>`}<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}>${ogImage && renderTemplate`<meta name="twitter:image"${addAttribute(ogImage, "content")}>`}${renderHead()}</head> <body class="bg-base text-ink"> <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--color-base)]">
Skip to content
</a> ${includeHeader && renderTemplate`${renderComponent($$result, "SiteHeader", $$SiteHeader, { "currentPath": Astro2.url.pathname })}`} <div> ${renderSlot($$result, $$slots["default"])} </div> ${includeFooter && renderTemplate`${renderComponent($$result, "SiteFooter", $$SiteFooter, {})}`} </body></html>`;
}, "C:/Users/PC/Desktop/ser-ceramico/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, getLocaleFromParams as a, getUrlWithLocale as b, getLocaleFromUrl as g, t };

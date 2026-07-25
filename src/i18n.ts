export type Locale = "es" | "en";

export const DEFAULT_LOCALE: Locale = "es";
export const LOCALES: Locale[] = ["es", "en"];

export function getLocaleFromUrl(url?: URL | string): Locale {
  const parsed = typeof url === "string" ? new URL(url, "https://example.com") : url;
  const pathname = parsed?.pathname ?? "/";
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0]?.toLowerCase();

  if (firstSegment === "en") return "en";
  if (firstSegment === "es") return "es";
  return DEFAULT_LOCALE;
}

export function getLocaleFromParams(params?: Record<string, string | undefined>): Locale {
  const locale = params?.locale?.toLowerCase();
  if (locale === "en") return "en";
  if (locale === "es") return "es";
  return DEFAULT_LOCALE;
}

export function getLocaleSwitchUrl(pathname: string | URL, locale: Locale): string {
  const path = typeof pathname === "string" ? pathname : pathname.pathname;
  const segments = path.split("/").filter(Boolean);
  
  // Remove existing locale from path
  const withoutLocale = segments[0] !== "es" && segments[0] !== "en" 
    ? segments 
    : segments.slice(1);
  
  return `/${locale}${withoutLocale.length > 0 ? "/" + withoutLocale.join("/") : ""}`;
}

export function getLocaleLabel(locale: Locale): string {
  return locale === "en" ? "ES" : "EN";
}

export function getUrlWithLocale(path: string, locale: Locale): string {
  // Remove leading slash and any locale prefix
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
    notFoundCta: "Volver al catálogo",
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
    notFoundCta: "Back to the catalogue",
  },
} as const;

export function t(locale: Locale, key: keyof typeof translations.es): string {
  return translations[locale][key] ?? translations[DEFAULT_LOCALE][key] ?? key;
}

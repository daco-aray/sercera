import { c as createComponent } from './astro-component_rrSDsGFx.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, b as renderTemplate } from './entrypoint_C8Tnuy9F.mjs';
import 'clsx';
import { a as getLocaleFromParams, b as getUrlWithLocale } from './BaseLayout_DfgMXi7R.mjs';

const query = `
  query Products {
    products(first: 100, sortKey: CREATED_AT, reverse: true) {
      nodes {
        handle
        title
        description
        productType
        tags
        availableForSale
        images(first: 10) { nodes { url altText } }
        priceRange { minVariantPrice { amount currencyCode } }
      }
    }
  }
`;
function getEndpoint() {
  const store = "https://v7wrpj-au.myshopify.com/api/2025-07/graphql.json"?.trim();
  if (!store) throw new Error("Missing SHOPIFY_STORE in .env");
  if (store.includes("/api/")) return store;
  return `https://${store.replace(/^https?:\/\//, "").replace(/\/$/, "")}/api/2025-07/graphql.json`;
}
function tagValue(tags, key, fallback) {
  const tag = tags.find((item) => item.toLowerCase().startsWith(`${key.toLowerCase()}:`));
  return tag ? tag.slice(tag.indexOf(":") + 1).trim() || fallback : fallback;
}
function toProduct(product, order) {
  const images = product.images.nodes.map((image) => image.url);
  const description = product.description.trim();
  const price = product.priceRange.minVariantPrice;
  return {
    slug: product.handle,
    name: product.title,
    collection: tagValue(product.tags, "collection", product.productType || "Ser Cerámico"),
    category: product.productType || "Cerámica",
    material: tagValue(product.tags, "material", "Cerámica"),
    price: Number(price.amount),
    currencyCode: price.currencyCode,
    shortDescription: description.slice(0, 110) || product.productType || "Pieza artesanal",
    description: description || "Consulta disponibilidad y detalles por WhatsApp.",
    dimensions: tagValue(product.tags, "dimensions", "Consulta por WhatsApp"),
    finish: tagValue(product.tags, "finish", "Hecho a mano"),
    leadTime: tagValue(product.tags, "lead-time", "Consulta disponibilidad"),
    images,
    availableForSale: product.availableForSale,
    order
  };
}
async function getProducts() {
  const token = "09dcb8256e2c2c1f019b703794345bb5"?.trim();
  if (!token) throw new Error("Missing SHOPIFY_STOREFRONT_TOKEN in .env");
  const response = await fetch(getEndpoint(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token
    },
    body: JSON.stringify({ query })
  });
  if (!response.ok) throw new Error(`Shopify request failed (${response.status})`);
  const result = await response.json();
  if (result.errors?.length) throw new Error(`Shopify error: ${result.errors.map((error) => error.message).join(", ")}`);
  return (result.data?.products?.nodes ?? []).map(toProduct);
}
function getRelated(products, slug, limit = 3) {
  return products.filter((product) => product.slug !== slug).slice(0, limit);
}
function getProductFilters(products) {
  return {
    categories: [...new Set(products.map((product) => product.category))],
    materials: [...new Set(products.map((product) => product.material))]
  };
}
function formatPrice(value, currency = "USD") {
  return new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 0 }).format(value);
}

const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ProductCard;
  const locale = getLocaleFromParams(Astro2.params);
  const { product, eager = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(getUrlWithLocale(`/products/${product.slug}`, locale), "href")} class="group block space-y-4" data-product-card> <div class="aspect-[4/5] overflow-hidden rounded-[min(1vw,12px)] bg-paper"> <img${addAttribute(product.images[0], "src")}${addAttribute(`${product.name} — ${product.shortDescription}`, "alt")}${addAttribute(1024, "width")}${addAttribute(1280, "height")}${addAttribute(eager ? "eager" : "lazy", "loading")}${addAttribute(eager ? "sync" : "async", "decoding")} class="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"> </div> <div class="flex items-start justify-between gap-4"> <div> <h2 class="text-sm font-medium">${product.name}</h2> <p class="text-xs text-faded">${product.shortDescription}</p> </div> <span class="text-sm tabular-nums">${formatPrice(product.price, product.currencyCode)}</span> </div> </a>`;
}, "C:/Users/PC/Desktop/ser-ceramico/src/components/ProductCard.astro", void 0);

export { $$ProductCard as $, getProductFilters as a, getRelated as b, formatPrice as f, getProducts as g };

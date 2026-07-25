export type Product = {
  slug: string;
  name: string;
  collection: string;
  category: string;
  material: string;
  price: number;
  currencyCode: string;
  shortDescription: string;
  description: string;
  dimensions: string;
  finish: string;
  leadTime: string;
  images: string[];
  availableForSale: boolean;
  order: number;
};

type ShopifyImage = { url: string; altText: string | null };
type ShopifyProduct = {
  handle: string;
  title: string;
  description: string;
  productType: string;
  tags: string[];
  availableForSale: boolean;
  images: { nodes: ShopifyImage[] };
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
};

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

function getEndpoint(): string {
  const store = import.meta.env.SHOPIFY_STORE?.trim();
  if (!store) throw new Error("Missing SHOPIFY_STORE in .env");
  if (store.includes("/api/")) return store;
  return `https://${store.replace(/^https?:\/\//, "").replace(/\/$/, "")}/api/2025-07/graphql.json`;
}

function tagValue(tags: string[], key: string, fallback: string): string {
  const tag = tags.find((item) => item.toLowerCase().startsWith(`${key.toLowerCase()}:`));
  return tag ? tag.slice(tag.indexOf(":") + 1).trim() || fallback : fallback;
}

function toProduct(product: ShopifyProduct, order: number): Product {
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
    order,
  };
}

export async function getProducts(): Promise<Product[]> {
  const token = import.meta.env.SHOPIFY_STOREFRONT_TOKEN?.trim();
  if (!token) throw new Error("Missing SHOPIFY_STOREFRONT_TOKEN in .env");

  const response = await fetch(getEndpoint(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query }),
  });
  if (!response.ok) throw new Error(`Shopify request failed (${response.status})`);

  const result = (await response.json()) as { data?: { products?: { nodes: ShopifyProduct[] } }; errors?: { message: string }[] };
  if (result.errors?.length) throw new Error(`Shopify error: ${result.errors.map((error) => error.message).join(", ")}`);
  return (result.data?.products?.nodes ?? []).map(toProduct);
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  return (await getProducts()).find((product) => product.slug === slug);
}

export function getRelated(products: Product[], slug: string, limit = 3): Product[] {
  return products.filter((product) => product.slug !== slug).slice(0, limit);
}

export function getProductFilters(products: Product[]): { categories: string[]; materials: string[] } {
  return {
    categories: [...new Set(products.map((product) => product.category))],
    materials: [...new Set(products.map((product) => product.material))],
  };
}

export function formatPrice(value: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 0 }).format(value);
}

export function productForJson(product: Product) {
  return product;
}

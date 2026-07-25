function GET({ site }) {
  const baseUrl = site ?? new URL("https://atelier-ko-topaz.vercel.app");
  const sitemapUrl = new URL("/sitemap-index.xml", baseUrl);

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl.href}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

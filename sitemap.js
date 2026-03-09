export default function handler(req, res) {

  const baseUrl = "https://oasisluxuryllc.com";

  const routes = [
    "",
    "/about",
    "/visa_services",
    "/tour_packages",
    "/desert_safari",
    "/contact",
    "/blogs",
    "/oasis_luxury"
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map((route) => {
        return `
          <url>
            <loc>${baseUrl}${route}</loc>
            <changefreq>weekly</changefreq>
            <priority>${route === "" ? "1.0" : "0.8"}</priority>
          </url>
        `;
      })
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
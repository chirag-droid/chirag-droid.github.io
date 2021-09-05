import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";

const { format } = prettier;

const getDate = new Date().toISOString();

const webrootDomain = "https://chirag.vercel.app";

const formatted = sitemap => format(sitemap, { parser: "html" });

(async () => {
  const pages = await globby(["../pages/*.js", "../public/*.png", "../public/languages/*.svg", "!../pages/_*.js"]);

  const sitemapIndex = `
    ${pages
      .map(page => {
        const path = page.replace("../public/", "").replace("../pages/", "").replace(".js", "");
        return `
          <sitemap>
            <loc>${`${webrootDomain}/${path}`}</loc>
            <lastmod>${getDate}</lastmod>
          </sitemap>`;
      })
      .join("")}
  `;

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapIndex}
    </sitemapindex>
  `;

  const formattedSitemap = formatted(sitemap);

  writeFileSync("../public/sitemap.xml", formattedSitemap, "utf8");
})();
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "CCBot", "anthropic-ai", "ClaudeBot"],
        disallow: "/",
      },
    ],
    sitemap: "https://odc.vjacquet.fr/sitemap.xml",
  };
}

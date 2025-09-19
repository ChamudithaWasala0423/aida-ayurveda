import type { MetadataRoute } from "next";
import sanityClient from "../../sanity/sanity.client";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.aidaayurveda.com";
const LOCALES = ["en", "de", "ru"] as const;

type Post = { slug: string; _updatedAt?: string };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic content (blog posts)
  const posts = (await sanityClient.fetch(
    `*[_type == "post"]{ "slug": slug.current, _updatedAt }`
  )) as Post[];

  const now = new Date();

  // Static top-level routes present in src/app/[locale]/
  const staticPaths = [
    "", // locale homepage e.g. /en
    "about",
    "aida-hotel",
    "aida-ayurveda",
    "aida-yoga",
    "accommodation",
    "gallery",
    "contact",
    "blog",
    "privacy-policy",
    "cookie-policy",
    "thankyou",
  ];

  const makeLangAlternates = (path: string) => {
    const clean = path.replace(/^\//, "");
    const map: Record<string, string> = {};
    for (const locale of LOCALES) {
      const tail = clean.length ? `/${clean}` : "";
      map[locale] = `${SITE_URL}/${locale}${tail}`;
    }
    map["x-default"] = SITE_URL;
    return { languages: map } as MetadataRoute.Sitemap[0]["alternates"]; 
  };

  const staticEntries: MetadataRoute.Sitemap = staticPaths.flatMap((p) => {
    const tail = p ? `/${p}` : "";
    return LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${tail}`,
      lastModified: now,
      changeFrequency: p === "" || p === "blog" ? "daily" : "weekly",
      priority: p === "" ? 1.0 : 0.7,
      alternates: makeLangAlternates(p),
    }));
  });

  const postEntries: MetadataRoute.Sitemap = posts.flatMap((post) => {
    const last = post._updatedAt ? new Date(post._updatedAt) : now;
    const path = `/post/${post.slug}`;
    return LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: last,
      changeFrequency: "daily",
      priority: 0.9,
      alternates: makeLangAlternates(path),
    }));
  });

  return [...staticEntries, ...postEntries];
}

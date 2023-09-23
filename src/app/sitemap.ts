import { MetadataRoute } from "next";
import { fetchPosts } from "@/utils/fetchPosts";

const WEBSITE_URL = "https://myselfrakib.com";

type changeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchPosts();
  const changeFrequency = "daily" as changeFrequency;

  const postsData = posts.data.map(
    ({ slug, date }: { slug: string; date: string }) => ({
      url: `${WEBSITE_URL}/blog/${slug}`,
      lastModified: date,
      changeFrequency,
    })
  );

  const routes = ["", "/blog", "/#about", "/#projects"].map((route) => ({
    url: `${WEBSITE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
  }));

  return [...routes, ...postsData];
}

import { MetadataRoute } from "next";
import { getBlogPosts } from "app/db/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://yashsoni.com/blog/${post.slug}`,
    lastModified: post.metadata.date,
  }));

  let routes = ["", "/about", "/blog", "/tags"].map((route) => ({
    url: `https://yashsoni.io${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}

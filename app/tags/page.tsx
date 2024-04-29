import { getBlogPosts } from "app/db/blog";
import { ArticleTag } from "../components/article";

export const metadata = {
  title: "Yash Soni - Tags",
  description: "Experiments on programming, tech, ML/AI and life in general.",
};

export default function TagsPage({ searchParams }) {
  const uniqueTagsSet = new Set<string>();

  getBlogPosts().forEach((post) => {
    const tags = post.metadata.tags?.split(",").map((tag) => tag.trim()) || [];
    tags.forEach((tag) => uniqueTagsSet.add(tag));
  });

  const uniqueTags = Array.from(uniqueTagsSet);
  return (
    <section className="flex gap-4 flex-wrap p-4">
      {uniqueTags.map((tag) => (
        <ArticleTag key={tag} href={`/tags/${tag}`} tag={tag} />
      ))}
    </section>
  );
}

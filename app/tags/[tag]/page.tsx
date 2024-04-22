import { getBlogPosts } from "app/db/blog";
import { ArticleList } from "app/components/article";

export const metadata = {
  title: "Yash Soni - Tags",
  description: "Experiments on programming, tech, ML/AI and life in general.",
};

export default function PostsFromTags({ params }) {
  let allPosts = getBlogPosts([params.tag]);

  return (
    <section>
      <ArticleList allPosts={allPosts} />
    </section>
  );
}

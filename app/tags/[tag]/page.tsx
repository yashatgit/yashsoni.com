import { getBlogPosts } from "app/db/blog";
import { ArticleList } from "app/components/article";
import { PageHeading } from "app/components/pageLayout";

export const metadata = {
  title: "Yash Soni - Tags",
  description: "Experiments on programming, tech, ML/AI and life in general.",
};

export default function PostsFromTags({ params }) {
  let allPosts = getBlogPosts([params.tag]);

  return (
    <section>
      <PageHeading title={`Tag: ${params.tag}`} />
      <ArticleList allPosts={allPosts} />
    </section>
  );
}

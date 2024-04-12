import Link from "next/link";
import { getBlogPosts } from "app/db/blog";
import { Article } from "app/components/article";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">read my blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Article href={`/blog/${post.slug}`} metadata={post.metadata} key={post.metadata.title} />
        ))}
    </section>
  );
}

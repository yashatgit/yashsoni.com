import { getBlogPosts } from "app/db/blog";
import { Article } from "app/components/article";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

const Blog = () => (
  <div className="mb-8">
    <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">Writing</h3>
  </div>
);

const TIL = () => {
  return (
    <div className="mb-8">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Today I Learned
      </h3>
      <div className="mb-6 text-sm md:text-base">
        This is just a collection of small bits and pieces of knowledge I picked up on my way. We learn something new
        every day, so I wanted to keep that gained knowledge accessible for later. It also makes sharing easier. Most of
        it is just random thoughts and code snippets, with links to further resources.
      </div>
    </div>
  );
};

export default function WritingPage({ searchParams }) {
  const { category } = searchParams;
  let allBlogs = getBlogPosts(category ? category.split(",") : undefined);
  //console.log(allBlogs.map((b) => b.slug));

  return (
    <section>
      {category === "til" ? <TIL /> : <Blog />}
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

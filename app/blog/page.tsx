import { getBlogPosts } from "app/db/blog";
import { Article } from "app/components/article";

export const metadata = {
  title: "Yash Soni - Blog",
  description: "Experiments on programming, tech, ML/AI and life in general.",
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
        A collection of small nuggets of knowledge I've gathered along my journey. Learning something new every day, so
        I'm keeping it handy for later. Makes it easier to share too. Mostly just random thoughts and bits of code, with
        links to more info.
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

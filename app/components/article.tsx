import React from "react";
import Link from "next/link";

export const ArticleTag = ({ href, tag }) => {
  return (
    <Link href={href}>
      <span className="bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 border border-slate-100 hover:border-indigo-600">
        #{tag}
      </span>
    </Link>
  );
};

export const Article = ({ href, metadata }) => {
  const tags = metadata.tags?.split(",").filter((tag) => tag !== "blog" && tag !== "til");
  // const readTime = metadata.readingTime ? ` • ⏱ ${metadata.readingTime}` : "";
  return (
    <Link href={href}>
      <div className="w-full">
        <article className="mb-8 group transition-all font-light rounded-lg overflow-hidden  dark:border-slate-700 p-4 shadow-sm dark:hover:shadow-white dark:hover:shadow-sm hover:shadow-md border border-slate-200">
          {/* <Date>{article.date}</Date> */}
          <div className="text-lg lg:text-2xl font-medium text-1 group-hover:text-link duration:200">
            {metadata.title}
          </div>
          {/* <div className="text-2 text-sm md:text-base">{`${article.description}${readTime}`}</div> */}
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{`${metadata.description}`}</p>
          <div className="flex gap-2 flex-wrap mt-1">
            {tags.map((tag) => (
              <ArticleTag key={tag} href={`/tags/${tag}`} tag={tag} />
            ))}
          </div>
        </article>
      </div>
    </Link>
  );
};

export const ArticleList = ({ allPosts }) => {
  if (!allPosts.length) {
    return null;
  }
  return (
    <section>
      {allPosts
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
};

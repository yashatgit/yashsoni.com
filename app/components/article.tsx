import React from "react";
import Link from "next/link";

export const ArticleTag = ({ href, tag }) => {
  return (
    <Link href={href}>
      <span className="bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">#{tag}</span>
    </Link>
  );
};

export const Article = ({ href, metadata }) => {
  const readTime = metadata.readingTime ? ` • ⏱ ${metadata.readingTime}` : "";
  return (
    <Link href={href}>
      <div className="w-full">
        <article className="mb-8 group transition-all font-light">
          {/* <Date>{article.date}</Date> */}
          <div className="text-lg lg:text-2xl font-medium text-1 group-hover:text-link duration:200">
            {metadata.title}
          </div>
          {/* <div className="text-2 text-sm md:text-base">{`${article.description}${readTime}`}</div> */}
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{`${metadata.description}${readTime}`}</p>
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

import React from "react";
import Link from "next/link";

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

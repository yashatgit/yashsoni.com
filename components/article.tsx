import React from 'react';
import Link from 'next/link';
// import Date from '../date';

const Article = ({ basePath, article }) => {
  const readTime = article.readingTime
    ? ` • ⏱ ${article.readingTime.text}`
    : '';
  return (
    <Link href={`/${basePath}/${article.slug}`}>
      <a className="w-full">
        <article className="mb-8 group transition-all font-light">
          {/* <Date>{article.date}</Date> */}
          <div className="text-lg lg:text-2xl font-medium text-1 group-hover:text-link duration:200">
            {article.title}
          </div>
          {/* <div className="text-2 text-sm md:text-base">{`${article.description}${readTime}`}</div> */}
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{`${article.description}${readTime}`}</p>
        </article>
      </a>
    </Link>
  );
};

export default Article;

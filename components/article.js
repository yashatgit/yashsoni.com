import React from 'react';
// import Date from '../date';

const Article = ({ article }) => {
  const readTime = article.readingTime ? ` • ⏱ ${article.readingTime.text}` : '';
  return (
    <>
      <article className="mb-8 group transition-all">
        <a href={article.slug}>
          {/* <Date>{article.date}</Date> */}
          <div className="text-lg lg:text-2xl font-medium text-1 group-hover:text-link duration:200">
            {article.title}
          </div>
          <div className="text-2 text-sm md:text-base">{`${article.description}${readTime}`}</div>
        </a>
      </article>
    </>
  );
};

export default Article;

import React from 'react';
import Head from 'next/head';
import { NextSeo, ArticleJsonLd } from 'next-seo';

import { dateTime as _dateTime, generateUrlFromFrontMatter } from '../utils/date-format';

const BlogSeo = ({ frontMatter }) => {
  const { date, description, image, title = 'Yash Soni', keywords } = frontMatter;
  const url = `https://yashsoni.com/${generateUrlFromFrontMatter(frontMatter)}`;
  const dateTime = date ? _dateTime(date) : null;
  const featuredImage = {
    url: image || 'https://yashsoni.com/static/images/og-banner.png',
    alt: title,
  };

  return (
    <>
      <Head>
        <meta content={keywords} name="keywords" />
      </Head>
      <NextSeo
        title={`${title} – Yash Soni`}
        description={description}
        keywords={keywords}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: dateTime,
          },
          url,
          title,
          description: description,
          images: [featuredImage],
        }}
      />
      <ArticleJsonLd
        authorName="Yash Soni"
        dateModified={dateTime}
        datePublished={dateTime}
        description={description}
        images={[featuredImage]}
        publisherLogo="/static/favicons/favicon-192x192.png"
        publisherName="Yash Soni"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;

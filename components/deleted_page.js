import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { ArticleJsonLd } from 'next-seo';

import { dateTime } from '../utils/date-format';
import titleStyle from '../utils/title-style';

const Page = ({ children, date, description, image, title = 'Yash Soni', keywords, router, frontMatter }) => {
  const domain = 'https://yashsoni.com';
  const formattedTitle = titleStyle(title);
  const url = router && router.asPath ? router.asPath : undefined;
  const canonical = url && url === '/' ? domain : domain + url;
  const featuredImage = domain + image;

  return (
    <>
      <Head>
        <title>{formattedTitle}</title>
        {description && <meta content={description} name="description" />}
        {keywords && <meta content={keywords} name="keywords" />}
        {url && <link href={canonical} rel="canonical" />}
        <meta content="en_US" property="og:locale" />
        <meta content={formattedTitle} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={canonical} property="og:url" />\{' '}
        {featuredImage && (
          <>
            <meta content={featuredImage} property="og:image" />
            <meta content={description} property="og:image:alt" />
          </>
        )}
        {date && (
          <>
            <meta content="article" property="og:type" />
            <meta content={dateTime(date)} property="article:published_time" />
          </>
        )}
      </Head>

      {children}
      {date && (
        <ArticleJsonLd
          authorName="Yash Soni"
          dateModified={dateTime(date)}
          datePublished={dateTime(date)}
          description={description}
          images={[featuredImage]}
          publisherLogo="/static/favicons/favicon-192x192.png"
          publisherName="Yash Soni"
          title={formattedTitle}
          url={canonical}
        />
      )}
    </>
  );
};

export default withRouter(Page);

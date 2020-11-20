import React from 'react';
import { NextSeo } from 'next-seo';

const DefaultSEO = ({ url, title, description }) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
      }}
    />
  );
};

export default DefaultSEO;

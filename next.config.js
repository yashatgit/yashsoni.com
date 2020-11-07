const rehypePrism = require('@mapbox/rehype-prism');
const withImages = require('next-images');
const withMDX = require('@next/mdx')({
  extension: /\.(mdx)?$/u,
  options: {
    rehypePlugins: [rehypePrism],
    remarkPlugins: [require('remark-autolink-headings'), require('remark-slug'), require('remark-code-titles')],
  },
});
//const withPWA = require('next-pwa');

module.exports = withImages(
  //withPWA(
  withMDX({
    experimental: {
      modern: true,
    },
    pageExtensions: ['js', 'mdx'],
    webpack: (config, { isServer }) => {
      if (isServer) {
        require('./scripts/generate-sitemap');
      }

      return config;
    },
    pwa: {
      disable: process.env.NODE_ENV === 'development',
      dest: 'public',
    },
  })
  // )
);

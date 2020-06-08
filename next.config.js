const rehypePrism = require('@mapbox/rehype-prism');
const withMDX = require('@next/mdx')({
  extension: /\.(mdx)?$/u,
  options: {
    rehypePlugins: [rehypePrism],
  },
});
const withPWA = require('next-pwa');

module.exports = withPWA(
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
);

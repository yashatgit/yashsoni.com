const readingTime = require('reading-time');
const withPlugins = require('next-compose-plugins');
const rehypePrism = require('@mapbox/rehype-prism');
const withImages = require('next-images');
const withMdxEnhanced = require('next-mdx-enhanced');

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }
    return config;
  },
  experimental: {
    modern: true,
  },
  pageExtensions: ['js', 'mdx'],
};

module.exports = withPlugins(
  [
    withMdxEnhanced({
      remarkPlugins: [require('remark-autolink-headings'), require('remark-slug')],
      rehypePlugins: [rehypePrism],
      layoutPath: 'layouts',
      defaultLayout: true,
      extendFrontMatter: {
        process: mdxContent => ({
          wordCount: mdxContent.split(/\s+/gu).length,
          readingTime: readingTime(mdxContent),
        }),
      },
    })({
      pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    }),
    withImages,
  ],
  nextConfig
);

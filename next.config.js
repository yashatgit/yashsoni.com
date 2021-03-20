const readingTime = require('reading-time');
const withPlugins = require('next-compose-plugins');
const rehypePrism = require('@mapbox/rehype-prism');
const withImages = require('next-images');
const withVideos = require('next-videos');
const withMdxEnhanced = require('next-mdx-enhanced');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

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
    withVideos,
    withBundleAnalyzer,
  ],
  nextConfig
);

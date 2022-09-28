/** @type {import('next').NextConfig} */

module.exports = module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    })
    return configuration
  },
};

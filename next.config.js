/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/art-portfolio',
  assetPrefix: '/art-portfolio/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
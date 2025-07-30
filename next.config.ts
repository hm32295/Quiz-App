/** @type {import('next').NextConfig} */
const nextConfig:any = {
  experimental: {
    turbo: false, // نرجع لـ Webpack بدل Turbopack
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  swcMinify: false,
  compiler: {
    removeConsole: false,
  },
};

export default nextConfig;

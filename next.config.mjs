/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;

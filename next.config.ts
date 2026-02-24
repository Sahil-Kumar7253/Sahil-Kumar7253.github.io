/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This is the crucial line
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
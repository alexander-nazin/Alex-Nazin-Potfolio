/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Tells Next.js to compile even if there is a strict type check warning
  },
  images: { 
    unoptimized: true 
  },
};

module.exports = nextConfig;
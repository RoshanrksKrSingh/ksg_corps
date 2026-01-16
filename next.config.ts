import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 1. Allow Images from External Sources
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.amazonaws.com', // AWS S3 (Future use)
      },
      {
        protocol: 'http',
        hostname: 'ksgcorps.com', // Your existing logo is http
      },
      {
        protocol: 'https',
        hostname: 'ksgcorps.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // Used in About/WhyChoose
      },
      {
        protocol: 'https',
        hostname: 'cdn-becae.nitrocdn.com', // Used in Hero
      },
      {
        protocol: 'https',
        hostname: 'www.transparenttextures.com', // Used in Footer BG
      }
    ],
  },
  
  // 2. Strict React mode for better debugging
  reactStrictMode: true,
};

export default nextConfig;
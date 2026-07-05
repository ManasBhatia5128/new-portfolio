import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ddi1t29kj972x.cloudfront.net',
      },
    ],
  },
};

export default nextConfig;

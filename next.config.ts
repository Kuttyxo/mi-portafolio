import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org', // <--- Permitimos imágenes de Wikipedia
      },
    ],
  },
};

export default nextConfig;

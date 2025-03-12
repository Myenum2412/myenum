import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com", 
      "aceternity.com", 
      "api.microlink.io", 
      "www.google.com",
      "qsuv73ya7y.ufs.sh",
    ], // Allow images from specified domains
  },
};

export default nextConfig;

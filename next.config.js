/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "custom-images.strikinglycdn.com",
      },
    ],
  },
};

module.exports = nextConfig;

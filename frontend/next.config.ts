import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/guides/youtube-monetization-checker",
        destination: "/",
        permanent: true,
      },
      {
        source: "/guides/can-you-see-if-a-youtube-channel-is-monetized",
        destination: "/guides/how-to-tell-if-a-youtube-channel-is-monetized",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yt3.ggpht.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

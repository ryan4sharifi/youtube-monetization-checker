import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["yt3.ggpht.com", "i.ytimg.com"],
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
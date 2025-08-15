import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    LOCAL_BASE_DOMAIN_URL: process.env.LOCAL_BASE_DOMAIN_URL,
  },
};

export default nextConfig;

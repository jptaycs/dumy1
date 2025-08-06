import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 👈 This is the only thing you need
  },
};

module.exports = nextConfig;





export default nextConfig;

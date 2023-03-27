/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CURRENT_VERSION: process.env.CURRENT_VERSION,
    LATEST_VERSION: process.env.LATEST_VERSION
  }
}

module.exports = nextConfig

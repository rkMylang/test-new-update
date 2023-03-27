/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CURRENT_VERSION: process.env.CURRENT_VERSION,
    LATEST_VERSION: process.env.LATEST_VERSION,
    APP_NAME: process.env.APP_NAME,
    PROJECT_ID: process.env.PROJECT_ID,
    VERCEL_TOKEN: process.env.VERCEL_TOKEN,
    VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA
  }
}

module.exports = nextConfig

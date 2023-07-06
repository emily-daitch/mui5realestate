/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: ['dvvjkgh94f2v6.cloudfront.net']
  },
}

module.exports = nextConfig

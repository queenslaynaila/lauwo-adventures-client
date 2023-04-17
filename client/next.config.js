/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['images.unsplash.com','upload.wikimedia.org','i.pinimg.com', 'plus.unsplash.com'],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'toppng.com', 'premiumwheels.de', 'images-porsche.imgix.net', '1000logos.net', 'i.pinimg.com', 'logos-world.net'],
  },
  trailingSlash: false,
}

module.exports = nextConfig

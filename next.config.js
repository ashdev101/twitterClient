/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'media.giphy.com',
          },
          {
            hostname: 'media0.giphy.com',
          },
          {
            hostname: 'media1.giphy.com',
          },
          {
            hostname: 'media2.giphy.com',
          },
          {
            hostname: 'media3.giphy.com',
          },
          {
            hostname: 'media4.giphy.com',
          },
          {
            hostname : "res.cloudinary.com"
          }

        ],
      },
}

module.exports = nextConfig

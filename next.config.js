const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'upload.wikimedia.org',
      'i.pinimg.com',
      'plus.unsplash.com',
      'explorerspassage.com',
      'www.shadowsofafrica.com',
      'media-cdn.tripadvisor.com',
      'www.discoverafricablog.com',
      'www.willflyforfood.net',
      'www.tranquilkilimanjaro.com',
      'img.traveltriangle.com',
    ],
  },
  distDir: 'build',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Expires',
            value: new Date(Date.now() + 31536000000).toUTCString(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

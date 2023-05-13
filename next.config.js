const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
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
  webpack: (config, { isServer }) => {
    // Only apply the plugin on the server-build target
    if (isServer) {
      config.plugins.push(
        new CopyPlugin({
          patterns: [
            { from: './_redirects', to: './' }
          ],
        })
      );
    }

    return config;
  },
};

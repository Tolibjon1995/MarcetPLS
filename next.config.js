const withImages = require('next-images')
module.exports = {
  ...withImages({
    webpack(config, options) {
      return config
    }
  }),
  images: {
    disableStaticImages: true,
  },
  reactStrictMode: true,
  trailingSlash: false,
  exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/product/:id': { page: '/product/:id' },
    }
  },
}
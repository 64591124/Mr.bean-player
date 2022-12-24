const path = require('path')
const CracolessPlugin = require('craco-less')
const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = {
  plugins: [
    {
      plugin: CracolessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  webpack: {
    alias: {
      '@': resolve('src'),
      // eslint-disable-next-line prettier/prettier
      components: resolve('src/components'),
      '~': resolve('')
    }
  }
}

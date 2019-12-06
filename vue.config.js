

const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}


module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'testDir/subTestDir'
    : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'test.html',
  filenameHashing: false,
  // devServer: {
  //   open: true,
  //   proxy: {
  //     '/vBank': {
  //       target: 'http://127.0.0.1:8082',
  //       ws: true,
  //       changeOrigin: true,
  //     },
  //   }
  // },
  chainWebpack: config => {
    // alias
    config.resolve.alias
      .set('@', resolve('src'))
    // global stylus settings
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  },
}


// 全局stylus配置引入
function addStyleResource (rule) {  
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/globalSettings.styl'),
      ],
    })
}
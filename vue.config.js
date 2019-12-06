
const path = require('path')


module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'testDir/subTestDir'
    : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'test.html',
  filenameHashing: false, // 文件名哈希
  productionSourceMap: false, // 生产环境的source map文件
  // 代理
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
  configureWebpack: {
    // 别名
    resolve: {
      alias: {
        'imgs': 'src/assets/res/imgs',
      }
    }
  },
  chainWebpack: config => {
    // 全局 stylus 设置
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
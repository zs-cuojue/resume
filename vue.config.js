module.exports = {
  publicPath: './',
  outputDir: 'docs',
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '张森个人简历'
      return args
    })
  },
  devServer: {
    open: true
  }
}

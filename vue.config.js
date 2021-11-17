module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Виталя лучший в мире!!'
      return args
    })
  },
}

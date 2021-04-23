module.exports = {
  siteName: 'SteemPanel',
  siteUrl: 'https://steempanel.online',
  titleTemplate: '%s - SteemPanel',
  siteDescription: 'SteemPanel is a free blockchain tool which calculate the approximate value of an upvote calculator on Steem, Steem power, transactions, SBD value and account information.',
  // chainWebpack (config, { isServer }) {
  //   config.module.rules.delete('svg')
  //   config.module.rule('svg')
  //     .test(/\.svg$/)
  //     .use('vue')
  //     .loader('vue-loader')
  //     .end()
  //     .use('svg-to-vue-component')
  //     .loader('svg-to-vue-component/loader')
  // },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    }
  ]
}

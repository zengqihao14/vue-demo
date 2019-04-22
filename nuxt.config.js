const pkg = require('./package')
const ENV = () => {
  switch (process.env.NODE_ENV) {
    case 'local':
      return {
        API_BASE_URL: 'http://localhost:3100'
      };
    case 'development':
      return {
        API_BASE_URL: 'http://development'
      };
    default:
      return {
        API_BASE_URL: 'http://production'
      };
  }
};


module.exports = {
  mode: 'universal',
  env: ENV(),
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/LoadingTemplate.vue',

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}

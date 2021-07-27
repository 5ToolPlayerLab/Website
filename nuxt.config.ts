import { NuxtConfig } from '@nuxt/types';
import Sass from 'sass';
import { theme } from './assets/chakra-theme';

const isProduction = process.env.NODE_ENV === 'production';

const config: NuxtConfig = {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  publicRuntimeConfig: {
    acuityScheduling: {
      embedScriptUrl: 'https://embed.acuityscheduling.com/js/embed.js',
      iframeUrl: 'https://app.acuityscheduling.com/schedule.php?owner=23646529',
    },
    venmo: {
      url: 'https://venmo.com/lab5t',
      appleDeepLink: 'venmo://users/92997158',
      androidDeepLink:
        'intent://venmo.com/lab5t#Intent;package=com.venmo;scheme=https;end',
    },
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '5 Tool Player Lab',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://composition-api.nuxtjs.org/
    '@nuxtjs/composition-api',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    'nuxt-webfontloader',
    'nuxt-compress',
  ],

  generate: {
    // https://github.com/nuxt-community/composition-api/issues/44
    // interval: 1000,
  },

  render: {
    static: {
      maxAge: isProduction ? 60 * 60 * 24 * 30 : 0,
    },
    http2: { push: true, pushAssets: undefined },
  },

  chakra: {
    extendTheme: theme,
  },

  styleResources: {
    scss: [
      '~/assets/scss/vars/*.scss',
      '~/assets/scss/mixins/*.scss',
      // '~/assets/scss/theme.scss',
    ],
  },

  /**
   * https://github.com/Developmint/nuxt-webfontloader
   */
  webfontloader: {
    google: {
      // https://fonts.googleapis.com/css2?family=Staatliches&display=swap
      families: ['Staatliches:display=swap'],
    },
  },

  /*
   * Static assets compression module
   ** https://github.com/robcresswell/nuxt-compress
   */
  'nuxt-compress': {
    gzip: {
      cache: true,
    },
    brotli: {
      threshold: 10240,
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    loaders: {
      scss: {
        implementation: Sass,
      },
    },
  },
};

export default config;

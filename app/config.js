module.exports = {
  // Service name
  serviceName: 'NHSX',

  // Environment
  env: process.env.NODE_ENV || 'development',

  // Port to run local development server on
  port: process.env.PORT || 3000,

  // Google analytics
  analytics: {
    googleUA: 'UA-137452494-1',
  },

  // Cookie consent banner
  cookies: {
    scriptURL: '//assets.nhs.uk/scripts/cookie-consent.js',
  },
};

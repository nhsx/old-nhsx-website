module.exports = {
  // Service name
  serviceName: 'NHSX',

  // Environment
  env: process.env.NODE_ENV || 'development',

  // Port to run local development server on
  port: process.env.PORT || 3000,

  // Adobe analytics
  analytics: {
    development: '//assets.adobedtm.com/launch-ENd266f1c707a54447ad3aae80d61322de-development.min.js',
    staging: '//assets.adobedtm.com/launch-ENa55251f775954d9592d110a6b4ad26a1-staging.min.js',
    production: '',
  },

  // Cookie consent banner
  cookies: {
    scriptURL: '//assets.nhs.uk/scripts/cookie-consent.js',
  },
};

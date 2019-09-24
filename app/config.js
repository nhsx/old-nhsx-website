module.exports = {
  // Service name
  serviceName: 'NHSX',

  // Environment
  env: process.env.NODE_ENV || 'development',

  // Base URL
  baseURL: process.env.BASE_URL || 'https://www.nhsx.nhs.uk',

  // Port to run local development server on
  port: process.env.PORT || 3000,

  // Cookie consent banner
  cookies: {
    scriptURL: process.env.COOKIE_CONSENT_URL || '/js/cookies.min.js',
  },
};

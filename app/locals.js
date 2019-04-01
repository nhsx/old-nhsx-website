module.exports = config => (req, res, next) => {
  res.locals.COOKIE_CONSENT_URL = config.cookies.scriptURL;
  res.locals.env = config.env;
  res.locals.GOOGLE_UA = config.analytics.googleUA;
  res.locals.serviceName = config.serviceName;

  next();
};

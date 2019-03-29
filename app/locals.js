module.exports = config => (req, res, next) => {
  res.locals.serviceName = config.serviceName;
  res.locals.env = config.env;

  if (config.env === 'development') {
    res.locals.ADOBE_TRACKING_URL = config.analytics.development;
  } else if (config.env === 'staging') {
    res.locals.ADOBE_TRACKING_URL = config.analytics.staging;
  } else {
    res.locals.ADOBE_TRACKING_URL = config.analytics.production;
  }

  res.locals.COOKIE_CONSENT_URL = config.cookies.scriptURL;

  next();
};

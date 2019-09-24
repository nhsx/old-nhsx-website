module.exports = config => (req, res, next) => {
  res.locals.COOKIE_CONSENT_URL = config.cookies.scriptURL;
  res.locals.BASE_URL = config.baseURL;

  next();
};

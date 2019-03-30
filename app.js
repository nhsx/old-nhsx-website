// Core dependencies
const path = require('path');

// External dependencies
const browserSync = require('browser-sync');
const compression = require('compression');
const express = require('express');
const nunjucks = require('nunjucks');

// Local dependencies
const config = require('./app/config');
const locals = require('./app/locals');
const routes = require('./app/routes');

// Initialise application
const app = express();

// Middleware to serve static assets
app.use(express.static(path.join(__dirname, 'public/')));
app.use('/nhsuk-frontend', express.static(path.join(__dirname, '/node_modules/nhsuk-frontend/packages')));

// View engine (Nunjucks)
app.set('view engine', 'njk');

// Use local variables
app.use(locals(config));

// Use gzip compression to decrease the size of
// the response body and increase the speed of web app
app.use(compression());

// Nunjucks configuration
const appViews = [
  path.join(__dirname, '/app/views/'),
];

nunjucks.configure(appViews, {
  autoescape: true,
  express: app,
  noCache: true,
  watch: true,
});

// Custom routes
app.use('/', routes);

// Run application on configured port
if (config.env === 'development') {
  app.listen(config.port - 50, () => {
    browserSync({
      files: ['app/views/**/*.*', 'public/**/*.*'],
      notify: true,
      open: false,
      port: config.port,
      proxy: `localhost:${config.port - 50}`,
      ui: false,
    });
  });
} else {
  app.listen(config.port);
}

module.exports = app;

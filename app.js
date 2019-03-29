// Core dependencies
const path = require('path');

// External dependencies
const browserSync = require('browser-sync');
const express = require('express');
const nunjucks = require('nunjucks');

// Local dependencies
const config = require('./app/config');
const locals = require('./app/locals');
const routing = require('./middleware/routing.js');
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

// Automatically route pages
app.get('/', (req, res, next) => {
  routing.matchRoutes(req, res, next);
});

if (config.env === 'development') {
  app.listen(config.port - 50, function() {
    browserSync({
      proxy: 'localhost:' + (config.port - 50),
      port: config.port,
      ui: false,
      files: ['app/views/**/*.*', 'public/**/*.*'],
      open: false,
      notify: true,
    })
  })
} else {
  app.listen(config.port);
}

module.exports = app;

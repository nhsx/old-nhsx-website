// External dependencies
const express = require('express');

// Initialise router
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/who-we-are', (req, res) => {
  res.render('pages/who-we-are');
});

router.get('/what-we-do', (req, res) => {
  res.render('pages/what-we-do');
});

router.get('/how-we-work', (req, res) => {
  res.render('pages/how-we-work');
});

router.get('/key-information-and-tools', (req, res) => {
  res.render('pages/key-information-and-tools/index');
});

router.get('/key-information-and-tools/apps-and-tools', (req, res) => {
  res.render('pages/key-information-and-tools/apps-and-tools');
});

router.get('/key-information-and-tools/designing-and-building-products-and-services', (req, res) => {
  res.render('pages/key-information-and-tools/designing-and-building-products-and-services');
});

router.get('/key-information-and-tools/policy-strategy-and-national-programmes', (req, res) => {
  res.render('pages/key-information-and-tools/policy-strategy-and-national-programmes');
});

router.get('/key-information-and-tools/blogs-and-updates', (req, res) => {
  res.render('pages/key-information-and-tools/blogs-and-updates');
});

router.get('/get-involved', (req, res) => {
  res.render('pages/get-involved');
});

router.get('/our-policies', (req, res) => {
  res.render('pages/our-policies/index');
});

router.get('/our-policies/cookies-policy', (req, res) => {
  res.render('pages/our-policies/cookies-policy');
});

router.get('/our-policies/cookie-declaration', (req, res) => {
  res.render('pages/our-policies/cookie-declaration');
});

router.get('/our-policies/terms-and-conditions', (req, res) => {
  res.render('pages/our-policies/terms-and-conditions');
});

router.get('/our-policies/privacy-policy', (req, res) => {
  res.render('pages/our-policies/privacy-policy');
});

router.get('/our-policies/accessibility', (req, res) => {
  res.render('pages/our-policies/accessibility');
});

router.get('/sitemap', (req, res) => {
  res.render('pages/sitemap');
});

router.get('/manifest.json', (req, res) => {
  res.set({ 'Content-Type': 'application/json' });
  res.render('manifest');
});

router.get('/sitemap.xml', (req, res) => {
  res.set({ 'Content-Type': 'application/xml' });
  res.render('sitemap.xml');
});

router.get('/robots.txt', (req, res) => {
  res.set('text/plain');
  res.render('robots.txt');
});

router.use((req, res) => {
  res.statusCode = 404;
  res.render('pages/404');
});

module.exports = router;

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
  res.render('pages/key-information-and-tools');
});

router.get('/get-involved', (req, res) => {
  res.render('pages/get-involved');
});

router.get('/our-policies', (req, res) => {
  res.render('pages/our-policies/index');
});

router.get('/our-policies/cookies', (req, res) => {
  res.render('pages/our-policies/cookies');
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

module.exports = router;

// External dependencies
const express = require('express');

// Initialise router
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
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

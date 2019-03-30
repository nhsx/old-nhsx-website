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

router.get('/our-policies/cookies-policy', (req, res) => {
  res.render('pages/our-policies/cookies-policy');
});

router.get('/our-policies/cookie-declaration', (req, res) => {
  res.render('pages/our-policies/cookie-declaration');
});

module.exports = router;

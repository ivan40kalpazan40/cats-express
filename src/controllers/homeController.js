const express = require('express');
const catService = require('../services/catServices');

const router = express.Router();

const renderHome = (req, res) => {
  const cats = catService.getAll();
  res.render('index', { cats });
};
router.get('/', renderHome);

module.exports = router;

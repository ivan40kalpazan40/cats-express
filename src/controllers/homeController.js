const express = require('express');
const catService = require('../services/catServices');

const router = express.Router();

const renderHome = (req, res) => {
  const cats = catService.getAll();
  res.render('index', { cats });
};
const showSearch = (req, res) => {
  const searchParam = req.query;
  const { search } = searchParam;
  const found = catService.find(search);
  res.render('search', { found });
};
router.get('/', renderHome);
router.get('/search', showSearch);

module.exports = router;

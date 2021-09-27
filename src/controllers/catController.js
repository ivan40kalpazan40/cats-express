const express = require('express');
const catService = require('../services/catServices');
const router = express.Router();

// ACTIONS
const addBreedPage = (req, res) => {
  res.render('addBreed');
};
const addCatPage = (req, res) => {
  res.render('addCat');
};
const createCat = (req, res) => {
  const { name, description, upload, breed } = req.body;
  // call create form carService to add a cat
  catService.addCat(name, description, upload, breed);
  res.redirect('/');
};

const editCatPage = (req, res) => {
  const id = req.params.id;
  res.render('editCat');
};

const shelterCatPage = (req, res) => {
  console.log(`Shelter cat with id - ${req.params.id}`);
};
router.get('/add-breed', addBreedPage);
router.get('/add-cat', addCatPage);
router.get('/edit/:id', editCatPage);
router.get('/shelter/:id', shelterCatPage);

router.post('/add-cat', createCat);
module.exports = router;

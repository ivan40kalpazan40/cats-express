const express = require('express');
const formidable = require('formidable');
const path = require('path');
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
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error(`FORM RELATED ERROR: ${err.message}`);
      return res.redirect('/');
    }
    const { name, description, upload, breed } = fields;
    const pathName = files.upload.path;
    const fileName = files.upload.name;
    const newPath = path.resolve(__dirname, '../public/images', fileName);
    // call create form carService to add a cat
    catService.addCat(name, description, fileName, breed);
    catService.uploadImage(pathName, newPath);
    res.redirect('/');
  });
};

const editCatPage = (req, res) => {
  const id = req.params.id;
  const cat = catService.findCat(id);
  res.render('editCat', { cat });
};

const catEdit = (req, res) => {
  const id = req.params.id;
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (err) return console.error(`ERROR WITH FILE:: ${err.message}`);
    const { name, description, upload, breed } = fields;
    const pathName = files.upload.path;
    const fileName = files.upload.name;
    const newPath = path.resolve(__dirname, '../public/images', fileName);
    const cat = { id, name, description, upload: fileName, breed };
    catService.edit(cat, pathName, newPath);
    res.redirect('/');
  });
};

const shelterCatPage = (req, res) => {
  const id = req.params.id;
  const cat = catService.findCat(id);
  res.render('catShelter', { cat });
};

router.get('/add-breed', addBreedPage);
router.get('/add-cat', addCatPage);
router.get('/edit/:id', editCatPage);
router.get('/shelter/:id', shelterCatPage);

router.post('/add-cat', createCat);
router.post('/edit/:id', catEdit);
module.exports = router;

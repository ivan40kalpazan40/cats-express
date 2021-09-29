const Cat = require('../model/Cat');
const fs = require('fs');
const getAll = () => Cat.getAll();
const getOne = (id) => Cat.cats.find((cat) => cat.id === id);

const addCat = (name, description, upload, breed) => {
  const cat = new Cat(name, description, upload, breed);
  Cat.addOne(cat);
};

const uploadImage = (oldPath, newPath) => {
  fs.rename(oldPath, newPath, (err) => {
    if (err) return console.error(`FILE UPLOAD ERR: ${err.message}`);
    console.log('FILE UPLOADED!');
  });
};

const findCat = (id) => {
  return Cat.cats.find((cat) => cat.id === id);
};

const edit = (cat, oldPath, newPath) => {
  uploadImage(oldPath, newPath);
  Cat.update(cat);
  console.log('Cat updated!');
};

const shelter = (cat) => {
  Cat.deleteCat(cat);
};

const find = (param) => {
  let cats = Cat.cats;
  cats = Cat.cats.filter((x) => x.name.toLowerCase() === param.toLowerCase());
  return cats;
};

module.exports = {
  getAll,
  getOne,
  addCat,
  uploadImage,
  findCat,
  edit,
  shelter,
  find,
};

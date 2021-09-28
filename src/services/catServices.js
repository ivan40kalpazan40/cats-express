const Cat = require('../model/Cat');
const fs = require('fs');
const { cats } = require('../model/Cat');
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
  // Find the cat with the same id with the edit cat
  // get index in the array
  // perform splice(delete at the index and add the edited one there)
  // log some info
  uploadImage(oldPath, newPath);
  Cat.update(cat);
  console.log('Cat updated!');
};

module.exports = {
  getAll,
  getOne,
  addCat,
  uploadImage,
  findCat,
  edit,
};

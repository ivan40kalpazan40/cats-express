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

module.exports = {
  getAll,
  getOne,
  addCat,
  uploadImage,
};

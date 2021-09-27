const Cat = require('../model/Cat');
const getAll = () => Cat.getAll();
const getOne = (id) => Cat.cats.find((cat) => cat.id === id);

const addCat = (name, description, upload, breed) => {
  const cat = new Cat(name, description, upload, breed);
  Cat.addOne(cat);
};

module.exports = {
  getAll,
  getOne,
  addCat,
};

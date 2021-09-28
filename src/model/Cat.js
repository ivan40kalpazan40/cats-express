const uniqid = require('uniqid');
class Cat {
  static cats = [
    {
      id: 'grf4g3cwacr34fg',
      name: 'Sally',
      description: 'Nice cat',
      upload: 'rubik.jpg',
      breed: 'Anghoran',
    },
  ];

  static breeds = [
    'Siamese',
    'Anghoran',
    'American',
    'Birman',
    'Egyptian',
    'Bhengali',
  ];

  constructor(name, description, upload, breed) {
    this.id = uniqid();
    this.name = name;
    this.description = description;
    this.upload = upload;
    this.breed = breed;
  }

  // get all cats
  static getAll() {
    return Cat.cats.slice();
  }

  // add cat to cats
  static addOne(cat) {
    Cat.cats.push(cat);
  }

  // delete cat from cats
  static deleteCat(cat) {
    const newCat = Cat.cats.filter((x) => x.id !== cat.id);
    Cat.cats = newCat;
  }

  // edit and update

  static update(cat) {
    const foundCat = Cat.cats.find((x) => x.id === cat.id);
    const index = Cat.cats.indexOf(foundCat);
    Cat.cats.splice(index, 1, cat);
  }

  static addBreed(breed) {
    if (!Cat.breeds.includes(breed)) {
      Cat.breeds.push(breed);
    }
  }

  static getBreeds() {
    return Cat.breeds.slice();
  }
}
module.exports = Cat;

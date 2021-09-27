const uniqid = require('uniqid');
class Cat {
  static cats = [
    {
      id: 'grf4g3cwacr34fg',
      name: 'Sally',
      description: 'Nice cat',
      upload: 'img.jpg',
      breed: 'Anghoran',
    },
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
}
module.exports = Cat;

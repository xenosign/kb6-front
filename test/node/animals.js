const animals = {
  animals: ['dog', 'cat'],
  showAnimals() {
    const self = this;
    self.animals.map((el) => console.log(el));
  },
};

module.exports = animals;

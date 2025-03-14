// const animals = ['dog', 'cat'];

// exports.animals = animals;

// exports.showAnimals = function showAnimals() {
//   animals.map(function (el) {
//     console.log('🚀 ~ el:', el);
//   });
// };

const animals = {
  animals: ['dog', 'cat'],
  showAnimals() {
    this.animals.map(function (el) {
      console.log('🚀 ~ el:', el);
    });
  },
};

module.exports = animals;

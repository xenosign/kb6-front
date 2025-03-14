// export const animals = ['dog', 'cat'];

// export function showAnimals() {
//   animals.map(function (el) {
//     console.log('🚀 ~ el:', el);
//   });
// }

// const animals = ['dog', 'cat'];

// function showAnimals() {
//   animals.map((el) => console.log('🚀 ~ animals.map ~ el:', el));
// }

// export { animals as ani, showAnimals as show };

const animals = {
  animals: ['dog', 'cat'],
  showAnimals() {
    this.animals.map((el) => console.log(el));
  },
};

export default animals;

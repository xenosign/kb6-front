const animal = {
  animals: ['dog', 'cat'],
  showAnimals: function () {
    console.log(this.animals.length);
    for (let i = 0; i < this.animals.length; i++) {
      console.log(this.animals[i]);
    }
  },
};
export default animal;

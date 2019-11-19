const multiplier = {
  numbers: [2,4,6],
  multiplier: 3,
  multiply(multiplier) {
    multiplier = (isNaN(multiplier)) ? this.multiplier : multiplier; 
    return this.numbers.map((num) => multiplier * num);
  }
};

console.log(multiplier.multiply());
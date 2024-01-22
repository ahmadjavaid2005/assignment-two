const numbersSet = new Set([1, 2, 3, 4, 5]);
const numbersMap = new Map();

// Populate Map with numbers and their squares
numbersSet.forEach((number) => {
  numbersMap.set(number, number * number);
});

// Print unique numbers and their corresponding squares
console.log("Unique Numbers:", Array.from(numbersSet));
console.log("Corresponding Squares:", Array.from(numbersMap.values()));

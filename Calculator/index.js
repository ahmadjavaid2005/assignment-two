// Calculator object
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  calculate: function (operation, a, b) {
    switch (operation) {
      case "add":
        return this.add(a, b);
      case "subtract":
        return this.subtract(a, b);
      case "multiply":
        return this.multiply(a, b);
      default:
        return NaN;
    }
  },
};

// Use call to perform an addition operation using the calculate method
const additionResult = calculator.calculate.call(calculator, "add", 10, 5);
console.log("Addition Result:", additionResult);

// Use apply to perform a multiplication operation using the calculate method with arguments as an array
const multiplicationResult = calculator.calculate.apply(calculator, [
  "multiply",
  8,
  2,
]);
console.log("Multiplication Result:", multiplicationResult);

// DiscountCalculator object
const discountCalculator = {
  discountPercentage: 10,
  applyDiscount: function (price) {
    const discountAmount = (this.discountPercentage / 100) * price;
    return price - discountAmount;
  },
};

// Use bind to create a new function calculateDiscount that is bound to the discountCalculator object
const calculateDiscount =
  discountCalculator.applyDiscount.bind(discountCalculator);

// Example usage of the bound function
const discountedPrice = calculateDiscount(100);
console.log("Discounted Price:", discountedPrice);

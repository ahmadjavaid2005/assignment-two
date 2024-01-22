const person1 = { name: "John", age: 25 };
const person2 = { name: "Alice", age: 30 };

function introduce() {
  console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}

// Use call method to make person2 introduce itself
introduce.call(person2);

// Function to display information
function displayInfo(name, role) {
  console.log(`Name: ${name}, Role: ${role}`);
}

// Use call to invoke displayInfo
displayInfo.call(null, "John", "Developer");

// Use apply to invoke displayInfo with arguments as an array
displayInfo.apply(null, ["Alice", "Designer"]);

// Function for greeting with this context
function greet() {
  console.log(`Hello, ${this.name}!`);
}

// Use bind to create a new function boundGreet with a specific context
const boundGreet = greet.bind({ name: "Bob" });

// Log the greeting using the bound function
boundGreet();

const contactMap = new Map();

// Add contact information
contactMap.set("John", {
  age: 25,
  email: "john@example.com",
  location: "New York",
});
contactMap.set("Alice", {
  age: 30,
  email: "alice@example.com",
  location: "London",
});

// Function to retrieve contact details by name
const getContactDetails = (name) => contactMap.get(name);

// Example usage:
const contactName = "John";
const contactDetails = getContactDetails(contactName);
console.log(`Contact details for ${contactName}:`, contactDetails);

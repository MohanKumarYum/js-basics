// objects

let person = {
    name: "Mosh",
    age: 30
};

person["name"] = "Mary"; // reassign property name.

console.log(person.name); // dot notation

console.log(person["name"]); // bracket notation

let selectedProperty = "age";

console.log(person[selectedProperty]); // determine the property selected at runtime/dynamically.

console.log(person.selectedProperty); // cannot use dot notation as "selectedProperty" is not linked to person object.

// arrays

let selectedColors = ["red","blue"];

selectedColors[2] = "green";

console.log(selectedColors.length);
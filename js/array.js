// Array Declaration
// [] Declaration
let num = [1, 2, 3, 4, 5];

// new Array() Declaration
let colors = new Array("Red", "Green", "Blue");

// Array operations
// Adding elements to an array
num.push(6); // Adds 6 to the end of the array
colors.push("Yellow"); // Adds "Yellow" to the end of the array
console.log(num); // Outputs: [1, 2, 3, 4, 5, 6]
console.log(colors); // Outputs: ["Red", "Green", "Blue", "Yellow"]

num.unshift(0); // Adds 0 to the beginning of the array
colors.unshift("Purple"); // Adds "Purple" to the beginning of the array
console.log(num); // Outputs: [0, 1, 2, 3, 4, 5, 6]
console.log(colors); // Outputs: ["Purple", "Red", "Green", "Blue", "Yellow"]

// Removing elements from an array
num.pop(); // Removes the last element from the array
colors.pop(); // Removes the last element from the array
console.log(num); // Outputs: [0, 1, 2, 3, 4, 5]
console.log(colors); // Outputs: ["Purple", "Red", "Green", "Blue"]

num.shift(); // Removes the first element from the array
colors.shift(); // Removes the first element from the array
console.log(num); // Outputs: [1, 2, 3, 4, 5]
console.log(colors); // Outputs: ["Red", "Green", "Blue"]

// Accessing elements in an array
console.log(num[0]); // Outputs: 1
console.log(colors[1]); // Outputs: Green

num.splice(2, 1, 10); // Removes 1 element at index 2 and adds 10
colors.splice(1, 0, "Orange"); // Removes 1 element at index 1 and adds "Orange"
console.log(num); // Outputs: [1, 2, 10, 4, 5]
console.log(colors); // Outputs: ["Red", "Orange", "Green", "Blue"]

num.slice(1, 4); // Returns a new array from index 1 to 3
colors.slice(0, 2); // Returns a new array from index 0 to 1
console.log(num.slice(1, 4)); // Outputs: [2, 10, 4]
console.log(colors.slice(0, 2)); // Outputs: ["Red", "Orange"]

// Array Searching and Sorting
let index = num.indexOf(10);
let colorIndex = colors.indexOf("Orange");
console.log(index); // Outputs: 2
console.log(colorIndex); // Outputs: 1

console.log(num.includes(3)); // Checks if 3 is in the array
console.log(colors.includes("Blue")); // Checks if "Blue" is in the array

// Sorting an array
console.log(num.sort()); // Sorts the array in ascending order
console.log(colors.sort()); // Sorts the array in alphabetical order

console.log(num.reverse()); // Reverses the array
console.log(colors.reverse()); // Reverses the array

// Array Iteration
// Using forEach to iterate over an array
let fruits = ["Apple", "Banana", "Cherry", "Date"];
fruits.forEach(fruit => console.log(fruit)); // Outputs each fruit in the array

// Using map to create a new array
let doubledNumbers = num.map(number => number * 2); // Creates a new array with each number doubled
console.log(doubledNumbers); // Outputs: [2, 4, 20, 8, 10]

// Using filter to create a new array with elements that pass a test
let evenNumbers = num.filter(number => number % 2 === 0);
console.log(evenNumbers); // Outputs: [2, 20, 8, 10]

// Using reduce to reduce the array to a single value
let sum = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Outputs: 40

// Concat 
let arr = num.concat(colors);
console.log(arr); // [1, 2, 10, 4, 5, "Red", "Orange", "Green", "Blue" ]

// Join 
let words = ["hello", "hi"];
let sent = words.join(" ");
console.log(sent); // Outputs: "hello hi"

// Array Destructuring
let name = ["John", "Doe"];
let [firstName, lastName] = name;
console.log(firstName); // Outputs: "John"
console.log(lastName); // Outputs: "Doe"
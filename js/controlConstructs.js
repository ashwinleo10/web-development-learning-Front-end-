//Conditional constructs
// if statement
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
}

// if-else statement
let number = 10;

if (number > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is negative.");
}

// else-if ladders  
let num = 0;
if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

//Nested if statements
let marks = 15;
if (marks >=40) {
    if (marks <= 80) {
        console.log("You passed with distinction.");
    } else {
        console.log("You passed with First class.");
    }
} else {
    console.log("You have failed.");
}

// Switch statement
let grade = 'B';

switch (grade) {
    case 'A':
        console.log("Excellent!");
        break;
    case 'B':
        console.log("Good job!");
        break;
    case 'C':
        console.log("Average performance.");
        break;
    case 'D':
        console.log("Needs improvement.");
        break;
    default:
        console.log("Invalid grade.");
}


//Looping constructs
// For loop
for (let i = 1; i <= 10; i++) {
    console.log("Iteration: " + i);
}

// While loop
let count = 1;
while (count <=5) {
    console.log("Count: " +  count);
    count++;
}

// For of loop
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) { // Using for of loop to iterate over an array
    console.log(fruit);
}

// For in loop
let person = {name: "John", age: 30, city: "New York"};
for (let key in person) {  // Using for in loop to iterate over an object
    console.log(key + ": " + person[key]);
}

// ForEach loop
let numbers = [1, 2, 3, 4, 5];  
numbers.forEach(num => {  // Using forEach loop to iterate over an array
    console.log(num *num);
});


// Flow control statements
// Break statement
for (let i = 1; i <= 10; i++) {
    if (i === 5) { 
        break; // Exit the loop when i is 5
    }
    console.log("Iteration: " + i);
}

// Continue statement
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {  
        continue; // Skip the rest of the loop body when i is even
    }
    console.log("Iteration: " + i);
}

// Return statement
function add(a, b) {
    return a + b; // Return the sum of a and b
}
console.log("Sum: " + add(5, 10));

// Function in JavaScript
function greet() {
    console.log("Hello, World!");
}
greet();

//Function addition
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8

// Type of function: Function Declaration

//Function without parameters and return value
function getGreeting() {
    console.log("Hello, World!");
}
getGreeting(); // Output: Hello, World!

// Function with parameters and without return value
function sayHello(name) {
    console.log("Hello, " + name + "!");
}
sayHello("Alice"); // Output: Hello, Alice!

//Function without parameters and with return value
function getCurrentYear() {
    return new Date().getFullYear();
}
console.log(getCurrentYear()); // Output: Current year

// Function with parameters and return value
function multiply(x, y) {
    return x * y;
}  
console.log(multiply(4, 6)); // Output: 24

// Function find area
function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(5, 10)); // Output: 50

// Function find perimeter
function calculatePerimeter(length, width) {
    return 2 * (length + width);
}  
console.log(calculatePerimeter(5, 10)); // Output: 30

// Function find area of rectangle
function areaOfRectangle(length, width) {
    return length * width;
}
console.log(areaOfRectangle(5, 10)); // Output: 50

// Function find simple interest
function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}  
console.log(calculateSimpleInterest(1000, 5, 2)); // Output: 100
//Function Declaration
function greet() {
    console.log("Hello, From Function Declaration!");
}
greet(); // Output: Hello, From Function Declaration!

//Function Expression
let greet1 = function() {
    console.log("Hello, From Function Expression!");
}
greet1(); // Output: Hello, From Function Expression!

//Arrow Function
let greet2 = () => console.log("Hello, From Arrow Function!");
greet2(); // Output: Hello, From Arrow Function!

//IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("Hello, From IIFE!");
})(); // Output: Hello, From IIFE!



//Addition of two numbers using different types of functions
function add1(a, b) {
    return a + b;
}
console.log(add1(5, 3)); // Output: 8

let add2 = function(a, b) {
    return a + b;
}
console.log(add2(5, 7)); // Output: 12

let add3 = (a, b) => a + b;
console.log(add3(10, 15)); // Output: 25

(function(a, b) {
    console.log(a + b);
})(20, 30); // Output: 50



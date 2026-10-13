// Variable Declaration in JavaScript

// var is olden & scope is function level
var a = 10;
console.log("This is var");
console.log(a);
a = 20; //re-initialize the value of a
console.log(a);
var a = 30; //re-declare the variable a
console.log(a);


// let is modern & scope is block level {}
let b = 40;
console.log("This is let");
console.log(b);
b = 50; // re-initialize the value of b
console.log(b);
// let b = 60; // This will throw an error because 'b' has already been declared


// const is modern & scope is block level {}
const c = 70;
console.log("This is const");
console.log(c);
// c = 80; // This will throw an error because 'c' is a constant and cannot be reassigned   


//scope of var is function level
function testVar() {
    var x = "Ashwin";
    console.log(x); // Output: Ashwin
}
// console.log(x); // This will throw an error because 'x' is not defined outside the function
testVar();


//scope of let & const is block level
if (true) {
    let y = "Mohan";
    const z = "Sanjay";
    console.log(y); // Output: Mohan
    console.log(z); // Output: Sanjay
}
// console.log(y); // This will throw an error because 'y' is not defined outside the block
// console.log(z); // This will throw an error because 'z' is not defined outside the block
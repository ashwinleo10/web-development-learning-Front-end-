function add() {
    console.log(10 + 20);
}

function add(a ) {
    console.log(a + 20);
}   

function add(a, b) {
    console.log(a + b);
}   

add(); // Output: NaN
add(10); // Output: NaN
add(10, 20); // Output: 30


function add1(...numbers) {
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    return sum;
}

console.log(add1(10)); // Output: 10
console.log(add1(10, 20)); // Output: 30
console.log(add1(10, 20, 30)); // Output: 60


// Variable hoisting
var a = 10;
console.log(a); // Output: 10 

console.log(b); // Output: undefined
var b = 20;

let c = 30;
console.log(c); // Output: 30

console.log(d); // ReferenceError: Cannot access 'd' before initialization
let d = 40;  
// but if you use var, it will be hoisted and initialized with undefined, 
// while let and const are hoisted but not initialized (because they are in the temporal dead zone).
// String data type 
let str = "Hello, World!";
console.log(typeof str); // Output: string

// Number data type
let num = 42;
console.log(typeof num); // Output: number

// Boolean data type    
let isTrue = true;
console.log(typeof isTrue); // Output: boolean

// Undefined data type
let undefinedVar;
console.log(typeof undefinedVar); // Output: undefined

// Null data type
let nullVar = null;
console.log(typeof nullVar); // Output: object (this is a known quirk in JavaScript)

// Object data type
let obj = { name: "John", age: 30 };
console.log(typeof obj); // Output: object

// Array data type
let arr = [1, 2, 3, 4, 5];
console.log(arr); // Output: object (arrays are a type of object in JavaScript)

// Function data type
function myFunction() {
    return "Hello, World!";
}
console.log(typeof myFunction); // Output: function
console.log(myFunction()); // Call the function to see the output
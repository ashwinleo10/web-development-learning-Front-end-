// Lexical scoping example
let greet = "This is a global greeting.";

function outerFunction() {
    let greet = "Hello from the outer function!";
    
    function innerFunction() {
        let greet = "Hello from the inner function!";
        console.log(greet); // Logs: Hello from the inner function!
    }

    innerFunction();
    console.log(greet); // Logs: Hello from the outer function!
}

outerFunction();
console.log(greet); // Logs: This is a global greeting.
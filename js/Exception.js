// try {
//     error code
// } catch (error) {
//     error handling
// }

console.log("Program started");
try {
    let result = 10 / b; // b is not defined, this will throw a ReferenceError
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("Program ended");
}

//Throw

let age = 11;

try {
    if (age < 18) {
        throw new Error("Age must be at least 18");
    } else {
        console.log("Access granted");
    }
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Execution completed");
}
//Object 
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name); // Output: John   
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York

//Class 
class Car {
    name = "Toyota";
    color = "Red";

    start() {
        console.log("Car is starting");
    }
}
let car1 = new Car();
console.log(car1.name);
console.log(car1.color);
car1.start();   

// Class with constructor
class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let person1 = new Person("Alice", 25, "Los Angeles");
person1.greet();// Output: Hello, my name is Alice

let person2 = new Person("Bob", 35, "Chicago");
person2.greet(); // Output: Hello, my name is Bob
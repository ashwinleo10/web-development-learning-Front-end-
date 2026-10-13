// Inheritance 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying in School`);
    }   
}

let student1 = new Student("Charlie", 20);
student1.greet(); // Output: Hello, my name is Charlie
student1.study(); // Output: Charlie is studying in grade A


class Employee {
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }

    displayInfo() {
        console.log(`Hi my Name is ${this.name} & I am ${this.age} years old`); // Inherited Method extends from parant no change in child
    }
    designation() {
        console.log(`I am a ${this.role}`);
    }
}

class Developer extends Employee {
    designation() {
        console.log(`My role is ${this.role}`); // Overridden Method extends from parant, can change it for child specifed 
    }
    work() {
        console.log(`${this.name} is working as a ${this.role}`); // Child specifed method its only for child only
    }   
}

class Tester extends Employee {
    designation() {
        console.log(`My role is ${this.role}`); // Overridden Method extends from parant, can change it for child specifed
    }
    test() {
        console.log(`${this.name} is testing the application`); // Child specifed method its only for child only
    }
}


let developer1 = new Developer("Alice", 30, "SDE I");
developer1.displayInfo();
developer1.designation();
developer1.work();

let tester1 = new Tester("Bob", 28, "QA Engineer"); 
tester1.displayInfo();
tester1.designation();
tester1.test();


// Type of Inheritance 
// Single Inheritance
class Animal {
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal{
    bark() {
        console.log("Dog is barking");
    }
}

let dog = new Dog();
dog.eat();
dog.bark();

//Multilevel Inheritance

class Animals {
    eat() {
        console.log("Eating");
    }
}

class Dogs extends Animals {
    bark() {
        console.log("Dog is barking");
    }
}

class Puppy extends Dogs {
    cry() {
        console.log("Puppy is crying")
    }
}

let puppy = new Puppy();
puppy.eat();
puppy.bark();
puppy.cry();


//Hierarchical Inheritance
class Games {
    game() {
        console.log("What game there are playing..?");
    }
}

class Football extends Games{
    football() {
        console.log("There are playing Football...");
    }
}

class Basketball extends Games{
    basketball() {
        console.log("There are playing Basketball...");
    }
}

let footb = new Football();
footb.game();
footb.football();

let basketb = new Basketball();
basketb.game();
basketb.basketball();


//Hybrid Inheritance
class Cloud {
    cloud() {
        console.log("Company are moving to cloud");
    }
}
class Aws extends Cloud {
    leed() {
        console.log("Aws is having 40-45% cloud users");
    }
}
class service extends Aws{
    serv() {
        console.log("There are many Service in Aws like: EC2, S3, IAM")
    }
}


class GCP extends Cloud {
    leed() {
        console.log("GCP is having 20-10% cloud users");
    }
}

let userAws = new service()
userAws.cloud();
userAws.leed();
userAws.serv();

let userGcp = new GCP();
userGcp.cloud();
userGcp.leed();

//Multiple Inheritance in js classes not support this directly 
//but we can done by Mixins
const Fly = {
    fly(){
        console.log("flying");
    }
}
const Swim = {
    swim() {
        console.log("Swim");
    }
}

class Duck{}

Object.assign(Duck.prototype,Fly,Swim);

let duck = new Duck();
duck.fly();
duck.swim();
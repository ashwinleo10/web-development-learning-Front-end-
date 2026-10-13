//Polymorphism
class Animal {
    sound() {
        console.log("Amimal makes a sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog Barks");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Cat Meows");
    }
}

let a = new Animal();
a.sound();
let d = new Dog();
d.sound();
let c = new Cat();
c.sound();
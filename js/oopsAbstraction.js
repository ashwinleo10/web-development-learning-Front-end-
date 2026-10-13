//Abstraction
class CoffeeMaking {

    ready() {
        console.log("Take all need for making coffee");
    }
    addMilk() {
        console.log("Milk added..");
    }
    addCoffee() {
        console.log("Coffee powder and Suger added..");
    }
    boil() {
        console.log("Boil for 10 to 15 min..");
    }

    coffeeReady() {
        this.ready()
        this.addMilk()
        this.addCoffee()
        this.boil()
        console.log("Coffee ready....")
    }
}
let coffee = new CoffeeMaking();
coffee.coffeeReady();

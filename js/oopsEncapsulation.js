//Encapsulation 
class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

let acc = new BankAccount(1000);
acc.deposit(450);
acc.withdraw(1200);
console.log(acc.getBalance());
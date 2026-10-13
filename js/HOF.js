//Takes another function as an argument (input) - HOF
//HOF
function order(callprepare, callserve) {
    console.log("1. Order Food");
    callprepare();
    callserve();
}

//Call back Function
function prepare() {
    console.log("2. Preparation started");
}

function servecustomer() {
    console.log("3. Enjoy your food");
}

order(prepare, servecustomer);

//Eg. 
function greet(name) {
    console.log(`hello, ${name}`)
}

function processUser(name, callback) {
    callback(name);
}

processUser("Ashwin", greet);

//HOF's

const numbers = [1,2,3,4,5,6];
const doubled = numbers.map(num => num*2);
const filtered = doubled.filter(num => num >5);
const total = filtered.reduce((sum, num) => sum + num, 0);

console.log(doubled);
console.log(filtered);
console.log(total);
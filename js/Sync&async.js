console.log("1.Open BMS");
console.log("2.Search Movie");
console.log("3.Select seats");
console.log("4.Make payment");
console.log("5.Ticket Booked");

//Settimeout
setTimeout(() => {
    console.log("1.Open BMS");
}, 8000);
setTimeout(() => {
    console.log("2.Search Movie");
}, 3000);
setTimeout(() => {
    console.log("3.Select seats");
}, 5000);
setTimeout(() => {
    console.log("4.Make payment");
}, 1000);
setTimeout(() => {
    console.log("5.Ticket Booked");
}, 2000);


//Callback hell
setTimeout(() => {
    console.log("1.Open BMS");
    setTimeout(() => {
        console.log("2.Search Movie");
        setTimeout(() => {
            console.log("3.Select seats");
            setTimeout(() => {
                console.log("4.Make payment");
                    setTimeout(() => {
                    console.log("5.Ticket Booked");
                }, 2000);
            }, 1000);
        }, 5000);
    }, 3000);
}, 8000);

const p = new Promise((resolve, reject) => {
    let app = "BMS";
    if (app == "MS") {
        resolve();
    } else {
        reject(new Error("BMS not found"));
    }
});

p.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Opening BMS");
            resolve();
        }, 2000);
    });
})

.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Select the Movie");
            resolve();
        }, 3000);
    });
})

.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Select the Seats");
            resolve();
        }, 5000);
    });
})

.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Book the Tickets & Confirm the Payment");
            resolve();
        }, 1000);
    });
})

.catch((error) => {
    console.error("Error:", error.message);
})

.finally(() => {
    console.log("Execution completed");
});


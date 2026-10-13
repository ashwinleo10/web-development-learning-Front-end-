function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function bookTickets() {
    let app = "BMS";
    if (app == "BMS") {
        await wait(2000);
        console.log("Opening BMS");
        await wait(3000);
        console.log("Select the Movie");
        await wait(5000);
        console.log("Select the Seats");
        await wait(1000);
        console.log("Book the Tickets & Confirm the Payment");
    } else {
        throw new Error("BMS not found");
    }
}

bookTickets()
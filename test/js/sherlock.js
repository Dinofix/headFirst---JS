var balance = 10500;
let cameraOn = true;

function steal(balance, amount) {
    cameraOn = false;
    if (amount < balance) {
        balance = balance - amount;
    }
    return amount;
    cameraOn = true;
}

console.log(balance)
console.log(cameraOn)

var amount = steal(balance, 1250);
alert("Criminal: you stole " + amount + "!");

// let balance = 10500;
// let cameraOn = true;

// function steal(amount) {
//     cameraOn = false;
//     if (amount < balance) {
//         balance = balance - amount;
//     }
//     cameraOn = true;
//     return amount;
// }

// console.log("Initial balance: " + balance);
// console.log("Is camera on: " + cameraOn);

// var amountStolen = steal(1250);
// console.log("Criminal: you stole " + amountStolen + "!");
// console.log("Remaining balance: " + balance);
// console.log("Is camera on: " + cameraOn);

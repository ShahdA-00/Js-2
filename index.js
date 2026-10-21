// // Task
// // 1. Cinema Ticket Price — Easy
// // Description:
// // Create two variables: age and day.
// // Determine the ticket price using if / else:
// // Below 0 → "Invalid Age"
// // Below 12 → 50 EGP
// // From 12 to 59 → 100 EGP
// // 60 or above → 70 EGP
// // Then use switch with day:
// // "Friday" or "Saturday" → Add 20 EGP
// // Any other day → Keep the original price
// // If the age is invalid, do not calculate a price.
// // Example: age = 10, day = "Friday"
// // Ticket price: 70 EGP
// // -----------------------------------------------------

let age = +prompt("age");
let day = prompt("day");
let price = 0 ;

if( age<=0){
    console.log("Invalid Age"); 
}
else if (age<12){
    price=50;
}
else if(age>=12 && age<=59){
    price=100;
}
else{
    price=70;
}
switch (day) {
    case "friday":
    case "saturday":    
        console.log("Ticket price:" + (price + 20) +"EGP");
        break;

    default:
        console.log("Ticket price:" + price +"EGP");
        break;
}
 

//  ----------------------------------------------------
// -2. Multiplication Table — Easy
// Description:
// Create a variable called number. Use a loop to print its multiplication table from 1 to 10.
// After printing the table, display whether the number is even or odd.
// Example: number = 3
// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 10 = 30
// The number is odd.

let number = +prompt("Enter a number")
for (let i = 1; i <= 10; i++) {
    result= number * i
    console.log(`${number} x ${i} = ${result}`);
}

if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}
//  ----------------------------------------------------
// 3. Savings Goal Tracker — Hard
// Description:
// Create three variables: targetAmount, dailySaving, and increaseEvery.
// You start with no savings. Use a loop to simulate saving money each day until you reach or exceed your target.
// Rules:
// Add dailySaving to your total each day.
// After every increaseEvery days, increase dailySaving by 10 EGP. The increase applies starting the next day.
// Print the day number, the amount saved that day, and the total savings.
// When you reach the target, print the total number of days needed.
// If any starting value is zero or negative, display "Invalid Input" without running the loop. Assume all inputs are whole numbers.
// Example:
// let targetAmount = 200;
// let dailySaving = 30;
// let increaseEvery = 2;
// Expected output:
// Day 1: Saved 30 EGP | Total: 30 EGP
// Day 2: Saved 30 EGP | Total: 60 EGP
// Day 3: Saved 40 EGP | Total: 100 EGP
// Day 4: Saved 40 EGP | Total: 140 EGP
// Day 5: Saved 50 EGP | Total: 190 EGP
// Day 6: Saved 50 EGP | Total: 240 EGP
// The goal was reached in 6 days!
// Hint: Use % to check when the daily savings should increase.


let targetAmount = 200;
let dailySaving = 30;
let increaseEvery = 2;

if (targetAmount <= 0 || dailySaving <= 0 || increaseEvery <= 0) {
    console.log("Invalid Input");
} else {
    let totalSavings = 0;
    let day = 0;

    while (totalSavings < targetAmount) {
        day++;

        totalSavings += dailySaving;

        console.log(
            `Day ${day}: Saved ${dailySaving} EGP | Total: ${totalSavings} EGP`
        );

        if (day % increaseEvery === 0) {
            dailySaving += 10;
        }
    }

    console.log(`The goal was reached in ${day} days!`);
}



console.log('Hello from External Javascript')

alert("Welcome to my webpage!");


// 3.0
let favColor = prompt("What's your favorite color?");


alert("Great "+ favColor + " is my favorite color too!");

//3.1
let lilM = parseInt(prompt("How many days do you want to rent out The Little Mermaid?"));
let broB = parseInt(prompt("How many days do you want to rent out Brother Bear?"));
let herC = parseInt(prompt("How many days do you want to rent out Hercules"));
let movieP = 3
alert ("Your total movie price will be: $" + (lilM + broB + herC) * movieP)

//3.2 Question
const googlePH = 400
const amazonPH = 380
const facebookPH = 350

let googleHW = parseInt(prompt("How many hours did you work at Google?"))
let amazonHW = parseInt(prompt("How many hours did you work at Amazon?"))
let facebookHW = parseInt(prompt("How many hours did you work at Facebook?"))

alert ("Your total pay for your hours worked at Google, Amazon, Facebook is: $" + ((googlePH * googleHW) + (amazonPH * amazonHW) + (facebookPH * facebookHW)))

//3.3 Question
alert("Welcome to myClass.com! We have limited seating in our classes, continue to see if we can find the class for you.");

let checkSpots = prompt("First how may days during the week are you available to attend class. ")

let seating = Math.floor( Math.random() * 30);

if (seating < 20 && checkSpots >= 3)
{
    alert("Welcome to myClass.com! Happy to have you join.");
    console.log("Welcome to myClass.");
}
else if (seating > 20)
{
    alert("Unfortunately this class is full at this time. Please try again at another time.")
    console.log("Not admitted due to class being at capacity.");
}
else if (checkSpots <= 3)
{
    alert("Sorry we recommend at least 3 days per week to be enrolled in this class.");
    console.log("Not admitted due to days available during the week")
}

// 3.3 Question Example
// let hasRoomInSchedule = confirm("Are you available to add this class to your schedule at 8 AM?");
// console.log(hasRoomInSchedule);
// let classHasRoom = confirm("Is gym class full");
// console.log(classHasRoom);
//
// alert("Student can register for gym." + (hasRoomInSchedule && classHasRoom));

// 3.4 question
let itemsSold = prompt("How many items are you buying?");

let saleExpired = confirm("Press OK if sale is still active.");

let salePremium = confirm("Press OK if you are a Premium Member.");

if ((itemsSold > 2 || salePremium) && saleExpired)
{
    alert("Product sale can be applied.");
    console.log("Product sale has been applied to cart.");
}
else
{
    alert("Product sale cannot be applied");
    console.log("Product sale cannot be applied")
}
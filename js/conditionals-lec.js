function isItANumber(parameter) {
    if (typeof parameter === "number"){ // isNaN(parseFloat(parameter)) && typeof parameter !== "string" is an alt condition that would work.
        return "Wow, that sure is a number alright.";
    }
}
console.log(isItANumber(7));
console.log(isItANumber("99"));
console.log(isItANumber(true));
console.log(isItANumber("Banana"));
//
//
// let hasCowMan = true;
//
// if (hasCowMan){
//     console.log("Going out to go get milk, Bessie.");
// }else {
//     console.log("Alright, I'm headed out to H-E-B.");
// }
//
// function isItANumber(parameter) {
//     if ( typeof parameter === "number"){ // isNaN(parseFloat(parameter)) && typeof parameter !== "string" is an alt condition that would work.
//
//
// }
//
// let hasCrunchwrap = true;
// let hasBajaBlast = true;
//
// if (hasCrunchwrap && hasBajaBlast){
//     console.log("My order is complete!");
// } else if (hasCrunchwrap) {
//     console.log("This is acceptable.");
// }else {
//     console.log("YOU DARE TO DEFY ME!!");
// }
//
// function isThisThirtyFive(parameter) {
//     if (parameter > 35){
//         return "Oy, " + parameter + "is greater that 35.";
//     } else if (parameter < 35){
//         return "Oy, " + parameter + "is less than 35.";
//     }else if (parameter === 35) {
//         return "Congrats that sure is 35!";
//     }else {
//         return "Oy, " + parameter + "isn't even a number!!!"
//     }
// }
//
// console.log(isThisThirtyFive(34));
// console.log(isThisThirtyFive(35));
// console.log(isThisThirtyFive(36));
// console.log(isThisThirtyFive("Potato Soup"));
//
// // let message = (booleanValue) ? "Operation was true." : "Operation was false.";
//
// let doWeHaveMilk = true;
// let action = (doWeHaveMilk) ? "Making a bowl of cereal." : "Headed off to H-E-B.";
// console.log(action);
//
// function isThatANumber(parameter) {
//     return (typeof parameter === "number") ? "Wow that sure is a number alright." : "Uh oh, that's not a number..";
// }

let color = prompt("What is your favorite color?").toLowerCase();

switch(color) {
    case "purple":
    case "green":
        alert("what a coincidence, that's my favorite color!");
        break;
    case "orange":
        alert("That's my brother's favorite color.");
        break;
    default:
        alert(color + " is weird color, my dude.");
        break;
}
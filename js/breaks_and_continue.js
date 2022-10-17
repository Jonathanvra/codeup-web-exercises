// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

function oddNumber() {
    let userInput;
    while (true) {
        userInput = parseInt(prompt("Enter an odd number between 1 and 50."));
            if (userInput % 2 !== 0 && userInput >= 1 && userInput <= 50){
                alert("Thank you for you input.")
            } else if (userInput % 2 === 0){
                alert("Try again & enter an odd number.")
            } else{
             alert("Enter an odd number between 1 and 50.")
            }
            }
}
oddNumber();


// todo Exercise Walk Through

// do {
//     let userInput = prompt("Enter an odd number between 1 & 50.")
//
//     if(userInput % 2 === 0){
//         alert("Your input was even, please try again.");
//     } else if(userInput < 1){
//         alert("Your input is less than 1.")
//     } else if(userInput > 50){
//         alert("Your input is greater than 50.");
//     } else{
//         alert("Thank you for entering a valid number");
//         break;
//     }
//
// } while(true)
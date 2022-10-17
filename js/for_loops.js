// Question #1
// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(x) {
    for (let i = 1; i <= 10; i++){
        console.log( x + " x " + i + " = " + (x * i));
    }
}

// Question #2

// function showMultiplicationTable(x){
//     console.log(x * 1);
//     console.log(x * 2);
//     console.log(x * 3);
//     console.log(x * 4);
//     console.log(x * 5);
//     console.log(x * 6);
//     console.log(x * 7);
//     console.log(x * 8);
//     console.log(x * 9);
//     console.log(x * 10);
// }
showMultiplicationTable(7)

// Question #3

// // Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
//
function randomEvenAndOdd(x){
    for (let i = 0; i <= 10; i++){
        let random = Math.floor( (Math.random() * 200) + 20);
        let output = (random % 2 > 0) ? 'is odd' : 'is even';
        console.log(`${random} ${output}`)
    }
}
randomEvenAndOdd(1);

// Question #4
// Create a for loop that uses console.log to create the output shown below.

function ascendingPyramid(){
    let output = "1"
    for (let i = output; i <= 9; i++){
        output = i;
        for (let j = 1; j < i; j++){
            output += i.toString();
        }
        console.log(output);
         output = "";
    }
}
ascendingPyramid();

// Question #5

// Create a for loop that uses console.log to create the output shown below.

function subtractFive(){
    for (let i = 100; i >= 5; i -= 5){
        console.log(i)
    }
}
subtractFive(100);



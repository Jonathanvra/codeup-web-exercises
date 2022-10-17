// Example #1

// let i = 0;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     // i++;
//     i += 2
// }

// Example #2

// let i = 10;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }

//won't work due to the starting point of 10 in the let i = 10

// todo
//Example #3

var i = 10;

do {
    console.log('while loop iteration #' + i);
    i++;
} while (i < 10);

// Example #4

// for (var i = 0; i < 10; i += 1) {
//     console.log('for loop iteration #' + i);
// }
//

// Wild Example - for loop
// for (var i = 0, j = 9; i < 10, j > 5; i++, j--) {
//     console.log('for loop iteration #' + i + ', j = ' + j);
// }

// function letsLoop(){
//     for (let i = 0; i < 10; i++) {
//         console.log()
//     }
// }

// Example #5

// let numberToStopAt = 5;
//
// for (let i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }

// 'use strict';
//
// for (var i = 1; i < 100; i++) {
//
//     if (i % 2 !== 0) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//
//     console.log('Here is a lovely even number: ' + i);
// }

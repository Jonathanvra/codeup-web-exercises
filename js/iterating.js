(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
let names = ["Michael", "Kobe", "Lebron", "Tim"]

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length)
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(let n = 0; n <= names.length -1; n++){
        console.log("The greatest basketball players of all time are: " + names[n])
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(name){
       console.log("The greatest basketball players of all time are: " + name)
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

   console.log(names[0]);
    names[0] = "Michael Jordan";
    console.log(names[1]);
    names[1] = "Kobe Bryant";
    console.log(names[2]);
    names[2] = "Lebron James";
    console.log(names[3]);
    names[3] = "Tim Duncan";


    console.log(names[0]);
    console.log(names[1]);
    console.log(names[3]);

})();
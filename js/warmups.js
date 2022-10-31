//Write a function that when passed an object will return the value of the object’s price property.
// Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
// getPrice(obj); // returns “$7.89”

// TODO 1, OCT. 20

function getPrice(obj) {
	return obj.price;
}
let avocados = {
		name: "avocados",
		quantity: "3",
		price: "$4.59"
	};
console.log(getPrice(avocados));

// TODO 2, OCT 21

function longestString(arr){
	let bee = ["pollen", "wax", "honey"];
	let lgth = Math.max;
	let longestStr = "";
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > lgth) {
			let lgth = arr[i].length;
			longest = arr[i];
		}
	}
	console.log(longest);
}

// Walkthrough
function getLongestStr(arr) {
	let longestStr = "";
	for (let str of arr) {
		if (str.length > longestStr.length) {
			longestStr = str;
		}
	}
	return longestStr;
}
const bee = ["wax", "pollen", "honey"];

console.log(getLongestStr(bee))

// Todo 3, Oct. 26


// getTallestHamster(hamsters); // should return {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"};


	const hamsters = [
		{
			name: "Hamtaro",
			heightInMM: 86,
			fur: ['orange', 'white'],
			gender: "male",
			dateOfBirth: "August 6"
		}, {
			name: "Bijou",
			heightInMM: 75,
			fur: ['white'],
			gender: "female",
			dateOfBirth: "July 10"
		}, {
			name: "Oxnard",
			heightInMM: 100,
			fur: ['grey', 'white'],
			gender: "male",
			dateOfBirth: "May 3"
		}, {
			name: "Boss",
			heightInMM: 120,
			fur: ['brown', 'white'],
			gender: "male",
			dateOfBirth: "September 21"
		}, {
			name: "Snoozer",
			heightInMM: 85,
			fur: ['brown', 'white', "pink"],
			gender: "male",
			dateOfBirth: "January 14"
		}
	];
// let results = [];
//
// let toSearch = "Boss";
// for(let i=0; i<hamsters.length; i++) {
// 	for(heightInMM in hamsters[i]) {
// 		if(hamsters[i][].indexOf(toSearch)!=-1) {
// 			results.push(hamsters[i]);
// 		}
// 	}
// }
// const found = hamsters.find(hamsters => heightInMM > 110);
//
// console.log(found);

// WALKTHROUGH

function getTallestHamster(arr) {
	let tallest = {heightInMM: 0};
	arr.forEach(function(hamster){
		if (hamster.heightInMM > tallest.heightInMM){
			tallest = hamster;
		}
	});
	return tallest
}
console.log(getTallestHamster(hamsters));

//Todo 4 Oct. 31

//Warmup: Write FizzBuzz from 1-100;
// Numbers evenly divisible by 3 should be replaced by Fizz
// Numbers evenly divisible by 5 should be replaced by Buzz
// Numbers evenly divisible by both 3 and 5 should be replaced by FizzBuzz
// All other numbers should be printed in the console.

for (let i = 1; i <= 100; i++){
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	} else if (i % 3 === 0){
		console.log("Fizz");
	} else if ( i % 5 === 0) {
		console.log("Buzz");
	} else{
	console.log(i);
	}
}

//Walk



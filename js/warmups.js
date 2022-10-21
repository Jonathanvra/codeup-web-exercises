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

// TODO 1, OCT 21

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
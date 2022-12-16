// let testObject = { 'one': 1, 'two': 2, 'three': 3 };
//
// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));
//
// // Retrieve the object from storage
// let retrievedObject = localStorage.getItem('testObject');
//
// console.log('retrievedObject: ', JSON.parse(retrievedObject));

if (true) {
	let x = 5;
}
console.log(typeof x);

// let numbers = [1, 2, 3, 4, 5];
// numbers.map(n => n * 3);
// console.log(numbers);

const isDivisibleBy3 = n => n % 3 === 0;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.filter(isDivisibleBy3));
console.log(numbers);

const p = new Promise((resolve, reject) => {
	// WHAT GOES HERE?
	// return 3;
	// resolve(3)
	reject(3)
});

p.then(result => console.log(result));
p.catch(error => console.log('An error occured!'));
console.log(p);


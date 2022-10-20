//Write a function that when passed an object will return the value of the object’s price property.
// Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
// getPrice(obj); // returns “$7.89”

function getPrice(obj) {
	return obj.price;
}
let avocados = {
		name: "avocados",
		quantity: "3",
		price: "$4.59"
	};
console.log(getPrice(avocados));


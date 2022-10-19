"use strict";

let car = new Object();

console.log(typeof car);
// "object"

// let car = {};
// Most do not declare objects this way no longer
console.log(typeof car);

// let car = {};

// use dot notation to assign a "make" property
car.make = "Toyota";
car["make"] = "Toyota"; // this is the same thing as above. Do the OTHER!!!

// use array notation to assign a "model" property
car["model"] = "Camry";
car.model = "Camry";
//
// let car = {
//     make: "Toyota",
//     model: "Camry"
// };

// // DON'T DO THIS
// let car = {
//     "number of wheels": 4
// };
// // do this instead
// let car = {
//     numberOfWheels: 4
// };

// // DON'T DO THIS
// car["number of wheels"] = 4;
// // do this instead
// car.numberOfWheels = 4;

// let car = {};
// car.make = "Toyota";
// car.model = "Camry";
//
// // use array notation to access "make" property // DON'T DO THIS!!!
// console.log("The car make is: " + car["make"]);
//
// // use dot notation to access "model" property
// console.log("The car model is: " + car.model);


let cars = [
    {
        make: "Toyota",
        model: "Camry",
        features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
        owner: {
            name: "Jane Doe",
            age: 30
        }
    },
    {
        make: "Honda",
        model: "Accord",
        features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
        owner: {
            name: "John Doe",
            age: 31
        }
    }
];

console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
console.log("The owner of the second car is " + cars[1].owner.name + ".");

console.log("Here are all the features of all the cars:");
cars.forEach(function(car) {
    car.features.forEach(function(feature) {
        console.log(feature);
    });
});


// let car = {};
car.make = "Toyota";
car.model = "Camry";

// create a honk method on the car object
car.honk = function () {
    alert("Honk! Honk!");
    car.logMakeModel = function () {
        console.log("Car make/model is: " + this.make + " " + this.model);

    };

// honk the horn
    car.honk();
}
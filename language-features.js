/**
 * Constants
 */
const carId1 = 100;

carId = 5;

/*
 * let vs var
 */
console.log(carId2);
var carId2 = 100;

//console.log(carId3);
let carId3 = 100;

if (true) {
    var carId4 = 100;
    let carId5 = 100;
}

console.log(carId4);
//console.log(carId5);

/**
 * Rest parameters
 */
function sendCars(day, ...carIds) {
    carIds.forEach(id => console.log(id));
}

sendCars('Monday', 1, 2, 3, 5, 4);

/**
 * Destructuring arrays
 */
let carIds = [100, 200, 300];
let car1, car2, theRest;
[, car2, ...theRest] = carIds;

console.log(car1, car2, theRest);

/**
 * Destructuring objects
 */
let car = { id: 5000, style: 'convertible' };
//let { id, style } = car;
let id, style;

({ id, style } = car);

console.log(id, style);

/**
 * Spread Syntax
 */

function startCars(car1, car2, car3, ...rest) {
    console.log(car1, car2, car3, rest);
}

let carIds1 = [1, 2, 3, 4, 5, 9];
startCars(...carIds1);

/**
 * Type Conversions
 */
console.log(typeof(Number.parseInt('55')));
console.log(Number.parseInt('55'));
console.log(Number.parseInt('55ABC'));
console.log(Number.parseFloat('55.88ABC'));
console.log(Number.parseFloat('XYZ55.88ABC'));

/**
 * Controlling loops
 */
for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) {
        break;
    }
}

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
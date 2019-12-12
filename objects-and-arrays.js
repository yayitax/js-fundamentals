/**
 * Constructor functions
 */
console.log('Constructor functions');

function Car(id) {
    this.carId = id;
    this.start = function() {
        console.log('start: ' + this.carId);
    }
};

let vehicle = new Car(123456);
vehicle.start();
console.log();

/**
 * Expanding Objects Using Prototypes
 */
console.log("Prototypes");
String.prototype.hello = function() {
    return this.toString() + ': Hello!';
}

console.log('foo'.hello());
console.log();

/**
 * JSON
 */
console.log('JSON');
let jsonIn =
    `
[
    {"carId" : 123},
    {"carId" : 654},
    {"carId" : 789}
]
`;

let carIds = JSON.parse(jsonIn);
console.log(carIds);
console.log(JSON.stringify(carIds));
console.log();

/**
 * Array iteration
 */
console.log('Array Iteration');
let carIds1 = [
    { carId: 123, style: 'sedan' },
    { carId: 456, style: 'convertible' },
    { carId: 987, style: 'sedan' }
]

carIds1.forEach(car => console.log(car));

carIds1.forEach(
    (car, index) => console.log(car, index)
);
console.log();
/**
 * Array filtering
 */
console.log('Array Filtering');
let convertibles = carIds1.filter(
    car => car.style === 'convertible'
);

console.log(convertibles);
console.log();

/**
 * Array testing
 */
console.log('Array testing');
let result = carIds1.every(
    car => car.carId > 0
);
console.log(result);
console.log();

/**
 * Array finding the first match
 */
console.log('Array Find');
let car = carIds1.find(
    car => car.carId > 500
);
console.log(car);
console.log();
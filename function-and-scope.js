/**
 * Function scope 
 */
console.log('Function Scope');

function startCar(carId) {
    let message = 'Starting...';
    let startFn = function turnKey() {
        let message = 'Override';
    }
    startFn();
    console.log(message);
}
startCar(123);
//console.log(message);
console.log();
/**
 * Block scope
 */
console.log('Block scope');
if (5 === 5) {
    var message = 'Equal';
}
console.log(message);

let msg = 'Outside';
if (5 === 5) {
    let msg = 'Equal';
    console.log(msg);
}

console.log(msg);
console.log();

/**
 * IIFE's
 */
console.log('IIFE\'s');
let app = (function() {
    let carId = 123;
    console.log('In function');
    return {};
})();

console.log(app);
console.log();

/**
 * Closures
 */
console.log('Closures');
let app1 = (function() {
    let carId = 123;
    let getId = function() {
        return carId;
    }
    return { getId: getId };
})();

console.log(app1.getId());
console.log();

/**
 * this Keyword
 */
console.log('this Keyword');
let o = {
    carId: 123,
    getId: function() {
        console.log(this);
        return this.carId;
    }
};
console.log(o.getId());
console.log();

/**
 * Call and Apply
 */
console.log('call and apply');
let o1 = {
    carId: 1234,
    getId: function(prefix) {
        return prefix + this.carId;
    }
};
let newCar = { carId: 456 };
console.log(o1.getId.apply(newCar, ['ID: ']));
console.log();

/**
 * bind
 */
console.log('bind');
let o2 = {
    carId: 123,
    getId: function() {
        return this.carId;
    }
};
let newFn = o2.getId.bind(newCar);
console.log(newFn());
console.log();

/**
 * Arrow Functions
 */
console.log('Arrow functions');
let getId = (prefix, suffix) => prefix + 123 + suffix;
console.log(getId('ID: ', '!'));
console.log();

/**
 * Default Parameters
 */

console.log('Default parameters');
let trackCar = function(carId, city = 'NY') {
    console.log(`Tracking ${carId} in ${city}.`);
};
console.log(trackCar(123));
console.log(trackCar(123, 'Chicago'));
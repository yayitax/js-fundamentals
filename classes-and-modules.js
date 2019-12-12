/**
 * Classes
 */
console.log('Classes');
// class Car {
//     constructor(id) {
//         this.id = id;
//     }
//     identify() {
//         return `Car Id: ${this.id}`;
//     }
// }
// let car = new Car(123);
// console.log(car);
// console.log(car.id);
// car.id = 321;
// console.log(car.id);
// console.log(car.identify());
// console.log();

/**
 * Inheritance
 */
console.log('Inheritance');
class Vehicle {
    constructor() {
        this.type = 'car';
    }
    start() {
        return `Starting: ${this.type}`;
    }
}

class Car1 extends Vehicle {
    constructor() {
        super();
    }
    start() {
        return 'in Car start ' + super.start();
    }
}
let car1 = new Car1();
console.log(car1.type);
console.log(car1.start());
console.log();

/**
 * Modules
 */
console.log('Modules');
import { Car } from "./models/car.js";
let car = new Car(123);
console.log(car.id);
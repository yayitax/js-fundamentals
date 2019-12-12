/**
 * Error Handling
 */
console.log('Error handling');
try {
    // let car = newCar;
    throw new Error('My new error');
} catch (err) {
    console.log('Error', err);
} finally {
    console.log('This always runs');
}
console.log('continuing...');

/**
 * Promises
 */
console.log('Promises');
let promise = new Promise(
    function(resolve, reject) {
        setTimeout(reject, 100, 'aValue');
    }
);

promise.then(
    value => console.log('Fulfilled:' + value),
    error => console.log('Rejected: ', error)
);

console.log(promise);
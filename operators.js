/**
 * Equality operators
 */
console.log('Equality operators');
console.log('1 == 1', 1 == 1);
console.log('1 == true', 1 == true);
console.log('1 === true', 1 === true);
let id = 123;
console.log('id===\"123\"', id === "123");
console.log('id==\"123\"', id == "123");
console.log('id!=\"123\"', id != "123");
console.log('id!==\"123\"', id !== "123");

/**
 * Unary operators
 */
console.log();
console.log('Unary operators');
let year = 1967;
console.log('year:', year);
console.log('++year', ++year);
console.log('year:', year);
console.log();
year = 1967;
console.log('year:', year);
console.log('year++', year++);
console.log('year:', year);
console.log();
year = "1967";
console.log(typeof(year), 'year: ', year, "+year: ", typeof(+year));
year = -1967;
console.log('year:', year);
console.log('-year', -year);
console.log();

/**
 * Logical/Boolean operators
 */
console.log('Logical/Boolean operators')
if (5 === 5 && 6 === 7) {
    console.log(true);
} else {
    console.log(false);
}
if (5 === 5 || 6 === 6) {
    console.log(true);
} else {
    console.log(false);
}
if (5 === 5 || 6 === 3) {
    console.log(true);
} else {
    console.log(false);
}
if (5 === 6 || 6 === 3) {
    console.log(true);
} else {
    console.log(false);
}

let userSettings = null;
let defaultSettings = { name: 'Default' };
console.log(userSettings || defaultSettings);
userSettings = { name: 'Joe' }
console.log(userSettings || defaultSettings);
console.log(!true);
let car = null;
console.log(!car);
console.log();

/**
 * Relational operators
 */
console.log('Relational operators - w strings!');
let s1 = 'Zoo',
    s2 = 'alphabet';
if (s1 < s2) {
    console.log(s1 + ' < ' + s2 + ': ', true);
} else {
    console.log(s1 + ' < ' + s2 + ': ', false);
}
console.log('ignoring case:');
if (s1.toUpperCase() < s2.toUpperCase()) {
    console.log(s1 + ' < ' + s2 + ': ', true);
} else {
    console.log(s1 + ' < ' + s2 + ': ', false);
}
console.log();

/**
 * Conditional operator
 */
console.log('Conditional operator');
console.log('(5 > 4) ? \'yes\' : \'no\' ->', (5 > 4) ? 'yes' : 'no');
console.log();

/**
 * Assignment Operators
 */
year = 1964;
console.log('year', year);
console.log('year+=10', year += 10);
year = 1964;
console.log('year', year);
console.log('year-=10', year -= 10);
year = 1964;
console.log('year', year);
console.log('year*=10', year *= 10);
year = 1964;
console.log('year', year);
console.log('year*=10', year /= 10);
year = 1964;
console.log('year', year);
console.log('year%=10', year %= 10);
year = 1964;
console.log('year', year);
console.log('year>>=1', year >>= 1);
year = 1964;
console.log('year', year);
console.log('year<<=1', year <<= 1);
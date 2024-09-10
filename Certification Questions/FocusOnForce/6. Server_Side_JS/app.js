firstName = 'Joe'; // A global variable can be set implicitly.
global.lastName = 'Smith'; // A global variable can be set explicitly using 'global'.

// When the var, let or const keyword is used, the variable is scoped to the module.
var position = 'IT Director';
const company = 'Cosmic Solutions';
let salary = 200000;

console.log(`Global Name: ${global.firstName}${global.lastName}`);

// Trying to access a non-global variable using 'global' returns undefined.
console.log(`Global Position: ${global.position}`);
console.log(`Global Company: ${global.company}`);
console.log(`Global Salary: ${global.salary}`);
console.log('----------------------------------');

// A global variable can be accessed without using 'global'.
console.log(`Global Name: ${firstName}${lastName}`);
console.log(`Module Position: ${position}`);
console.log(`Module Company: ${company}`);
console.log(`Module Salary: ${salary}`);

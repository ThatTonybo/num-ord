const num_ord = require('../src/index');
// https://www.npmjs.com/package/num-ord
// const num_ord = require('num-ord'); // if you had to

console.log(`1 becomes ${num_ord(1)}`);
console.log(`2 becomes ${num_ord(2)}`);
console.log(`3 becomes ${num_ord(3)}`);
console.log(`4 through 9 becomes ${num_ord(4)} - ${num_ord(9)}`);
console.log(`23 even becomes ${num_ord(23)}`);
console.log(`10/100 are fine, ${num_ord(10)}/${num_ord(100)}`);
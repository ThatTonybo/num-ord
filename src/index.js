const Errors = require('./models/Errors');

module.exports = (int) => {
    if (typeof(int) != 'number') throw new TypeError(Errors.INVALID_TYPE['plain']);

    let numbers = parseInt(int).toString();
    let number = numbers[numbers.length - 1];

    if (number == 0) return `${int}th`

    number = parseInt(number);

    let str = ''; 
    let ending = '';

    if (number == 1) ending = 'st';
    else if (number == 2) ending = 'nd';
    else if (number == 3) ending = 'rd';
    else if (number >= 4) ending = 'th';

    str += numbers;
    str += ending;

    return str;
}
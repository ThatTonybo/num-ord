const Enum = require('enum');

const Errors = new Enum({
    'INVALID_TYPE': { code: 0, plain: `The provided variable was not a supported type, only numbers are supported.` },
});

module.exports = Errors;
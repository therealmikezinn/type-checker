const types = [
    'Array',
    'Object',
    'Number',
    'String',
    'Date',
    'RegExp',
    'Function',
    'Boolean',
    'Null',
    'Undefined',
];

const methods = {
    isFloat(n) {
        return (this.isNumber(n) && (parseInt(n) !== n));
    },
    isInt(n) {
        return (this.isNumber(n) && (parseInt(n) === n));
    },
};

const checkType = (type) => {
    return Object.prototype.toString.call(type).slice(8, -1);
};

for(let i = 0, len = types.length; i < len; i++){
    const type = types[i];

    methods['is' + type] = (function(currentType){
        return function(typeToCheck){
            return currentType === checkType(typeToCheck);
        }
    }(type));
}

exports = module.exports = methods;
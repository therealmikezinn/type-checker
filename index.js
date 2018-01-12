const types = [
    'Array',
    'ArrayBuffer',
    'Arguments',
    'Boolean',
    'Date',
    'Error',
    'Float32Array',
    'Float64Array',
    'Function',
    'Generator',
    'GeneratorFunction',
    'Int8Array',
    'Int16Array',
    'Int32Array',
    'JSON',
    'Map',
    'Math',
    'Null',
    'Number',
    'Object',
    'Promise',
    'RegExp',
    'Set',
    'String',
    'Symbol',
    'Uint8Array',
    'Uint8ClampedArray',
    'Uint16Array',
    'Uint32Array',
    'Undefined',
    'WeakMap',
    'WeakSet',
];

const checkType = (type) => {
    return Object.prototype.toString.call(type).slice(8, -1);
};

const methods = {
    isFloat(n) {
        return (this.isNumber(n) && (parseInt(n) !== n));
    },
    isInt(n) {
        return (this.isNumber(n) && (parseInt(n) === n));
    },
    getType(n){
        return checkType(n);
    },
    isType(n, typeToCompare){
        return checkType(n).toLowerCase() === typeToCompare.toLowerCase();
    },
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

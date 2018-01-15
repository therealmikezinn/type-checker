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
    getType(n){
        return checkType(n);
    },
    isFloat(n) {
        return (this.isNumber(n) && (parseInt(n) !== n));
    },
    isInt(n) {
        return (this.isNumber(n) && (parseInt(n) === n));
    },
    isNullable(n) {
        return (this.isNull(n) || this.isUndefined(n));
    },
    isType(n, typeToCompare){
        return checkType(n).toLowerCase() === typeToCompare.toLowerCase();
    },
};

for(let i = 0, len = types.length; i < len; i++){
    const type = types[i];

    methods['is' + type] = (function(currentType){
        return function(){
            if(arguments.length === 0){
                return false;
            }

            if(arguments.length === 1){
                return currentType === checkType(arguments[0]);
            }

            const args = Array.prototype.slice.call(arguments);

            for(let i = 0, len = args.length; i < len; i++){
                const current = args[i];

                if(currentType !== checkType(current)){
                    return false;
                }
            }

            return true;
        };
    }(type));
}

exports = module.exports = methods;

var types = [
    'Array',
    'Object',
    'Number',
    'String',
    'Date',
    'RegExp',
    'Function',
    'Boolean',
    'Null',
    'Undefined'
];

var methods = {
    isFloat: function(n){
        return (this.isNumber(n) && (parseInt(n) !== n));
    },
    isInt: function(n){
        return (this.isNumber(n) && (parseInt(n) === n));
    }
};

var checkType = function(type){
    return Object.prototype.toString.call(type).slice(8, -1);
};

for(var i = 0, len = types.length; i < len; i++){
    var type = types[i];

    methods['is' + type] = (function(currentType){
        return function(typeToCheck){
            return currentType === checkType(typeToCheck);
        }
    }(type));
}

exports = module.exports = methods;
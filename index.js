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

const checkType = type => Object.prototype.toString.call(type).slice(8, -1);

const methods = {
  getType(n) {
    return checkType(n);
  },
  isEmpty(...args) {
    if (args.length === 0) {
      return false;
    }

    if (args.length === 1) {
      return (this.isNully(args[0]) || args[0] === '');
    }

    for (let i = 0, len = args.length; i < len; i++) {
      const current = args[i];

      if (!this.isNully(current) || current !== '') {
        return false;
      }
    }

    return true;
  },
  isFloat(...args) {
    if (args.length === 0) {
      return false;
    }

    if (arguments.length === 1) {
      return (this.isNumber(args[0]) && (parseInt(args[0], 10) !== args[0]));
    }

    for (let i = 0, len = args.length; i < len; i++) {
      const current = args[i];

      if (!this.isNumber(current) || (parseInt(current, 10) === current)) {
        return false;
      }
    }

    return true;
  },
  isInt(...args) {
    if (args.length === 0) {
      return false;
    }

    if (args.length === 1) {
      return (this.isNumber(args[0]) && (parseInt(args[0], 10) === args[0]));
    }

    for (let i = 0, len = args.length; i < len; i++) {
      const current = args[i];

      if (!this.isNumber(current) || (parseInt(current, 10) !== current)) {
        return false;
      }
    }

    return true;
  },
  isNully(...args) {
    if (args.length === 0) {
      return false;
    }

    if (args.length === 1) {
      return (this.isNull(args[0]) || this.isUndefined(args[0]));
    }

    for (let i = 0, len = args.length; i < len; i++) {
      const current = args[i];

      if (!this.isNull(current) || !this.isUndefined(current)) {
        return false;
      }
    }

    return true;
  },
  isType(n, typeToCompare){
    return checkType(n).toLowerCase() === typeToCompare.toLowerCase();
  },
};

for (let i = 0, len = types.length; i < len; i++) {
  const type = types[i];

  methods[`is${type}`] = (function (currentType) {
    return function (...args) {
      if (args.length === 0) {
        return false;
      }

      if (args.length === 1) {
        return currentType === checkType(args[0]);
      }

      for (let j = 0, innerLen = args.length; j < innerLen; j++) {
        const current = args[j];

        if (currentType !== checkType(current)) {
          return false;
        }
      }

      return true;
    };
  }(type));
}

exports = module.exports = methods;

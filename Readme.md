# type-checker

Simple Type Checking Module For Javascript

##  Basic usage

```js

typeChecker.isArray([]); // returns true

typeChecker.isArrayBuffer(new ArrayBuffer()); // returns true

function argTypeCheck() {
    return typeChecker.isArguments(arguments);
}

argTypeCheck(); // returns true

typeChecker.isBoolean(true); // returns true

typeChecker.isDate(new Date()); // returns true

typeChecker.isError(new Error()); // returns true

typeChecker.isFloat32Array(new Float32Array()); // returns true

typeChecker.isFloat64Array(new Float64Array()); // returns true

function typeCheckFuncTest() { }

typeChecker.isFloat(2.3); // returns true

typeChecker.isFunction(typeCheckFuncTest); // returns true

function* typeCheckGeneratorTest(){
    yield 1;
}

typeChecker.isGenerator(typeCheckGeneratorTest()); // returns true

typeChecker.isGeneratorFunction(typeCheckGeneratorTest); // returns true

typeChecker.isInt(2); // returns true

typeChecker.isInt8Array(new Int8Array()); // returns true

typeChecker.isInt16Array(new Int16Array()); // returns true

typeChecker.isInt32Array(new Int32Array()); // returns true

typeChecker.isJSON(JSON); // returns true

typeChecker.isMap(new Map); // returns true

typeChecker.isMath(Math); // returns true

typeChecker.isNull(null); // returns true

typeChecker.isNumber(2); // returns true

typeChecker.isNumber(2.4); // returns true

typeChecker.isObject({}); // returns true

typeChecker.isPromise(Promise.resolve()); // returns true

typeChecker.isRegExp(/.*/); // returns true

typeChecker.isSet(new Set()); // returns true

typeChecker.isString('type test'); // returns true

typeChecker.isSymbol(Symbol()); // returns true

typeChecker.isUint8Array(new Uint8Array()); // returns true

typeChecker.isUint8ClampedArray(new Uint8ClampedArray()); // returns true

typeChecker.isUint16Array(new Uint16Array()); // returns true

typeChecker.isUint32Array(new Uint32Array()); // returns true

typeChecker.isUndefined(undefined); // returns true

typeChecker.isWeakMap(new WeakMap()); // returns true

typeChecker.isWeakSet(new WeakSet()); // returns true

```

##  Helper Methods

```js
typeChecker.getType('two'); // returns String

typeChecker.isType('type', 'string');   // returns true

typeChecker.isType('type', 'STRING');   // returns true

```
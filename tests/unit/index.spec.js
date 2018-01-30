const { join } = require('path');

const { expect } = require('chai');

const typeChecker = require(join(__dirname, '..', '..', 'index'));

describe('Type Checker', function() {
    describe('isArray', function () {
        it('Should have property isArray', function () {
            expect(typeChecker).to.have.a.property('isArray');
        });

        it('Should Return True For single array', function() {
            expect(typeChecker.isArray([])).to.equal(true);
        });

        it('Should Return True For Multiple Arrays', function() {
            expect(typeChecker.isArray([], [])).to.equal(true);
        });

        it('Should Return False for non array values', function(){
            expect(typeChecker.isArray(null)).to.equal(false);
        });

        it('Should Return false for mixed values', function(){
            expect(typeChecker.isArray([], 1)).to.equal(false);
        });
    });

    describe('isArrayBuffer', function(){
        it('Should have property isArrayBuffer', function () {
            expect(typeChecker).to.have.a.property('isArrayBuffer');
        });

        it("Should return true for single array buffer", function(){
            expect(typeChecker.isArrayBuffer(new ArrayBuffer())).to.equal(true);
        });

        it("Should return true for multiple array buffers", function(){
            expect(typeChecker.isArrayBuffer(new ArrayBuffer(), new ArrayBuffer())).to.equal(true);
        });

        it("Should return false for non Array Buffer", function(){
            expect(typeChecker.isArrayBuffer(1)).to.equal(false);
        });
    });

    describe('isArguments', function(){
        it('Should have property isArguments', function () {
            expect(typeChecker).to.have.a.property('isArguments');
        });

        it("Should return true for single argumenets", function(done){
            (function test(){
                expect(typeChecker.isArguments(arguments)).to.equal(true);
                done();
            }());
        });

        it('Should return false for non arguments value', function(){
           expect(typeChecker.isArguments([])).to.equal(false);
        });
    });

    describe('isBoolean', function(){
        it('Should have property isBoolean', function () {
            expect(typeChecker).to.have.a.property('isBoolean');
        });

        it('Should be true for false', function(){
            expect(typeChecker.isBoolean(false)).to.equal(true);
        });

        it('Should be true for true', function(){
            expect(typeChecker.isBoolean(true)).to.equal(true);
        });

        it('Should be true for multiple booleans', function(){
            expect(typeChecker.isBoolean(true, false, true, false)).to.equal(true);
        });
    });

    describe('isDate', function(){
        it('Should have property isDate', function () {
            expect(typeChecker).to.have.a.property('isDate');
        });

        it('Should return true for single date', function(){
           expect(typeChecker.isDate(new Date())).to.equal(true);
        });

        it('Should return true for multiple dates', function(){
            expect(typeChecker.isDate(new Date(), new Date())).to.equal(true);
        });
    });

    describe('isEmpty', function(){
        it('Should have property isEmpty', function(){
          expect(typeChecker).to.have.a.property('isEmpty');
        });

        it('Should Return True For empty string', function(){
          expect(typeChecker.isEmpty('')).to.equal(true);
        });

        it('Should Return True For Null', function(){
            expect(typeChecker.isEmpty(null)).to.equal(true);
        });

        it('Should Return True For undefined', function(){
            expect(typeChecker.isEmpty(undefined)).to.equal(true);
        });
    });

    describe('isError', function(){
        it('Should have property isError', function () {
            expect(typeChecker).to.have.a.property('isError');
        });

        it("Should return true for single Error", function(){
            expect(typeChecker.isError(new Error())).to.equal(true);
        });
    });

    describe('isFloat', function(){
        it('Should have property isFloat', function(){
          expect(typeChecker).to.have.a.property('isFloat');
        });

        it('Should be true for single float', function(){
            expect(typeChecker.isFloat(2.7)).to.equal(true);
        });

        it('Should be true for multiple floats', function(){
            expect(typeChecker.isFloat(2.7, 2.9)).to.equal(true);
        });

        it('Should be false for an int', function(){
            expect(typeChecker.isFloat(2)).to.equal(false);
        });
    });

    describe('isFloat32Array', function(){
        it('Should have property isFloat32Array', function() {
            expect(typeChecker).to.have.a.property('isFloat32Array');
        });

        it('Should be true for single Float32Array', function(){
            expect(typeChecker.isFloat32Array(new Float32Array())).to.equal(true);
        });
    });

    describe('isFloat64Array', function(){
        it('Should have property isFloat64Array', function() {
            expect(typeChecker).to.have.a.property('isFloat64Array');
        });

        it('Should be true for single Float64Array', function(){
            expect(typeChecker.isFloat64Array(new Float64Array())).to.equal(true);
        });
    });

    describe('isFunction', function(){
        it('Should have property isFunction', function() {
            expect(typeChecker).to.have.a.property('isFunction');
        });

        it('Should be true for single function', function(){
            function test(){}
            expect(typeChecker.isFunction(test)).to.equal(true);
        });
    });

    describe('isGenerator', function(){
        it('Should have property isGenerator', function() {
            expect(typeChecker).to.have.a.property('isGenerator');
        });
    });

    describe('isGeneratorFunction', function(){
        it('Should have property isGeneratorFunction', function () {
            expect(typeChecker).to.have.a.property('isGeneratorFunction');
        });

        it('Should be true for single Generator function', function(){
            function* test(){}
            expect(typeChecker.isGeneratorFunction(test)).to.equal(true);
        });
    });

    describe('isInt', function(){
        it('Should have property isInt', function(){
            expect(typeChecker).to.have.a.property('isInt');
        });

        it('Should be true for single int', function(){
            expect(typeChecker.isInt(2)).to.equal(true);
        });

        it('Should be true for multiple ints', function(){
            expect(typeChecker.isInt(2, 3)).to.equal(true);
        });

        it('Should be false for a float', function(){
            expect(typeChecker.isInt(2.5)).to.equal(false);
        });
    });

    describe('isInt8Array', function(){
        it('Should have property isInt8Array', function() {
            expect(typeChecker).to.have.a.property('isInt8Array');
        });

        it('Should be true for single Int8Array', function(){
            expect(typeChecker.isInt8Array(new Int8Array())).to.equal(true);
        });
    });

    describe('isInt16Array', function(){
        it('Should have property isInt16Array', function() {
            expect(typeChecker).to.have.a.property('isInt16Array');
        });

        it('Should be true for single Int16Array', function(){
            expect(typeChecker.isInt16Array(new Int16Array())).to.equal(true);
        });
    });

    describe('isInt32Array', function(){
        it('Should have property isInt32Array', function() {
            expect(typeChecker).to.have.a.property('isInt32Array');
        });

        it('Should be true for single Int32Array', function(){
            expect(typeChecker.isInt32Array(new Int32Array())).to.equal(true);
        });

        it('Should be true for Mutliple Int32Arrays', function(){
            expect(typeChecker.isInt32Array(new Int32Array(),new Int32Array())).to.equal(true);
        });
    });

    describe('isJSON', function(){
        it('Should have property isJSON', function() {
            expect(typeChecker).to.have.a.property('isJSON');
        });

        it('Should be true for single JSON', function(){
            expect(typeChecker.isJSON(JSON)).to.equal(true);
        });
    });

    describe('isMap', function(){
        it('Should have property isMap', function () {
            expect(typeChecker).to.have.a.property('isMap');
        });

        it('Should be true for single Map', function(){
            expect(typeChecker.isMap(new Map())).to.equal(true);
        });
    });

    describe('isMath', function(){
        it('Should have property isMath', function() {
            expect(typeChecker).to.have.a.property('isMath');
        });

        it('Should be true for Single Math Instance', function(){
            expect(typeChecker.isMath(Math)).to.equal(true);
        });
    });

    describe('isNull', function(){
        it('Should have property isNull', function() {
            expect(typeChecker).to.have.a.property('isNull');
        });

        it('Should be true for single null', function(){
            expect(typeChecker.isNull(null)).to.equal(true);
        });
    });

    describe('isNully', function(){
        it('Should have property isNully', function() {
            expect(typeChecker).to.have.a.property('isNully');
        });

        it('Should be true for a single null', function(){
            expect(typeChecker.isNully(null)).to.equal(true);
        });

        it('Should be true for a single undefined', function(){
            expect(typeChecker.isNully(undefined)).to.equal(true);
        });
    });

    describe('isNumber', function(){
        it('Should have property isNumber', function() {
            expect(typeChecker).to.have.a.property('isNumber');
        });

        it('Should be true for single number', function(){
           expect(typeChecker.isNumber(2)).to.equal(true);
        });

        it('Should be true for single number', function(){
            expect(typeChecker.isNumber(2, 3.4, 2.4, 1.4)).to.equal(true);
        });
    });

    describe('isObject', function(){
        it('Should have property isObject', function () {
            expect(typeChecker).to.have.a.property('isObject');
        });

        it('Should be true for a single object', function(){
           expect(typeChecker.isObject({})).to.equal(true);
        });

        it('Should be true for multiple objects', function(){
            expect(typeChecker.isObject({}, {}, {})).to.equal(true);
        });
    });

    describe('isPromise', function(){
        it('Should have property isPromise', function() {
            expect(typeChecker).to.have.a.property('isPromise');
        });

        it('Should be true for a single promise', function(){
            const promiseOne = Promise.resolve();
            expect(typeChecker.isPromise(promiseOne)).to.equal(true);
            promiseOne.catch(() => {})
        });

        it('Should be true for a multiple promises', function(){
            const promiseOne = Promise.resolve();
            const promiseTwo = Promise.resolve();
            expect(typeChecker.isPromise(promiseOne, promiseTwo)).to.equal(true);
            Promise.all([promiseOne, promiseTwo]).catch(() => {});
        });
    });

    describe('isRegExp', function(){
        it('Should have property isRegExp', function() {
            expect(typeChecker).to.have.a.property('isRegExp');
        });

        it('Should be true for a single regex', function(){
            expect(typeChecker.isRegExp(/.*/)).to.equal(true);
        });

        it('Should be true for multiple regex', function(){
            expect(typeChecker.isRegExp(/.*/, /[aAbB]/)).to.equal(true);
        });
    });

    describe('isSet', function(){
        it('Should have property isSet', function() {
            expect(typeChecker).to.have.a.property('isSet');
        });

        it('Should be true for single set', function(){
            expect(typeChecker.isSet(new Set())).to.equal(true);
        })
    });

    describe('isString', function(){
        it('Should have property isString', function() {
            expect(typeChecker).to.have.a.property('isString');
        });

        it('Should be true for a single string', function(){
           expect(typeChecker.isString("test")).to.equal(true);
        });
    });

    describe('isSymbol', function(){
        it('Should have property isSymbol', function () {
            expect(typeChecker).to.have.a.property('isSymbol');
        });

        it('Should be true for a single symbol', function(){
           expect(typeChecker.isSymbol(Symbol("Hello"))).to.equal(true);
        });
    });

    describe('isUint8Array', function(){
        it('Should have property isUint8Array', function () {
            expect(typeChecker).to.have.a.property('isUint8Array');
        });

        it('Should have be true for a single Uint8Array', function(){
            expect(typeChecker.isUint8Array(new Uint8Array())).to.equal(true);
        });
    });

    describe('isUint8ClampedArray', function(){
        it('Should have property isUint8ClampedArray', function () {
            expect(typeChecker).to.have.a.property('isUint8ClampedArray');
        });

        it('Should have be true for a single Uint8ClampedArray', function(){
            expect(typeChecker.isUint8ClampedArray(new Uint8ClampedArray())).to.equal(true);
        });
    });

    describe('isUint16Array', function(){
        it('Should have property isUint16Array', function () {
            expect(typeChecker).to.have.a.property('isUint16Array');
        });

        it('Should have be true for a single Uint16Array', function(){
            expect(typeChecker.isUint16Array(new Uint16Array())).to.equal(true);
        });
    });

    describe('isUint32Array', function(){
        it('Should have property isUint32Array', function () {
            expect(typeChecker).to.have.a.property('isUint32Array');
        });

        it('Should have be true for a single Uint32Array', function(){
            expect(typeChecker.isUint32Array(new Uint32Array())).to.equal(true);
        });
    });

    describe('isUndefined', function(){
        it('Should have property isUndefined', function () {
            expect(typeChecker).to.have.a.property('isUndefined');
        });

        it('Should have be true for a single undefined value', function(){
            expect(typeChecker.isUndefined(undefined)).to.equal(true);
        });
    });

    describe('isWeakMap', function(){
        it('Should have property isWeakMap', function(){
            expect(typeChecker).to.have.a.property('isWeakMap');
        });

        it('should be true for single WeakMap', function(){
           expect(typeChecker.isWeakMap(new WeakMap())).to.equal(true);
        });
    });

    describe('isWeakSet', function(){
        it('Should have property isWeakSet', function(){
            expect(typeChecker).to.have.a.property('isWeakSet');
        });

        it('Should be true for single WeakSet', function(){
            expect(typeChecker.isWeakSet(new WeakSet())).to.equal(true);
        });
    });

    describe('getType', function(){
       it('Should have property getType', function(){
          expect(typeChecker).to.have.a.property('getType');
       });

       it('Should equal String', function(){
          expect(typeChecker.getType('hello')).to.equal('String');
       });
    });
});
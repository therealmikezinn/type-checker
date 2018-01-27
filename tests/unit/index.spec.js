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

        it("Should return true for Multiple array buffers", function(){
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

        it("should return true for single argumenets", function(done){
            (function test(){
                expect(typeChecker.isArguments(arguments)).to.equal(true);
                done();
            }());
        });

        it('should return false for non arguments value', function(){
           expect(typeChecker.isArguments([])).to.equal(false);
        });
    });

    describe('isBoolean', function(){
        it('Should have property isBoolean', function () {
            expect(typeChecker).to.have.a.property('isBoolean');
        });

        it('should be true for false', function(){
            expect(typeChecker.isBoolean(false)).to.equal(true);
        });

        it('should be true for true', function(){
            expect(typeChecker.isBoolean(true)).to.equal(true);
        });

        it('should be true for multiple booleans', function(){
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

    describe('isError', function(){
        it('Should have property isError', function () {
            expect(typeChecker).to.have.a.property('isError');
        });

        it("Should return true for single Error", function(){
            expect(typeChecker.isError(new Error())).to.equal(true);
        });
    });

    describe('isFloat32Array', function(){
        it('Should have property isFloat32Array', function () {
            expect(typeChecker).to.have.a.property('isFloat32Array');
        });

        it('should be true for single Float32Array', function(){
            expect(typeChecker.isFloat32Array(new Float32Array())).to.equal(true);
        });
    });

    describe('isFloat64Array', function(){
        it('Should have property isFloat64Array', function () {
            expect(typeChecker).to.have.a.property('isFloat64Array');
        });

        it('should be true for single Float64Array', function(){
            expect(typeChecker.isFloat64Array(new Float64Array())).to.equal(true);
        });
    });

    describe('isFunction', function(){
        it('Should have property isFunction', function () {
            expect(typeChecker).to.have.a.property('isFunction');
        });
    });

    describe('isGenerator', function(){
        it('Should have property isGenerator', function () {
            expect(typeChecker).to.have.a.property('isGenerator');
        });
    });

    describe('isGeneratorFunction', function(){
        it('Should have property isGeneratorFunction', function () {
            expect(typeChecker).to.have.a.property('isGeneratorFunction');
        });
    });

    describe('isInt8Array', function(){
        it('Should have property isInt8Array', function () {
            expect(typeChecker).to.have.a.property('isInt8Array');
        });
    });

    describe('isInt16Array', function(){
        it('Should have property isInt16Array', function () {
            expect(typeChecker).to.have.a.property('isInt16Array');
        });
    });

    describe('isInt32Array', function(){
        it('Should have property isInt32Array', function () {
            expect(typeChecker).to.have.a.property('isInt32Array');
        });
    });

    describe('isJSON', function(){
        it('Should have property isJSON', function () {
            expect(typeChecker).to.have.a.property('isJSON');
        });
    });

    describe('isMap', function(){
        it('Should have property isMap', function () {
            expect(typeChecker).to.have.a.property('isMap');
        });
    });

    describe('isMath', function(){
        it('Should have property isMath', function () {
            expect(typeChecker).to.have.a.property('isMath');
        });
    });

    describe('isNull', function(){
        it('Should have property isNull', function () {
            expect(typeChecker).to.have.a.property('isNull');
        });
    });

    describe('isNumber', function(){
        it('Should have property isMap', function () {
            expect(typeChecker).to.have.a.property('isMap');
        });
    });

    describe('isObject', function(){
        it('Should have property isObject', function () {
            expect(typeChecker).to.have.a.property('isObject');
        });
    });

    describe('isPromise', function(){
        it('Should have property isObject', function () {
            expect(typeChecker).to.have.a.property('isObject');
        });
    });

    describe('isRegExp', function(){
        it('Should have property isRegExp', function () {
            expect(typeChecker).to.have.a.property('isRegExp');
        });
    });

    describe('isSet', function(){
        it('Should have property isSet', function () {
            expect(typeChecker).to.have.a.property('isSet');
        });
    });

    describe('isString', function(){
        it('Should have property isString', function () {
            expect(typeChecker).to.have.a.property('isString');
        });
    });

    describe('isSymbol', function(){
        it('Should have property isSymbol', function () {
            expect(typeChecker).to.have.a.property('isSymbol');
        });
    });

    describe('isUint8Array', function(){
        it('Should have property isUint8Array', function () {
            expect(typeChecker).to.have.a.property('isUint8Array');
        });
    });

    describe('isUint8ClampedArray', function(){
        it('Should have property isUint8ClampedArray', function () {
            expect(typeChecker).to.have.a.property('isUint8ClampedArray');
        });
    });

    describe('isUint16Array', function(){
        it('Should have property isUint16Array', function () {
            expect(typeChecker).to.have.a.property('isUint16Array');
        });
    });

    describe('isUint32Array', function(){
        it('Should have property isUint32Array', function () {
            expect(typeChecker).to.have.a.property('isUint32Array');
        });
    });

    describe('isUndefined', function(){
        it('Should have property isUndefined', function () {
            expect(typeChecker).to.have.a.property('isUndefined');
        });
    });

    describe('isWeakMap', function(){
        it('Should have property isWeakMap', function () {
            expect(typeChecker).to.have.a.property('isWeakMap');
        });
    });

    describe('isWeakSet', function(){
        it('Should have property isWeakSet', function () {
            expect(typeChecker).to.have.a.property('isWeakSet');
        });
    });
});
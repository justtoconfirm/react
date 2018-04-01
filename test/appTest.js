const assert = require('chai').assert;
//const app = require('../app');
// If use the above line function would be app.sayHello() etc.
// Would need to comment lines below
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

// Results
sayHelloResult = sayHello();
addNumbersResult = addNumbers(5, 5);

describe('App', function() {
	describe('sayHello()', function() {
		it('sayHello should return hello', function() {
			//let result = sayHello();
			//assert.equal(app(), 'hello');
			//assert.equal(sayHello(), 'hello');
			//assert.equal(result, 'hello');
			assert.equal(sayHelloResult, 'hello');
		});

		it('sayHello should return type string', function() {
			//let result = sayHello();
			//assert.typeOf(result, 'string');
			assert.typeOf(sayHelloResult, 'string');
		});
	});

	describe('addNumbers()', function() {
		it('addNumbers value should be above 5', function() {
			//let result = addNumbers(5, 5);
			//assert.isAbove(result, 5);
			assert.isAbove(addNumbersResult, 5);
		});

		it('addNumbers should return type number', function() {
			//let result = addNumbers(5, 5);
			//assert.typeOf(result, 'number');
			assert.typeOf(addNumbersResult, 'number');
		});
	});
});
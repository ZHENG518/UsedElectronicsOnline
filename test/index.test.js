const assert = require('chai').assert;
const getPostsByCategory = require('../index');

describe('test index.js',function(){
	describe('test getPostsByCategory fucntion', function(){
		it('get pots of <Laptop> category', function(){
			assert.isNotNull(getPostsByCategory("Laptop"));
		});
		it('get pots of <Camera> category', function(){
			assert.isNotNull(getPostsByCategory("Camera"));
		});
		it('get pots of <Phone> category', function(){
			assert.isNotNull(getPostsByCategory("Phone"));
		});
		it('get pots of <others> category', function(){
			assert.isNotNull(getPostsByCategory("Others"));
		});
	});
});

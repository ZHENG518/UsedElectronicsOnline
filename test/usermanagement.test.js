const assert = require('chai').assert;
const search = require('../js/usermanagement');

describe('test usermanagement.js',function(){
	describe('test search fucntion', function(){
		this.timeout(10000);
		
		it('search the user with email cntains the keyword', function(){
			assert.isNotNull(search("test"));
  		});

	});
});
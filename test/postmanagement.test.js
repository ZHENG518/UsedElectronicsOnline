const assert = require('chai').assert;
const search = require('../js/postmanagement');

describe('test postmanagement.js',function(){
	describe('test search fucntion', function(){
		this.timeout(10000);
		
		it('get post with the title contains the keyword', function(){
			assert.isNotNull(search("mac"));
  		});

	});
});
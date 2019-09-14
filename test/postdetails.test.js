const assert = require('chai').assert;
const getPostById = require('../js/postdetails');

describe('test postdetails.js',function(){
	describe('test getPostById fucntion', function(){
		this.timeout(10000);
		
		it('get post details by id', function(){
			assert.isNotNull(getPostById("-Lo4W0kMKEWootDKFWDX"));
  		});

	});
});
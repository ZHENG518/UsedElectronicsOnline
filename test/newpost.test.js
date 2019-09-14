const assert = require('chai').assert;
const newPost = require('../js/newpost');

describe('test newpost.js',function(){
	describe('test newpost fucntion', function(){
		this.timeout(10000);
		it('create a new post', function(){
			newPost("test title","500", "Laptop", "test description")
  		});

	});
});
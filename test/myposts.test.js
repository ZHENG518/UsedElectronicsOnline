const assert = require('chai').assert;
const change_price = require('../js/myposts');

describe('test myposts.js',function(){
	describe('test change_price fucntion', function(){
		this.timeout(10000);
		it('change the price of a post', function(){
			change_price("-Lo4QK0di-2bbuax6hZU","500");
  		});

	});
});
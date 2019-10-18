const assert = require('chai').assert;
const changedetail = require('../js/myaccount');

describe('test mycaccount.js',function(){
	describe('test changedetail fucntion', function(){
		this.timeout(10000);
		
		it('change account details', function(){
			changedetail("x5mymzTrGHWR96MwdGyRXv5mAwB2","new@gmail.com","newFirst","newTest","0452123456");
  		});

	});
});
const assert = require('chai').assert;
const send = require('../js/demandmessage');

describe('test demandmessage.js',function(){
	describe('test sen fucntion', function(){
		this.timeout(10000);
		it('create a new demand message', function(){
			send("Unit test message");
  		});

	});
});
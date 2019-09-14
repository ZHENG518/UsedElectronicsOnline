const assert = require('chai').assert;
const registerWithEmailAndPassword = require('../js/register');

describe('test register.js',function(){
	describe('test registerWithEmailAndPassword fucntion', function(){
		this.timeout(10000);
		it('successful regist', function(){
			return registerWithEmailAndPassword("unittest@gmail.com","123456").then(function(value){
				assert.equal(value.user.email,"unittest@gmail.com");
			});
		  });
		it('regist with an exist email', function(){
			return registerWithEmailAndPassword("test@gmail.com","123456").catch(function(error){
				assert.equal(error.message,"The email address is already in use by another account.");
			});
		});
	});
});
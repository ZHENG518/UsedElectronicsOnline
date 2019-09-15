const assert = require('chai').assert;
const signInWithEmailAndPassword = require('../js/login');

describe('test login.js',function(){
	describe('test signInWithEmailAndPassword fucntion', function(){
		this.timeout(10000);
		
		it('login with correct email and password', function(){
			return signInWithEmailAndPassword("test@gmail.com","123456").then(function(value){
				assert.equal(value.user.email,"test@gmail.com");
			});
  		});

		it('login with incorrect password', function(){
			return signInWithEmailAndPassword("test@gmail.com","aaaaaa").catch(function(error){
				assert.equal(error.message,"The password is invalid or the user does not have a password.");
			});
		});
	});
});
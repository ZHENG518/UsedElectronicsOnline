const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().forBrowser('chrome').build();

Given('I visit Used Electronics Online website', function () {
	return driver.get('https://used-electronics-online.herokuapp.com/');         
});

Then('I see the login button', function () {
	driver.sleep(1000).then(function(){
		driver.findElement(webdriver.By.name('login'));
	});
});
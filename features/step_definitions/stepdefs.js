const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const webdriver = require('selenium-webdriver');
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(80 * 1000);

var driver = new webdriver.Builder().forBrowser('chrome').build();

Given('I visit Used Electronics Online website', function () {
	return driver.get('https://used-electronics-online.herokuapp.com/');         
});

When('I clik the login button', function () {
	driver.sleep(1000).then(function(){
		driver.findElement(webdriver.By.name('login')).click();
	});
});

Then('I should see the login page', function () {
	driver.sleep(1000).then(function(){
		driver.getCurrentUrl().then(url => {console.log(url);});
	});
});

Then('I should see {string} button', function (category) {
	driver.sleep(1000).then(function(){
		driver.findElement(webdriver.By.name(category));
	});
});

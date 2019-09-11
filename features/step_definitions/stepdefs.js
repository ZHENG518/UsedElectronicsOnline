const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const webdriver = require('selenium-webdriver');
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(80 * 1000);


//Zheng
var homepagedriver;
Given('I visit Used Electronics Online website', function () {
	homepagedriver = new webdriver.Builder().forBrowser('chrome').build();
	return homepagedriver.get('https://used-electronics-online.herokuapp.com/');         
});

Then('I should see all of post', function () {
	homepagedriver.sleep(1000).then(function(){
		homepagedriver.findElement(webdriver.By.id('content'));
	});
});

Then('I should see {string} button', function (category) {
	homepagedriver.sleep(1000).then(function(){
		homepagedriver.findElement(webdriver.By.name(category)).click();
	});
});


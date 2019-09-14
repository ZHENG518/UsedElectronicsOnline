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

//Xu
var register_driver;
Given('I am on register page', function () {
	register_driver = new webdriver.Builder().forBrowser('chrome').build();
	return register_driver.get('https://used-electronics-online.herokuapp.com/register.html');         
});

When('I fill in email with {string} password with {string} first name with {string} last name with {string} and phone number with {string}', function (email, password, first, last, phone) {
	register_driver.findElement(webdriver.By.name('fname')).sendKeys(first);
	register_driver.findElement(webdriver.By.name('lname')).sendKeys(last);
	register_driver.findElement(webdriver.By.name('email')).sendKeys(email);
	register_driver.findElement(webdriver.By.name('phone')).sendKeys(phone);
	register_driver.findElement(webdriver.By.name('password')).sendKeys(password);
	register_driver.findElement(webdriver.By.name('submit')).click();
});

Then('I should goback to the homepage', function () {
	register_driver.sleep(1000).then(function(){
		register_driver.getCurrentUrl().then(url => {console.log(url);});
	});
});
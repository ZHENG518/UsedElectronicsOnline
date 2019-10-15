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

var mypostdriver;
Given('I am on mypost page', function () {
	mypostdriver = new webdriver.Builder().forBrowser('chrome').build();
	mypostdriver.get('https://used-electronics-online.herokuapp.com/myposts.html');
	mypostdriver.sleep(10000).then(function(){
		mypostdriver.findElement(webdriver.By.name('login')).click();
		mypostdriver.sleep(5000).then(function(){
			mypostdriver.findElement(webdriver.By.name('email')).sendKeys('test@gmail.com');
	 		mypostdriver.findElement(webdriver.By.name('psw')).sendKeys('123456');
	 		mypostdriver.findElement(webdriver.By.name('login')).click();
	 		mypostdriver.sleep(10000).then(function(){
			 	mypostdriver.findElement(webdriver.By.name('change')).click();
			 	mypostdriver.sleep(100).then(function(){
				 	mypostdriver.switchTo().alert().sendKeys('2000');
				 	mypostdriver.switchTo().alert().accept();
			 	});
			});
		});
	});
});

When('I click change price button', function () {
});

Then('I can enter the new price', function () {
});



// Bocheng
var logindriver;
Given('I am on login page', function () {
 logindriver = new webdriver.Builder().forBrowser('chrome').build();
 return logindriver.get('https://used-electronics-online.herokuapp.com/login.html');
});y

When('I fill in email with {string} and password with {string}', function (value1, value2) {
 logindriver.findElement(webdriver.By.name('email')).sendKeys(value1);
 logindriver.findElement(webdriver.By.name('psw')).sendKeys(value2);
 logindriver.findElement(webdriver.By.name('login')).click();
});

Then('I should see the homepage', function () {
 logindriver.sleep(1000).then(function(){
  logindriver.getCurrentUrl().then(url => {console.log(url);});
 });
});

Then('I should see warning message', function () {
});

var postmanagedriver;
Given('I am on postmanagement page', function () {
 postmanagedriver = new webdriver.Builder().forBrowser('chrome').build();
 postmanagedriver.get('https://used-electronics-online.herokuapp.com/adminindex.html');
});

When('I type a key word and click search button', function () {
 postmanagedriver.findElement(webdriver.By.id('keyword')).sendKeys('sumsang');

});

Then('I should see the result posts', function () {

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

//Beilei
var detailDriver;
Given('I am on a post detail page', function () {
	detailDriver = new webdriver.Builder().forBrowser('chrome').build();
	return detailDriver.get('https://used-electronics-online.herokuapp.com/ProductDetails.html?id=-Lo4PpcHLBnP9ghFPsg7');
});

Then('I should see details of the post', function () {
	detailDriver.sleep(1000).then(function(){
		var pubelement = detailDriver.findElement(webdriver.By.id('publisher'));
		var prielement = detailDriver.findElement(webdriver.By.id('Price'));
		var catelement = detailDriver.findElement(webdriver.By.id('category'));
		var phoelement = detailDriver.findElement(webdriver.By.id('phone'));
		var emailelement = detailDriver.findElement(webdriver.By.id('email'));
		var diselement = detailDriver.findElement(webdriver.By.id('Discrp'));
	});
});

var myaccountdriver;
Given('I am on myaccount page', function () {
	myaccountdriver = new webdriver.Builder().forBrowser('chrome').build();
	myaccountdriver.get('https://used-electronics-online.herokuapp.com/myaccount.html');
});

Then('I can enter the new first name and click save button', function () {
	myaccountdriver.sleep(15000).then(function(){
		myaccountdriver.findElement(webdriver.By.name('login')).click();
		myaccountdriver.sleep(5000).then(function(){
			myaccountdriver.findElement(webdriver.By.name('email')).sendKeys('test@gmail.com');
	 		myaccountdriver.findElement(webdriver.By.name('psw')).sendKeys('123456');
	 		myaccountdriver.findElement(webdriver.By.name('login')).click();
	 		myaccountdriver.sleep(10000).then(function(){
	 			myaccountdriver.findElement(webdriver.By.id('fname')).clear();
			 	myaccountdriver.findElement(webdriver.By.id('fname')).sendKeys('uitestfn');
			 	myaccountdriver.findElement(webdriver.By.name('save')).click();
			});
		});
	});
});

//Xitong
var newpostdriver;
Given('I am on new post page', function () {
	newpostdriver = new webdriver.Builder().forBrowser('chrome').build();
	return newpostdriver.get('https://used-electronics-online.herokuapp.com/newPost.html');
});

When('I fill in title with {string} price with {string} description with {string}', function (title, price, description) {
	newpostdriver.findElement(webdriver.By.id('title')).sendKeys(title);
	newpostdriver.findElement(webdriver.By.id('price')).sendKeys(price);
	newpostdriver.findElement(webdriver.By.id('category')).findElement(webdriver.By.xpath("//option[@value='Camera']")).click;
	newpostdriver.findElement(webdriver.By.id('descrip')).sendKeys(description);
});

Then('I create a new post successfully', function () {
	console.log("new post created");
});

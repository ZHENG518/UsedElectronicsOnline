Feature: Register Features
  As a Used Electronic Online user
  I want to register an account with my email address and password
  So that I can post on the website

  Scenario: Successful register
    Given I am on register page
    When I fill in email with "uitest@gmail.com" password with "123456" first name with "uitestfirst" last name with "uitestlast" and phone number with "0412345678"
    Then I should goback to the homepage
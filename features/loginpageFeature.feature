Feature: Login page Features
  As a Used Electronic Online user
  I want to login with my email address and password
  So that I post new posts

  Background: User navigates to login page 
    Given I am on login page

  Scenario: Successful login
    When I fill in email with "test@gmail.com" and password with "123456"
    Then I should see the homepage

  Scenario Outline: Failed login
    When I fill in email with "<email>" and password with "<password>"
    Then I should see warning message

    Examples:
      |email         |password|
      |              |123456  |
      |test@gamil.com|        |
Feature: usermanagemt Features
  As a Used Electronic Online Administrator
  I want to Search a user by email address
  So that I can Find a specific user

  Scenario: search user
    Given I am on user management page
    When I type a email key word and click search button
    Then I should see the result users
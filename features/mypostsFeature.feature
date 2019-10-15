Feature: Change Price Features
  As a Used Electronic Online user
  I want to change the price of my post
  So that I can publish the new price

  Scenario: Change Price
    Given I am on mypost page
    When I click change price button
    Then I should see a text box appear
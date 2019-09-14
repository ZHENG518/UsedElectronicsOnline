Feature: New Post Features
  As a Used Electronic Online user
  I want to enter details and price of the product I want to sell
  So that I can publish post for selling my product

  Scenario: Create a new post
    Given I am on new post page
    When I fill in title with "UI test title" price with "500" description with "UI test description"
    Then I create a new post successfully


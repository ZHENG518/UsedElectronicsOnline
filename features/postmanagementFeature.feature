Feature: Post management Features
  As a Used Electronic Online Administrator
  I want to search posts by post title
  So that I can find the target post faster

  Scenario: search post
    Given I am on postmanagement page
    When I type a key word and click search button
    Then I should see the result posts
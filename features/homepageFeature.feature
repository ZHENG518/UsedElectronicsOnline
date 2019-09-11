Feature: Homepage Features
  As a Used Electronic Online user
  I want to view posts by category
  So that I can find posts related to the product I want

  Background: User navigates to login page 
    Given I visit Used Electronics Online website

  Scenario: view all of post
    Then I should see all of post

  Scenario Outline: Test category buttons
    Then I should see "<category>" button

    Examples:
      |category|
      |laptop |
      |phone  |
      |camera |
      |others |

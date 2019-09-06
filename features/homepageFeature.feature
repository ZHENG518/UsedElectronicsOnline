Feature: Homepage Features

  Scenario: Test login button enabled
    Given I visit Used Electronics Online website
    When I clik the login button
    Then I should see the login page

  Scenario Outline: Test category buttons
    Given I visit Used Electronics Online website
    Then I should see "<category>" button

    Examples:
      |category|
      |laptop |
      |phone  |
      |camera |
      |others |

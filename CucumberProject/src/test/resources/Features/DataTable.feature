Feature: Test the login functionality of OrangeHRM using DataTable

  Scenario: Test the valid login using DataTable
    Given user is on login page
    When user enters credentials using DataTable
      | admin | admin123 |
    And click on login button
    Then user should land on home page

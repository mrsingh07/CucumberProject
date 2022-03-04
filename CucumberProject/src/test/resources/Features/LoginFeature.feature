Feature: Test the login functionality of OrangeHRM

Scenario: Test the valid login

Given user is on login page
When user enters "admin" and "admin123"
And click on login button
Then user should land on home page
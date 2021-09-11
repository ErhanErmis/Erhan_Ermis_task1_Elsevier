@UI
Feature: Users should be able to login


  Scenario: Login as a customer
    When the user logs in with valid credentials
    Then the products page is displayed

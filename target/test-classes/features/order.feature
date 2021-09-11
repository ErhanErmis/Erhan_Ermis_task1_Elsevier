@wip @UI

Feature: order the cheapest & the 2nd costliest products


  Scenario: Users should be able to order the cheapest & the 2nd costliest products
    When the user logs in with valid credentials
    Given the user navigates to price dropdown menu to sort the price from high to low
    When the user adds the cheapest 2 products to the basket
    When the user click to the cart badge
    Then User should be able the see the products in the basket
    When the user clicks on checkout button
    And  the user enter name surname and post code
    And  the user click the continue button
    Then the user navigates to CHECKOUT: OVERVIEW page
    And  the user clicks on finish button
    Then the user navigates to CHECKOUT: COMPLETE! page


@api
Feature: verifying v2/pet/findByStatus endpoints


  Scenario Outline: Users sends valid get request
    Given accept type is JSON
    And the user queries for "<status>"
    When the user sends GET request to "v2/pet/findByStatus"
    Then response status code should be 200
    And response content type: "application/json"
    And response Access-Control-Allow-Headers:"Content-Type, api_key, Authorization"
    And response Access-Control-Allow-Methods:"GET, POST, DELETE, PUT"
    And response payload "status" attribute should equal to "<status>"


    Examples:
      | status    |
      | available |
      | pending   |
      | sold      |


  Scenario Outline: Users sends invalid get request
    Given accept type is JSON
    And the user queries for "<status>"
    When the user sends GET request to "v2/pet/findByStatus"
    Then response status code should be 400

    Examples:
      | status   |
      | vailable |
      | sending  |
      | 4        |
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/petAPI.feature");
formatter.feature({
  "name": "verifying v2/pet/findByStatus endpoints",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Users sends valid get request",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "accept type is JSON",
  "keyword": "Given "
});
formatter.step({
  "name": "the user queries for \"\u003cstatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user sends GET request to \"v2/pet/findByStatus\"",
  "keyword": "When "
});
formatter.step({
  "name": "response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "name": "response content type: \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "name": "response Access-Control-Allow-Headers:\"Content-Type, api_key, Authorization\"",
  "keyword": "And "
});
formatter.step({
  "name": "response Access-Control-Allow-Methods:\"GET, POST, DELETE, PUT\"",
  "keyword": "And "
});
formatter.step({
  "name": "response payload \"status\" attribute should equal to \"\u003cstatus\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "status"
      ]
    },
    {
      "cells": [
        "available"
      ]
    },
    {
      "cells": [
        "pending"
      ]
    },
    {
      "cells": [
        "sold"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Users sends valid get request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "accept type is JSON",
  "keyword": "Given "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.accept_type_is_JSON()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user queries for \"available\"",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.the_user_queries_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends GET request to \"v2/pet/findByStatus\"",
  "keyword": "When "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.theUserSendsGETRequestTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.response_status_code_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response content type: \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.responseContentType(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response Access-Control-Allow-Headers:\"Content-Type, api_key, Authorization\"",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.responseAccessControlAllowHeaders(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response Access-Control-Allow-Methods:\"GET, POST, DELETE, PUT\"",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.responseAccessControlAllowMethods(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response payload \"status\" attribute should equal to \"available\"",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.response_payload_attribute_should_equal_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Users sends valid get request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "accept type is JSON",
  "keyword": "Given "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.accept_type_is_JSON()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user queries for \"pending\"",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.the_user_queries_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends GET request to \"v2/pet/findByStatus\"",
  "keyword": "When "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.theUserSendsGETRequestTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.response_status_code_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response content type: \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.responseContentType(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response Access-Control-Allow-Headers:\"Content-Type, api_key, Authorization\"",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.responseAccessControlAllowHeaders(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response Access-Control-Allow-Methods:\"GET, POST, DELETE, PUT\"",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.responseAccessControlAllowMethods(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response payload \"status\" attribute should equal to \"pending\"",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.response_payload_attribute_should_equal_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Users sends valid get request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "accept type is JSON",
  "keyword": "Given "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.accept_type_is_JSON()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user queries for \"sold\"",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.the_user_queries_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends GET request to \"v2/pet/findByStatus\"",
  "keyword": "When "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.theUserSendsGETRequestTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.response_status_code_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response content type: \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.responseContentType(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response Access-Control-Allow-Headers:\"Content-Type, api_key, Authorization\"",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.responseAccessControlAllowHeaders(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response Access-Control-Allow-Methods:\"GET, POST, DELETE, PUT\"",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.responseAccessControlAllowMethods(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response payload \"status\" attribute should equal to \"sold\"",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.response_payload_attribute_should_equal_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Users sends invalid get request",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "accept type is JSON",
  "keyword": "Given "
});
formatter.step({
  "name": "the user queries for \"\u003cstatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user sends GET request to \"v2/pet/findByStatus\"",
  "keyword": "When "
});
formatter.step({
  "name": "response status code should be 400",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "status"
      ]
    },
    {
      "cells": [
        "vailable"
      ]
    },
    {
      "cells": [
        "sending"
      ]
    },
    {
      "cells": [
        "4"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Users sends invalid get request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "accept type is JSON",
  "keyword": "Given "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.accept_type_is_JSON()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user queries for \"vailable\"",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.the_user_queries_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends GET request to \"v2/pet/findByStatus\"",
  "keyword": "When "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.theUserSendsGETRequestTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response status code should be 400",
  "keyword": "Then "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.response_status_code_should_be(java.lang.Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [400] but found [200]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:839)\r\n\tat org.testng.Assert.assertEquals(Assert.java:849)\r\n\tat Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.response_status_code_should_be(petAPI_step_defs.java:47)\r\n\tat ✽.response status code should be 400(file:///C:/Users/ev/IdeaProjects/Erhan_Ermis_task1_Elsevier/src/test/resources/features/petAPI.feature:28)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Users sends invalid get request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "accept type is JSON",
  "keyword": "Given "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.accept_type_is_JSON()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user queries for \"sending\"",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.the_user_queries_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends GET request to \"v2/pet/findByStatus\"",
  "keyword": "When "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.theUserSendsGETRequestTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response status code should be 400",
  "keyword": "Then "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.response_status_code_should_be(java.lang.Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [400] but found [200]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:839)\r\n\tat org.testng.Assert.assertEquals(Assert.java:849)\r\n\tat Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.response_status_code_should_be(petAPI_step_defs.java:47)\r\n\tat ✽.response status code should be 400(file:///C:/Users/ev/IdeaProjects/Erhan_Ermis_task1_Elsevier/src/test/resources/features/petAPI.feature:28)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Users sends invalid get request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "accept type is JSON",
  "keyword": "Given "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.accept_type_is_JSON()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user queries for \"4\"",
  "keyword": "And "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.the_user_queries_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends GET request to \"v2/pet/findByStatus\"",
  "keyword": "When "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.theUserSendsGETRequestTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response status code should be 400",
  "keyword": "Then "
});
formatter.match({
  "location": "Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.response_status_code_should_be(java.lang.Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [400] but found [200]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:839)\r\n\tat org.testng.Assert.assertEquals(Assert.java:849)\r\n\tat Com.Test.ErhanErmis.step_definitions.petAPI_step_defs.response_status_code_should_be(petAPI_step_defs.java:47)\r\n\tat ✽.response status code should be 400(file:///C:/Users/ev/IdeaProjects/Erhan_Ermis_task1_Elsevier/src/test/resources/features/petAPI.feature:28)\r\n",
  "status": "failed"
});
});
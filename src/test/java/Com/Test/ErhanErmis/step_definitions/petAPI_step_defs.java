package Com.Test.ErhanErmis.step_definitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.testng.Assert;
import static io.restassured.RestAssured.given;


import java.util.List;
import java.util.Map;

public class petAPI_step_defs {
    Response response;
    String contentType;
    String queryParam;
    String baseUrl="https://petstore.swagger.io/";


    @Given("accept type is JSON")
    public void accept_type_is_JSON() {
          }

    @Given("the user queries for {string}")
    public void the_user_queries_for(String param) {
        queryParam=param;
    }

    @When("the user sends GET request to {string}")
    public void theUserSendsGETRequestTo(String endPoint) {
         response = given().accept(ContentType.JSON).queryParam("status", queryParam)
                .and().when().get(baseUrl+endPoint);

    }

    @Then("response status code should be {int}")
    public void response_status_code_should_be(Integer int1) {
        switch (int1){
            case 200:
                Assert.assertEquals(response.statusCode(),200);
                break;
            case 400:
                Assert.assertEquals(response.statusCode(),400);
                break;

        }

            }

    @And("response content type: {string}")
    public void responseContentType(String contentType) {

        Assert.assertEquals(response.contentType(),contentType);
    }

    @And("response Access-Control-Allow-Headers:{string}")
    public void responseAccessControlAllowHeaders(String aCAH) {

        Assert.assertEquals(response.header("Access-Control-Allow-Headers"),aCAH);
    }

    @And("response Access-Control-Allow-Methods:{string}")
    public void responseAccessControlAllowMethods(String aCAM) {

        Assert.assertEquals(response.header("Access-Control-Allow-Methods"),aCAM);
    }

    @Then("response payload {string} attribute should equal to {string}")
    public void response_payload_attribute_should_equal_to(String attr, String value) {
       List <String> statusCheck = response.path("status");
            for (String s : statusCheck) {
            Assert.assertEquals(s,value);
        }


    }



}

package Com.Test.ErhanErmis.step_definitions;

import Com.Test.ErhanErmis.pages.login;
import Com.Test.ErhanErmis.pages.product;
import Com.Test.ErhanErmis.utilities.ConfigurationReader;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class logins_step_defs {
    @When("the user logs in with valid credentials")
    public void the_user_logs_in_with_valid_credentials() {
        login login= new login();
        login.userNameBox.sendKeys(ConfigurationReader.get("username"));
        login.passwordbox.sendKeys(ConfigurationReader.get("password"));
        login.loginButton.click();

    }

    @Then("the products page is displayed")
    public void the_products_page_is_displayed() {
        product product = new product();
        Assert.assertEquals("PRODUCTS", product.products.getText());

    }


}

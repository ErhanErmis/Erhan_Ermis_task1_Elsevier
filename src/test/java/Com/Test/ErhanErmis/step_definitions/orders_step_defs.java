package Com.Test.ErhanErmis.step_definitions;

import Com.Test.ErhanErmis.pages.checkout_information;
import Com.Test.ErhanErmis.pages.checkout_overview;
import Com.Test.ErhanErmis.pages.product;
import Com.Test.ErhanErmis.pages.your_cart;
import Com.Test.ErhanErmis.utilities.ConfigurationReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.List;

public class orders_step_defs {
    product product =new product();
    your_cart your_cart =new your_cart();
    checkout_overview checkout_overview= new checkout_overview();
    checkout_information checkout_information=new checkout_information();
    int numberOfItems;
    List <String> productList =new ArrayList<>();

    @Given("the user navigates to price dropdown menu to sort the price from high to low")
    public void the_user_navigates_to_price_dropdown_menu_to_sort_the_price_from_high_to_low() {
        // to sorting the items in descending order via using switch case method.
        product.selectFilterMethod("hilo");

        // to verification of items in the cart
        for(int i=0; i<product.items.size(); i++) {

            productList.add(product.items.get(i).getText());
        }
    }

    @When("the user adds the cheapest {int} products to the basket")
    public void theUserAddsTheCheapestProductsToTheBasket(int items) {
        //I used {int} to give flexibility to select different number of items.
        numberOfItems=items;

        for (int i=1;i<=numberOfItems;i++) {
             product.addToCartButtons.get(product.items.size() - i).click();
           }
    }

    @When("the user click to the cart badge")
    public void the_user_click_to_the_cart_badge() {
        product.shoppingCartBadge.click();
    }

    @Then("User should be able the see the products in the basket")
    public void user_should_be_able_the_see_the_products_in_the_basket() {
               for (int i = 1; i <= numberOfItems; i++) {
            Assert.assertEquals(productList.get(productList.size()-i), your_cart.selectedItems.get(i-1).getText());
        }
    }

    @Then("the user clicks on checkout button")
    public void the_user_clicks_on_checkout_button() {
        your_cart.checkoutButton.click();
    }


    @And("the user enter name surname and post code")
    public void the_user_enter_name_surname_and_post_code() {
        //I put the details to configuration properties file to change the details whenever we need.
        // Especially for negative test cases. Currently post code entrance option is a defect. There should be some boundaries regarding to post code entries, name and surname too.
        checkout_information.firstName.sendKeys(ConfigurationReader.get("name"));
        checkout_information.lastName.sendKeys(ConfigurationReader.get("surname"));
        checkout_information.postCode.sendKeys(ConfigurationReader.get("postcode"));
    }

    @Then("the user click the continue button")
    public void the_user_click_the_continue_button() {
        checkout_information.continueButton.click();
    }

    @Then("the user navigates to CHECKOUT: OVERVIEW page")
    public void the_user_navigates_to_CHECKOUT_OVERVIEW_page() {
        Assert.assertEquals("CHECKOUT: OVERVIEW", checkout_overview.overviewPage.getText());
    }

    @Then("the user clicks on finish button")
    public void the_user_clicks_on_finish_button() {
        checkout_overview.finishButton.click();
    }

    @Then("the user navigates to CHECKOUT: COMPLETE! page")
    public void the_user_navigates_to_CHECKOUT_COMPLETE_page() {
        Assert.assertEquals("THANK YOU FOR YOUR ORDER", checkout_overview.confirmationText.getText());
    }



}

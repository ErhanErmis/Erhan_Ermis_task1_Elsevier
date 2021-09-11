package Com.Test.ErhanErmis.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class your_cart extends base{
/*
    //locator of the first product in shopping cart
    @FindBy(xpath = "(//div[@class =\"inventory_item_name\"])[1]")
    public WebElement firstProduct;

    //locator of the second product in shopping cart
    @FindBy(xpath = "(//div[@class =\"inventory_item_name\"])[2]")
    public WebElement secondProduct;

    //locator of the title of the shopping cart page
    @FindBy(xpath = "//span[contains(text(),'Your Cart')]")
    public WebElement yourCart;
*/

    @FindBy(xpath = "//div[@class =\"inventory_item_name\"]")
    public List<WebElement> selectedItems;

    //locator of the checkout button  in shopping cart
    @FindBy(id = "checkout")
    public WebElement checkoutButton;
}

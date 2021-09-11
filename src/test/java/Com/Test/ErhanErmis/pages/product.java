package Com.Test.ErhanErmis.pages;

import Com.Test.ErhanErmis.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.List;


public class product extends base{

    public product(){
        PageFactory.initElements(Driver.get(),this);
    }

    //product text to verify
    @FindBy(xpath = "//span[contains(text(),'Products')]")
    public WebElement products;

    //locator of dropdown filter
    @FindBy(css = ".product_sort_container")
    public WebElement dropDownElement;

    //I prefer switch case for more dynamic sutructre to be able to ready for other sorting options instead of only "hilo".
    public void selectFilterMethod(String sortingStyle){
        Select dropDown = new Select(dropDownElement);
        switch (sortingStyle){
            case "a-z":
                dropDown.selectByIndex(0);
                break;
            case "z-a":
                dropDown.selectByIndex(1);
                break;
            case "lohi":
                dropDown.selectByIndex(2);
                break;
            case "hilo":
                dropDown.selectByIndex(3);
                    break;
        }
    }

   // @FindBy(xpath = "//option[contains(text(),'Price (high to low)')]")
    //public WebElement hilo;

    /*first I found the product like below
    //First cheapest product
    @FindBy(id = "add-to-cart-sauce-labs-onesie")
    public WebElement onesie;
    //2nd costliest products
    @FindBy(id = "add-to-cart-sauce-labs-bike-light")
    public WebElement bikeLight;


    //Then to create more dynamic structure for change in the future, I change like below  inventory_item_name
*/
    @FindBy(xpath = "//*[text()=\"Add to cart\"]")
    public List<WebElement> addToCartButtons;

    @FindBy(css = ".inventory_item_name")
    public List<WebElement> items;


    //shopping cart badge to go to the cart page
    @FindBy(id = "shopping_cart_container")
    public WebElement shoppingCartBadge;










   }

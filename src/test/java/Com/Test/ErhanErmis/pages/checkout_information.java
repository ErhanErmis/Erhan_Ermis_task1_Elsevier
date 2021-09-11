package Com.Test.ErhanErmis.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class checkout_information extends base{

    //locator of the title of the your information page
    @FindBy(xpath = "//span[contains(text(),'Checkout: Your Information')]")
    public WebElement yourInfoPage;

    //locator of the name text box in your information page
    @FindBy(id = "first-name")
    public WebElement firstName;

    //locator of the surname text box in your information page
    @FindBy(id = "last-name")
    public WebElement lastName;

    //locator of the post code text box in your information page
    @FindBy(id = "postal-code")
    public WebElement postCode;

    //locator of the continue button in information page
    @FindBy(id = "continue")
    public WebElement continueButton;
}

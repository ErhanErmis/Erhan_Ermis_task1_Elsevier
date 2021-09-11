package Com.Test.ErhanErmis.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class checkout_overview extends base{

    //locator of the title of the overview page
    @FindBy(xpath = "//span[contains(text(),'Checkout: Overview')]")
    public WebElement overviewPage;

    //locator of the finish button in review page
    @FindBy(id = "finish")
    public WebElement finishButton;

    //locator of the post code text box in your information page
    @FindBy(xpath = "//h2[contains(text(),'THANK YOU FOR YOUR ORDER')]")
    public WebElement confirmationText;
}

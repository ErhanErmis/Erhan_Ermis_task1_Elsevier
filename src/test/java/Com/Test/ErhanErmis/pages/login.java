package Com.Test.ErhanErmis.pages;

import Com.Test.ErhanErmis.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class login extends base {

    public login (){
        PageFactory.initElements(Driver.get(),this);

    }

    @FindBy(id = "user-name")
    public WebElement userNameBox;

    @FindBy(id = "password")
    public WebElement passwordbox;

    @FindBy(id = "login-button")
    public WebElement loginButton;



}

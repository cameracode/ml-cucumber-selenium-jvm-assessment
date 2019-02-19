package ml_cucumber_selenium_jvm_assessment.steps;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

//import FormSubmitAction;
//import pageobjects.ContactPage;
//import pageobjects.PageMessages;

public class CheckWebsiteElementsSteps {
	
	public WebDriver driver;
	
	@Before
    public void openBrowser() 
    {
        System.out.println("Starting scenario preprocessing...");
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Camera\\Documents\\GitHub\\ml-cucumber-selenium-jvm-assessment\\src\\test\\java\\ml_cucumber_selenium_jvm_assessment\\resources\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
    }
    
    /*public void setup() {
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\Camera\\Documents\\GitHub\\ml-cucumber-selenium-jvm-assessment\\src\\test\\java\\ml_cucumber_selenium_jvm_assessment\\resources\\geckodriver.exe");
		this.driver = new FirefoxDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
	}
	
	public void Steps() 
	{
		 driver = WebHooks.driver;
	}*/
	
	// Background
	@Given("^User loads the home page$")
	public void user_loads_the_home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String url = "https://www.magicleap.com";
		driver.get(url);
		//throw new PendingException();
	}

	@Given("^User scrolls down to the \"([^\"]*)\" section$")
	public void user_scrolls_down_to_the_section(String arg1) throws Throwable {
		// Finds element "Keep in touch" by XPATH - "//*[@id="footer_email"]"
		String keepInTouch = "Keep in touch";
		List<WebElement> keepInTouchList = driver.findElements(By.xpath("//*[contains(text(),'" + keepInTouch + "')]"));
		//WebElement keepInTouch = driver.findElement(By.xpath("//*[@id=\"footer_email\"]"));
		//keepInTouch.click();
		
		/*if (keepInTouch.isSelected()) {
            System.out.println("Found the section: Keep in touch!");
        } else {
            throw new IllegalStateException("Cannot find the section: Keep in touch!");
        }*/
	    //throw new PendingException();
	}
	
	// Test 1
	@When("^User reaches the section \"([^\"]*)\"$")
	public void user_reaches_the_section(String arg1) throws Throwable {
		// Finds element Magic Leap One by XPATH - //*[@id="__next"]/div[2]/main/section/div[2]/div/div/h2[1]
		String magicLeapOne = "Magic Leap One";
		String creatorEdition = "Creator Edition";
		List<WebElement> magicLeapOneList = driver.findElements(By.xpath("//*[contains(text(),'" + magicLeapOne + "')]"));
		List<WebElement> creatorEditionList = driver.findElements(By.xpath("//*[contains(text(),'" + creatorEdition + "')]"));
		
		if (magicLeapOneList.contains(magicLeapOne)) {
            System.out.println("Found the section: Magic Leap One!");
        } else if (creatorEditionList.contains(creatorEdition)) {
        	System.out.println("Found the section: Creator Edition!");
        } else {
            throw new IllegalStateException("Cannot find the phrase: Magic Leap One Creator Edition!");
        }
	}

	@Then("^The phrase \"([^\"]*)\" exists$")
	public void the_phrase_exists(String arg1) throws Throwable {
		// Finds element Magic Leap One by XPATH - //*[@id="__next"]/div[2]/main/section/div[2]/div/div/h2[1]
		WebElement magicLeapOne = driver.findElement(By.xpath("//*[@id=\"__next\"]/div[2]/main/section/div[2]/div/div/h2[1]"));
		WebElement creatorEdition = driver.findElement(By.xpath("//*[@id=\"__next\"]/div[2]/main/section/div[2]/div/div/h2[2]"));
		magicLeapOne.click();
		creatorEdition.click();
		
		if (magicLeapOne.isSelected()) {
            System.out.println("Found the section: Magic Leap One!");
        } else if (creatorEdition.isSelected()) {
        	System.out.println("Found the section: Creator Edition!");
        } else {
            throw new IllegalStateException("Cannot find the phrase: Magic Leap One Creator Edition!");
        }
	}
	
	// start 1 Section 2
	@When("^User reaches \"([^\"]*)\"$")
	public void user_reaches(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^User fills in a valid e-mail address$")
	public void user_fills_in_a_valid_e_mail_address() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	
	@When("^User fills in a nickname$")
	public void user_fills_in_a_nickname() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^User selects an option from the drop-down$")
	public void user_selects_an_option_from_the_drop_down() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	
	@Then("^User should be shown the response \"([^\"]*)\" upon clicking the \"([^\"]*)\" button$")
	public void user_should_be_shown_the_response_upon_clicking_the_button(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	
	// Start Test 2
	@When("^User submits the \"([^\"]*)\" form$")
	public void user_submits_the_form(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^The form response is not \"([^\"]*)\" after \"([^\"]*)\" button is clicked$")
	public void the_form_response_is_not_after_button_is_clicked(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
}

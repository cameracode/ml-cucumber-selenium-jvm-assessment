package ml_cucumber_selenium_jvm_assessment.steps;

import static org.testng.Assert.assertTrue;
import static org.testng.Assert.fail;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class CheckWebsiteElementsSteps {
	
	public WebDriver driver;
	
	@Before
    public void openBrowser() 
    {
        System.out.println("Starting scenario preprocessing...");
        System.setProperty("webdriver.chrome.driver", ".\\src\\test\\java\\ml_cucumber_selenium_jvm_assessment\\resources\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(70, TimeUnit.SECONDS);
    }
	
	@After
	public void closeBrowser()
	{
		System.out.println("Closing chromedriver instance.");
		driver.quit();
	}
    
    /*public void setup() {
		System.setProperty("webdriver.gecko.driver", ".\\src\\test\\java\\ml_cucumber_selenium_jvm_assessment\\resources\\geckodriver.exe");
		this.driver = new FirefoxDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(70, TimeUnit.SECONDS);
	}*/
	
	//public void Steps() 
	//{
	//	 driver = WebHooks.driver; // not launching chromeDriver 
	//}
	
	// Background
	@Given("^User loads the home page$")
	public void user_loads_the_home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String url = "https://www.magicleap.com";
		driver.get(url);
	}

	@Given("^User scrolls down to the \"([^\"]*)\" section$")
	public void user_scrolls_down_to_the_section(String arg1) throws Throwable {
		
		WebElement keepInTouch = driver.findElement(By.xpath("//*[contains(text(), 'Keep in touch')]"));
		keepInTouch.click();
		
		if (keepInTouch.isDisplayed()) {
            System.out.println("Found the section: Keep in touch!");
        } else {
            throw new IllegalStateException("Cannot find the section: Keep in touch!");
        }
	}
	
	// start test 1, scenario 1
	@When("^User reaches the section \"([^\"]*)\"$")
	public void user_reaches_the_section(String arg1) throws Throwable {
		By magicLeapOneSelector = By.xpath("//a[contains(text(), 'Magic Leap One') or contains(text(), 'magic leap one')]");
		By creatorEditionSelector = By.xpath("//a[contains(text(), 'Creator Edition') or contains(text(), 'creator edition')]");
		List<WebElement> magicLeapOneList = driver.findElements(magicLeapOneSelector);
		List<WebElement> creatorEditionList = driver.findElements(creatorEditionSelector);
	}

	@Then("^The phrase \"([^\"]*)\" exists$")
	public void the_phrase_exists(String arg1) throws Throwable {
		// Finds element Magic Leap One by XPATH - //*[contains(text(), 'Magic Leap One')]
		WebElement magicLeapOne = driver.findElement(By.xpath("//*[contains(text(), 'Magic Leap One')]"));
		// Finds element Creator Edition by XPATH - //*[contains(text(), 'Creator Edition')]
		WebElement creatorEdition = driver.findElement(By.xpath("//*[contains(text(), 'Creator Edition')]"));
		magicLeapOne.click();
		creatorEdition.click();
		
		Assert.assertEquals(true, magicLeapOne.isDisplayed());
		Assert.assertEquals(true, creatorEdition.isDisplayed());
		
		if (magicLeapOne.isDisplayed()) {
            System.out.println("Found the section: Magic Leap One!");
        } else if (creatorEdition.isDisplayed()) {
        	System.out.println("Found the section: Creator Edition!");
        } else {
            throw new IllegalStateException("Cannot find the phrase: Magic Leap One Creator Edition!");
        }
	}
	
	// start test 1 scenario 2
	@When("^User reaches \"([^\"]*)\"$")
	public void user_reaches(String arg1) throws Throwable {
		// find Keep in touch section
		WebElement keepInTouch = driver.findElement(By.xpath("//*[contains(text(), 'Keep in touch')]"));
		keepInTouch.click();
	}

	@When("^User fills in a valid e-mail address$")
	public void user_fills_in_a_valid_e_mail_address() throws Throwable {
	    // Find footer email input
		WebElement footerEmail = driver.findElement(By.xpath("//*[@id=\"footer_email\"]"));
		footerEmail.click();
		
		// fill element with a valid e-mail address
		footerEmail.sendKeys("RickSanchez@c137.com");
		
		// TODO assert if invalid type of e-mail, check extensions etc
	}
	
	@When("^User fills in a nickname$")
	public void user_fills_in_a_nickname() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement footerNickname = driver.findElement(By.xpath("//*[@id=\"footer_nickname\"]"));
		footerNickname.click();
		
		// fill element with a nickname
		footerNickname.sendKeys("Rick Sanchez");
	}

	@When("^User selects an option from the drop-down$")
	public void user_selects_an_option_from_the_drop_down() throws Throwable {
	    // find footer drop-down for Keep in touch form
		WebElement footerDropdown = driver.findElement(By.xpath("//*[@id=\"footer_i_am_a\"]"));
		footerDropdown.click();
		
		// fill element with dropdown item
		Select footerDropdownItem = new Select(driver.findElement(By.xpath("//*[@id=\"footer_i_am_a\"]")));
		footerDropdownItem.selectByVisibleText("I'm a developer");
	}
	
	@When("^User clicks the \"([^\"]*)\" button$")
	public void user_clicks_the_button(String arg1) throws Throwable {
		// find Join Us button and click submit
		WebElement joinUsBtn = driver.findElement(By.xpath("//*[@id=\"footer-submit-button\"]/div"));
		joinUsBtn.click();
	}

	@Then("^User should be shown the response \"([^\"]*)\"$")
	public void user_should_be_shown_the_response(String arg1) throws Throwable {
		// verify response appears 
		WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement element = wait.until(
		        ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(), 'Thanks! See ya soon!')]")));
		element.click();
		
		// Handle things when they get wonky
		Assert.assertEquals(true, element.isDisplayed());
		
		if (element.isDisplayed()) {
            System.out.println("Found the text element: Thanks! See ya Soon!");
        } else {
            throw new IllegalStateException("Cannot find the text element: Thanks! See ya Soon!");
        }
	}
	
	// Start Test 2
	@Given("^User clicks the \"([^\"]*)\" button for the second time$")
	public void user_clicks_the_button_for_the_second_time(String arg1) throws Throwable {
		// find Join Us button and click submit
		WebElement joinUsBtn = driver.findElement(By.xpath("//*[@id=\"footer-submit-button\"]/div"));
		joinUsBtn.click();
	}

	@Then("^The form response is not \"([^\"]*)\"$")
	public void the_form_response_is_not(String arg1) throws Throwable {
		// verify response appears 
		WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement element = wait.until(
		        ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(), 'Thanks! See ya soon!')]")));
		element.click();
		
		Assert.assertEquals(true, element.isDisplayed());

		// begin negative flow
		boolean textFound=false;
		try
		{ 
		    new WebDriverWait(driver,10).until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(), 'Thanks! See ya soon!')]")));

		    textFound=true;

		}catch(Exception e)
		{
		    System.out.println("The text element isn't present. Exiting!!");
		    driver.findElement(By.xpath("//*[contains(text(), 'Thanks! See ya soon!')]")).click();
		}

		if(textFound)
		{
			//positive flow
			if (element.isDisplayed()) {
	            System.out.println("Found the text element: Thanks! See ya Soon!");
	        } else {
	            throw new IllegalStateException("Cannot find the text element: See you in 2019");
	        }
		}
	}
}

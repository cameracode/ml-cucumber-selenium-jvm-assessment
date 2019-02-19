package ml_cucumber_selenium_jvm_assessment.steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;

public class WebHooks 
{
    public static WebDriver driver;


    @Before
    public void openBrowser() 
    {
        System.out.println("Starting scenario preprocessing...");
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Camera\\Google Drive\\resume\\Devops\\MagicLeap\\Assessment\\ML_Selenium_Assessment\\ml-cucumber-selenium-jvm-assessment\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().deleteAllCookies();
        driver.manage().window().maximize();
    }


    @After
    //	Embed a screenshot in the test report if test is marked as failed
	public void embedScreenshot(Scenario scenario) 
    {
	
	    if (scenario.isFailed()) 
	    {
	        try 
	        {
	            scenario.write("Current Page URL is " + driver.getCurrentUrl());
	            byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
	            scenario.embed(screenshot, "image/png");
	        } 
	        catch (WebDriverException somePlatformsDontSupportScreenshots) 
	        {
	        	System.err.println(somePlatformsDontSupportScreenshots.getMessage());
	        }
	    }
	    
	    System.out.println("Wrapping up scenario...");
	    driver.quit();
	}
}
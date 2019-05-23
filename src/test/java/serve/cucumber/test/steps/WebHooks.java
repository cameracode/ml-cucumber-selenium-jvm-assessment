package serve.cucumber.test.steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class WebHooks 
{
    public static WebDriver driver;


    

    /*@After
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
	}*/
}
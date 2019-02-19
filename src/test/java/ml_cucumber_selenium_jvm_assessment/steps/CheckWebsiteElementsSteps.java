package ml_cucumber_selenium_jvm_assessment.steps;

import org.openqa.selenium.WebDriver;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

//import FormSubmitAction;
//import pageobjects.ContactPage;
//import pageobjects.PageMessages;

public class CheckWebsiteElementsSteps {
	
	public WebDriver driver;
	
	public void Steps() 
	{
		 driver = WebHooks.driver;
	}
	
	@Given("^User loads the home page$")
	public void user_loads_the_home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String url = "https://www.magicleap.com";
		driver.get(url);

		//throw new PendingException();
	}

	@Given("^User scrolls down to the \"([^\"]*)\" section$")
	public void user_scrolls_down_to_the_section(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^User reaches the section above \"([^\"]*)\"$")
	public void user_reaches_the_section_above(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^The phrase \"([^\"]*)\" exists$")
	public void the_phrase_exists(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^User completes the \"([^\"]*)\" form$")
	public void user_completes_the_form(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^User fills in a valid e-mail address$")
	public void user_fills_in_a_valid_e_mail_address() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^User should be shown the response \"([^\"]*)\" upon clicking the \"([^\"]*)\" button$")
	public void user_should_be_shown_the_response_upon_clicking_the_button(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

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

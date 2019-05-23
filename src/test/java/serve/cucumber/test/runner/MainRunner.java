package serve.cucumber.test.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions (
		features = {"src/test/java/ml_cucumber_selenium_jvm_assessment/featureFiles/"},
		glue = {"ml_cucumber_selenium_jvm_assessment.steps"}, /*"CheckWebsiteElementsSteps.java"*/ 
		monochrome = true,
		tags = {},
		plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json", "com.cucumber.listener.ExtentCucumberFormatter: target/report.html"}
		)

public class MainRunner {
}
 
# Magic Leap QA Engineer Assignment (Tests 1 and 2)
### Demonstrate your ability to create a test of a website or service using BDD testing tools, and to write test programs

### Test 1:
##### Scenario 1
- [x] used Java, JUnit, Maven, Selenium, Cucumber, and extent reports
- [x] created a feature file with multiple scenarios
- [x] demonstrated understanding of "given, when, and, then"
- [x] used the magic leap homepage
- [x] find phrase - "Magic Leap One Creator Edtion" on home page

### Running the Tests (based on Windows 10 x64):
#### Pre-requisites
- [Java8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [chromedriver](http://chromedriver.chromium.org/downloads)
- [CucumberEclipsePlugin](https://marketplace.eclipse.org/content/cucumber-eclipse-plugin())
- [Maven](http://maven.apache.org/)

Cucumber Eclipse Plugin Manual Install  - 
[Install New Version Cucumber Eclipse Plugin](https://github.com/cucumber/cucumber-eclipse/wiki/Installation-of-new-version-cucumber-eclipse-plugin)
1. Run Help > Install New Software, use Eclipse-Update-Site url:(http://cucumber.github.io/cucumber-eclipse/update-site/).
2. In work with: input box, Select the check-box for 'Cucumber Eclipse Plugin', Select Next as per the instruction shown during installation.
3. Now Restart your Eclipse after completion of instruction.
4. Now latest version(ex. 0.0.18) of cucumber-eclipse plugin is installed successfully in your Eclipse.

##### Steps 
- git clone
- mvn clean compile
- mvn test
- open target/report.html

### Extent Graphic Report Location - 
/target/report.html

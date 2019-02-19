$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CheckWebsiteElements.feature");
formatter.feature({
  "line": 2,
  "name": "Quality Engineer Assignment that verifies various elements of the Magic Leap home page",
  "description": "",
  "id": "quality-engineer-assignment-that-verifies-various-elements-of-the-magic-leap-home-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@mlTest"
    }
  ]
});
formatter.before({
  "duration": 5006835800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User loads the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User scrolls down to the \"Keep in touch\" section",
  "keyword": "And "
});
formatter.match({
  "location": "CheckWebsiteElementsSteps.user_loads_the_home_page()"
});
formatter.result({
  "duration": 2846162900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Keep in touch",
      "offset": 26
    }
  ],
  "location": "CheckWebsiteElementsSteps.user_scrolls_down_to_the_section(String)"
});
formatter.result({
  "duration": 161919300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 8,
      "value": "# Test 1, Section 1a"
    }
  ],
  "line": 9,
  "name": "Verify that phrase exists on home page",
  "description": "",
  "id": "quality-engineer-assignment-that-verifies-various-elements-of-the-magic-leap-home-page;verify-that-phrase-exists-on-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User reaches the section \"Magic Leap One Creator Edition\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The phrase \"Magic Leap One Creator Edition\" exists",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Magic Leap One Creator Edition",
      "offset": 26
    }
  ],
  "location": "CheckWebsiteElementsSteps.user_reaches_the_section(String)"
});
formatter.result({
  "duration": 124622000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Magic Leap One Creator Edition",
      "offset": 12
    }
  ],
  "location": "CheckWebsiteElementsSteps.the_phrase_exists(String)"
});
formatter.result({
  "duration": 263139600,
  "status": "passed"
});
formatter.before({
  "duration": 4049114300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User loads the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User scrolls down to the \"Keep in touch\" section",
  "keyword": "And "
});
formatter.match({
  "location": "CheckWebsiteElementsSteps.user_loads_the_home_page()"
});
formatter.result({
  "duration": 2627282200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Keep in touch",
      "offset": 26
    }
  ],
  "location": "CheckWebsiteElementsSteps.user_scrolls_down_to_the_section(String)"
});
formatter.result({
  "duration": 161292100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "# Test 1, Section 2"
    },
    {
      "line": 14,
      "value": "# XPATH //*[@id\u003d\"footer_email\"], XPATH //*[@id\u003d\"footer_nickname\"] , XPATH //*[@id\u003d\"footer_i_am_a\"]"
    }
  ],
  "line": 15,
  "name": "Fill out the \"Keep in touch\" section",
  "description": "",
  "id": "quality-engineer-assignment-that-verifies-various-elements-of-the-magic-leap-home-page;fill-out-the-\"keep-in-touch\"-section",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User reaches \"Keep in touch\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User fills in a valid e-mail address",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User fills in a nickname",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User selects an option from the drop-down",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks the \"Join Us\" button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be shown the response \"Thanks! See ya soon!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Keep in touch",
      "offset": 14
    }
  ],
  "location": "CheckWebsiteElementsSteps.user_reaches(String)"
});
formatter.result({
  "duration": 133522000,
  "status": "passed"
});
formatter.match({
  "location": "CheckWebsiteElementsSteps.user_fills_in_a_valid_e_mail_address()"
});
formatter.result({
  "duration": 321745100,
  "status": "passed"
});
formatter.match({
  "location": "CheckWebsiteElementsSteps.user_fills_in_a_nickname()"
});
formatter.result({
  "duration": 202295500,
  "status": "passed"
});
formatter.match({
  "location": "CheckWebsiteElementsSteps.user_selects_an_option_from_the_drop_down()"
});
formatter.result({
  "duration": 112764700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Join Us",
      "offset": 17
    }
  ],
  "location": "CheckWebsiteElementsSteps.user_clicks_the_button(String)"
});
formatter.result({
  "duration": 130450600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thanks! See ya soon!",
      "offset": 35
    }
  ],
  "location": "CheckWebsiteElementsSteps.user_should_be_shown_the_response(String)"
});
formatter.result({
  "duration": 658419200,
  "status": "passed"
});
formatter.before({
  "duration": 3826644800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User loads the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User scrolls down to the \"Keep in touch\" section",
  "keyword": "And "
});
formatter.match({
  "location": "CheckWebsiteElementsSteps.user_loads_the_home_page()"
});
formatter.result({
  "duration": 1010527000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Keep in touch",
      "offset": 26
    }
  ],
  "location": "CheckWebsiteElementsSteps.user_scrolls_down_to_the_section(String)"
});
formatter.result({
  "duration": 1560478200,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 23,
      "value": "# Test 2"
    }
  ],
  "line": 24,
  "name": "Verify that the \"Keep in touch\" form response is not \"See you in 2019\"",
  "description": "",
  "id": "quality-engineer-assignment-that-verifies-various-elements-of-the-magic-leap-home-page;verify-that-the-\"keep-in-touch\"-form-response-is-not-\"see-you-in-2019\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "User fills in a valid e-mail address",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User fills in a nickname",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User selects an option from the drop-down",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User clicks the \"Join Us\" button for the second time",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "The form response is not \"See you in 2019\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckWebsiteElementsSteps.user_fills_in_a_valid_e_mail_address()"
});
formatter.result({
  "duration": 811017500,
  "status": "passed"
});
formatter.match({
  "location": "CheckWebsiteElementsSteps.user_fills_in_a_nickname()"
});
formatter.result({
  "duration": 241655100,
  "status": "passed"
});
formatter.match({
  "location": "CheckWebsiteElementsSteps.user_selects_an_option_from_the_drop_down()"
});
formatter.result({
  "duration": 199608300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Join Us",
      "offset": 17
    }
  ],
  "location": "CheckWebsiteElementsSteps.user_clicks_the_button_for_the_second_time(String)"
});
formatter.result({
  "duration": 109861100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "See you in 2019",
      "offset": 26
    }
  ],
  "location": "CheckWebsiteElementsSteps.the_form_response_is_not(String)"
});
formatter.result({
  "duration": 26911700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(), \u0027See you in 2019\u0027)]\"}\n  (Session info: chrome\u003d72.0.3626.109)\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027PROMETHEUS\u0027, ip: \u0027192.168.1.49\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_192\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.46.628402 (536cd7adbad73a..., userDataDir: C:\\Users\\Camera\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:47202}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.109, webStorageEnabled: true}\nSession ID: e0cc721d3751ee3bcbf25a8ed15d584a\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(), \u0027See you in 2019\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat ml_cucumber_selenium_jvm_assessment.steps.CheckWebsiteElementsSteps.the_form_response_is_not(CheckWebsiteElementsSteps.java:183)\r\n\tat ✽.Then The form response is not \"See you in 2019\"(CheckWebsiteElements.feature:29)\r\n",
  "status": "failed"
});
});
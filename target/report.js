$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CheckWebsiteElements.feature");
formatter.feature({
  "line": 2,
  "name": "Quality Engineer Assessment that checks various elements of the Magic Leap home page",
  "description": "",
  "id": "quality-engineer-assessment-that-checks-various-elements-of-the-magic-leap-home-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@mlTest"
    }
  ]
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
  "name": "User scrolls down to the \"Keep in Touch\" section",
  "keyword": "And "
});
formatter.match({
  "location": "CheckWebsiteElementsSteps.user_loads_the_home_page()"
});
formatter.result({
  "duration": 88616300,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat ml_cucumber_selenium_jvm_assessment.steps.CheckWebsiteElementsSteps.user_loads_the_home_page(CheckWebsiteElementsSteps.java:12)\r\n\tat ✽.Given User loads the home page(CheckWebsiteElements.feature:5)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Keep in Touch",
      "offset": 26
    }
  ],
  "location": "CheckWebsiteElementsSteps.user_scrolls_down_to_the_section(String)"
});
formatter.result({
  "status": "skipped"
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
  "id": "quality-engineer-assessment-that-checks-various-elements-of-the-magic-leap-home-page;verify-that-phrase-exists-on-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User reaches the section above \"Keep in Touch\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The phrase \"Magic Leap One CREATOR EDITION\" exists",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Keep in Touch",
      "offset": 32
    }
  ],
  "location": "CheckWebsiteElementsSteps.user_reaches_the_section_above(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Magic Leap One CREATOR EDITION",
      "offset": 12
    }
  ],
  "location": "CheckWebsiteElementsSteps.the_phrase_exists(String)"
});
formatter.result({
  "status": "skipped"
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
  "name": "User scrolls down to the \"Keep in Touch\" section",
  "keyword": "And "
});
formatter.match({
  "location": "CheckWebsiteElementsSteps.user_loads_the_home_page()"
});
formatter.result({
  "duration": 126200,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat ml_cucumber_selenium_jvm_assessment.steps.CheckWebsiteElementsSteps.user_loads_the_home_page(CheckWebsiteElementsSteps.java:12)\r\n\tat ✽.Given User loads the home page(CheckWebsiteElements.feature:5)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Keep in Touch",
      "offset": 26
    }
  ],
  "location": "CheckWebsiteElementsSteps.user_scrolls_down_to_the_section(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "# Test 1, Section 2"
    }
  ],
  "line": 14,
  "name": "Fill out the \"Keep in Touch\" section",
  "description": "",
  "id": "quality-engineer-assessment-that-checks-various-elements-of-the-magic-leap-home-page;fill-out-the-\"keep-in-touch\"-section",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User completes the \"Keep in Touch\" form",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User fills in a valid e-mail address",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should be shown the response \"Thanks! See ya soon!\" upon clicking the \"Join Us\" button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Keep in Touch",
      "offset": 20
    }
  ],
  "location": "CheckWebsiteElementsSteps.user_completes_the_form(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckWebsiteElementsSteps.user_fills_in_a_valid_e_mail_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Thanks! See ya soon!",
      "offset": 35
    },
    {
      "val": "Join Us",
      "offset": 76
    }
  ],
  "location": "CheckWebsiteElementsSteps.user_should_be_shown_the_response_upon_clicking_the_button(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "name": "User scrolls down to the \"Keep in Touch\" section",
  "keyword": "And "
});
formatter.match({
  "location": "CheckWebsiteElementsSteps.user_loads_the_home_page()"
});
formatter.result({
  "duration": 153500,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat ml_cucumber_selenium_jvm_assessment.steps.CheckWebsiteElementsSteps.user_loads_the_home_page(CheckWebsiteElementsSteps.java:12)\r\n\tat ✽.Given User loads the home page(CheckWebsiteElements.feature:5)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Keep in Touch",
      "offset": 26
    }
  ],
  "location": "CheckWebsiteElementsSteps.user_scrolls_down_to_the_section(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 19,
      "value": "# Test 2"
    }
  ],
  "line": 20,
  "name": "Verify that the \"Keep in Touch\" form response is not \"See you in 2019\"",
  "description": "",
  "id": "quality-engineer-assessment-that-checks-various-elements-of-the-magic-leap-home-page;verify-that-the-\"keep-in-touch\"-form-response-is-not-\"see-you-in-2019\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "User completes the \"Keep in Touch\" form",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User fills in a valid e-mail address",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "The form response is not \"See you in 2019\" after \"Join Us\" button is clicked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Keep in Touch",
      "offset": 20
    }
  ],
  "location": "CheckWebsiteElementsSteps.user_completes_the_form(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckWebsiteElementsSteps.user_fills_in_a_valid_e_mail_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "See you in 2019",
      "offset": 26
    },
    {
      "val": "Join Us",
      "offset": 50
    }
  ],
  "location": "CheckWebsiteElementsSteps.the_form_response_is_not_after_button_is_clicked(String,String)"
});
formatter.result({
  "status": "skipped"
});
});
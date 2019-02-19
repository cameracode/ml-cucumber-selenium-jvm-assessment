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
  "duration": 6261653101,
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
  "duration": 1835979400,
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
  "duration": 28331566700,
  "error_message": "java.lang.IllegalStateException: Cannot find the section: Keep in touch!\r\n\tat ml_cucumber_selenium_jvm_assessment.steps.CheckWebsiteElementsSteps.user_scrolls_down_to_the_section(CheckWebsiteElementsSteps.java:67)\r\n\tat ✽.And User scrolls down to the \"Keep in touch\" section(CheckWebsiteElements.feature:6)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.before({
  "duration": 4385198700,
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
  "duration": 1697255900,
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
  "duration": 7122384400,
  "error_message": "java.lang.IllegalStateException: Cannot find the section: Keep in touch!\r\n\tat ml_cucumber_selenium_jvm_assessment.steps.CheckWebsiteElementsSteps.user_scrolls_down_to_the_section(CheckWebsiteElementsSteps.java:67)\r\n\tat ✽.And User scrolls down to the \"Keep in touch\" section(CheckWebsiteElements.feature:6)\r\n",
  "status": "failed"
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
  "name": "User should be shown the response \"Thanks! See ya soon!\" upon clicking the \"Join Us\" button",
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
  "status": "skipped"
});
formatter.match({
  "location": "CheckWebsiteElementsSteps.user_fills_in_a_valid_e_mail_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckWebsiteElementsSteps.user_fills_in_a_nickname()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckWebsiteElementsSteps.user_selects_an_option_from_the_drop_down()"
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
formatter.before({
  "duration": 4365906701,
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
  "duration": 1739172801,
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
  "duration": 5833896200,
  "error_message": "java.lang.IllegalStateException: Cannot find the section: Keep in touch!\r\n\tat ml_cucumber_selenium_jvm_assessment.steps.CheckWebsiteElementsSteps.user_scrolls_down_to_the_section(CheckWebsiteElementsSteps.java:67)\r\n\tat ✽.And User scrolls down to the \"Keep in touch\" section(CheckWebsiteElements.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 22,
      "value": "# Test 2"
    }
  ],
  "line": 23,
  "name": "Verify that the \"Keep in touch\" form response is not \"See you in 2019\"",
  "description": "",
  "id": "quality-engineer-assignment-that-verifies-various-elements-of-the-magic-leap-home-page;verify-that-the-\"keep-in-touch\"-form-response-is-not-\"see-you-in-2019\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "User fills in a valid e-mail address",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User fills in a nickname",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User selects an option from the drop-down",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "The form response is not \"See you in 2019\" after \"Join Us\" button is clicked",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckWebsiteElementsSteps.user_fills_in_a_valid_e_mail_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckWebsiteElementsSteps.user_fills_in_a_nickname()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckWebsiteElementsSteps.user_selects_an_option_from_the_drop_down()"
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
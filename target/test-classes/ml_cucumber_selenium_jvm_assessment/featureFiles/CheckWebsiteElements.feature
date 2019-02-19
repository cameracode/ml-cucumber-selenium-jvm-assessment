@mlTest
Feature: Quality Engineer Assignment that verifies various elements of the Magic Leap home page
	
	Background: 
		Given User loads the home page
		And   User scrolls down to the "Keep in Touch" section
	
	# Test 1, Section 1a
	Scenario: Verify that phrase exists on home page
		When User reaches the section above "Keep in Touch"
		Then The phrase "Magic Leap One CREATOR EDITION" exists
	
	# Test 1, Section 2
	Scenario: Fill out the "Keep in Touch" section
		When User completes the "Keep in Touch" form
		And  User fills in a valid e-mail address
		Then User should be shown the response "Thanks! See ya soon!" upon clicking the "Join Us" button 
	
	# Test 2
	Scenario: Verify that the "Keep in Touch" form response is not "See you in 2019"
		When User completes the "Keep in Touch" form
		And  User fills in a valid e-mail address
		Then The form response is not "See you in 2019" after "Join Us" button is clicked
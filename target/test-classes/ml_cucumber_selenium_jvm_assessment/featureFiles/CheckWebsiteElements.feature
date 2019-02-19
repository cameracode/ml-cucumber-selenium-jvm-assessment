@mlTest
Feature: Quality Engineer Assignment that verifies various elements of the Magic Leap home page
	
	Background: 
		Given User loads the home page
		And   User scrolls down to the "Keep in touch" section
	
	# Test 1, Section 1a
	Scenario: Verify that phrase exists on home page
		When User reaches the section "Magic Leap One Creator Edition" 
		Then The phrase "Magic Leap One Creator Edition" exists
	
	# Test 1, Section 2
	# XPATH //*[@id="footer_email"], XPATH //*[@id="footer_nickname"] , XPATH //*[@id="footer_i_am_a"]
	Scenario: Fill out the "Keep in touch" section
		When User reaches "Keep in touch"
		And  User fills in a valid e-mail address
		And  User fills in a nickname
		And  User selects an option from the drop-down
		Then User should be shown the response "Thanks! See ya soon!" upon clicking the "Join Us" button 
	
	# Test 2
	Scenario: Verify that the "Keep in touch" form response is not "See you in 2019"
		And  User fills in a valid e-mail address
		And  User fills in a nickname
		And  User selects an option from the drop-down
		Then The form response is not "See you in 2019" after "Join Us" button is clicked
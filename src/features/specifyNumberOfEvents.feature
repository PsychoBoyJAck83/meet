Feature: Event Count Specification
 Scenario: Default Event Count is 32 when no number is specified
  Given the main page is open
  When the user does not specify the number of visible events
  Then the default event count should be 32
 Scenario: User can adjust the number of visible events
  Given the main page is open
  When the user specifies a desired number of visible events
  Then the user should be able to view the specified number of events
Feature: Toggle Event Details Visibility
 Scenario: Event element is initially collapsed
  Given the user launched the application
  When the upcoming events list is displayed
  Then each event element should be collapsed, displaying only basic event information
 Scenario: User can expand event details
  Given the user opened the application and the list of upcoming events was displayed
  When the user clicks on show details button
  Then the event element should expand, revealing extra event details
 Scenario: User can hide event details
  Given the user opened the application and clicked the show details button of the first event
  When the user clicks the details button again, while details being shown
  Then the event element should collapse, concealing the supplementary event details
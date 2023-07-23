# Test Scenarios

## Filter Events by City.

### Given

User has NOT searched for AND has selected a city.

### When

User searches for AND selects a city

### Then

A list of events in the selected city will be displayed

## Show/hide event details.

### Given

A list of events OR details of a single event has been displayed

### When

User clicks on the event OR event details

### Then

App will toggle between showing details of the event or hiding the details of the event

## Choose the amount of events displayed at a given time

### Given

A list of events has been displayed

### When

User selects an amount of events to be displayed

### Then

App will display the chosen amount of events only

## Use App offline

### Given

A list of events has been displayed last time user was online

### When

User uses app offline and wants to see the last generated event list

### Then

Display a list of events

## Display upcoming events organized by city

### Given

User is in main view of app

### When

User selects to show upcoming events

### Then

Display a list of upcoming events organized by city

# Use of FaaS

The Meet app leverages serverless functions to drive specific features that necessitate on-demand processing and scalability. For instance, when users filter events by city or indicate the number of events they wish to view, serverless functions take charge of the data processing and filtering operations. Furthermore, serverless technology is harnessed to create and serve the charts for the "View Charts" feature, enabling efficient resource allocation and scaling in response to the prevailing user demand.

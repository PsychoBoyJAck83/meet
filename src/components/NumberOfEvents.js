import React from "react";
const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
    let errorText = "";
    const NumberOfEventsInputValue = parseInt(event.target.value, 10);
    if (
      isNaN(NumberOfEventsInputValue) ||
      NumberOfEventsInputValue <= 0 ||
      NumberOfEventsInputValue > 128
    ) {
      //Will only accept numbers
      setCurrentNOE(0);
      errorText = "Invalid Input. Please input a number between 1 and 128";
    } else setCurrentNOE(NumberOfEventsInputValue);
    setErrorAlert(errorText);
  };

  return (
    <div id="number-of-events" data-testid="number-of-events">
      <input
        type="text"
        className="input-number-of-events"
        value={currentNOE}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;

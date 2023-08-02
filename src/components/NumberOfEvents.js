import React from "react";
const NumberOfEvents = ({ numberOfEvents /*, onEventNumberChange*/ }) => {
  const handleInputChanged = (event) => {
    const NumberOfEventsInputValue = parseInt(event.target.value);
    /*isNaN(NumberOfEventsInputValue)
      ? onEventNumberChange(0)
      : onEventNumberChange(NumberOfEventsInputValue);*/
  };

  return (
    <div id="number-of-events-input">
      <input
        type="text"
        className="input-number-of-events"
        value={numberOfEvents}
        onChange={(event) => {
          handleInputChanged(event);
        }}
      />
    </div>
  );
};

export default NumberOfEvents;

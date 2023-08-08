import React from "react";
const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
  const handleInputChanged = (event) => {
    const NumberOfEventsInputValue = parseInt(event.target.value, 10);
    isNaN(NumberOfEventsInputValue)
      ? setCurrentNOE(0)
      : setCurrentNOE(NumberOfEventsInputValue);
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

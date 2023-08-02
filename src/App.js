import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";

import "./App.css";
import { useState } from "react";

const App = () => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  return (
    <div className="App">
      <NumberOfEvents
        numberOfEvents={numberOfEvents}
        onEventNumberChange={(newNumber) => {
          setNumberOfEvents(newNumber);
        }}
      />
      <CitySearch />
      <EventList />
    </div>
  );
};

export default App;

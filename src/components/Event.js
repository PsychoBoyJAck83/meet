import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li className="event">
      <h1 className="event-summary">{event.summary}</h1>
      <div className="event-date">{event.start.dateTime}</div>
      <div className="event-location">{event.location}</div>
      {showDetails && (
        <div className="event-description">{event.description}</div>
      )}
      <button className="details-btn" onClick={toggleDetails}>
        {showDetails ? "Hide details" : "Show details"}
      </button>
    </li>
  );
};

export default Event;

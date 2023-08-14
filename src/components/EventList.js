import Event from "./Event";
// src/components/EventList.js

const EventList = ({ events }) => {
  return (
    <ul id="event-list" data-testid="event-list">
      {events
        ? events.map((event) => <Event key={event.id} event={event} />)
        : null}
    </ul>
  );
};
export default EventList;
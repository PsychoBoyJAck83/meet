import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";

const testEvent = {
  kind: "calendar#event",
  etag: '"3181161784712000"',
  id: "4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",
  status: "confirmed",
  htmlLink:
    "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  created: "2020-05-19T19:17:46.000Z",
  updated: "2020-05-27T12:01:32.356Z",
  summary: "Learn JavaScript",
  description:
    "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  location: "London, UK",
  creator: {
    email: "fullstackwebdev@careerfoundry.com",
    self: true,
  },
  organizer: {
    email: "fullstackwebdev@careerfoundry.com",
    self: true,
  },
  start: {
    dateTime: "2020-05-19T16:00:00+02:00",
    timeZone: "Europe/Berlin",
  },
  end: {
    dateTime: "2020-05-19T17:00:00+02:00",
    timeZone: "Europe/Berlin",
  },
  recurringEventId: "4eahs9ghkhrvkld72hogu9ph3e",
  originalStartTime: {
    dateTime: "2020-05-19T16:00:00+02:00",
    timeZone: "Europe/Berlin",
  },
  iCalUID: "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  sequence: 0,
  reminders: {
    useDefault: true,
  },
  eventType: "default",
};

describe("<Event /> component", () => {
  let EventComponent;
  beforeEach(() => {
    //EventComponent = render(<Event event={testEvent} />);
  });
  test("showDescription false: Renders all sub-components of Event(not! description)", () => {
    EventComponent = render(<Event event={testEvent} />);
    expect(
      EventComponent.container.querySelector(".event-summary")
    ).toBeInTheDocument();
    expect(
      EventComponent.container.querySelector(".event-date")
    ).toBeInTheDocument();
    expect(
      EventComponent.container.querySelector(".event-location")
    ).toBeInTheDocument();
    expect(
      EventComponent.container.querySelector(".details-btn")
    ).toBeInTheDocument();
    expect(
      EventComponent.container.querySelector(".details-description")
    ).not.toBeInTheDocument();
  });
  test("showDescription false: All sub-components of Event have correct inner text", () => {
    EventComponent = render(<Event event={testEvent} />);
    expect(
      EventComponent.container.querySelector(".event-summary").textContent
    ).toBe(testEvent.summary);
    expect(
      EventComponent.container.querySelector(".event-date").textContent
    ).toBe(testEvent.start.dateTime);
    expect(
      EventComponent.container.querySelector(".event-location").textContent
    ).toBe(testEvent.location);
    expect(
      EventComponent.container.querySelector(".details-btn").textContent
    ).toBe("Show details");
  });
  test("Pressing details-btn toggles event-description", async () => {
    EventComponent = render(<Event event={testEvent} />);
    const user = userEvent.setup();
    await user.click(EventComponent.container.querySelector(".details-btn"));
    expect(
      EventComponent.container.querySelector(".event-description")
    ).toBeInTheDocument();
    await user.click(EventComponent.container.querySelector(".details-btn"));
    expect(
      EventComponent.container.querySelector(".event-description")
    ).not.toBeInTheDocument();
  });
  test("When displayed the description element has correct textContent", async () => {
    EventComponent = render(<Event event={testEvent} />);
    const user = userEvent.setup();
    await user.click(EventComponent.container.querySelector(".details-btn"));
    expect(
      EventComponent.container.querySelector(".event-description").textContent
    ).toBe(testEvent.description);
  });

  test("After details-btn pressed: details-btn changes textContent", async () => {
    EventComponent = render(<Event event={testEvent} />);
    const user = userEvent.setup();
    await user.click(EventComponent.container.querySelector(".details-btn"));
    expect(
      EventComponent.container.querySelector(".details-btn").textContent
    ).toBe("Hide details");
    await user.click(EventComponent.container.querySelector(".details-btn"));
  });
});

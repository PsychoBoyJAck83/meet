import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { render, within, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("Default Event Count is 32 when no number is specified", ({
    given,
    when,
    then,
  }) => {
    given("the main page is open", () => {
      render(<App />);
    });

    when("the user does not specify the number of visible events", () => {});

    then("the default event count should be 32", async () => {
      const EventListDOM = screen.getByTestId("event-list");
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });
  });
  test("User can adjust the number of visible events", ({
    given,
    when,
    then,
  }) => {
    given("the main page is open", () => {
      render(<App />);
    });

    when("the user specifies a desired number of visible events", async () => {
      const NumberOfEventsDOM = screen.getByTestId("number-of-events");
      const numberOfEventsInput =
        within(NumberOfEventsDOM).queryByRole("textbox");
      userEvent.type(numberOfEventsInput, "{backspace}{backspace}10");
    });

    then(
      "the user should be able to view the specified number of events",
      async () => {
        const EventListDOM = screen.getByTestId("event-list");
        await waitFor(() => {
          const EventListItems =
            within(EventListDOM).queryAllByRole("listitem");
          expect(EventListItems.length).toBe(10);
        });
      }
    );
  });
});

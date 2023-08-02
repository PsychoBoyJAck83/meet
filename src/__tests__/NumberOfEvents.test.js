import NumberOfEvents from "../components/NumberOfEvents";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<Event /> component", () => {
  let numberOfEventsElement;
  beforeEach(() => {
    numberOfEventsElement = render(<NumberOfEvents numberOfEvents={32} />);
  });
  test("Contains an element with role textbox", () => {
    expect(numberOfEventsElement.queryByRole("textbox")).toBeInTheDocument();
  });
  test("Default value of text input is 32", () => {
    expect(numberOfEventsElement.queryByRole("textbox")).toHaveValue("32");
  });
  test("ClassName of text input is input-number-of-events", () => {
    expect(
      numberOfEventsElement.container.querySelector(".input-number-of-events")
    ).toBeInTheDocument();
  });
  test("Value of input changes when user types in it", async () => {
    numberOfEventsElement.rerender(<NumberOfEvents />);
    const user = userEvent.setup();
    const numberOfEventsInput = numberOfEventsElement.queryByRole("textbox");
    await user.type(numberOfEventsInput, "{backspace}{backspace}10");
    expect(numberOfEventsInput).toHaveValue("10");
  });
});

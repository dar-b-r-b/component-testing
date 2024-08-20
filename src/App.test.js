import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders hello message", () => {
  render(<App name="Stranger" />);

  act(() => {
    const newLocal = screen.getByLabelText("Enter your name");
    userEvent.type(newLocal, "Darya");

    const button = screen.getByText("Introduce");
    userEvent.click(button);
    console.log("LOG" + button);
  });

  const helloMessage = screen.getByText("Hi, Darya");
  expect(helloMessage).toBeInTheDocument();
});

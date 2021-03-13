import React from "react";
import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button component", () => {
  const props = {
    className: "btn",
    value: "1",
    onClick: jest.fn(),
  };

  it("receives receives the correct id when 'Rock' is passed in", () => {
    //this gets the button by searching for it's text value and returns it's ID
    const button = render(<Button {...props} children="Rock" id="0" />);
    expect(button.getByText("Rock").id).toBe("0");
  });

  it("receives receives the correct id when 'Scissors' is passed in", () => {
    const { getByText } = render(
      <Button {...props} children="Scissors" id="1" />
    );
    const button = getByText("Scissors");
    expect(button.id).toBe("1");
  });

  it("receives receives the correct id when 'Paper' is passed in", () => {
    const { getByText } = render(<Button {...props} children="Paper" id="2" />);
    const button = getByText("Paper");
    expect(button.id).toBe("2");
  });
});

import { render, screen } from "@testing-library/react";
import Homepage from "./homepage";

test("Check that homepage has correct heading and buttons", () => {
  render(<Homepage />);

  //check that heading is in document
  const homepageHeading = screen.getByRole("heading");
  expect(homepageHeading).toBeInTheDocument();

  //check that buttons are also in document
  const homepageButtons = screen.getAllByRole("button");
  expect(homepageButtons).toHaveLength(2);

  //check that heading and buttons have correct classnames
  expect(homepageHeading).toHaveClass("title");
});

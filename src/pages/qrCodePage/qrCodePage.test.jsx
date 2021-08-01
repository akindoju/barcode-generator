import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import QRCodePage from "./qrCodePage";

test("checking initial state of components", () => {
  render(<QRCodePage />);

  const qrInput = screen.getByLabelText(/Enter qrcode Value/i);
  const generateBtn = screen.getByRole("button", { name: "Generate" });

  expect(qrInput).not.toHaveValue();
  expect(generateBtn).toBeDisabled();
});

test("Check that button enables when input has value", () => {
  render(<QRCodePage />);

  const qrInput = screen.getByLabelText(/Enter qrcode Value/i);
  const generateBtn = screen.getByRole("button", { name: "Generate" });

  userEvent.type(qrInput, "p");
  expect(generateBtn).toBeEnabled();
});

test("expect qr code to appear based on generate btn click", () => {
  render(<QRCodePage />);

  const qrInput = screen.getByLabelText(/Enter qrcode Value/i);
  const generateBtn = screen.getByRole("button", { name: /generate/i });

  userEvent.type(qrInput, "kkjhkjhlkjj");
  expect(generateBtn).toBeEnabled();

  userEvent.click(generateBtn);

  const qrcode = screen.queryByRole("figure");
  expect(qrcode).toBeInTheDocument();
});

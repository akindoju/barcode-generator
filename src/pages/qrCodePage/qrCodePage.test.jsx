import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import QRCodePage from "./qrCodePage";

test("checking initial state of components", () => {
  render(
    <QRCodePage
      isBtnDisabled={true}
      setIsBtnDisabled={jest.fn()}
      inputField={jest.fn()}
      setInputField={jest.fn()}
    />
  );

  const qrInput = screen.getByLabelText(/Enter qrcode Value/i);
  const generateBtn = screen.getByRole("button", { name: /generate/i });

  expect(qrInput).not.toHaveValue();
  expect(generateBtn).toBeDisabled();
});

test("Check that button enables when input has value", () => {
  render(
    <QRCodePage
      isBtnDisabled={jest.fn()}
      setIsBtnDisabled={jest.fn()}
      inputField={jest.fn()}
      setInputField={jest.fn()}
    />
  );

  const qrInput = screen.getByLabelText(/Enter qrcode Value/i);
  const generateBtn = screen.getByRole("button", { name: /generate/i });

  userEvent.type(qrInput, "p");
  expect(generateBtn).toBeEnabled();
});

test("expect qr code to appear based on generate btn click", () => {
  render(
    <QRCodePage
      isBtnDisabled={false}
      setIsBtnDisabled={jest.fn()}
      inputField={""}
      setInputField={jest.fn()}
    />
  );

  const qrInput = screen.getByLabelText(/Enter qrcode Value/i);
  const generateBtn = screen.getByRole("button", { name: /generate/i });

  expect(qrInput).not.toHaveValue();

  userEvent.type(qrInput, "testing");
  expect(generateBtn).toBeEnabled();
  userEvent.click(generateBtn);

  const qrcode = screen.queryByRole("figure");
  expect(qrcode).toBeInTheDocument();
});

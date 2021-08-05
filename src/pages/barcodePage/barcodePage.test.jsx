import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BarcodePage from "./barcodePage";

test("checking initial state of components", () => {
  render(
    <BarcodePage
      isBtnDisabled={true}
      setIsBtnDisabled={jest.fn()}
      inputField={""}
      setInputField={jest.fn()}
    />
  );

  const barcodeInput = screen.getByLabelText(/Enter Barcode Value and Format/i);
  const barcodeSelect = screen.getByRole("list");
  const generateBtn = screen.getByRole("button", { name: "Generate" });

  expect(barcodeInput).not.toHaveValue();
  expect(barcodeSelect).toBeInTheDocument();
  expect(generateBtn).toBeDisabled();
});

test("Check that button enables when input has value", () => {
  render(
    <BarcodePage
      isBtnDisabled={false}
      setIsBtnDisabled={jest.fn()}
      inputField={""}
      setInputField={jest.fn()}
    />
  );

  const barcodeInput = screen.getByLabelText(/Enter Barcode Value and Format/i);
  const generateBtn = screen.getByRole("button", { name: /generate/i });

  userEvent.type(barcodeInput, "j");
  expect(generateBtn).toBeEnabled();
});

//to be revised
// test("checking placeholder based on select option", async () => {
//   render(<BarcodePage />);

//   // const barcodeSelect = screen.getByRole("list");

//   //checking initial placeholder
//   const code128 = screen.getByPlaceholderText(/eg '1234 ABC'/i);
//   expect(code128).toBeInTheDocument();

//   const ean13Option = screen.getByRole("option", { name: /ean13/i });
//   const ean13 = await screen.findByPlaceholderText(/eg '123456789012'/i);

//   userEvent.click(ean13Option);
//   expect(ean13).not.toBeInTheDocument();
// });

test("expect barcode to appear based on generate btn click", () => {
  render(
    <BarcodePage
      isBtnDisabled={false}
      setIsBtnDisabled={jest.fn()}
      inputField={""}
      setInputField={jest.fn()}
    />
  );

  const barcodeInput = screen.getByLabelText(/Enter Barcode Value and Format/i);
  const generateBtn = screen.getByRole("button", { name: /generate/i });

  userEvent.type(barcodeInput, "j");

  userEvent.click(generateBtn);

  const barcode = screen.queryByRole("figure");
  expect(barcode).toBeInTheDocument();
});

test("Check that barcode shows on initial format", () => {
  render(
    <BarcodePage
      isBtnDisabled={false}
      setIsBtnDisabled={jest.fn()}
      inputField={""}
      setInputField={jest.fn()}
    />
  );

  const barcodeInput = screen.getByLabelText(/Enter Barcode Value and Format/i);
  const generateBtn = screen.getByRole("button", { name: /generate/i });
  const code128 = screen.getByRole("option", { name: /code128/i });

  //checking initial format
  userEvent.click(code128);
  userEvent.type(barcodeInput, "testing");
  userEvent.click(generateBtn);

  const barcode = screen.queryByRole("figure");
  expect(barcode).toBeInTheDocument();
});

test("Check that barcode shows on another correct format", () => {
  expect.assertions(2);
  render(
    <BarcodePage
      isBtnDisabled={false}
      setIsBtnDisabled={jest.fn()}
      inputField={jest.fn()}
      setInputField={jest.fn()}
    />
  );

  const barcodeInput = screen.getByLabelText(/Enter Barcode Value and Format/i);
  const generateBtn = screen.getByRole("button", { name: /generate/i });
  const ean2 = screen.getByRole("option", { name: /ean2/i });

  //checking another correct format
  userEvent.click(ean2);
  userEvent.type(barcodeInput, "12");
  expect(generateBtn).toBeEnabled();
  userEvent.click(generateBtn);

  const barcode = screen.queryByRole("figure");
  expect(barcode).toBeInTheDocument();
});

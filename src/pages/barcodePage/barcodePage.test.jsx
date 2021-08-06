import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BarcodePage from "./barcodePage";

test("checking initial state of components", () => {
  expect.assertions(3);
  render(
    <BarcodePage
      isBtnDisabled={true}
      setIsBtnDisabled={jest.fn()}
      inputField={""}
      setInputField={jest.fn()}
    />
  );

  const barcodeInput = screen.getByLabelText(/Enter Barcode Value and Format/i);
  const barcodeSelect = screen.getByRole("combobox");
  const generateBtn = screen.getByRole("button", { name: "Generate" });

  expect(barcodeInput).not.toHaveValue();
  expect(barcodeSelect).toBeInTheDocument();
  expect(generateBtn).toBeDisabled();
});

test("Check that button enables when input has value", () => {
  expect.assertions(1);
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

test("checking placeholder based on select option", () => {
  expect.assertions(5);
  render(
    <BarcodePage
      isBtnDisabled={false}
      setIsBtnDisabled={jest.fn()}
      inputField={""}
      setInputField={jest.fn()}
    />
  );

  const barcodeSelect = screen.getByRole("combobox");

  //checking initial placeholder
  const code128 = screen.getByPlaceholderText(/eg '1234 ABC'/i);
  expect(code128).toBeInTheDocument();

  //checking ean13 barcode format
  userEvent.selectOptions(barcodeSelect, ["ean13"]);
  const ean13Option = screen.getByRole("option", { name: /ean13/i });
  expect(ean13Option.selected).toBe(true);

  const ean13 = screen.queryByPlaceholderText(/eg '123456789012'/i);
  expect(ean13).toBeInTheDocument();

  //checking pharmacode placeholder
  userEvent.selectOptions(barcodeSelect, ["pharmacode"]);
  const pharmacodeOption = screen.getByRole("option", { name: /pharmacode/i });
  expect(pharmacodeOption.selected).toBe(true);

  const pharmacode = screen.queryByPlaceholderText(/eg '123456'/i);
  expect(pharmacode).toBeInTheDocument();
});

test("expect barcode to appear based on generate btn click", () => {
  expect.assertions(1);
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
  expect.assertions(1);
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

// test("Check that barcode shows on another correct format", () => {
//   expect.assertions(3);
//   render(
//     <BarcodePage
//       isBtnDisabled={false}
//       setIsBtnDisabled={jest.fn()}
//       inputField={"12345"}
//       setInputField={jest.fn()}
//     />
//   );

//   const barcodeInput = screen.getByLabelText(/Enter Barcode Value and Format/i);
//   const barcodeSelect = screen.getByRole("combobox");
//   const generateBtn = screen.getByRole("button", { name: /generate/i });
//   const ean5 = screen.getByRole("option", { name: /ean5/i });

//   //checking another correct format
//   userEvent.selectOptions(barcodeSelect, ["ean5"]);
//   expect(ean5.selected).toBe(true);
//   userEvent.type(barcodeInput, "12345");
//   expect(barcodeInput.value).toHaveLength(5);
//   userEvent.click(generateBtn);

//   const barcode = screen.queryByRole("figure");
//   expect(barcode).toBeInTheDocument();
// });

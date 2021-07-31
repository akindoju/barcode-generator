import { render, screen } from "@testing-library/react";
import BarcodePage from "./barcodePage";

test("Check that page has correct components", () => {
  render(<BarcodePage />);

  const barcodeInput = screen.getByLabelText(/Enter Barcode Value and Format/i);
  // const barcodeSelect = screen.getByTestId("formats");
  const barcodeBtn = screen.getByRole("button", { name: "Generate" });

  expect(barcodeInput).not.toHaveValue();
  expect(barcodeBtn).toBeDisabled();
});

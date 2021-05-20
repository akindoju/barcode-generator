import JsBarcode from 'jsbarcode';
// import { useBarcode } from 'react-barcodes';

const Barcode = (props) => {
  const { barcodeValue, barcodeFormat } = props;

  //set timeout because svg is rendered before function can run
  setTimeout(() => {
    JsBarcode(`#${barcodeFormat}`, barcodeValue, { format: barcodeFormat });
  }, 0);

  // const { inputRef } = useBarcode({
  //   value: `${barcodeValue}`,
  //   options: {
  //     displayValue: false,
  //     marginTop: 20,
  //   },
  // });

  return <svg id={barcodeFormat}></svg>;
};

export default Barcode;

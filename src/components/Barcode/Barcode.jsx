import JsBarcode from 'jsbarcode';
// import { useBarcode } from 'react-barcodes';

const Barcode = (props) => {
  const { inputField, barcodeFormat } = props;

  //set timeout because svg is rendered before function can run
  setTimeout(() => {
    JsBarcode(`#${barcodeFormat}`, inputField, { format: barcodeFormat });
  }, 0);

  return (
    <div className="barcodeContainer">
      <svg id={barcodeFormat}></svg>
    </div>
  );
};

export default Barcode;

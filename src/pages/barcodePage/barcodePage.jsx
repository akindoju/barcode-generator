import React, { useState } from 'react';
import Barcode from '../../components/Barcode/Barcode';

const BarcodePage = () => {
  const [barcodeValue, setBarcodeValue] = useState('');
  const [btnClicked, setBtnClicked] = useState(false);

  // const displayBarcode = () => {
  //   <Barcode barcodeValue={barcodeValue} />;
  //   setBtnClicked(false);
  // };

  return (
    <div>
      <form>
        <label htmlFor="barcode">Enter value for Barcode</label>
        <input
          id="barcode"
          onChange={(event) => {
            event.preventDefault();
            setBarcodeValue(event.target.value);
            setBtnClicked(false);
          }}
        />
      </form>
      <button
        onClick={(event) => {
          event.preventDefault();
          setBtnClicked(true);
        }}
      >
        Generate
      </button>
      {btnClicked === true && <Barcode barcodeValue={barcodeValue} />}
    </div>
  );
};

export default BarcodePage;

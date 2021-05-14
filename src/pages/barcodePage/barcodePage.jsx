import React, { useState } from 'react';
import Barcode from '../../components/Barcode/Barcode';

const BarcodePage = () => {
  const [barcodeValue, setBarcodeValue] = useState('');
  const [btnClicked, setBtnClicked] = useState('true');

  // const displayBarcode = () => {
  //   <Barcode barcodeValue={barcodeValue} />;
  //   setBtnClicked(false);
  // };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="barcode">Enter value for Barcode</label>
        <input
          id="barcode"
          onChange={(event) => {
            event.preventDefault();
            setBarcodeValue(event.target.value);
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
      {btnClicked === true ? <Barcode barcodeValue={barcodeValue} /> : null}
    </div>
  );
};

export default BarcodePage;

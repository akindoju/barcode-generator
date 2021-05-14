import React, { useState } from 'react';
import Barcode from '../../components/Barcode/Barcode';

const BarcodePage = () => {
  const [barcodeValue, setBarcodeValue] = useState('');
  const [btnClicked, setBtnClicked] = useState(false);

  return (
    <div>
      <form>
        <label htmlFor="barcode">Enter Barcode Value</label>
        <input
          id="barcode"
          onChange={(event) => {
            event.preventDefault();
            setBarcodeValue(event.target.value);

            //to reset barcode value and also state
            setBtnClicked(false);
          }}
        />
      </form>
      <button
        disabled={barcodeValue.length === 0}
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

import React, { useState } from 'react';
import BackBtn from '../../components/BackBtn/BackBtn';
import Barcode from '../../components/Barcode/Barcode';

const BarcodePage = () => {
  const [barcodeValue, setBarcodeValue] = useState('');
  const [btnClicked, setBtnClicked] = useState(false);

  return (
    <div className="generatorPage">
      <BackBtn />
      <h2 className="title">Barcode Generator</h2>
      <form>
        <label htmlFor="barcode" className="label">
          Enter Barcode Value
        </label>
        <input
          placeholder="eg 123456 "
          className="input"
          id="barcode"
          onChange={(event) => {
            setBarcodeValue(event.target.value);

            //to reset barcode value and also state
            setBtnClicked(false);
          }}
        />
        <button
          className="generateBtn"
          disabled={barcodeValue.length === 0}
          onClick={(event) => {
            event.preventDefault();
            setBtnClicked(true);
          }}
        >
          Generate
        </button>
      </form>
      {btnClicked === true && <Barcode barcodeValue={barcodeValue} />}
    </div>
  );
};

export default BarcodePage;

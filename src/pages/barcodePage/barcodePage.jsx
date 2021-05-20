import React, { useState } from 'react';
import BackBtn from '../../components/BackBtn/BackBtn';
import Barcode from '../../components/Barcode/Barcode';

const BarcodePage = () => {
  const [barcodeValue, setBarcodeValue] = useState('');
  const [barcodeFormat, setBarcodeFormat] = useState('code128');
  const [btnClicked, setBtnClicked] = useState(false);

  const barcodeFormats = [
    'code128',
    'ean13',
    'ean8',
    'ean5',
    'ean2',
    'upc',
    'code39',
    'itf14',
    'msi',
    'pharmacode',
  ];

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
        <select
          name="formats"
          id="formats"
          className="select"
          onChange={({ target }) => {
            setBarcodeFormat(target.value);
          }}
        >
          {barcodeFormats.map((format) => {
            return (
              <option value={format} key={format}>
                {format.toUpperCase()}
              </option>
            );
          })}
        </select>
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
      {btnClicked === true && (
        <Barcode barcodeValue={barcodeValue} barcodeFormat={barcodeFormat} />
      )}
    </div>
  );
};

export default BarcodePage;

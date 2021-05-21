import React, { useState } from 'react';
import BackBtn from '../../components/BackBtn/BackBtn';
import Barcode from '../../components/Barcode/Barcode';

const BarcodePage = () => {
  const [barcodeValue, setBarcodeValue] = useState('');
  const [barcodeFormat, setBarcodeFormat] = useState('code128');
  const [errorMsg, setErrorMsg] = useState('');
  const [btnClicked, setBtnClicked] = useState(false);

  const barcodeFormats = [
    'code128',
    'code39',
    'ean13',
    'ean8',
    'ean5',
    'ean2',
    'upc',
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
          Enter Barcode Value and Format
        </label>
        <input
          placeholder="eg 123456 "
          className="input"
          id="barcode"
          onChange={({ target }) => {
            setBarcodeValue(target.value);
            setBtnClicked(false); //to reset barcode value and also state

            if (
              (isNaN(target.value) && barcodeFormat === 'ean13') ||
              (isNaN(target.value) && barcodeFormat === 'ean8') ||
              (isNaN(target.value) && barcodeFormat === 'ean5') ||
              (isNaN(target.value) && barcodeFormat === 'ean2') ||
              (isNaN(target.value) && barcodeFormat === 'upc') ||
              (isNaN(target.value) && barcodeFormat === 'itf14') ||
              (isNaN(target.value) && barcodeFormat === 'msi') ||
              (isNaN(target.value) && barcodeFormat === 'pharmacode')
            ) {
              setErrorMsg('Invalid data for this barcode type!');
            } else {
              setErrorMsg('');
            }
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
      {<p className="err">{errorMsg}</p>}
    </div>
  );
};

export default BarcodePage;

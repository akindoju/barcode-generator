import React, { useState, useEffect, useMemo } from 'react';
import BackBtn from '../../components/BackBtn/BackBtn';
import Barcode from '../../components/Barcode/Barcode';

const BarcodePage = () => {
  const [inputField, setInputField] = useState('');
  const [barcodeFormat, setBarcodeFormat] = useState('code128');
  const [errorMsg, setErrorMsg] = useState('');
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [placeholderValue, setPlaceholderValue] = useState('1234 ABC');

  //memoized code to prevent re-render if nothing's changed
  const barcodeFormats = useMemo(
    () => [
      { placeholder: '1234 ABC', format: 'code128' },
      { placeholder: '1234 ABC', format: 'code39' },
      { placeholder: '123456789012', format: 'ean13' },
      { placeholder: '12345678', format: 'ean8' },
      { placeholder: '12345', format: 'ean5' },
      { placeholder: '12', format: 'ean2' },
      { placeholder: '123456789012', format: 'upc' },
      { placeholder: '1234567890123', format: 'itf14' },
      { placeholder: '123456', format: 'msi' },
      { placeholder: '123456', format: 'pharmacode' },
    ],
    []
  );

  //memoized code to prevent re-render if nothing's changed
  const settingPlaceholder = useMemo(() => {
    return barcodeFormats.map((format) => {
      return (
        barcodeFormat === format.format &&
        setPlaceholderValue(format.placeholder)
      );
    });
  }, [barcodeFormat, barcodeFormats]);

  //used to call code at page startup
  useEffect(() => {
    return settingPlaceholder;
  }, [settingPlaceholder]);

  useEffect(() => {
    if (inputField.length === 0) {
      setIsBtnDisabled(true);
      setErrorMsg('');
    }
  }, [inputField]);

  //disabled btn and set error message logic
  const disabledBtn = (target) => {
    if (
      (target.value.length !== 12 && barcodeFormat === 'ean13') ||
      (target.value.length !== 7 && barcodeFormat === 'ean8') ||
      (target.value.length !== 5 && barcodeFormat === 'ean5') ||
      (target.value.length !== 2 && barcodeFormat === 'ean2') ||
      (target.value.length !== 11 && barcodeFormat === 'upc') ||
      (target.value.length !== 13 && barcodeFormat === 'itf14') ||
      (target.value.length > 6 && barcodeFormat === 'pharmacode') ||
      (target.value.length < 2 && barcodeFormat === 'pharmacode') ||
      (isNaN(target.value) && barcodeFormat === 'ean13') ||
      (isNaN(target.value) && barcodeFormat === 'ean8') ||
      (isNaN(target.value) && barcodeFormat === 'ean5') ||
      (isNaN(target.value) && barcodeFormat === 'ean2') ||
      (isNaN(target.value) && barcodeFormat === 'upc') ||
      (isNaN(target.value) && barcodeFormat === 'itf14') ||
      (isNaN(target.value) && barcodeFormat === 'msi') ||
      (isNaN(target.value) && barcodeFormat === 'pharmacode')
    ) {
      setIsBtnDisabled(true);
      setErrorMsg('Invalid data for this barcode type!');
    } else {
      setIsBtnDisabled(false);
      setErrorMsg('');
    }
  };

  return (
    <div className="generatorPage">
      <BackBtn />
      <h2 className="title">Barcode Generator</h2>
      <form>
        <label htmlFor="barcode" className="label">
          Enter Barcode Value and Format
        </label>
        <input
          placeholder={`eg '${placeholderValue}'`}
          // placeholder="Enter value for Barcode"
          className="input"
          id="barcode"
          onChange={({ target }) => {
            setInputField(target.value);
            setIsBtnClicked(false); //to reset barcode value and also state
            disabledBtn(target);
          }}
          value={inputField}
          autoFocus
        />

        <select
          name="formats"
          id="formats"
          className="select"
          onChange={({ target }) => {
            setBarcodeFormat(target.value);
            setIsBtnClicked(false);
            setInputField('');
            setErrorMsg('');
            setIsBtnDisabled(true);
          }}
        >
          {barcodeFormats.map((format) => {
            return (
              <option value={format.format} key={format.format}>
                {format.format.toUpperCase()}
              </option>
            );
          })}
        </select>
        <button
          className={isBtnDisabled ? 'generateBtnDisabled' : 'generateBtn'}
          disabled={isBtnDisabled} //if btnDisabled === true
          onClick={(event) => {
            event.preventDefault();
            setIsBtnClicked(true);
          }}
        >
          Generate
        </button>
      </form>
      {isBtnClicked === true && (
        <Barcode inputField={inputField} barcodeFormat={barcodeFormat} />
      )}
      {<p className="err">{errorMsg}</p>}
    </div>
  );
};

export default BarcodePage;

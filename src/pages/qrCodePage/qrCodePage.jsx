import React, { useState } from 'react';
import BackBtn from '../../components/BackBtn/BackBtn';
import QRCode from '../../components/QRCode/QRCode';

const QRCodePage = () => {
  const [qrCodeValue, setQRCodeValue] = useState('');
  const [btnClicked, setBtnClicked] = useState(false);

  return (
    <div className="generatorPage">
      <BackBtn />
      <h2 className="title">QR Code Generator</h2>
      <form>
        <label htmlFor="qrCode" className="label">
          Enter QRCode Value
        </label>
        <input
          placeholder="eg 123456 "
          className="input"
          id="qrCode"
          onChange={(event) => {
            setQRCodeValue(event.target.value);

            //to reset qrCode value and also state
            setBtnClicked(false);
          }}
        />
        <button
          className="generateBtn"
          disabled={qrCodeValue.length === 0}
          onClick={(event) => {
            event.preventDefault();
            setBtnClicked(true);
          }}
        >
          Generate
        </button>
      </form>
      {btnClicked === true && <QRCode qrCodeValue={qrCodeValue} />}
    </div>
  );
};

export default QRCodePage;

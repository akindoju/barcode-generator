import React, { useState } from 'react';
import QRCode from '../../components/QRCode/QRCode';

const QRCodePage = () => {
  const [qrCodeValue, setQRCodeValue] = useState('');
  const [btnClicked, setBtnClicked] = useState(false);

  return (
    <div>
      <form>
        <label htmlFor="qrCode">Enter QRCode Value</label>
        <input
          placeholder="eg 123456 "
          id="qrCode"
          onChange={(event) => {
            event.preventDefault();
            setQRCodeValue(event.target.value);

            //to reset qrCode value and also state
            setBtnClicked(false);
          }}
        />
      </form>
      <button
        disabled={qrCodeValue.length === 0}
        onClick={(event) => {
          event.preventDefault();
          setBtnClicked(true);
        }}
      >
        Generate
      </button>
      {btnClicked === true && <QRCode qrCodeValue={qrCodeValue} />}
    </div>
  );
};

export default QRCodePage;

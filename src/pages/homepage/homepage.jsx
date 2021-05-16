import React from 'react';
import { useHistory } from 'react-router';

const Homepage = () => {
  const history = useHistory();

  return (
    <div className="homepage">
      <h2 className="title"> QR Code and Barcode Generator</h2>
      <div className="row">
        <button
          className="col-1-of-2 btn"
          onClick={(event) => {
            event.preventDefault();
            history.push('/qrCode');
          }}
        >
          QRCode Generator
        </button>
        <button
          className="col-1-of-2 btn"
          onClick={(event) => {
            event.preventDefault();
            history.push('/barcode');
          }}
        >
          Barcode Generator
        </button>
      </div>
    </div>
  );
};

export default Homepage;

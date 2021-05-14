import React from 'react';
import { useHistory } from 'react-router';

const Homepage = () => {
  const history = useHistory();

  return (
    <div>
      <button
        onClick={(event) => {
          event.preventDefault();
          history.push('/barcode');
        }}
      >
        Barcode Generator
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          history.push('/qrCode');
        }}
      >
        QR Code Generator
      </button>
    </div>
  );
};

export default Homepage;

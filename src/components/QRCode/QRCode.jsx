import React from 'react';
import QRCode from 'react-qr-code';

const QrCode = (props) => {
  const { qrCodeValue } = props;

  return <QRCode value={qrCodeValue} />;
};

export default QrCode;
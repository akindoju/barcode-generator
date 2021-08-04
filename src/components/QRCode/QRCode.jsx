import QRCode from "react-qr-code";

const QrCode = ({ qrCodeValue }) => {
  return (
    <div className="qrContainer">
      <QRCode value={qrCodeValue} size="190" className="qrcode" role="figure" />
    </div>
  );
};

export default QrCode;

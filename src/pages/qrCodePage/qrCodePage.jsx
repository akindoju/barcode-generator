import { useState } from "react";
import BackBtn from "../../components/BackBtn/BackBtn";
import QRCode from "../../components/QRCode/QRCode";

const QRCodePage = ({
  isBtnDisabled,
  setIsBtnDisabled,
  inputField,
  setInputField,
}) => {
  const [btnClicked, setBtnClicked] = useState(false);

  //disable btn if input field is empty
  if (inputField.length === 0) {
    setIsBtnDisabled(true);
  } else {
    setIsBtnDisabled(false);
  }

  return (
    <div className="generatorPage">
      <BackBtn />
      <h2 className="title">QR Code Generator</h2>
      <form>
        <label htmlFor="qrCode" className="label">
          Enter QRCode Value
        </label>
        <input
          placeholder="Enter vaue for QR Code"
          className="input"
          id="qrCode"
          onChange={({ target }) => {
            setInputField(target.value.trim()); //.trim() to remove whitespaces(space character)
            setBtnClicked(false); //reset qrcode
          }}
        />
        <button
          className={isBtnDisabled ? "generateBtnDisabled" : "generateBtn"}
          disabled={isBtnDisabled}
          onClick={(event) => {
            event.preventDefault();
            setBtnClicked(true);
          }}
        >
          Generate
        </button>
      </form>
      {btnClicked && <QRCode qrCodeValue={inputField} />}
    </div>
  );
};

export default QRCodePage;

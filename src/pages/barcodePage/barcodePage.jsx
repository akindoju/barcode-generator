import React, { useState, useEffect, useMemo } from "react";
import BackBtn from "../../components/BackBtn/BackBtn";
import Barcode from "../../components/Barcode/Barcode";

const BarcodePage = ({
  isBtnDisabled,
  setIsBtnDisabled,
  inputField,
  setInputField,
}) => {
  const [barcodeFormat, setBarcodeFormat] = useState("code128");
  const [errorMsg, setErrorMsg] = useState("");
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [isErrorMsg, setIsErrorMsg] = useState(false);
  const [placeholderValue, setPlaceholderValue] = useState("1234 ABC");

  //memoized code to prevent re-render if nothing's changed
  const barcodeFormats = useMemo(
    () => [
      { placeholder: "1234 ABC", format: "code128" },
      { placeholder: "1234 ABC", format: "code39" },
      { placeholder: "123456789012", format: "ean13" },
      { placeholder: "1234567", format: "ean8" },
      { placeholder: "12345", format: "ean5" },
      { placeholder: "12", format: "ean2" },
      { placeholder: "123456789012", format: "upc" },
      { placeholder: "1234567890123", format: "itf14" },
      { placeholder: "123456", format: "msi" },
      { placeholder: "123456", format: "pharmacode" },
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

  //set error message logic
  const disabledBtn = (target) => {
    if (
      ((isNaN(target) || target.length !== 12) && barcodeFormat === "ean13") ||
      ((isNaN(target) || target.length !== 7) && barcodeFormat === "ean8") ||
      ((isNaN(target) || target.length !== 5) && barcodeFormat === "ean5") ||
      ((isNaN(target) || target.length !== 2) && barcodeFormat === "ean2") ||
      ((isNaN(target) || target.length !== 11) && barcodeFormat === "upc") ||
      ((isNaN(target) || target.length !== 13) && barcodeFormat === "itf14") ||
      (isNaN(target) && barcodeFormat === "msi") ||
      ((isNaN(target) || target.length > 6 || target.length < 2) &&
        barcodeFormat === "pharmacode")
    ) {
      setErrorMsg("Invalid data for this barcode type!");
    } else {
      setErrorMsg("");
    }
  };

  //disable btn if input field is empty
  if (inputField.length === 0) {
    setIsBtnDisabled(true);
  } else {
    setIsBtnDisabled(false);
  }

  return (
    <div className="generatorPage">
      <BackBtn />
      <h2 className="title">Barcode Generator</h2>
      <form>
        <label htmlFor="barcode" className="label">
          Enter Barcode Value and Format
        </label>
        <input
          placeholder={`eg '${placeholderValue}'`} //dynamic placeholder
          className="input"
          id="barcode"
          onChange={(event) => {
            setInputField(event.target.value.trim()); //.trim() to remove whitespaces(space character)
            disabledBtn(event.target.value);
            setIsBtnClicked(false);
            setIsErrorMsg(false);
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
            setInputField("");
            setErrorMsg("");
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
          className={isBtnDisabled ? "generateBtnDisabled" : "generateBtn"}
          disabled={isBtnDisabled}
          onClick={(event) => {
            event.preventDefault();
            errorMsg ? setIsErrorMsg(true) : setIsBtnClicked(true);
          }}
        >
          Generate
        </button>
      </form>
      {isBtnClicked === true && (
        <Barcode inputField={inputField} barcodeFormat={barcodeFormat} />
      )}
      {isErrorMsg && <p className="err">{errorMsg}</p>}
    </div>
  );
};

export default BarcodePage;

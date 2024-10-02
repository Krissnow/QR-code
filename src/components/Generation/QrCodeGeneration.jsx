import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import { GENERATE_DATA } from "../../constans";
import style from "./QrCodeGeneration.module.css";

const QrCodeGeneration = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));

    setResult(value);
    setValue("");
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult("");
  };

  return (
    <div className={style.qrBlock}>
      {result !== "" && (
        <QRCodeSVG className={style.codeSvg} value={result} size={200} />
      )}
      <button
        className={style.buttonQrCode}
        type="button"
        onClick={onClickHandler}
      >
        Wygenerowanie QR
      </button>
      <input
        className={style.inputQrCode}
        value={value}
        onChange={onChangeHandler}
        type="text"
        placeholder="Proszę wpisać tekst..."
      />
    </div>
  );
};

export default QrCodeGeneration;

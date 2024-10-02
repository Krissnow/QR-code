import { QRCodeSVG } from "qrcode.react";
import { GENERATE_DATA } from "../../constans";
import style from "./GenerateHistory.module.css";

const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

  return (
    <div className={style.contentBlock}>
      {data.map((text, i) => (
        <p className={style.textContent} key={i}>
          <QRCodeSVG className={style.qrSvg} value={text} size={100} />
          {text}
        </p>
      ))}
    </div>
  );
};

export default GenerateHistory;

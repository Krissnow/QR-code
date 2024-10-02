import { QRCodeSVG } from "qrcode.react";
import { SCAN_DATA } from "../../constans";
import style from "./ScanHistory.module.css";

const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
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

export default ScanHistory;

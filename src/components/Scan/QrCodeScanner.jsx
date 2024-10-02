import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import { SCAN_DATA } from "../../constans";
import style from "./QrCodeScanner.module.css";

const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);

  const onScanHandler = (result) => {
    setScanned(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    );
  };

  return (
    <div className={style.qrContainer}>
      <p className={style.scannedText}>{scanned}</p>
      <Scanner
        components={{
          audio: false,
          finder: false,
        }}
        styles={{
          container: { width: 350 },
        }}
        onScan={onScanHandler}
      />
    </div>
  );
};

export default QrCodeScanner;

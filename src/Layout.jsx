import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import QrCodeGeneration from "./components/Generation/QrCodeGeneration";
import QrCodeScanner from "./components/Scan/QrCodeScanner";
import ScanHistory from "./components/Scan/ScanHistory";
import GenerateHistory from "./components/Generation/GenerateHistory";
import style from "./Layout.module.css";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<QrCodeGeneration />} />
        <Route path="/generate" element={<QrCodeGeneration />} />
        <Route path="/scan" element={<QrCodeScanner />} />
        <Route path="/scanHistory" element={<ScanHistory />} />
        <Route path="/generateHistory" element={<GenerateHistory />} />
      </Routes>
    </div>
  );
};

export default Layout;

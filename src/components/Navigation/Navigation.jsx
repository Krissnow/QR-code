import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <Link className={styles.navigateLink} to="/generate">
        Wygenerować QR-code
      </Link>
      <Link className={styles.navigateLink} to="/scan">
        Scanować QR-code
      </Link>
      <Link className={styles.navigateLink} to="/generateHistory">
        Historia wygenerowanych kodów
      </Link>
      <Link className={styles.navigateLink} to="/scanHistory">
        Historia zeskanowanych kodów
      </Link>
    </nav>
  );
};

export default Navigation;

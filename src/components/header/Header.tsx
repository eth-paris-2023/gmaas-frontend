import Image from "next/image";
import styles from "./Header.module.css";
import { Gmaas } from "@/assets";

export default function Header() {
  return (
    <header className={styles.Header_container}>
      <Image src={Gmaas} alt="Gmaas" className={styles.Header_logo} />
      <div className={styles.Header_buttons_box}>
        <button className={styles.credit_button}>
          BUY CREDITS
          <p>1 free credit left</p>
        </button>
        <button className={styles.connect_button}>Connect Wallet</button>
      </div>
    </header>
  );
}

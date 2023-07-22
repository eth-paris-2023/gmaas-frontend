import { info } from "@/assets";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <section className={styles.Footer_container}>
      <h3 className={styles.title}>CREDITS TOP-UP</h3>
      <div className={styles.Footer_buy_box}>
        <div className={styles.Footer_buy_box_input}>
          <input type="number" placeholder="Enter desired credit value" />
          <button>Buy Credits</button>
          <div className={styles.price}>
            <p>TOTAL:</p> <h3>$57</h3>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.icon}>
          <Image src={info} alt="info" />
        </div>
        <p>
          Enter any amount of credits you wish to buy (minimum 1) for the price
          of <span>1$ per credit</span>.<br /> The total price on the right will
          automatically adjust.
          <br />
          <span></span>
        </p>
      </div>
    </section>
  );
}

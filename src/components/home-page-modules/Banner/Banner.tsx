import Image from "next/image";
import styles from "./Banner.module.css";
import { info } from "@/assets";
import { useState } from "react";

const models = ["Model 1", "Model 2", "Model 3"];

export default function Banner() {
  const [prompt, setPrompt] = useState("");
  return (
    <section className={styles.Banner_container}>
      <div className={styles.Banner_content}>
        <div className={styles.Banner_content_prompt_box}>
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Write Your Prompt..."
          />
          <button>Generate</button>
        </div>
        <div className={styles.Banner_content_model_box}>
          <p className={styles.title}>Select a model:</p>
          <div className={styles.container}>
            {models.map((item, index) => (
              <div className={styles.model} key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.icon}>
            <Image src={info} alt="info" />
          </div>
          <p>
            Selecting a generative model will be available once you purchase a
            credit top-up.
            <br />
            <span>
              Your initial free credit will showcase results from all models
              available for free.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import styles from "./Result.module.css";
import { info, model1, model2, model3 } from "@/assets";
import { useState } from "react";

const models = [
  {
    name: "Model 1",
    img: model1,
  },
  {
    name: "Model 2",
    img: model2,
  },
  {
    name: "Model 3",
    img: model3,
  },
];

export default function Result() {
  const [selectedModel, setSelectedModel] = useState<
    | {
        name: string;
        img: any;
      }
    | undefined
  >();
  return (
    <section className={styles.Result_container}>
      <div className={styles.Result_container_line1} />
      <div className={styles.Result_container_line2} />
      <div className={styles.Result_title}>
        <p>
          Showing results for prompt:
          <span>“Skopje, Macedonia, in the distant future”</span>
        </p>
        <h3>(0 credits left)</h3>
        <div>
          <Image src={info} alt="info" />
          Click on your favourite image to collect it as an NFT
        </div>
      </div>
      <div className={styles.Result_models}>
        {models.map((item, index) => (
          <div className={styles.model} key={index}>
            <Image
              style={{
                boxShadow:
                  selectedModel === item
                    ? "0px 1px 27px 15px rgba(182, 30, 132, 0.53)"
                    : "",
                transition: "0.2s ease-in-out",
              }}
              src={item.img}
              alt="model"
              onClick={() => setSelectedModel(item)}
            />
            {item.name}
          </div>
        ))}
      </div>
      <div className={styles.Result_buttons}>
        <button className={styles.addToWallet}>Add to wallet as NFT</button>
        <button className={styles.regenerate}>Regenerate art</button>
        <p>0 credits left</p>
      </div>
    </section>
  );
}

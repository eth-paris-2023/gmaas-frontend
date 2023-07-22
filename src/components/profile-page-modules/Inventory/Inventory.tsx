import { RootState } from "@/redux/store";
import styles from "./Inventory.module.css";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { copy, model1, model2, model3 } from "@/assets";

const NftsData = [
  {
    img: model1,
    data: {
      prompt:
        "Prompt: “Skopje, Macedonia, in the distant future lorem ipsumdolor sit amer test test test test test future lorem ipsumdolor sit amer test test test test test”",
      model: "model 1",
      Proof: "zsdhat4jhh85asc42asc331csacc51sac6s1caplcp84scsstedy8",
    },
  },
  {
    img: model2,
    data: {
      prompt:
        "Prompt: “Skopje, Macedonia, in the distant future lorem ipsumdolor sit amer test test test test test future lorem ipsumdolor sit amer test test test test test”",
      model: "model 2",
      Proof: "zsdhat4jhh85asc42asc331csacc51sac6s1caplcp84scsstedy8",
    },
  },
  {
    img: model3,
    data: {
      prompt:
        "Prompt: “Skopje, Macedonia, in the distant future lorem ipsumdolor sit amer test test test test test future lorem ipsumdolor sit amer test test test test test”",
      model: "model 3",
      Proof: "zsdhat4jhh85asc42asc331csacc51sac6s1caplcp84scsstedy8",
    },
  },
  {
    img: model1,
    data: {
      prompt:
        "Prompt: “Skopje, Macedonia, in the distant future lorem ipsumdolor sit amer test test test test test future lorem ipsumdolor sit amer test test test test test”",
      model: "model 1",
      Proof: "zsdhat4jhh85asc42asc331csacc51sac6s1caplcp84scsstedy8",
    },
  },
  {
    img: model3,
    data: {
      prompt:
        "Prompt: “Skopje, Macedonia, in the distant future lorem ipsumdolor sit amer test test test test test future lorem ipsumdolor sit amer test test test test test”",
      model: "model 3",
      Proof: "zsdhat4jhh85asc42asc331csacc51sac6s1caplcp84scsstedy8",
    },
  },
  {
    img: model2,
    data: {
      prompt:
        "Prompt: “Skopje, Macedonia, in the distant future lorem ipsumdolor sit amer test test test test test future lorem ipsumdolor sit amer test test test test test”",
      model: "model 2",
      Proof: "zsdhat4jhh85asc42asc331csacc51sac6s1caplcp84scsstedy8",
    },
  },
];

export default function Inventory() {
  const account = useSelector(
    (state: RootState) => state.walletReducer.account
  );
  return (
    <section className={styles.Inventory_container}>
      <div className={styles.title}>
        <p>My Profile</p>
        <div />
        <p>
          {account
            ? `${account.slice(0, 6)} ... ${account.slice(
                account.length - 4,
                account.length
              )}`
            : ""}
        </p>
      </div>
      <div className={styles.subTitle}>NFT Inventory</div>
      <div className={styles.Inventory_Nft_container}>
        {NftsData.map((item, index) => {
          return (
            <div className={styles.Inventory_Nft} key={index}>
              <Image
                src={item.img}
                alt="model"
                className={styles.Inventory_Nft_img}
              />
              <div className={styles.data}>
                <p>
                  Prompt:
                  <span>{item.data.prompt.slice(0, 110)} ......</span>
                </p>
                <p>
                  Model:<span>{item.data.model}</span>
                </p>
                <p>
                  Proof:
                  <span style={{ textDecoration: "underline" }}>
                    {`${item.data.Proof.slice(0, 9)}...${item.data.Proof.slice(
                      item.data.Proof.length - 5,
                      item.data.Proof.length
                    )}`}
                    <Image
                      onClick={() => {
                        navigator.clipboard.writeText(item.data.Proof);
                      }}
                      src={copy}
                      alt="copy"
                    />
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

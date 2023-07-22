"use client"; // This is a client component 👈🏽
import Image from "next/image";
import styles from "./Header.module.css";
import { Gmaas } from "@/assets";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { setAccount } from "@/redux/AppReducers/WalletReducer";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const dispatch = useDispatch();
  const account = useSelector(
    (state: RootState) => state.walletReducer.account
  );
  const router = useRouter()

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        dispatch(setAccount(address));
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      console.error("Ethereum provider not found. Please install MetaMask.");
    }
  };

  async function disconnectWallet() {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        dispatch(setAccount(undefined));
        return address;
      } catch (error) {
        console.error("Error disconnecting wallet:", error);
      }
    } else {
      console.error("Ethereum provider not found. Please install MetaMask.");
    }
    return null;
  }

  useEffect(() => {
    const checkAccount = async () => {
      if (window.ethereum) {
        if (window.ethereum.selectedAddress) {
          try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const address = await signer.getAddress();
            dispatch(setAccount(address));
          } catch (error) {
            console.error("Error connecting wallet:", error);
          }
        }
      } else {
        console.error("Ethereum provider not found. Please install MetaMask.");
      }
    };
    checkAccount();
  }, []);

  return (
    <header className={styles.Header_container}>
      <Image src={Gmaas} alt="Gmaas" className={styles.Header_logo} onClick={() => router.push("/")} />
      <div className={styles.Header_buttons_box}>
        <button className={styles.credit_button}>
          BUY CREDITS
          <p>1 free credit left</p>
        </button>
        <button
          onClick={() => {
            if (!account) {
              connectWallet();
            } else {
              router.push("/profile")
            }
          }}
          className={styles.connect_button}
        >
          {account
            ? `${account.slice(0, 6)} ... ${account.slice(
                account.length - 4,
                account.length
              )}`
            : "Connect Wallet"}
          {account && (
            <p
              onClick={(e) => {
                e.stopPropagation();
                disconnectWallet();
              }}
            >
              Disconnect wallet
            </p>
          )}
        </button>
      </div>
    </header>
  );
}

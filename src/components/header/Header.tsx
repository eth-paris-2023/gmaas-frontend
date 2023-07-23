"use client"; // This is a client component 👈🏽
import Image from "next/image";
import styles from "./Header.module.css";
import { Gmaas, arrow } from "@/assets";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { setAccount } from "@/redux/AppReducers/WalletReducer";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const CHAIN_ID_REQUIRED = 80001; //Mumbai

export default function Header() {
  const dispatch = useDispatch();
  const account = useSelector(
    (state: RootState) => state.walletReducer.account
  );
  const router = useRouter();
  const pathName = usePathname();

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        let provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("wallet_switchEthereumChain", [
          { chainId: `0x${CHAIN_ID_REQUIRED.toString(16)}` },
        ]);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        dispatch(setAccount(address));
        localStorage.setItem("account_status", "connected");
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
        dispatch(setAccount(undefined));
        localStorage.setItem("account_status", "disconnected");
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
          const accountStatus = localStorage.getItem("account_status");
          if (accountStatus !== "disconnected") {
            try {
              const provider = new ethers.BrowserProvider(window.ethereum);
              const signer = await provider.getSigner();
              const address = await signer.getAddress();
              dispatch(setAccount(address));
            } catch (error) {
              console.error("Error connecting wallet:", error);
            }
          }
        }
        window.ethereum.on("chainChanged", (chainId: any) => {
          if (chainId !== "0x13881") disconnectWallet();
        });
        window.ethereum.on("accountsChanged", (account: string[]) => {
          dispatch(setAccount(account[0]));
        });
      } else {
        console.error("Ethereum provider not found. Please install MetaMask.");
      }
    };
    checkAccount();
  }, []);

  return (
    <header className={styles.Header_container}>
      <Image
        src={Gmaas}
        alt="Gmaas"
        className={styles.Header_logo}
        onClick={() => router.push("/")}
      />
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
              router.push("/profile");
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
            <>
              <p
                onClick={(e) => {
                  e.stopPropagation();
                  disconnectWallet();
                }}
              >
                Disconnect wallet
              </p>
              {pathName !== "/profile" && <Image src={arrow} alt="arrow" />}
            </>
          )}
        </button>
      </div>
    </header>
  );
}

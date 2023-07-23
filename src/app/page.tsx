"use client"; // This is a client component 👈🏽
import { useState, useRef } from "react";
import Banner from "@/components/home-page-modules/Banner/Banner";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import Footer from "@/components/footer/Footer";
import { CSSTransition } from "react-transition-group";
const Result = dynamic(
  () => import("@/components/home-page-modules/Result/Result")
);

export default function Home() {
  // This state is just here to show you how to mount and unmount it
  const [visibility, setVisibility] = useState(false);
  const nodeRef: React.RefObject<HTMLParagraphElement> = useRef(null);
  return (
    <main className={styles.Home_container}>
      <Banner setVisibility={setVisibility} />
      <CSSTransition
        in={visibility}
        nodeRef={nodeRef}
        timeout={500} // The duration of the animation in milliseconds
        classNames="fade" // The CSS class name prefix for the enter/exit animations
        unmountOnExit
      >
        <Result nodeRef={nodeRef} />
      </CSSTransition>
      <Footer />
    </main>
  );
}

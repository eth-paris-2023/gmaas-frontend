"use client";
import Inventory from "@/components/profile-page-modules/Inventory/Inventory";
import styles from "./page.module.css";

export default function Profile() {
  return (
    <main className={styles.profile_container}>
      <Inventory />
    </main>
  );
}

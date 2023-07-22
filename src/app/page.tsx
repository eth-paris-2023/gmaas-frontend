"use client"; // This is a client component 👈🏽

import Banner from '@/components/home-page-modules/Banner/Banner'
import styles from './page.module.css'
import dynamic from 'next/dynamic'
import Footer from '@/components/footer/Footer';
const Result = dynamic(() => import('@/components/home-page-modules/Result/Result'))

export default function Home() {
  return (
    <main className={styles.Home_container}>
      <Banner/>
      <Result/>
      <Footer/>
    </main>
  )
}

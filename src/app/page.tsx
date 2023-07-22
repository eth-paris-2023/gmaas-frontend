import Banner from '@/components/home-page-modules/Banner/Banner'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.Home_container}>
      <Banner/>
    </main>
  )
}

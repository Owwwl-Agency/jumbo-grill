import { Outlet } from 'react-router'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import useSmoothScroll from '@/hooks/useSmoothScroll'
import styles from './Layout.module.css'

export default function Layout() {
  useSmoothScroll()

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

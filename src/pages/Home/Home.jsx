import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Advantages from './sections/Advantages/Advantages'
import GrillInAction from './sections/GrillInAction/GrillInAction'
import ProductShowcase from './sections/ProductShowcase/ProductShowcase'
import Distributor from './sections/Distributor/Distributor'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <Hero />
      <div className={styles.overHero}>
        <About />
        <Advantages />
        <GrillInAction />
        <ProductShowcase />
        <Distributor />
      </div>
    </>
  )
}

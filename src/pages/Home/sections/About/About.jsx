import { useRef } from 'react'
import Button from '@/components/ui/Button/Button'
import Media from '@/components/ui/Media/Media'
import { gsap, useGSAP, MOTION_OK, getHeaderHeight } from '@/lib/gsap'
import aboutImage from '@/assets/images/about/about.webp'
import styles from './About.module.css'

export default function About() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(MOTION_OK, () => {
        const section = sectionRef.current
        const q = gsap.utils.selector(section)

        gsap.fromTo(
          section,
          { borderTopLeftRadius: 40, borderTopRightRadius: 40 },
          {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: () => `top ${getHeaderHeight()}px`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        )

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'top 15%',
              scrub: 0.8,
            },
            defaults: { ease: 'power2.out' },
          })
          .fromTo(
            q(`.${styles.image}`),
            { clipPath: 'inset(35% 0% 0% 0% round 5px)' },
            { clipPath: 'inset(0% 0% 0% 0% round 5px)' },
            0,
          )
          .fromTo(q(`.${styles.imageInner}`), { scale: 1.3 }, { scale: 1 }, 0)
          .from(q(`.${styles.titleStart}`), { xPercent: -25, autoAlpha: 0 }, 0.1)
          .from(q(`.${styles.content}`), { y: 80, autoAlpha: 0 }, 0.2)
          .from(q(`.${styles.titleEnd}`), { xPercent: 15, autoAlpha: 0 }, 0.3)
      })

      return () => mm.revert()
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className={styles.about}>
      <div className={styles.grid}>
        <h2 className={styles.title}>
          <span className={styles.titleStart}>True Passion</span>{' '}
          <span className={styles.titleEnd}>Forged in Finest Steel.</span>
        </h2>

        <Media
          src={aboutImage}
          alt="Whole chicken grilling in a Grill Jumbo basket"
          ratio="324 / 425"
          overlay="soft"
          className={styles.image}
          imageClassName={styles.imageInner}
        />

        <div className={styles.content}>
          <h3 className={styles.heading}>We Reinvented Grilling</h3>
          <p className={styles.text}>
            Grill Jumbo was born from a simple idea: grilling should be easier, cleaner, and more consistent. Built
            with premium food-grade AISI 304 stainless steel, our baskets turn any grill into a professional cooking
            station, giving you perfect results every time.
          </p>
          <Button to="/about" variant="green" className={styles.button}>
            Our Story
          </Button>
        </div>
      </div>
    </section>
  )
}

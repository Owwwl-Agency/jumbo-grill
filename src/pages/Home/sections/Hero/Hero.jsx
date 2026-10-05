import { useRef } from 'react'
import { Link } from 'react-router'
import Button from '@/components/ui/Button/Button'
import Media from '@/components/ui/Media/Media'
import { gsap, ScrollTrigger, useGSAP, MOTION_OK } from '@/lib/gsap'
import { getLenis } from '@/lib/lenis'
import heroBg from '@/assets/images/hero/hero-bg.webp'
import highlightImage from '@/assets/images/hero/highlight-pro-max.webp'
import styles from './Hero.module.css'

export default function Hero() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(MOTION_OK, () => {
        const section = sectionRef.current
        const q = gsap.utils.selector(section)
        const [image] = q(`.${styles.image}`)

        gsap.from(q('[data-intro]'), { y: 40, autoAlpha: 0, duration: 1.2, stagger: 0.12, ease: 'power3.out', delay: 0.2 })

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: 0,
              end: () => `+=${section.offsetHeight}`,
              scrub: true,
              invalidateOnRefresh: true,
              onLeave: () => gsap.set(section, { visibility: 'hidden' }),
              onEnterBack: () => gsap.set(section, { visibility: 'visible' }),
            },
            defaults: { ease: 'none' },
          })
          .fromTo(image, { yPercent: -5, scale: 1.1 }, { yPercent: 5, scale: 1.1 }, 0)
          .to(q(`.${styles.dim}`), { opacity: 0.6 }, 0)
          .to(q(`.${styles.content}`), { y: -140, autoAlpha: 0, duration: 0.6 }, 0)
          .to(q(`.${styles.highlight}`), { y: -100, autoAlpha: 0, duration: 0.5 }, 0)

        const glideTo = (y) =>
          getLenis()?.scrollTo(y, {
            duration: 1.4,
            easing: (t) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2),
            lock: true,
            force: true,
          })

        ScrollTrigger.create({
          start: 2,
          end: () => section.offsetHeight - 2,
          invalidateOnRefresh: true,
          onEnter: () => glideTo(section.offsetHeight),
          onEnterBack: () => glideTo(0),
        })
      })

      return () => mm.revert()
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className={styles.hero}>
      <Media
        src={heroBg}
        alt="Grill Jumbo basket with raw meat"
        overlay="hero"
        radius="md"
        priority
        className={styles.frame}
        imageClassName={styles.image}
      >
        <div className={styles.dim} aria-hidden="true" />

        <div className={styles.highlight}>
          <aside className={styles.highlightCard} data-intro>
            <Media src={highlightImage} alt="Grill Jumbo PRO MAX baskets" ratio="173 / 168" />
            <p className={styles.highlightText}>The Uncompromising Flagship. Meet the PRO MAX.</p>
            <Link to="/products/pro-max" className={styles.highlightLink}>
              View Details
            </Link>
          </aside>
        </div>

        <div className={styles.content}>
          <h1 className={styles.title} data-intro>
            Engineered
            <br />
            For Fire
          </h1>
          <div className={styles.divider} data-intro />
          <div className={styles.bottom} data-intro>
            <p className={styles.text}>
              Crafted from thick 4mm steel, Grill Jumbo gives you absolute control for searing, smoking, and roasting
              with restaurant-quality results.
            </p>
            <Button to="/products" variant="sage">
              Explore The Models
            </Button>
          </div>
        </div>
      </Media>
    </section>
  )
}

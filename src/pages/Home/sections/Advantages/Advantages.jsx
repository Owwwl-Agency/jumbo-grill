import Media from '@/components/ui/Media/Media'
import backgroundImage from '@/assets/images/advantages/advantages-bg.webp'
import materialImage from '@/assets/images/advantages/material.webp'
import styles from './Advantages.module.css'

const STEPS_COUNT = 5

const ADVANTAGE = {
  step: 1,
  eyebrow: 'Food-Grade AISI 304',
  title: 'Material you can trust.',
  image: materialImage,
  imageAlt: 'Fish and meat in Grill Jumbo baskets over hot coals',
  text: 'Unlike cheap grills that rust, bend, or leave a metallic taste, Grill Jumbo is made from premium food-grade 304 stainless steel. This material guarantees corrosion resistance, durability under extreme heat, and absolute safety for your food. With it, you can count on years of perfect performance — no matter how often you fire it up.',
}

const pad = (value) => String(value).padStart(2, '0')

export default function Advantages() {
  const { step, eyebrow, title, image, imageAlt, text } = ADVANTAGE

  return (
    <section className={styles.advantages}>
      <Media src={backgroundImage} overlay="strong" radius="none" className={styles.background} />

      <p className={styles.side}>Discover</p>

      <article className={styles.card}>
        <div className={styles.progress} aria-hidden="true">
          {Array.from({ length: STEPS_COUNT }, (_, index) => (
            <span key={index} className={[styles.progressBar, index < step && styles.progressActive].filter(Boolean).join(' ')} />
          ))}
        </div>

        <header className={styles.header}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 className={styles.title}>{title}</h2>
        </header>

        <Media src={image} alt={imageAlt} ratio="540 / 270" radius="none" className={styles.image} />

        <p className={styles.text}>{text}</p>

        <p className={styles.counter}>
          {pad(step)}/<span className={styles.counterTotal}>{pad(STEPS_COUNT)}</span>
        </p>
      </article>

      <p className={[styles.side, styles.sideEnd].join(' ')}>Keep Scrolling</p>
    </section>
  )
}

import Button from '@/components/ui/Button/Button'
import Media from '@/components/ui/Media/Media'
import ScrollCursor from '@/components/ui/ScrollCursor/ScrollCursor'
import useFollowCursor from '@/hooks/useFollowCursor'
import basic1 from '@/assets/images/product/basic-1.webp'
import basic2 from '@/assets/images/product/basic-2.webp'
import basic3 from '@/assets/images/product/basic-3.webp'
import basic4 from '@/assets/images/product/basic-4.webp'
import styles from './ProductShowcase.module.css'

const PRODUCT = {
  name: 'Grill Jumbo Basic',
  tagline: 'The Classic Starter.',
  description:
    'The Basic model offers everything you need to enjoy authentic outdoor cooking. Reliable, durable, and easy to use, it comes with a complete starter set of baskets and accessories, making it an excellent choice for families or casual grillers. With Grill Jumbo Basic, you get functionality without unnecessary extras.',
  kit: ['6 × Grill Jumbo baskets (supplied disassembled)', '1 × Grill Jumbo handle', '1 × User’s Guide'],
  link: '/products/basic',
  gallery: [
    { src: basic1, alt: 'Grill Jumbo Basic basket', area: 'top', overlay: 'light' },
    { src: basic2, alt: 'Three baskets with bread, meat and vegetables', area: 'left', overlay: 'soft' },
    { src: basic3, alt: 'Meat in a Grill Jumbo basket', area: 'right-top', overlay: 'medium' },
    { src: basic4, alt: 'Closing a Grill Jumbo basket with meat', area: 'right-bottom', overlay: 'soft' },
  ],
}

export default function ProductShowcase() {
  const { name, tagline, description, kit, link, gallery } = PRODUCT
  const { cursorRef, areaProps } = useFollowCursor()

  return (
    <section className={styles.section} {...areaProps}>
      <div className={styles.card}>
        <div className={styles.info}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.tagline}>{tagline}</p>
          <p className={styles.description}>{description}</p>

          <ul className={styles.kit}>
            {kit.map((item) => (
              <li key={item} className={styles.kitItem}>
                {item}
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Button to={link} variant="accent">
              Explore Basic
            </Button>
            <Button to="/price-list" variant="outline">
              Request Price List
            </Button>
          </div>
        </div>

        <div className={styles.gallery}>
          {gallery.map(({ src, alt, area, overlay }) => (
            <Media key={src} src={src} alt={alt} overlay={overlay} className={styles[area]} />
          ))}
        </div>
      </div>
      <ScrollCursor ref={cursorRef} />
    </section>
  )
}

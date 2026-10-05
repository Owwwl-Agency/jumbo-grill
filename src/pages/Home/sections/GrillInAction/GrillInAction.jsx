import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import Media from '@/components/ui/Media/Media'
import DragCursor from '@/components/ui/DragCursor/DragCursor'
import useFollowCursor from '@/hooks/useFollowCursor'
import slide1 from '@/assets/images/grill-in-action/slide-1.webp'
import slide2 from '@/assets/images/grill-in-action/slide-2.webp'
import slide3 from '@/assets/images/grill-in-action/slide-3.webp'
import styles from './GrillInAction.module.css'

const SLIDES = [
  { id: 'outdoor', image: slide1, alt: 'Vegetables and meat grilling outdoors in Grill Jumbo baskets' },
  { id: 'tandoor', image: slide2, alt: 'Grill Jumbo used in a clay tandoor' },
  { id: 'gas-grill', image: slide3, alt: 'Grill Jumbo baskets on a gas grill' },
]

export default function GrillInAction() {
  const { cursorRef, areaProps } = useFollowCursor()

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <div>
          <h2 className={styles.title}>
            <span className={styles.titleLine}>Grill Jumbo</span>
            <span className={[styles.titleLine, styles.titleIndent].join(' ')}>In Action</span>
          </h2>
          <p className={styles.tagline}>Where fire meets flavor, and moments come alive.</p>
        </div>
        <p className={styles.text}>
          Jumbo is more than just a tool for grilling—it’s about creating moments worth sharing. From juicy steaks to
          smoky vegetables, every detail comes to life with precision and style. In this section, you’ll see Grill
          Jumbo in real action: outdoor gatherings, family dinners, or chef’s experiments. Each video captures the
          power, the taste, and the atmosphere that make Jumbo an essential part of any experience.
        </p>
      </div>

      <div className={styles.slider} {...areaProps}>
        <Swiper
          modules={[FreeMode]}
          slidesPerView="auto"
          spaceBetween={20}
          slidesOffsetBefore={50}
          slidesOffsetAfter={50}
          freeMode
        >
          {SLIDES.map(({ id, image, alt }) => (
            <SwiperSlide key={id} className={styles.slide}>
              <Media src={image} alt={alt} ratio="480 / 269" overlay="strong" className={styles.media}>
                <button type="button" className={styles.play}>
                  Play
                </button>
              </Media>
            </SwiperSlide>
          ))}
        </Swiper>
        <DragCursor ref={cursorRef} />
      </div>
    </section>
  )
}

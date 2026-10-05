import lensMap from '@/assets/images/effects/glass-lens-map.png'
import styles from './ScrollCursor.module.css'

export default function ScrollCursor({ label = 'Scroll', ref }) {
  return (
    <div ref={ref} className={styles.cursor} aria-hidden="true">
      <svg className={styles.defs} width="0" height="0">
        <filter id="scroll-cursor-lens" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feImage href={lensMap} x="0" y="0" width="109" height="108" preserveAspectRatio="none" result="map" />
          <feDisplacementMap in="SourceGraphic" in2="map" scale="-38" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      {label}
    </div>
  )
}

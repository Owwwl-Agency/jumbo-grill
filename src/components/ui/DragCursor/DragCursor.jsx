import CaretLeftIcon from '@/assets/icons/ui/caret-left.svg?react'
import styles from './DragCursor.module.css'

export default function DragCursor({ label = 'Drag', ref }) {
  return (
    <div ref={ref} className={styles.cursor} aria-hidden="true">
      <span className={styles.caret}>
        <CaretLeftIcon />
      </span>
      {label}
      <span className={[styles.caret, styles.caretRight].join(' ')}>
        <CaretLeftIcon />
      </span>
    </div>
  )
}

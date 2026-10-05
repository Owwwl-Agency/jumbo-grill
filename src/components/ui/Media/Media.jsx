import styles from './Media.module.css'

export default function Media({
  src,
  alt = '',
  ratio,
  overlay,
  radius = 'sm',
  priority = false,
  className = '',
  imageClassName = '',
  children,
}) {
  const style = {
    ...(ratio && { aspectRatio: ratio }),
    ...(overlay && { '--media-overlay': `var(--overlay-${overlay})` }),
  }

  return (
    <div
      className={[styles.media, styles[`radius-${radius}`], !ratio && styles.fill, className]
        .filter(Boolean)
        .join(' ')}
      style={style}
      data-overlay={overlay ? '' : undefined}
    >
      <img
        className={[styles.image, imageClassName].filter(Boolean).join(' ')}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
      />
      {children}
    </div>
  )
}

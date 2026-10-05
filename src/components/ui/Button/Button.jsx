import { Link } from 'react-router'
import styles from './Button.module.css'

export default function Button({
  children,
  to,
  href,
  variant = 'green',
  shape = 'rounded',
  type = 'button',
  className = '',
  ...rest
}) {
  const classes = [styles.button, styles[variant], styles[shape], className].filter(Boolean).join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}

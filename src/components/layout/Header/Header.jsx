import { Link, NavLink } from 'react-router'
import Button from '@/components/ui/Button/Button'
import logo from '@/assets/images/logo/logo.webp'
import BurgerIcon from '@/assets/icons/ui/burger.svg?react'
import ChevronDownIcon from '@/assets/icons/ui/chevron-down.svg?react'
import styles from './Header.module.css'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Guides & Recipes', to: '/guides' },
  { label: 'About Us', to: '/about' },
  { label: 'Support', to: '/support' },
]

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main">
        <ul className={styles.navList}>
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end
                className={({ isActive }) => [styles.navLink, isActive && styles.active].filter(Boolean).join(' ')}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <Link to="/" className={styles.logo} aria-label="Jumbo — home">
        <img src={logo} alt="Jumbo" />
      </Link>

      <div className={styles.actions}>
        <button type="button" className={styles.lang} aria-label="Change language">
          En
          <ChevronDownIcon className={styles.langIcon} aria-hidden="true" />
        </button>
        <Button to="/where-to-buy" variant="accent" shape="pill">
          Where to Buy
        </Button>
        <button type="button" className={styles.burger} aria-label="Open menu">
          <BurgerIcon aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}

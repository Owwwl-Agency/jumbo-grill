import { Link } from 'react-router'
import FacebookIcon from '@/assets/icons/social/facebook.svg?react'
import XIcon from '@/assets/icons/social/x.svg?react'
import InstagramIcon from '@/assets/icons/social/instagram.svg?react'
import TiktokIcon from '@/assets/icons/social/tiktok.svg?react'
import YoutubeIcon from '@/assets/icons/social/youtube.svg?react'
import styles from './Footer.module.css'

const CURRENT_YEAR = 2025

const CONTACTS = [
  { label: 'A:', value: '1 Amiryan Street, Yerevan, Armenia.' },
  { label: 'P:', value: '+374 10 900 909', href: 'tel:+37410900909' },
  { label: 'E:', value: 'Hello@Grill-jumbo.com', href: 'mailto:hello@grill-jumbo.com' },
]

const SOCIALS = [
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'X', href: '#', Icon: XIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
  { label: 'TikTok', href: '#', Icon: TiktokIcon },
  { label: 'YouTube', href: '#', Icon: YoutubeIcon },
]

const NAV_COLUMNS = [
  {
    title: 'Jumbo',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Blog', to: '/blog' },
      { label: 'Get In Touch', to: '/contact' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Grill Jumbo Basic', to: '/products/basic' },
      { label: 'Grill Jumbo Pro', to: '/products/pro' },
      { label: 'Grill Jumbo Pro Travel', to: '/products/pro-travel' },
      { label: 'Grill Jumbo Pro Max', to: '/products/pro-max' },
    ],
  },
  {
    title: 'For Clients',
    links: [
      { label: 'Guides & Recipes', to: '/guides' },
      { label: 'Support', to: '/support' },
      { label: 'Become a Distributor', to: '/distributor' },
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms & Conditions', to: '/terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.info}>
          <h2 className={styles.title}>Info</h2>
          <p className={styles.about}>
            At Grill Jumbo, we bring people together around the fire. Our patented stainless steel baskets make
            grilling easy, reliable, and always delicious.
          </p>

          <dl className={styles.contacts}>
            {CONTACTS.map(({ label, value, href }) => (
              <div key={label} className={styles.contactRow}>
                <dt className={styles.contactLabel}>{label}</dt>
                <dd>{href ? <a href={href}>{value}</a> : value}</dd>
              </div>
            ))}
          </dl>

          <ul className={styles.socials}>
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} className={styles.socialLink} aria-label={label}>
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className={styles.nav} aria-label="Footer">
          {NAV_COLUMNS.map(({ title, links }) => (
            <div key={title}>
              <h2 className={styles.title}>{title}</h2>
              <ul className={styles.links}>
                {links.map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className={styles.link}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          Copyright© {CURRENT_YEAR}, Designed By{' '}
          <a href="#" className={styles.agency}>
            Owwwl Agency
          </a>
        </p>
      </div>
    </footer>
  )
}

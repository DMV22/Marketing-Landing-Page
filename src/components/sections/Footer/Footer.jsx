import NavMenu from '../../ui/NavMenu/NavMenu'
import styles from './Footer.module.scss'
import { socialsData } from './socials.data'

export default function Footer() {
  return (
    <footer id='footer' className={styles.footer}>
      <nav className={styles.footerNav} aria-label="Footer navigation">
        <NavMenu
          listClassName={styles.list}
          itemClassName={styles.item}
          linkClassName={styles.link}
        />
      </nav>

      <ul className={styles.socials}>
        {socialsData.map(({ name, logo, href }) => {
          return (
            <li key={name} className={styles.socialItem}>
              <a href={href} className={styles.socialLink} aria-label={name}>
                <img src={logo} alt={name} />
              </a>
            </li>
          )
        })}
      </ul>

      <p className={styles.copyright}>© {new Date().getFullYear()} Abstractly, Inc. All rights reserved.</p>
    </footer>
  )
}

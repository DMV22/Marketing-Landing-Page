import styles from './Logo.module.scss';
import logo from '../../../assets/logo.svg';

export default function Logo() {
  return (
    <a href="#home" className={styles.logo__wrap} aria-label="Abstractly home">
      <img src={logo} alt="" aria-hidden="true" />
      <span className={styles.logo__name}>Abstractly</span>
    </a>
  )
}

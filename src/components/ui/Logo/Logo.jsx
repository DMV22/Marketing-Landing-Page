import logo from '../../../assets/logo.svg';
import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <a href="#home" className={styles.wrap} aria-label="Abstractly home">
      <img src={logo} alt="Logo company" aria-hidden="true" />
      <span className={styles.name}>Abstractly</span>
    </a>
  )
}

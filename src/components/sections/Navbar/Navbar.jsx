import { useState } from 'react';
import Logo from '../../ui/Logo/Logo';
import Buttons from '../../ui/Buttons/Buttons';
import BurgerButton from '../../ui/BurgerButton/BurgerButton';
import NavMenu from '../../ui/NavMenu/NavMenu';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Logo />

        <nav aria-label="Desktop navigation">
          <NavMenu
            listClassName={styles.nav}
            itemClassName={styles.nav__item}
            linkClassName={styles.nav__link}
          />
        </nav>
        <Buttons />

        <BurgerButton
          isOpen={isOpen}
          onClick={toggleMenu}
          className={styles.burger}
        />
      </div>

      <div
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}
      >
        <nav aria-label="Mobile navigation">
          <NavMenu
            listClassName={styles.mobileNav}
            itemClassName={styles.mobileNav__item}
            linkClassName={styles.mobileNav__link}
            onLinkClick={closeMenu}
          />
        </nav>
      </div>
    </header>
  );
}
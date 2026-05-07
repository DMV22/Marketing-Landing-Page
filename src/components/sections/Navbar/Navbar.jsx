import { useState } from 'react';
import Logo from '../../ui/Logo/Logo';
import NavMenu from '../../ui/NavMenu/NavMenu';
import Buttons from '../../ui/Buttons/Buttons';
import BurgerButton from '../../ui/BurgerButton/BurgerButton';
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
      <div className={styles.container}>
        <Logo />

        <nav className={styles.desktopNav} aria-label="Desktop navigation">
          <NavMenu
            listClassName={styles.nav}
            itemClassName={styles.item}
            linkClassName={styles.link}
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
            listClassName={styles.list}
            itemClassName={styles.item}
            linkClassName={styles.link}
            onLinkClick={closeMenu}
          />
        </nav>
      </div>
    </header>
  );
}
import { navLinks } from '../../sections/Navbar/navbar.data';

export default function NavMenu({
  listClassName,
  itemClassName,
  linkClassName,
  onLinkClick,
}) {
  return (
    <ul className={listClassName}>
      {navLinks.map((link) => (
        <li key={link.name} className={itemClassName}>
          <a
            href={link.href}
            className={linkClassName}
            onClick={onLinkClick ? onLinkClick : undefined}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
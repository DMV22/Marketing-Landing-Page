export default function BurgerButton({ className, isOpen, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.08325 2.77783H14.5833V4.16672H2.08325V2.77783ZM2.08325 7.63894H14.5833V9.02783H2.08325V7.63894ZM2.08325 12.5001H14.5833V13.8889H2.08325V12.5001Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
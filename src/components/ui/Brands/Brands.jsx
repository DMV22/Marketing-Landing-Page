export default function Brands({ brandSrc, brand, className }) {
  return (
    <img className={className} src={brandSrc} alt={brand} />
  )
}

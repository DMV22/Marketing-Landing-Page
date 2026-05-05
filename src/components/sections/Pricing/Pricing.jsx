import { useState } from 'react'
import FeatureHeader from '../../ui/FeaturesHeader/FeaturesHeader'
import ToggleButton from '../../ui/ToggleButton/ToggleButton'
import Cards from '../../ui/Cards/Cards'
import styles from './Pricing.module.scss'


export default function Pricing() {
  const [billing, setBilling] = useState('monthly')

  const handleToggle = (period) => {
    setBilling(period)
  }

  return (
    <section className={styles.pricing}>
      <div className={`${styles.container} container`}>
        <FeatureHeader type="pricing" />
        <ToggleButton billing={billing} onToggle={handleToggle} />
        <Cards billing={billing} />
      </div>
    </section>
  )
}

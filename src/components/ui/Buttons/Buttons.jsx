import React from 'react'
import styles from './Buttons.module.scss'

export default function Buttons() {
  return (
    <div className={styles['cta-buttons']}>
      <button className="btn btn--primary">Learn More</button>
      <button className="btn btn--secondary">See Pricing</button>
    </div>
  )
}

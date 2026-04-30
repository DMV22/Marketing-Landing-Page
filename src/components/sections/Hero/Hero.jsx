import React from 'react'
import Buttons from '../../ui/Buttons/Buttons'
import picture from '../../../assets/hero.svg'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.message}>
          <div className={styles.content}>
            <h1 className={styles.title}>Well crafted abstract gradient</h1>
            <p className={`${styles.description} text`}>High quality abstract images for your projects, wallpaper and presentations.</p>
          </div>
          <div className={styles.actions}>
            <Buttons variant="hero" />
          </div>
        </div>
        <img className={styles.image} src={picture} alt="Hero illustration" />
      </div>
    </section>
  )
}

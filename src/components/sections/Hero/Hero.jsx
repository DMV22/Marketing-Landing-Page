import React from 'react'
import Buttons from '../../ui/Buttons/Buttons'
import picture from '../../../assets/hero.svg'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__message}>
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>Well crafted abstract gradient</h1>
            <p className={`${styles.hero__description} text`}>High quality abstract images for your projects, wallpaper and presentations.</p>
          </div>
          <div className={styles.hero__actions}>
            <Buttons variant="hero" />
          </div>
        </div>
        <img className={styles.hero__image} src={picture} alt="Hero illustration" />
      </div>
    </section>
  )
}

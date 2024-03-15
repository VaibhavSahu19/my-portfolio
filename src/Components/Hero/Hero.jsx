import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Vaibhav</h1>
            <p className={styles.description}>I am a front-end developer with a passion of Cloud Technology and proficiency in Java. </p>
            <a className={styles.contactBtn} href="https://mail.google.com/mail/?view=cm&fs=1&to=vaibhavsahu200@gmail.com">Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/casual.jpg")} alt="heroImage" />
    </section>
  )
}

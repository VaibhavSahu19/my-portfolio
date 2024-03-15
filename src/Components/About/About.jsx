import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>ABOUT</h2>
        <div className={styles.content}>
            {/* <img src={getImageUrl("about/aboutImage.png")} alt="aboutImage" className={styles.aboutImg}/> */}
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/code.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h1>Front-end Developer</h1>
                        <p>I am a front-end developer with experience in building responsive websites</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cloud.png")} alt="server icon" />
                    <div className={styles.aboutItemText}>
                        <h1>Cloud Engineer</h1>
                        <p>I also have relevant knowledge about cloud technologies and information security</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/light-bulb.png")} alt="ui Icon" />
                    <div className={styles.aboutItemText}>
                        <h1>Problem Solver</h1>
                        <p>I am a good problem solver</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

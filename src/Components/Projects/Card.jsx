import React from 'react'
import styles from "./Projects.module.css"
import { getImageUrl } from "../../utils"

export const Card = (props) => {
    const skillsArr = props.skills.map((skill, id) => {
        return <li className={styles.skill}>{skill}</li>
    })
  return (
    <section className={styles.projectCard}>
        <img src={getImageUrl(`${props.imageSrc}`)} alt={`${props.projectTitle} image`} className={styles.projectImg}/>
        <div className={styles.cardContent}>
            <h3 className={styles.projectTitle}>{props.title}</h3>
            <p className={styles.projectContent}>{props.description}</p>
            <ul className={styles.projectSkills}>
                {skillsArr}
            </ul>
            <div className={styles.linksContainer}>
                {props.demo && <a href={props.demo} className={styles.projectLink} alt="No Demo">Demo</a>}
                <a href={props.source}  className={styles.projectLink} alt="No Demo">Source</a>
            </div>
        </div>
    </section>
  )
}

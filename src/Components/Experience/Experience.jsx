import React from 'react'
import {getImageUrl} from "../../utils"
import styles from "./Experience.module.css"
import skills from "../../data/skills.json"
import history from "../../data/history.json"

//Format of adding experience in json file
// [
//     {
//       "role": "Software Engineer",
//       "organisation": "Google",
//       "startDate": "Sept, 2022",
//       "endDate": "Present",
//       "experiences": ["Worked on Google Maps", "Reduced load times by 50%"],
//       "imageSrc": "history/google.png"
//     },
//   ]
  

export const Experience = (props) => {

    const skillsArr = skills.map((skill, id) =>{
        return <div key={id} className={styles.skill}>
            <div className={styles.skillImgContainer}>
                <img src={getImageUrl(`${skill.imageSrc}`)} alt={skill.title} />
            </div>
            <p>{skill.title}</p>
        </div>
    })

    const historyArr = history.map((historyItem, id) => {
        return <li key={id} className={styles.historyItem}>
            <img src={getImageUrl(`${historyItem.imageSrc}`)} alt={`${historyItem.organisation} logo`} />
            <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                {/* <p>{`${historyItem.role}, ${historyItem.organisation}`}</p> */}
                <ul>
                    {historyItem.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>
                    })}
                </ul>
            </div>
        </li>
    })
  return (
    <section id="experience" className={styles.container}>
        <h2 className={styles.title}>Skills & Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>{skillsArr}</div>
            <ul className={styles.history}>{historyArr}</ul>
        </div>
    </section>
  )
}

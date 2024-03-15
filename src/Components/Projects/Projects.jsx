import React from 'react'
import styles from "./Projects.module.css"
import projects from "../../data/projects.json"
import { Card } from './Card'

export const Projects = () => {
  const projectsArray = projects.map((project, id) => {
    return <Card
      key = {id}
      title = {project.title}
      imageSrc = {project.imageSrc}
      description = {project.description}
      skills = {project.skills}
      demo = {project.demo}
      source = {project.source}
    />
  })
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectList}>{projectsArray}</div>
    </section>
  )
}

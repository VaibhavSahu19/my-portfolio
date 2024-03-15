import React, { useState } from 'react'
import styles from "./App.module.css"
import { Navbar } from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import { About } from './Components/About/About'
import { Experience } from './Components/Experience/Experience'
import { Projects } from './Components/Projects/Projects'
import { Contact } from './Components/Contact/Contact'


export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={styles.App}>
      <Navbar
        isDark = {isDark}
        changeMode = {setIsDark}
        />
      <Hero
        isDark = {isDark}
        changeMode = {setIsDark}
        />
      <About
        isDark = {isDark}
        changeMode = {setIsDark}
        />
      <Experience
        isDark = {isDark}
        changeMode = {setIsDark}
        />
      <Projects
        isDark = {isDark}
        changeMode = {setIsDark}
        />
      <Contact
        isDark = {isDark}
        changeMode = {setIsDark}
        />
    </div>
  )
}

import React from 'react'
import styles from "./Contact.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'


export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
        <div className={styles.contactTitle}>
            <h1>Contact</h1>
            <h3>Feel free to reach out!!</h3>
        </div>
        <div className={styles.contactLinks}>
            <div className={styles.contactLink}>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vaibhavsahu200@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                    vaibhavsahu200@gmail.com
                </a>
            </div>
            <div className={styles.contactLink}>
                <a href="https://www.linkedin.com/in/vaibhavsahu19">
                    <FontAwesomeIcon icon={faLinkedin} />
                    /vaibhavsahu19
                </a>
            </div>
            <div className={styles.contactLink}>
                <a href="https://github.com/VaibhavSahu19">
                    <FontAwesomeIcon icon={faGithub} />
                    /VaibhavSahu19
                </a>
            </div>
        </div>
    </footer>
  )
}

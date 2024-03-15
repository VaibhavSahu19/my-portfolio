import React,{ useState, useEffect } from 'react'
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'


export const Navbar = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <nav className={`${styles.navbar} ${styles.fixed} ${isScrolled && styles.scrolled} ${props.isDark && styles.dark}`}>
        <div className={styles.homeBtn}>
            <a href="/" className={`${styles.title} ${isScrolled && styles.scrolled}`}>
                Vaibhav Sahu
            </a>
        </div>
        <div className={styles.menu}>
            <div onClick={() => {
                setMenuOpen(!menuOpen);
            }} className={`${styles.menuBtn} ${isScrolled && styles.scrolled}`}>
                {<FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />}
            </div>
            <ul onClick={() => {
                setMenuOpen(false);
            }} className={`${styles.menuItems} ${ menuOpen && styles.menuOpen} ${isScrolled && styles.scrolled}`}>
                <li className={`${isScrolled && styles.scrolled}`}>
                    <a href="#about">About</a>
                </li>
                <li className={`${isScrolled && styles.scrolled}`}>
                    <a href="#experience">Experience</a>
                </li>
                <li className={`${isScrolled && styles.scrolled}`}>
                    <a href="#projects">Projects</a>
                </li>
                <li className={`${isScrolled && styles.scrolled}`}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

"use client"
import { ThemeContext } from '../../context/themeContext';
import styles from './darkModeToggle.module.css'
import React, { useCallback, useContext, useEffect, useState } from 'react'

const DarkModeToggle = () => {
    const [toggle , setToggle] = useState(true);

    const {mode , toggleTheme} = useContext(ThemeContext)

    useEffect( ()=>{
        console.log(mode)
    }, [mode])

    const inverseToggle = useCallback(()=>{
        toggleTheme();
        setToggle(!toggle);
    } , [toggle , toggleTheme])

  return (
    <div onClick={inverseToggle}  className={styles.container}>
      <div>🌙</div>
      <div>🌞</div>
      <div className={toggle?`${styles.ball}  ${styles.toggle_dark}`:`${styles.ball}  ${styles.toggle_light}`}></div>
    </div>
  )
}

export default DarkModeToggle

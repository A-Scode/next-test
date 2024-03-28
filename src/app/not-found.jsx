import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const NotFound = ({error , reset}) => {
  return (
    <div className={styles.container} style={{flexDirection:'column'}}>
      <Image src='/error.svg' height={300} width={400} />
      <h2 align="center">Not Found</h2>
    </div>
  )
}

export default NotFound

import Image from 'next/image'
import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>©️NextApp 2024 Mar 21. All rights reserved</div>
      <div className={styles.iconContainer}>
        <Image data-shadow="blue" src="/facebook.png" width={20} height={20} />
        <Image src="/instagram.png" width={20} height={20} />
        <Image src="/github.png" width={20} height={20} />
        <Image src="/linkedin.png" width={20} height={20} />
      </div>
    </div>
  )
}

export default Footer

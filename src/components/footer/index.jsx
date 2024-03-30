import Image from 'next/image'
import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>©️NextApp 2024 Mar 21. All rights reserved</div>
      <div className={styles.iconContainer}>
        <Link href="#">
          <Image data-shadow="blue" alt="facebook" src="/facebook.png" width={20} height={20} />
        </Link>
        <Link target='blank' href="https://www.instagram.com/shouryaraj_singh/">
          <Image alt="instagram" src="/instagram.png" width={20} height={20} />
        </Link>
        <Link target='blank' href="https://github.com/A-Scode">
          <Image alt="github" src="/github.png" width={20} height={20} />
        </Link>
        <Link target='blank' href="https://www.linkedin.com/in/shouryaraj-singh-goud-0b8310228/">
          <Image alt="linkedin" src="/linkedin.png" width={20} height={20} />
        </Link>
      </div>
    </div>
  )
}

export default Footer

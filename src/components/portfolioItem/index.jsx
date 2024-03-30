import Image from 'next/image'
import styles from './portfolioItem.module.css'


import React from 'react'
import Link from 'next/link'

const PortfolioItem = (props) => {
  return (
    <Link href={props.url}>
        <div className={styles.portfolio}>
        <Image alt="design" src={props.image} fill={true} />
        <h4 className={styles.title}>{props.label}</h4>
        </div>
    </Link>
  )
}

export default PortfolioItem

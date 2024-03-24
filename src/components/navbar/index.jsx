"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import Button from '../button'

const links = [
    {
        id : 1,
        name : "Dashboard",
        route : '/dashboard',
    },
    {
        id : 5,
        name : "Portfolio",
        route : '/portfolio',
    },
    {
        id : 2,
        name : "Blog",
        route : '/blog',
    },
    {
        id : 3,
        name : "About",
        route : '/about',
    },
    {
        id : 4,
        name : "Contact",
        route : '/contact',
    },
]

const Navbar = () => {
    console.log("this is SSR")
    console.log(styles.mainContainer)
  return (
    <div className={styles.mainContainer}>
      <Link href={'/'}><h2> NextApp</h2> </Link>
      <div>
        <li>
            {links.map(item=><ul key={item.id}><Link href={item.route}>{item.name}</Link></ul>)}
            <ul><Button onClick={()=>console.log("logout")} url="/" >Logout</Button></ul>
        </li>
      </div>
    </div>
  )
}

export default Navbar

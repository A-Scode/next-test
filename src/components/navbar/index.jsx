"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import Button from '../button'
import DarkModeToggle from '../darkModeToggle'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

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

  const session = useSession();

  return (
    <div className={styles.mainContainer}>
      <Link href={'/'}><h2> NextApp</h2> </Link>
      <div>
        <li>
            <ul><DarkModeToggle /></ul>
            {links.map(item=><ul key={item.id}><Link href={item.route}>{item.name}</Link></ul>)}
            {(session.status==='authenticated')?<ul><Button className={styles.button}
            onClick={signOut} >
              <Image width={30} height={30} src={
                session.data.user.image 
                || 
                `https://api.dicebear.com/8.x/fun-emoji/png?seed=${session.data.user.email}`
                } />
              Logout
              </Button></ul>:
            <ul>
              <Button className={styles.button} 
              disabled={session.status==='loading'} url="/dashboard/login" >
                Login
                </Button>
              </ul>}
        </li>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button'
import Link from 'next/link'

const Register = () => {
  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <form className={styles.form}>
        <input type="text" placeholder="Username" id="username" />
        <input type="email" placeholder="Email" id="email" />
        <input type="password" placeholder="Password" id="password" />
        <Button url="#" type="submit" className={styles.buttonClass}>
          Register
        </Button>

        <p>Existing User? <Link href="/dashboard/login">Login</Link></p>

      </form>

      <hr width="50%" />
    </div>
  )
}

export default Register

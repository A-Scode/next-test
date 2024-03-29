"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import Button from '@/components/button'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'

const Login = () => {
  const [err , setErr ] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    console.log(e);
  }
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form name="register" onSubmit={handleSubmit} className={styles.form}>
        <input  name="register" type="email" placeholder="Email" id="email" />
        <input  name="register" type="password" placeholder="Password" id="password" />
      {
        err && (
          <div className={styles.error}>
            <h3 align="center">{err}</h3>
          </div>
        )
      }
        <Button  name="register" type="submit" className={styles.buttonClass}>
          Login
        </Button>

        <p>New User? <Link href="/dashboard/register">Register</Link></p>

      </form>

      <hr width="50%" />
      <Button className={styles.googleButton} onClick={()=>signIn("google")}>
        <Image src="/google.svg" height={30} width={30} />
        Login with Google
        </Button>

    </div>
  )
}

export default Login

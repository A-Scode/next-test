"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import Button from '@/components/button'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Spinner from '@/components/spinner'

const Login = () => {
  const [err , setErr ] = useState("");
  const router = useRouter();
  const session = useSession();

  async function handleSubmit(e){
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;

    signIn("credentials" , {email , password})

  }
  if ( session.status === 'loading') return (<Spinner />)

  if ( session.status === 'authenticated' ) return router.push('/dashboard')



  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form name="login" onSubmit={handleSubmit} className={styles.form}>
        <input  name="login" type="email" placeholder="Email" id="email" />
        <input  name="login" type="password" placeholder="Password" id="password" />
      {
        err && (
          <div className={styles.error}>
            <h3 align="center">{err}</h3>
          </div>
        )
      }
        <Button  name="login" type="submit" className={styles.buttonClass}>
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

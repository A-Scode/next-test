"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import Button from '@/components/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Error from 'next/error'

const Register = () => {

  const [err , setErr] = useState("");
  const router = useRouter();

  async function handleSubmit(e){
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try{
      const msg  = await fetch(`/api/register` , {
        method : "POST",
        headers : {
          "Content" : "application/json"
        },
        body : JSON.stringify({
          name , email , password
        })
      })
      console.log(msg)

      if (msg.status === 500){
        let error = await msg.json()
        setErr(error.error)
      }

      return msg.ok && router.push("/dashboard/login?success=Account has been created")

    }catch(e){
      setErr(e)
    }

  }
  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <form name="register" onSubmit={handleSubmit} className={styles.form}>
        <input  name="register" type="text" placeholder="Username" id="username" />
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
          Register
        </Button>

        <p>Existing User? <Link href="/dashboard/login">Login</Link></p>

      </form>

      <hr width="50%" />
    </div>
  )
}

export default Register

"use client"
import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button'
import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <div>
      <Button url="#" onClick={()=>signIn("google")}>Login with Google</Button>
    </div>
  )
}

export default Login

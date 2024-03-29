"use client"
import React from 'react'
import styles from './page.module.css'
import { useSession } from 'next-auth/react'
import Spinner from '@/components/spinner'
import Button from '@/components/button'
import { useRouter } from 'next/navigation'


const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") return(
    <Spinner />
  )
  if (session.status === "unauthenticated") return router.push('/dashboard/login');


  return (
    <div>
    <Button url="/dashboard/login" style={{backgroundColor : "var(--background-green)" , color:"var(--font-color-white)"}}>
      Login
    </Button>
    <Button url="/dashboard/register" style={{backgroundColor : "var(--background-green)" , color:"var(--font-color-white)"}}>
      Register
    </Button>
    </div>
  )
}

export default Dashboard

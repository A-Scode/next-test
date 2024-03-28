"use client"
import React from 'react'
import styles from './page.module.css'
import { useSession } from 'next-auth/react'
import Spinner from '@/components/spinner'


const Dashboard = () => {
  const session = useSession()
  console.log(session)


  if (session.status === "loading") return(
    <Spinner />
  )


  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard

import React from 'react'
import styles from './page.module.css'
import Spinner from '@/components/spinner'
import Button from '@/components/button'
import Image from 'next/image'

export const metadata = {
  title : "Contact Us",
  description : "This is contact page for NextApp"
}

const Contanct = () => {
  return (
    <div className={styles.container}>
      <h1 align="center">Let's Keep In Touch</h1>
      <div style={{display:'flex' ,alignItems:"center"}}>
      <div className={styles.image}>
        <Image src="/pickachu_phone.svg" fill={true} />
      </div>
      <div className={styles.form}>
        <form className={styles.contact}>
          <input type="text"  id="name" placeholder='name' />
          <input type="email"  id="email" placeholder='email' />
          <textarea id="message" cols="30" rows="10" placeholder='message'></textarea>
        <Button style={{backgroundColor : 'var(--background-green)' , color:'white'}} url="#" >Submit</Button>
          
        </form>
      </div>
      </div>
    </div>
  )
}

export default Contanct

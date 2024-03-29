import React from 'react'
import styles from './page.module.css'

const Register = () => {
  return (
    <div style={styles.container}>
      <form>
        <input type="text" name="username" id="username" />
        <input type="email" name="email" id="email" />
        <input type="password" name="password" id="password" />
      </form>
    </div>
  )
}

export default Register

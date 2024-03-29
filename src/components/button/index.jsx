import Link from 'next/link'
import styles from './button.module.css'

const Button = (props) => {
  return (
    <Link href = {props.url} >
    <button  {...props} className={`${styles.button} ${props.className}`}>{props.children}</button>
    </Link>
  )
}

export default Button
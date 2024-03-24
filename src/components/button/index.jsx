import Link from 'next/link'
import styles from './button.module.css'

const Button = (props) => {
  return (
    <Link href = {props.url} >
    <button className={[styles.button]} {...props} >{props.children}</button>
    </Link>
  )
}

export default Button
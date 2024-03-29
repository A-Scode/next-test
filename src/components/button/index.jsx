import Link from 'next/link'
import styles from './button.module.css'

const Button = (props) => {
  return (
    <>
    {props.url?(
      <Link href={props.url}>
        <button  {...props} className={`${styles.button} ${props.className}`}>{props.children}</button>
        </Link>
        ):(
          <button  {...props} className={`${styles.button} ${props.className}`}>{props.children}</button>
    )
  }
  </>

  )
}

export default Button
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button'

const data = [
  {
    heading : "Creative Portfolio",
    img : "https://images.pexels.com/photos/2442888/pexels-photo-2442888.jpeg?auto=compress&cs=tinysrgb&w=600",
    url : "#",
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eveniet nostrum expedita aliquam praesentium doloremque modi pariatur! Inventore, sunt! Quisquam voluptatum, ea nulla excepturi autem, quam ad aliquid voluptate corporis maiores facilis quod blanditiis odit adipisci inventore veritatis fugiat, voluptas sed! Repellendus atque a asperiores pariatur corporis minima iure eum?",
  },
  {
    heading : "Ashtounishing Web Design",
    img : "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
    url : "#",
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eveniet nostrum expedita aliquam praesentium doloremque modi pariatur! Inventore, sunt! Quisquam voluptatum, ea nulla excepturi autem, quam ad aliquid voluptate corporis maiores facilis quod blanditiis odit adipisci inventore veritatis fugiat, voluptas sed! Repellendus atque a asperiores pariatur corporis minima iure eum?",
  },
  {
    heading : "Outstanding Arts",
    img : "https://images.pexels.com/photos/10474131/pexels-photo-10474131.jpeg?auto=compress&cs=tinysrgb&w=600",
    url : "#",
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eveniet nostrum expedita aliquam praesentium doloremque modi pariatur! Inventore, sunt! Quisquam voluptatum, ea nulla excepturi autem, quam ad aliquid voluptate corporis maiores facilis quod blanditiis odit adipisci inventore veritatis fugiat, voluptas sed! Repellendus atque a asperiores pariatur corporis minima iure eum?",
  },
]

const Category = ({params}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Our Works</h1>
        <h3>{params.category}</h3>
      </div>
      {data.map((item , index)=><CategoryItem key={index} {...item} />)}
    </div>
  )
}

const CategoryItem = (props)=>{
  let first = (<
    div className={styles.first}>
        <h3>{props.heading}</h3>
        <p>{props.description}</p>
        <Button style={{backgroundColor : 'var(--background-green)' , color:'white'}} url={props.url} >See More</Button>
      </div> 
      )
  let second = (
      <div className={styles.second}>
        <Image fill src={props.img} />
      </div>
  )
  return (
    <div className={styles.itemContainer}>
      
      {first}
      {second}
    </div>
  )
}

export default Category

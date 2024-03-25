import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button'
import { data } from './data'
import { notFound } from 'next/navigation'

const getData = (category)=>{
  if (data[category]) return data[category];
  else return notFound();
}


const Category = ({params}) => {
  const data = getData(params.category);
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

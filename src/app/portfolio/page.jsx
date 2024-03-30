import React from 'react'
import styles from './page.module.css'
import PortfolioItem from '@/components/portfolioItem'

const gallery = [
  {
    id : '1',
    url : "/portfolio/illustration",
    image : "https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg",
    label : "ILLUSTRATION",
  },
  {
    id : '2',
    url : "/portfolio/website",
    image : "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    label : "WEBSITE",
  },
  {
    id : '3',
    url : "/portfolio/application",
    image : "https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    label : "APPLICATION",
  },
]


const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1>Our Works</h1>
      <div className={styles.galleryConatiner}>
        <h3>Choose a gallery</h3>
        <div className={styles.gallery}>
          {gallery.map((item ,index)=>(

            <PortfolioItem key={index} url={item.url} image={item.image} label={item.label} />
          ))

          }
        </div>
      </div>
    </div>
  )
}

export default Portfolio

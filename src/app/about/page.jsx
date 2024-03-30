import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button'

export const metadata = {
  title : "About Us",
  description : "About page of NextApp it give information about us"
}

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageConatiner}>
        <Image alt="bayleaf" src="/bayleaf.svg" fill={true} />
        <div className={styles.imgHeading}>
          <h1>Digital Storytellers</h1>
          <h3>Handcrafting award winning digital experiences</h3>
        </div>
      </div>
      <div className={styles.parent}>
        <div className={styles.child1}>
          <h1>Who Are We?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolore velit excepturi voluptas nesciunt error laborum officia veniam recusandae modi ad, nobis suscipit, quod accusamus exercitationem harum tempora tempore totam consequuntur animi. Deserunt libero facere sed, consequuntur sint optio, assumenda neque reiciendis facilis velit praesentium repellendus aliquid ipsum vitae porro illo? Et adipisci maxime repellendus fugiat modi alias in! Molestiae accusamus facere sequi magni? Earum esse ipsam quod alias vitae, doloribus, sed, magni corrupti aliquam pariatur deserunt sunt exercitationem nesciunt! Suscipit illo velit labore totam deleniti molestias ab. Illo laudantium dolorum esse expedita impedit enim commodi sapiente ut est quod.
          </p>
        </div>
        <div className={styles.child2}>
          <h1>What We Do?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, molestias delectus. Accusamus velit explicabo quae alias, doloribus voluptates quisquam nam sint blanditiis voluptatibus ratione excepturi, cumque id? Facere modi quasi eius a perferendis aliquam nisi, laudantium ipsum doloremque eveniet incidunt beatae nemo cupiditate aperiam expedita, facilis molestias consequatur. Id quidem, neque molestiae dolorem sint maxime temporibus placeat sed laboriosam consectetur officiis ratione vero magnam? Laudantium voluptas aut, dolorum quos necessitatibus, delectus sit nulla, corrupti minus recusandae assumenda architecto debitis aliquam adipisci. A cumque amet incidunt odio fuga, omnis atque rerum explicabo reiciendis at quas cupiditate exercitationem impedit est, laboriosam vel.
          </p>
          <Button url="/contact" style={{backgroundColor : 'var(--background-green)' , color:'white' , marginTop:30}} >Contact</Button>
        </div>
      </div>
    </div>
  )
}

export default About

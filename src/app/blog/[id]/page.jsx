import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const data = {
  heading : "Effect of blockchain on our lives",
  username : "Shouryaraj Singh",
  profile_photo : 'https://api.dicebear.com/8.x/fun-emoji/png?backgroundType=gradientLinear',
  image : 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident dignissimos fugiat autem fuga quod sequi. Accusantium quisquam itaque laudantium quidem numquam possimus minima asperiores commodi veniam, quis eligendi delectus explicabo.",
  content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ut nobis cum aliquam nostrum laborum deleniti iste fuga est eius sunt nulla distinctio delectus, dolorum aspernatur molestiae quasi eligendi, minus ducimus blanditiis aperiam sit ea laboriosam labore. Non enim ipsam temporibus numquam fugiat eligendi voluptates, laudantium perspiciatis corporis, maxime saepe vel! Eum aliquam, possimus maxime, eligendi rem animi minima harum sunt qui earum facilis voluptas similique recusandae placeat? Facere laborum cumque dolores debitis, similique corrupti explicabo! In enim adipisci aliquam, libero quibusdam quasi eligendi iusto consectetur culpa, sunt unde, voluptatem aspernatur obcaecati perferendis magni asperiores minima praesentium velit eos cum?",

}

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.metadata}>
        <div className={styles.info}>
          <h1>{data.heading}</h1>
          <p>{data.description}</p>
          <div className={styles.user}>
            <Image src={data.profile_photo} width={50} height={50} />
            <h4>{data.username}</h4>
          </div>
        </div>
        <div className={styles.image}>
          <Image src={data.image} fill />
        </div>
      </div>
      <p>
        {data.content}
      </p>
    </div>
  )
}

export default BlogPost

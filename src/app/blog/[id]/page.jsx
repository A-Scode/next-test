import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

const data = {
  heading : "Effect of blockchain on our lives",
  username : "Shouryaraj Singh",
  profile_photo : 'https://api.dicebear.com/8.x/fun-emoji/png?backgroundType=gradientLinear',
  image : 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident dignissimos fugiat autem fuga quod sequi. Accusantium quisquam itaque laudantium quidem numquam possimus minima asperiores commodi veniam, quis eligendi delectus explicabo.",
  content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ut nobis cum aliquam nostrum laborum deleniti iste fuga est eius sunt nulla distinctio delectus, dolorum aspernatur molestiae quasi eligendi, minus ducimus blanditiis aperiam sit ea laboriosam labore. Non enim ipsam temporibus numquam fugiat eligendi voluptates, laudantium perspiciatis corporis, maxime saepe vel! Eum aliquam, possimus maxime, eligendi rem animi minima harum sunt qui earum facilis voluptas similique recusandae placeat? Facere laborum cumque dolores debitis, similique corrupti explicabo! In enim adipisci aliquam, libero quibusdam quasi eligendi iusto consectetur culpa, sunt unde, voluptatem aspernatur obcaecati perferendis magni asperiores minima praesentium velit eos cum?",

}
const getData = async(id)=>{
  const data = await fetch(`${process.env.API_URL}/posts/${id}` , {next:{
    revalidate : 10
  }})

  if ( !data.ok) return notFound()

  return data.json()
}

export const generateMetadata = async ({ params })=>{
  const data  = await getData(params.id);

  return {
    title : data.heading,
    description : data.description,
  }
}

const BlogPost = async ({params}) => {
  let {id} = params;
  const data = await getData(id);
  return (
    <div className={styles.container}>
      <div className={styles.metadata}>
        <div className={styles.info}>
          <h1>{data.heading}</h1>
          <p>{data.description}</p>
          <div className={styles.user}>
            <Image alt="profile" src={
              `https://api.dicebear.com/8.x/fun-emoji/png?seed=${data.user.email}`
            } width={50} height={50} />
            <h4>{data.user.name}</h4>
          </div>
        </div>
        <div className={styles.image}>
          <Image alt="some" src={data.image} fill />
        </div>
      </div>
      <p>
        {data.content}
      </p>
    </div>
  )
}

export default BlogPost

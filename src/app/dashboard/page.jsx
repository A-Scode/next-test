"use client"
import React from 'react'
import styles from './page.module.css'
import { useSession } from 'next-auth/react'
import Spinner from '@/components/spinner'
import Button from '@/components/button'
import { useRouter } from 'next/navigation'


const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  console.log(session)

  async function handleSubmit(e){
    e.preventDefault();
    console.log(e);

    let heading = e.target[0].value;
    let description = e.target[1].value;
    let image = e.target[2].value;
    let content = e.target[3].value;
    let user = {
      name : session.data.user.name,
      email : session.data.user.email,
    };

    try{
      await fetch(`/api/posts` , {
        method : "POST",
        body : JSON.stringify({
          heading , description , image , content, user
        })
      })
      
    }catch(err){
      console.log(err)
    }
    

  }


  if (session.status === "loading") return(
    <Spinner />
  )
  if (session.status === "unauthenticated") return router.push('/dashboard/login');


  return (
    <div className={styles.container}>
      <div className={styles.userPosts}>

      </div>
      <div className={styles.createPost}>
        <h1>Create New Post</h1>
        <form name='post' className={styles.post} onSubmit={handleSubmit}>
          <input name='post'  placeholder='Title' type="text" />
          <input name='post'  placeholder='Description' type="text" />
          <input name='post'  placeholder='Image URL' type="url" />
          <textarea name='post'  placeholder='Content' >
          </textarea>
          <Button  name='post' type="submit" className={styles.postButton}>Post</Button>
        </form>
      </div>
    </div>
  )
}


const UserPost = ()=>{
  return (
    <div className={styles.postContainer}>
      <div className={styles.image}>
        <Image fill  />
      </div>
      <div className={styles.info}>
        <div className={styles.heading}></div>
        <div className={styles.description}></div>
        <div className={styles.delete}></div>
      </div>
    </div>
  )
}

export default Dashboard

"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { useSession } from 'next-auth/react'
import Spinner from '@/components/spinner'
import Button from '@/components/button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

async function getUserPosts(email){
  let posts = await fetch(`/api/posts?email=${email}` , {
    method :'GET',
    next : 'no-store'
  })
  return posts
}

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const [err , setErr] = useState("");
  const [info , setInfo] = useState("");
  const [userPosts , setUserPosts] = useState([]);

  useEffect(()=>{
    getUserPosts(session?.data?.user?.email).then(async(res)=>{
      let value = await res.json();
      setUserPosts(value)
    })
  } ,[session?.data?.user])


  async function handleSubmit(e){
    setInfo("");
    setErr("");
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
      fetch(`/api/posts` , {
        method : "POST",
        body : JSON.stringify({
          heading , description , image , content, user
        })
      }).then(()=>{
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        e.target[3].value = "";
        setInfo("Successfully Posted")
      }).catch((e)=>{
        setErr("Some Error Occured");
        console.log(e)
      })
      
    }catch(err){
      setErr("Some Error Occured");
    }
    
  }


  if (session.status === "loading") return(
    <Spinner />
  )
  if (session.status === "unauthenticated") return router.push('/dashboard/login');


  return (
    <div className={styles.container}>
      <div className={styles.userPosts}>
        <h1>Your Posts</h1>
        {userPosts.length ? (
          userPosts.map((item) => (
            <UserPost key={item._id}
            {...item}
             />
          ))
        ) : (
          <div className={styles.noPost}>
            <h1 align="center">You Haven't Published any Posts yet</h1>
            <Image priority alt="no-post" width={200} height={200} src="/no-post.svg" />
          </div>
        )}
      </div>
      <div className={styles.createPost}>
        <h1>Create New Post</h1>
        <form name="post" className={styles.post} onSubmit={handleSubmit}>
          <input required name="post" placeholder="Title" type="text" />
          <input required name="post" placeholder="Description" type="text" />
          <input required name="post" placeholder="Image URL" type="url" />
          <textarea required name="post" placeholder="Content"></textarea>
          <Button name="post" type="submit" className={styles.postButton}>
            Post
          </Button>
          {err && (
            <div className={styles.error}>
              <h3 align="center">{err}</h3>
            </div>
          )}
          {info && (
            <div className={styles.info}>
              <h3 align="center">{info}</h3>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}


const UserPost = (props)=>{
  return (
    <div className={styles.postContainer}>
      <div className={styles.image}>
        <Image alt="blog" fill src={props.image} />
      </div>
      <div className={styles.metadata}>
        <div className={styles.heading}>
          <h3>{props.heading}</h3>
        </div>
        <div className={styles.description}>
          {props.description}
        </div>
        <Button className={styles.delete} >
          Delete
        </Button>
      </div>
    </div>
  )
}

export default Dashboard

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
// mock data
// const blogs = [
//   {
//     heading: "How AI is taking over the World",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi similique aperiam voluptatem natus nulla quis quod odit rem eos impedit voluptate possimus ullam, veritatis neque sint quas totam quidem ipsum incidunt nobis. Consequatur accusamus corporis obcaecati porro! Molestiae ratione nulla voluptates illum quaerat possimus doloribus, aliquid exercitationem in? Nam, dolor.",
//     image: "https://images.pexels.com/photos/955389/pexels-photo-955389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     url : "/blog/someID"
//   },
//   {
//     heading: "How AI is taking over the World",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi similique aperiam voluptatem natus nulla quis quod odit rem eos impedit voluptate possimus ullam, veritatis neque sint quas totam quidem ipsum incidunt nobis. Consequatur accusamus corporis obcaecati porro! Molestiae ratione nulla voluptates illum quaerat possimus doloribus, aliquid exercitationem in? Nam, dolor.",
//     image: "https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     url : "/blog/someID"
//   },
//   {
//     heading: "How AI is taking over the World",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi similique aperiam voluptatem natus nulla quis quod odit rem eos impedit voluptate possimus ullam, veritatis neque sint quas totam quidem ipsum incidunt nobis. Consequatur accusamus corporis obcaecati porro! Molestiae ratione nulla voluptates illum quaerat possimus doloribus, aliquid exercitationem in? Nam, dolor.",
//     image: "https://images.pexels.com/photos/209726/pexels-photo-209726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     url : "/blog/someID"
//   },
//   {
//     heading: "How AI is taking over the World",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi similique aperiam voluptatem natus nulla quis quod odit rem eos impedit voluptate possimus ullam, veritatis neque sint quas totam quidem ipsum incidunt nobis. Consequatur accusamus corporis obcaecati porro! Molestiae ratione nulla voluptates illum quaerat possimus doloribus, aliquid exercitationem in? Nam, dolor.",
//     image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     url : "/blog/someID"
//   },
//   {
//     heading: "How AI is taking over the World",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi similique aperiam voluptatem natus nulla quis quod odit rem eos impedit voluptate possimus ullam, veritatis neque sint quas totam quidem ipsum incidunt nobis. Consequatur accusamus corporis obcaecati porro! Molestiae ratione nulla voluptates illum quaerat possimus doloribus, aliquid exercitationem in? Nam, dolor.",
//     image: "https://images.pexels.com/photos/243694/pexels-photo-243694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     url : "/blog/someID"
//   },
// ];

const getBlogs = async()=> {
  // default static fetch
  const data = await fetch(`${process.env.API_URL}/posts`,
  {
    cache:'no-store'
  });
  console.log(data.body)
  return data.json();


}

const Blog = async () => {
  const data = await getBlogs();
  console.log(data)
  return (
    <div className={styles.container}>
      <div className={styles.blogsContainer}>
        {data.map((item,index)=><BlogItem {...item} key={index} />)}
      </div>
    </div>
  );
};

const BlogItem = (props) => {
  return (
    <Link href={`/blog/${props._id}`}>
      <div className={styles.blogData}>
        <div className={styles.image}>
          <Image src={props.image} fill />
        </div>
        <div className={styles.content}>
          <h3>{props.heading}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Blog;

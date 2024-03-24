import Image from "next/image";
import styles from "./page.module.css";
import pickachu from '../../public/pickachu.svg'
import Button from "@/components/button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.largeTextContainer}>
        <h1 className="heading">Better Design for your digital products</h1>
        <p className="subtext">
          Turning your ideas into Reality.We bring teams together for the global tech industry.
        </p>
        <Button style={{backgroundColor : 'var(--background-green)' , color:'white'}} url="/portfolio" >See Our Works</Button>
      </div>
      <div className={styles.imgContainer}>
        <Image fill={true} src={pickachu} />
      </div>
    </div>
  );
}

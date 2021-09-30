// import Head from 'next/head'
// import Image from 'next/image'
import styles from "../styles/Home.module.css";
import Link from "next/Link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit beatae
        qui provident accusamus est labore sed accusantium nesciunt, numquam ex
        repellendus exercitationem sequi quisquam possimus quo autem non amet!
        Voluptatibus?
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninjas list</a>
      </Link>
    </div>
  );
}

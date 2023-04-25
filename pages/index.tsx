import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeUrls from "../components/homeUrls";
import HeadComponent from "../components/Head";
import Image from "next/image"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadComponent title={'Learn Nextjs'} metaData={'Learn nextjs by tutorials'} />
      <Image layout='responsive' height={1589} width={2400} src='/bg.jpg'></Image>
      <main className={styles.main}>
      </main>
      <p className={styles.bc1}>Test Font 1</p>
      <p className={styles.bc2}>Test Font 2</p>
      <p className={styles.bc3}>Test Font 3</p>
      <p className={styles.bc4}>Test Font 4</p>
    </div>
  )
}

export default Home

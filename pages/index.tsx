import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Typography from "@mui/material/Typography";
import HeadComponent from "../components/Head";
import Image from "next/image"
import { HomeSearchForm } from '../components/HomeSearchForm';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadComponent title={'Paula and Ashley Homes'} metaData={'Paula and Ashley Homes'} />
      <div>
      <Image layout='responsive' height={306} width={1078} src='/PA house logo.png'></Image>
      </div>
      <div>
      <Image layout='responsive' height={1589} width={2400} src='/bg.jpg'></Image>
      </div>
      <main className={styles.main}>
      </main>
      <p className={styles.bc1}>Test Font 1 and Property Search Form Placeholder</p>
      <HomeSearchForm></HomeSearchForm>
      <Typography className={styles.p1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
      <div style={{padding: '0 4rem'}}>
      <Image layout='responsive' height={5184} width={3456} src='/group-1.JPG'></Image>
      </div>
      <p className={styles.bc2}>Test Font 2 and Meet Paula / Ashley Placeholder</p>
      <p className={styles.bc3}>Test Font 3 Fatured Property Placeholder</p>
      <p className={styles.bc4}>Test Font 4 Social Media Callout Placeholder</p>
      <p className={styles.bc4}>Testimonials Placeholder</p>
      <p className={styles.bc4}>Message Form / Apt Request Placeholder</p>
      <p className={styles.bc4}>Footer Links and Contact Info</p>
    </div>
  )
}

export default Home

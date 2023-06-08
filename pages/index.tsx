import type { NextPage } from 'next'
import Image from "next/image"

import { motion } from 'framer-motion';

import styles from '../styles/Home.module.css'
import AboutContent from '../components/AboutContent';
import ContactForm from "../components/ContactForm";
import HeadComponent from "../components/Head";
import { HomeSearchForm } from '../components/HomeSearchForm';

import { Typography, Stack, Grid, Link, ImageList, ImageListItem, Paper, Icon, Box } from "@mui/material";
import { Call, Facebook, Fax, Google, Instagram, Mail } from '@mui/icons-material';

const itemData = [
  {
    img: '/insta1.png',
    title: ''
  },
  {
    img: '/insta2.png',
    title: ''
  },
  {
    img: '/insta3.png',
    title: ''
  },
  {
    img: '/insta4.png',
    title: ''
  },
  {
    img: '/insta1.png',
    title: ''
  },
  {
    img: '/insta2.png',
    title: ''
  }
]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadComponent title={'Test Site'} metaData={'Test Site'} />
      <div className={styles.headerImageContainer}>
      <Image layout='responsive' height={1589} width={2400} src='/Michael Lewis Postcard.jpg'></Image>
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .4
          }
        }
      }}>
        <div className={styles.companyTitle}>Company Title</div>
      </motion.div>
      <div className={styles.slogan}>Landing Page Slogan</div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <Image layout='fixed' height={515} width={422} src='/logo.png'></Image>
      </div>
      <main className={styles.main}>
      </main>
      {/* <HomeSearchForm></HomeSearchForm> */}
      <br/>
      <AboutContent></AboutContent>
      <ContactForm></ContactForm>
      <Paper sx={{backgroundColor: 'grey'}}>
      <Grid container sx={{justifyContent: 'center'}}>
        <Grid className={styles.logoContainer} item key={'logo'} xs={12} md={12} lg={4} padding={5}>
          <Image src='/logo.png' layout='fixed' height={240} width={200}></Image>
        </Grid>
        <Grid className={styles.link1} item key={'link1'} xs={12} md={6} lg={4} padding={5}>
        <Typography className={styles.text1}>
          {/* <Link href='https://www.instagram.com/'> */}
          <Call /> Office: (111)-111-1111
          {/* </Link> */}
          </Typography>
          <Typography className={styles.text1}>
          {/* <Link href='https://www.instagram.com/'> */}
          <Call /> Cell: (111)-111-1111
          {/* </Link> */}
          </Typography>
          <Typography className={styles.text1}>
          {/* <Link href='https://www.instagram.com/'> */}
          <Fax /> (111)-111-1111
          {/* </Link> */}
          </Typography>
        </Grid>
        <Grid className={styles.link1} item key={'link2'} xs={12} md={6} lg={4} padding={5}>
          <Typography className={styles.text1}>
          <Link href='mailto:test@email.com'>
          <Mail />test@email.com
          </Link>
          </Typography>
          <Typography className={styles.text1}>
          <Link href='https://www.facebook.com/'>
          <Facebook />Follow us on Facebook!
          </Link>
          </Typography>
          <Typography className={styles.text1}>
          <Link href='https://www.instagram.com/'>
          <Instagram />Follow us on Instagram!
          </Link>
          </Typography>
        </Grid>
        <Typography className={styles.text1}>
            {/* <Link href='https://goo.gl/maps/QN7E6Eh1g5xYhXd48?coh=178571&entry=tt'> */}
              <Google/>We would love to hear your feedback, write a review!
            {/* </Link> */}
          <br/>Test Address, Decatur, GA 30030
        </Typography>
      </Grid>
      </Paper>
    </div>
  )
}

export default Home

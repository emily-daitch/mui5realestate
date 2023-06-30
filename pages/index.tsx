import type { NextPage } from 'next'
import Image from "next/image"

import { motion } from 'framer-motion';

import styles from '../styles/Home.module.css'
import AboutContent from '../components/AboutContent';
import ContactForm from "../components/ContactForm";
import HeadComponent from "../components/Head";
import { HomeSearchForm } from '../components/HomeSearchForm';
import { sloganStyles, titleStyles, logoStyles } from '../components/HomeContentStyles';

import { Typography, Stack, Grid, Link, ImageList, ImageListItem, Paper, Icon, Box, Container, Theme } from "@mui/material";
import { Call, Facebook, Fax, Google, Instagram, Mail } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

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
  const theme = useTheme();
  const sloganStyle = sloganStyles(theme);
  const titleStyle = titleStyles(theme);
  const logoStyle = logoStyles(theme);

  return (
    <div className={styles.container}>
      <HeadComponent title={'Test Site'} metaData={'Test Site'} />
      <div className={styles.headerImageContainer}>
      <Container sx={{height: {xs: '70px', md: '0px'}}}></Container>
      <Image alt="background photo" layout='responsive' height={1589} width={2400} src='/Michael Lewis Postcard.jpg'></Image>
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
        <Box sx={titleStyle.root}>Company Title</Box>
      </motion.div>
      <Box sx={sloganStyle.root}>Landing Page Slogan</Box>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <Image alt="logo" layout='fixed' height={515} width={422} src='/logo.png'></Image>
      </div>
      <main className={styles.main}>
      </main>
      <Typography className={styles.text1}>This site currently uses a test server for MLS data. It is limited, and not all zip codes will return results.<br/>
       You may use Property Type: House, Zip: 78704, Beds/Baths: 1+, Min Price: $100000, Max Price: 500000 to get some good results.</Typography>
      <HomeSearchForm></HomeSearchForm>
      <br/>
      <AboutContent></AboutContent>
      <ContactForm></ContactForm>
      <Paper sx={{backgroundColor: 'grey'}}>
      <Grid container sx={{justifyContent: 'center'}}>
        <Grid sx={logoStyle.root} item key={'logo'} xs={12} md={12} lg={4} padding={5}>
          <Image alt="logo" src='/logo.png' layout='fixed' height={240} width={200}></Image>
        </Grid>
        <Grid className={styles.link1} item key={'link1'} xs={12} md={6} lg={4} padding={5}>
        <Typography className={styles.text1}>
          {/* <Link href='https://www.instagram.com/'> */}
          <Call /> Office:<br/> (111)-111-1111
          {/* </Link> */}
          </Typography>
          <Typography className={styles.text1}>
          {/* <Link href='https://www.instagram.com/'> */}
          <Call /> Cell:<br/> (111)-111-1111
          {/* </Link> */}
          </Typography>
          <Typography className={styles.text1}>
          {/* <Link href='https://www.instagram.com/'> */}
          <Fax /> Fax:<br/> (111)-111-1111
          {/* </Link> */}
          </Typography>
        </Grid>
        <Grid className={styles.link1} item key={'link2'} xs={12} md={6} lg={4} padding={5}>
          <Typography className={styles.text1}>
          <Link href='mailto:test@email.com'>
          <Mail /><br/>test@email.com
          </Link>
          </Typography>
          <Typography className={styles.text1}>
          <Link href='https://www.facebook.com/'>
          <Facebook /><br/>Follow us on Facebook!
          </Link>
          </Typography>
          <Typography className={styles.text1}>
          <Link href='https://www.instagram.com/'>
          <Instagram /><br/>Follow us on Instagram!
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

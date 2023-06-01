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
      <Image layout='responsive' height={1589} width={2400} src='/bg.jpg'></Image>
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
        <div className={styles.centeredSlogan}>Company Title</div>
      </motion.div>
      <div className={styles.construction}>Landing Page Slogan</div>
      </div>
      <div>
      <Image layout='responsive' height={612} width={510} src='/logo.jpg'></Image>
      </div>
      <main className={styles.main}>
      </main>
      {/* <HomeSearchForm></HomeSearchForm> */}
      <br/>
      <AboutContent></AboutContent>
      <p className={styles.text1}>Follow us on Instagram! </p>
      <Typography className={styles.text1}>
            <Link href='https://www.instagram.com/'>
              @example
            </Link>
      </Typography>
      {/* <Grid container sx={{justifyContent: 'center'}}>
        <Grid item key={'pic'} xs={10} md={8} lg={6} padding={'4 4'} sx={{
                flex: "1",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center"
            }}>
          <ImageList sx={{ width: '25rem', height: '40rem' }} rowHeight={'auto'}>
            {itemData.map((item) => (
              <ImageListItem key={item.img} sx={{border: 5, borderColor: 'grey'}}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid> */}
      <Grid container sx={{justifyContent: 'center'}}>
        {/* <Grid item key={'testimonial1'} xs={12} md={12} lg={12} padding={5}> */}
          <Typography className={styles.text1}>
              <q>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?<br/><br/> [D]Quis autem vel eum i[r]ure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </q> - Emily
          </Typography>
          {/* <Typography className={styles.text1}>
              <q>My fiance and I cannot say enough good things about Paula!
As first time homebuyers we asked a lot of questions,

and she always made herself available to us and was extremely helpful.

She made the process so smooth and stress-free,
I don&apos;t know what we would have done without her!

We will be recommending Paula to others looking to buy homes as well.</q> - Chris
          </Typography> */}
        {/* </Grid> */}
        {/* <Grid item key={'testimonial2'} xs={12} md={6} lg={4} padding={5}>
          <Typography className={styles.text1}>
              <q>We wanted to give a big shout out to Ashley Bowman and her staging
company, Staged Right ATL. This is the second home we have sold with
Ashley. My wife and I were tasked with selling a 30-year-old
townhouse that had belong to a friend for many years. The place was
very dated, needed paining, and all the fixtures needed to be updated per
Ashley&apos;s recommendations. Once those tasks were completed there was
still just a little something missing. In walked Ashley and her staging
company. We were gone for four or five days while this occurred. Upon
returning and seeing the place we did not even believe it was the same
place. We placed the house on the market and had several offers and a
contract within four days. Bravo to Ashley, her team, and staging company!</q> - J&S
          </Typography>
        </Grid> */}
      </Grid>
      <ContactForm></ContactForm>
      <p className={styles.text2}>Contact</p>
      <Paper sx={{backgroundColor: 'grey'}}>
      <Grid container sx={{justifyContent: 'center'}}>
        <Grid className={styles.logoContainer} item key={'logo'} xs={12} md={12} lg={4} padding={5}>
          <Image src='/logo.jpg' layout='fixed' height={250} width={250}></Image>
        </Grid>
        <Grid className={styles.link1} item key={'link1'} xs={12} md={6} lg={4} padding={5}>
        <Typography className={styles.text1}>
          {/* <Link href='https://www.instagram.com/paula.ashley.homes/'> */}
          Office <Call /> (111)-111-1111
          {/* </Link> */}
          </Typography>
          <Typography className={styles.text1}>
          {/* <Link href='https://www.instagram.com/paula.ashley.homes/'> */}
          Cell <Call /> (111)-111-1111
          {/* </Link> */}
          </Typography>
          <Typography className={styles.text1}>
          {/* <Link href='https://www.instagram.com/paula.ashley.homes/'> */}
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
          Test Address, Decatur, GA 30030
        </Typography>
      </Grid>
      </Paper>
    </div>
  )
}

export default Home

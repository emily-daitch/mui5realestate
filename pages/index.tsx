import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Typography, Stack, Grid, Link, ImageList, ImageListItem, Paper, Icon, Box } from "@mui/material";
import HeadComponent from "../components/Head";
import ContactForm from "../components/ContactForm";
import Image from "next/image"
import { HomeSearchForm } from '../components/HomeSearchForm';
import CallIcon from '@mui/icons-material/Call';
import FaxIcon from '@mui/icons-material/Fax';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

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
      <HeadComponent title={'Paula and Ashley Homes'} metaData={'Paula and Ashley Homes'} />
      <div className={styles.headerimagecontainer}>
      <Image layout='responsive' height={1589} width={2400} src='/bg.jpg'></Image>
      <div className={styles.centered}>Passionate, Personal, Professional</div>
      <div className={styles.construction}>Site Under Construction</div>
      </div>
      <div>
      <Image layout='responsive' height={306} width={1078} src='/PA house logo.png'></Image>
      </div>
      <main className={styles.main}>
      </main>
      <HomeSearchForm></HomeSearchForm>
      <br/>
      {/* <Grid className={styles.bc1i} container sx={{justifyContent: 'center', alignItems: 'center'}}> */}
      <Grid className={styles.pg} container sx={{justifyContent: 'center', alignItems: 'center'}}>
      <Grid item key={'about'} xs={12} sm= {8} md={8} lg={8}>
      {/* <Grid item key={'about'} xs={12} md={8} lg={8}> */}
      <Typography className={styles.pgt} padding={3}>
      {/* <Typography className={styles.bc1}> */}
          Ashley Bowman is a Georgia native. Her father and
grandfather were on the building and construction side of real
estate and her mother owned her own interior designing
company. As a child, Ashley spent her summers and school
holidays on job sites with her parents often coming home
with Georgia’s own red clay on her shoes.
She graduated from the University of West Georgia with a
degree in Early Childhood Education. Soon after graduation
she decided that being creative was one of the best parts of
being a teacher. From there, she decided to combine her
known experience and knowledge of the home building
process, her creative passion, and her outward honesty
together with the real estate market. Since moving to Atlanta
15 years ago, Ashley has lived in Old 4th Ward, Virginia
Highlands, East Atlanta, Inman Park, and Candler Park. She
purchased her first home in Decatur and now currently
resides in Tucker with her husband Craig and their two pugs,

Carlton and Richard.
          </Typography>
        </Grid>
        <Grid item key={'pic'} xs={12} sm={4} md={4} lg={4} padding={3}>
          <Image src='/ashley.png' layout='responsive' height={3} width={2}></Image>
        </Grid>
      </Grid>
      <Grid container sx={{justifyContent: 'center', alignItems: 'center'}}>
        <Grid item key={'pic'} xs={12} sm={4}  md={4} lg={4} padding={3}>
          <Image src='/paula.png' layout='responsive' height={3} width={2}></Image>
        </Grid>
        <Grid item key={'about'} xs={12} sm={8} md={8} lg={8} padding={3}>
          <Box border={6}>
          <Typography className={styles.bc1}>
          Paula Girvan is from the hills of Tennessee but planted her roots in
Georgia when she was 18 years old. She decided to call Atlanta
home and make a name for herself by owning famous
neighborhood pubs, popular Virginia Highland boutiques, and
running her own real estate career in the Metro Atlanta area.
With almost 25 years of real estate under her belt, she has helped
many friends, family, and everyone in between meet their real
estate goals. She has continued her passion in real estate with
investments, remodels, and developments. WIth that being said,
her favorite part is working with people and helping them find
their homes and making forever friends. She currently lives in her
mid-century modern dream house in Decatur with her 2 dogs and

husband Mike.
          </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{justifyContent: 'center', alignItems: 'center'}}>
        <Grid item key={'about'} xs={12} md={8} lg={8}>
          <Typography className={styles.bc1}>
          Paula and Ashley met at a Keller Williams convention in New Orleans. After getting to know
          each other and realizing they know a lot of the same people and how well they work together,
          they decided to combine forces and become a team.<br/> Together they really enjoy helping people
          achieve their real estate dreams, making people happy, and enjoying life to the fullest!<br/><br/>

          Thank you and we hope to work with you soon!<br/><br/>

          -Paula & Ashley
          </Typography>
        </Grid>
        <Grid item key={'pic'} xs={12} md={4} lg={4} padding={3}>
          <Image src='/group-1.JPG' layout='responsive' height={3} width={2}></Image>
        </Grid>
      </Grid>
      <p className={styles.bc2}>Test Font 3 Featured Property Placeholder</p>
      <p className={styles.bc1}>Follow us on Instagram! </p>
      <Typography className={styles.bc1}>
            <Link href='https://www.instagram.com/paula.ashley.homes/'>
              @paula.ashley.homes
            </Link>
      </Typography>
      <Grid container sx={{justifyContent: 'center'}}>
        <Grid item key={'pic'} xs={10} md={8} lg={6} padding={'4 4'} sx={{
                flex: "1",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center"
            }}>
          {/* <Image src='/insta1.png' layout='responsive' height={1} width={1}></Image>
          <Image src='/insta2.png' layout='responsive' height={1} width={1}></Image>
          <Image src='/insta3.png' layout='responsive' height={1} width={1}></Image>
          <Image src='/insta4.png' layout='responsive' height={1} width={1}></Image> */}
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
        {/* <Grid item key={'pic'} xs={10} md={4} lg={4}>
        <Image src='/insta2.png' layout='responsive' height={1} width={1}></Image>
        </Grid>
        <Grid item key={'pic'} xs={10} md={4} lg={4}>
        <Image src='/insta3.png' layout='responsive' height={1} width={1}></Image>
        </Grid>
        <Grid item key={'pic'} xs={10} md={4} lg={4}>
        <Image src='/insta4.png' layout='responsive' height={1} width={1}></Image>
        </Grid> */}
      </Grid>
      <p className={styles.bc4}>Testimonials Placeholder</p>
      <Grid container sx={{justifyContent: 'center'}}>
        <Grid item key={'testimonial1'} xs={12} md={6} lg={4} padding={5}>
          <Typography className={styles.bc1}>
              <q>Ashley is hands down the best agent to work with in Decatur! She
knows the area, is very personable and understands what you
need (maybe even better than you do)! It’s great to work with
someone that is part of a team as well, Paula was able to show us
homes quickly when needed and is also a joy. Thank you Ashley
and Paula for helping us land the perfect home for our family!</q> - Emily
          </Typography>
          <Typography className={styles.bc1}>
              <q>My fiance and I cannot say enough good things about Paula!
As first time homebuyers we asked a lot of questions,

and she always made herself available to us and was extremely helpful.

She made the process so smooth and stress-free,
I don&apos;t know what we would have done without her!

We will be recommending Paula to others looking to buy homes as well.</q> - Chris
          </Typography>
        </Grid>
        <Grid item key={'testimonial2'} xs={12} md={6} lg={4} padding={5}>
          <Typography className={styles.bc1}>
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
        </Grid>
      </Grid>
      <ContactForm></ContactForm>
      <p className={styles.bc2}>Contact</p>
      <Paper sx={{backgroundColor: 'grey'}}>
      <Grid container sx={{justifyContent: 'center'}}>
        <Grid className={styles.logocontainer} item key={'logo'} xs={12} md={12} lg={4} padding={5}>
          <Image src='/PAPurpleLogo.png' layout='fixed' height={250} width={250}></Image>
        </Grid>
        <Grid className={styles.link1} item key={'link1'} xs={12} md={6} lg={4} padding={5}>
        <Typography className={styles.bc1}>
          <Link href='https://www.instagram.com/paula.ashley.homes/'>
          Office <CallIcon /> (404)-564-5560
          </Link>
          </Typography>
          <Typography className={styles.bc1}>
          <Link href='https://www.instagram.com/paula.ashley.homes/'>
          Cell <CallIcon /> (404)-217-0212
          </Link>
          </Typography>
          <Typography className={styles.bc1}>
          <Link href='https://www.instagram.com/paula.ashley.homes/'>
          <FaxIcon /> (404)-564-5561
          </Link>
          </Typography>
        </Grid>
        <Grid className={styles.link1} item key={'link2'} xs={12} md={6} lg={4} padding={5}>
          <Typography className={styles.bc1}>
          <Link href='mailto:test@email.com'>
          <MailIcon />test@email.com
          </Link>
          </Typography>
          <Typography className={styles.bc1}>
          <Link href='https://www.facebook.com/paulaandashleyhomes/'>
          <FacebookIcon />Follow us on Facebook!
          </Link>
          </Typography>
          <Typography className={styles.bc1}>
          <Link href='https://www.instagram.com/paula.ashley.homes/'>
          <InstagramIcon />Follow us on Instagram!
          </Link>
          </Typography>
        </Grid>
        <Typography className={styles.bc1}>
            <Link href='https://goo.gl/maps/QN7E6Eh1g5xYhXd48?coh=178571&entry=tt'>
              <GoogleIcon/>We would love to hear your feedback, write a review!
            </Link>
          315 W Ponce de Leon Ave Suite 100, Decatur, GA 30030
        </Typography>
      </Grid>
      </Paper>
    </div>
  )
}

export default Home

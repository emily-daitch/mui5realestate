import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Typography, Stack, Grid, Link, ImageList, ImageListItem, Paper, Icon } from "@mui/material";
import HeadComponent from "../components/Head";
import ContactForm from "../components/ContactForm";
import Image from "next/image"
import { HomeSearchForm } from '../components/HomeSearchForm';
import CallIcon from '@mui/icons-material/Call';
import FaxIcon from '@mui/icons-material/Fax';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

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
  }
]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadComponent title={'Paula and Ashley Homes'} metaData={'Paula and Ashley Homes'} />
      <div className={styles.headerimagecontainer}>
      <Image layout='responsive' height={1589} width={2400} src='/bg.jpg'></Image>
      <div className={styles.centered}>Passionate, Personal, Professional</div>
      </div>
      <div>
      <Image layout='responsive' height={306} width={1078} src='/PA house logo.png'></Image>
      </div>
      <main className={styles.main}>
      </main>
      <HomeSearchForm></HomeSearchForm>
      <br/>
      <Grid container sx={{justifyContent: 'center'}}>
        <Grid item key={'about'} xs={12} md={8} lg={8}>
          <Typography className={styles.bc1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>
        <Grid item key={'pic'} xs={12} md={4} lg={4}>
          <Image src='/group-1.JPG' layout='responsive' height={3} width={2}></Image>
        </Grid>
      </Grid>
      <p className={styles.bc3}>Test Font 3 Featured Property Placeholder</p>
      <p className={styles.bc1}>Follow us on Instagram!</p>
      <Grid container sx={{justifyContent: 'center'}}>
        <Grid item key={'about'} xs={12} md={6} lg={4}>
          <Typography className={styles.bc1}>
            <Link href='https://www.instagram.com/paula.ashley.homes/'>
              @paula.ashley.homes
            </Link>
          </Typography>
        </Grid>
        <Grid item key={'pic'} xs={10} md={4} lg={4} padding={'4 4'}>
          {/* <Image src='/insta1.png' layout='responsive' height={1} width={1}></Image>
          <Image src='/insta2.png' layout='responsive' height={1} width={1}></Image>
          <Image src='/insta3.png' layout='responsive' height={1} width={1}></Image>
          <Image src='/insta4.png' layout='responsive' height={1} width={1}></Image> */}
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
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
              <q>This is a testimonial. This is a testimonial.
              This is a testimonial. This is a testimonial.
              This is a testimonial. This is a testimonial.
              This is a testimonial. This is a testimonial.
              This is a testimonial. This is a testimonial.</q>
          </Typography>
        </Grid>
        <Grid item key={'testimonial2'} xs={12} md={6} lg={4} padding={5}>
          <Typography className={styles.bc1}>
              <q>This is a testimonial. This is a testimonial.
              This is a testimonial. This is a testimonial.
              This is a testimonial. This is a testimonial.
              This is a testimonial. This is a testimonial.
              This is a testimonial. This is a testimonial.</q>
          </Typography>
        </Grid>
      </Grid>
      <ContactForm></ContactForm>
      <p className={styles.bc2}>Contact</p>
      <Paper sx={{backgroundColor: 'grey'}}>
      <Grid container sx={{justifyContent: 'center'}}>
        <Grid item key={'testimonial1'} xs={12} md={6} lg={4} padding={5}>
        <Typography className={styles.bc1}>
          <Link href='https://www.instagram.com/paula.ashley.homes/'>
          <CallIcon />(404) - 000 - 0000
          </Link>
          </Typography>
          <Typography className={styles.bc1}>
          <Link href='https://www.instagram.com/paula.ashley.homes/'>
          <CallIcon />(404) - 111 - 1111
          </Link>
          </Typography>
          <Typography className={styles.bc1}>
          <Link href='https://www.instagram.com/paula.ashley.homes/'>
          <FaxIcon />(404) - 222 - 2222
          </Link>
          </Typography>
        </Grid>
        <Grid item key={'testimonial2'} xs={12} md={6} lg={4} padding={5}>
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
          315 W Ponce de Leon Ave Suite 100, Decatur, GA 30030
        </Typography>
      </Grid>
      </Paper>
    </div>
  )
}

export default Home

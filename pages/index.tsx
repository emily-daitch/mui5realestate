import type { NextPage } from 'next'
import Image from "next/image"

import { motion } from 'framer-motion';

import AboutContent from '../components/AboutContent';
import ContactForm from "../components/ContactForm";
import HeadComponent from "../components/Head";
import { HomeSearchForm } from '../components/HomeSearchForm';
import { titleStyles, sloganStyles, footerStyles, indexStyles } from '../components/HomeContentStyles';

import { Typography, Grid, Link, Paper, Container, Box } from "@mui/material";
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
  const footerStyle = footerStyles(theme);
  const indexStyle = indexStyles(theme);
  const titleStyle = titleStyles(theme);
  const sloganStyle = sloganStyles(theme);

  return (
    <div style={indexStyle.container}>
      <HeadComponent title={'Test Site'} metaData={'Test Site'} />
      <div style={indexStyle.headerImageContainer}>
      <Container sx={{height: {xs: '70px', md: '0px'}}}></Container>
      <Image alt="background photo" layout='intrinsic' height={2000} width={2000} src='/Michael Lewis Postcard.jpg'></Image>
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
        <Box sx={titleStyle.root}>Paula and Ashley Homes</Box>
      </motion.div>
      <Box sx={sloganStyle.root}>Passionate, Personal, Professional</Box>
      </div>
      {/* <Box sx={titleStyle.root}>Paula and Ashley Homes</Box>
      <Box sx={sloganStyle.root}>Passionate, Personal, Professional</Box> */}

      <div style={{display: 'flex', justifyContent: 'center'}}>
      <Image alt="logo" layout='intrinsic' height={306} width={1078} src='/PA house logo.png'></Image>
      </div>
      <main style={indexStyle.main}>
      </main>
      <Typography style={indexStyle.text1}>This site currently uses a test server for MLS data. It is limited, and not all zip codes will return results.<br/>
       You may use Property Type: House, Zip: 78704, Beds/Baths: 1+, Min Price: $100000, Max Price: 500000 to get some good results.</Typography>
      <HomeSearchForm></HomeSearchForm>
      <br/>
      <AboutContent></AboutContent>
      <ContactForm></ContactForm>
      <Paper sx={{backgroundColor: 'grey'}}>
      <Grid container sx={{justifyContent: 'center'}}>
          <Image alt="logo" src='/PA house logo.png' layout='intrinsic' height={306} width={1078}></Image>
        <Grid sx={footerStyle.root} item key={'link1'} xs={12} md={6} lg={4} paddingLeft={5} paddingRight={5}>
        <Typography style={indexStyle.text1}>
          <Call /> Office:<br/> (404)-564-5560
          </Typography>
          <Typography style={indexStyle.text1}>
          <Call /> Cell:<br/> (770)-722-4897
          </Typography>
          <Typography style={indexStyle.text1}>
          <Fax /> Fax:<br/> (404)-564-5561
          </Typography>
        </Grid>
        <Grid sx={footerStyle.root} item key={'link2'} xs={12} md={6} lg={4} paddingLeft={5} paddingRight={5}>
          <Typography style={indexStyle.text1}>
          <Link href='mailto:PGirvan@kw.com'>
          <Mail /><br/>PGirvan@kw.com
          </Link>
          </Typography>
          <Typography style={indexStyle.text1}>
          <Link href='https://www.facebook.com/paulaandashleyhomes/'>
          <Facebook /><br/>Follow us on Facebook!
          </Link>
          </Typography>
          <Typography style={indexStyle.text1}>
          <Link href='https://www.instagram.com/paula.ashley.homes/'>
          <Instagram /><br/>Follow us on Instagram!
          </Link>
          </Typography>
        </Grid>
        <Typography style={indexStyle.text1}>
            <Link href='https://goo.gl/maps/QN7E6Eh1g5xYhXd48?coh=178571&entry=tt'>
              <Google/>We would love to hear your feedback, write a review!
            </Link>
          <br/>315 W Ponce de Leon Ave Suite 100, Decatur, GA 30030
        </Typography>
      </Grid>
      </Paper>
    </div>
  )
}

export default Home

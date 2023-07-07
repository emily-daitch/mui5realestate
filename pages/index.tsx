import React, { useState } from 'react';

import type { NextPage } from 'next'
import Image from "next/image"

import { motion } from 'framer-motion';

import AboutContent from '../components/AboutContent';
import TestimonialContent from '../components/TestimonialContent';
import ContactForm from "../components/ContactForm";
import InstagramPreview from "../components/InstagramPreview"
import HeadComponent from "../components/Head";
import { HomeSearchForm } from '../components/HomeSearchForm';
import { titleStyles, sloganStyles, footerStyles, indexStyles } from '../components/HomeContentStyles';
import { expanderStyles, expanderTextStyles } from '../components/AboutContentStyles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Carousel from 'react-material-ui-carousel';

import { Typography, Grid, Link, Paper, Container, Box, Card } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const Home: NextPage = ({feed}: any) => {
  console.log('feed', feed);
  const images = feed.data.filter((image) => image.media_type === 'CAROUSEL_ALBUM');
  //const images = feed.data;

  const sliderItems: number = images.length > 3 ? 3 : images.length;
  const items: Array<any> = [];

  for (let i = 0; i < images.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
        <Card className="Banner" key={i.toString()}>
          <Grid container className="BannerGrid" justifyContent={'center'} direction={'row'}>
              {images.slice(i, i + sliderItems).map((da, index) => {
                return (
                <Grid item key={index}>
                <Grid container justifyContent={'center'} direction={'column'}>
                  <img 
                    style={{padding: '5px'}} 
                    width={'220px'} 
                    height={'220px'} 
                    key={index.toString()} 
                    src={da.media_url} 
                  />
                  <div style={{overflow: "auto", maxHeight: '150px', textOverflow: "ellipsis", width: '220px'}}>
                  <Typography width={'200px'}>{da.caption}</Typography>
                  </div>
                </Grid>
                </Grid>);
              })}
          </Grid>
        </Card>
      );
    }
  }

  const theme = useTheme();
  const footerStyle = footerStyles(theme);
  const indexStyle = indexStyles(theme);
  const titleStyle = titleStyles(theme);
  const sloganStyle = sloganStyles(theme);
  const expanderStyle = expanderStyles(theme);
  const expanderTextStyle = expanderTextStyles(theme);
  const [aboutExpanded, setAboutExpanded] = useState(true);
  const [testimonialExpanded, setTestimonialExpanded] = useState(true);
  const toggleAboutExpanded = () => {
    setAboutExpanded(!aboutExpanded);
  }
  const toggleTestimonialExpanded = () => {
    setTestimonialExpanded(!testimonialExpanded);
  }

  return (
    <div style={indexStyle.container}>
      <HeadComponent title={'Test Site'} metaData={'Test Site'} />
      <div title="testD" style={indexStyle.headerImageContainer}>
      <Container sx={{height: {xs: '70px'}}}></Container>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <Image alt="logo" layout='intrinsic' height={306} width={1078} src='/PA house logo.png'></Image>
      </div>
      <Image alt="background photo" layout='intrinsic' height={6270} width={10800} src='/Michael Lewis Postcard_Short.jpg'></Image>
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
        {/* <Box sx={titleStyle.root}>Paula and Ashley Homes</Box> */}
      </motion.div>
      <Box sx={sloganStyle.root}>Passionate, Personal, Professional</Box>
      </div>
      {/* <Box sx={titleStyle.root}>Paula and Ashley Homes</Box>
      <Box sx={sloganStyle.root}>Passionate, Personal, Professional</Box> */}

      <main style={indexStyle.main}>
      </main>
      <Typography style={indexStyle.text1}>This site currently uses a test server for MLS data. It is limited, and not all zip codes will return results.<br/>
       You may use Property Type: House, Zip: 78704, Beds/Baths: 1+, Min Price: $100000, Max Price: 500000 to get some good results.</Typography>
      <HomeSearchForm></HomeSearchForm>
      <br/>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} key={'aboutSelector'} onClick={toggleAboutExpanded}>
          <Typography sx={expanderTextStyle.root}>
            About Us {aboutExpanded ? <ExpandLessIcon></ExpandLessIcon> : <ExpandMoreIcon></ExpandMoreIcon>}
          </Typography>
        </div>
      {aboutExpanded ? 
      <AboutContent></AboutContent> :
      <></>}
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} key={'testimonialSelector'} onClick={toggleTestimonialExpanded}>
          <Typography sx={expanderTextStyle.root}>
            Testimonials {testimonialExpanded ? <ExpandLessIcon></ExpandLessIcon> : <ExpandMoreIcon></ExpandMoreIcon>}
          </Typography>
        </div>
      {testimonialExpanded ?
      <TestimonialContent></TestimonialContent> :
      <></> }
      <ContactForm></ContactForm>
      {/* InstagramPreview To be implemented, must pass data from get static props here */}
      <InstagramPreview></InstagramPreview>
      {images && 
        <><Typography display={'flex'} flexDirection={'row'} justifyContent={'center'}>Follow us on Instagram! &nbsp;<Link href='https://www.instagram.com/27.plants/'>@27.plants</Link></Typography><br/>
        <Carousel animation="slide" autoPlay={false} cycleNavigation>
          {items}
        </Carousel></>
      }
    </div>
  )
}

export const getStaticProps = async () => {
  console.log('getStaticProps');
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();

  //console.log('feed', feed);
  return {
    props: {
      feed
    }
  }
}

export default Home

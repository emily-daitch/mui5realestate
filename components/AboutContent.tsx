import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from "next/image"
import styles from '../styles/Home.module.css'

import { Typography, Grid, Box, Theme, Icon, Stack } from '@mui/material';
import { aboutstyles, textFirstRepStyles, testimonialStyles, expanderStyles, expanderTextStyles } from './AboutContentStyles';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ChevronLeft from '@mui/icons-material/ChevronLeft';

const imageAnimateVariants: Variants = {
  offscreen: {
    x: 500
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const imageAnimateVariantsPaula: Variants = {
  offscreen: {
    x: -400
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const AboutContent = () => {

  const theme = useTheme();
  const astyle = aboutstyles(theme);
  const firstRepStyle = textFirstRepStyles(theme);
  const testimonialStyle = testimonialStyles(theme);
  const expanderStyle = expanderStyles(theme);
  const expanderTextStyle = expanderTextStyles(theme);

  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [testimonialExpanded, setTestimonialExpanded] = useState(false);
  const [testimonial, setTestimonial] = useState(0);
  const toggleAboutExpanded = () => {
    setAboutExpanded(!aboutExpanded);
  }
  const toggleTestimonialExpanded = () => {
    setTestimonialExpanded(!testimonialExpanded);
  }
  const incrementTestimonial = () => {
    const testimonialNext = testimonial >= 2 ? 0 : testimonial + 1;
    setTestimonial(testimonialNext);
  }
  const decrementTestimonial = () => {
    const testimonialNext = testimonial <= 0 ? 2 : testimonial - 1;
    setTestimonial(testimonialNext);
  }

  const testimonialTexts = [
    `\"Ashley is hands down the best agent to work with in Decatur! She
    knows the area, is very personable and understands what you
    need (maybe even better than you do)! It’s great to work with
    someone that is part of a team as well, Paula was able to show us
    homes quickly when needed and is also a joy. Thank you Ashley
    and Paula for helping us land the perfect home for our family!\"
    
    - Emily`,
    `\"My fiance and I cannot say enough good things about Paula!
    As first time homebuyers we asked a lot of questions,
    and she always made herself available to us and was extremely helpful.
    She made the process so smooth and stress-free,
    I don't know what we would have done without her!
    We will be recommending Paula to others looking to buy homes as well.\"
    
    -Chris`,
    `\"We wanted to give a big shout out to Ashley Bowman and her staging
    company, Staged Right ATL. This is the second home we have sold with
    Ashley. My wife and I were tasked with selling a 30-year-old
    townhouse that had belong to a friend for many years. The place was
    very dated, needed paining, and all the fixtures needed to be updated per
    Ashley's recommendations. Once those tasks were completed there was
    still just a little something missing. In walked Ashley and her staging
    company. We were gone for four or five days while this occurred. Upon
    returning and seeing the place we did not even believe it was the same
    place. We placed the house on the market and had several offers and a
    contract within four days. Bravo to Ashley, her team, and staging
    company!\"
    -J&S`,
  ]

  return (
    <>
    <Grid container sx={expanderStyle.root}>
      <Grid item sx={expanderTextStyle.root} key={'aboutSelector'} onClick={toggleAboutExpanded}>
        <Typography sx={expanderTextStyle.root}>
          About Us {aboutExpanded ? <ExpandLessIcon></ExpandLessIcon> : <ExpandMoreIcon></ExpandMoreIcon>}
        </Typography>
      </Grid>
    </Grid>
      {aboutExpanded ? 
      <>
        <Grid container sx={astyle.root}>
          <Grid item key={'pic'} xs={12} sm={4} md={4} lg={4} padding={3}>
            {/* <motion.div
                        className="card-container"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.2 }}
                      >
                  <motion.div className="card" variants={imageAnimateVariants}> */}
                <Image alt="headshot" src='/paula.png' layout='responsive' height={3} width={2}></Image>
                {/* </motion.div>
              </motion.div> */}
          </Grid>
          <Grid item key={'firstRep'} xs={12} sm= {8} md={8} lg={8}>
              <Typography sx={firstRepStyle.root} padding={3}>
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

husband Mike. </Typography>
          </Grid>
        </Grid>
        <Grid container sx={astyle.root}>
          <Grid item key={'pic'} xs={12} sm={4}  md={4} lg={4} padding={3}>
            {/* <motion.div
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div className="card" variants={imageAnimateVariantsPaula}> */}
                <Image alt="headshot" src='/ashley.png' layout='responsive' height={3} width={2}></Image>
              {/* </motion.div>
            </motion.div> */}
          </Grid>
          <Grid item key={'secondRep'} xs={12} sm={8} md={8} lg={8} padding={3}>
                <Typography sx={firstRepStyle.root} padding={3}>
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
        </Grid>
    </> : <></>}
    <Grid container sx={expanderStyle.root}>
      <Grid item sx={expanderTextStyle.root} key={'testimonialSelector'} onClick={toggleTestimonialExpanded}>
        <Typography sx={expanderTextStyle.root}>
          Testimonials {testimonialExpanded ? <ExpandLessIcon></ExpandLessIcon> : <ExpandMoreIcon></ExpandMoreIcon>}
        </Typography>
      </Grid>
    </Grid>
    {testimonialExpanded ? <Stack sx={astyle.root} direction={'row'}>
      <ChevronLeft onClick={decrementTestimonial}></ChevronLeft>
        <Typography sx={testimonialStyle.root} >
          {testimonialTexts[testimonial]}
        </Typography>
      <ChevronRight onClick={incrementTestimonial}></ChevronRight>
    </Stack> : <></>}
    </>
  );
};

export default AboutContent;
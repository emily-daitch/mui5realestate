import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from "next/image"
import styles from '../styles/Home.module.css'

import { Typography, Grid, Box, Theme, Icon, Stack } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { aboutstyles, textFirstRepStyles, testimonialStyles, expanderStyles } from './AboutContentStyles';
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
    '0Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipiscing velit, sed quia non numquam do eius modi tempora incididunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrumd exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
    '1Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipiscing velit, sed quia non numquam do eius modi tempora incididunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrumd exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
    '2Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipiscing velit, sed quia non numquam do eius modi tempora incididunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrumd exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
  ]

  return (
    <>
    <Grid container sx={expanderStyle.root}>
      <Grid item key={'aboutSelector'} onClick={toggleAboutExpanded}>
        <Typography sx={firstRepStyle.root} padding={3}>
          About Us {aboutExpanded ? <ExpandMoreIcon></ExpandMoreIcon> : <ExpandLessIcon></ExpandLessIcon>}
        </Typography>
      </Grid>
    </Grid>
      {aboutExpanded ? 
      <><Grid item key={'pic'} xs={12} sm={4} md={4} lg={4} padding={3}>
        {/* <motion.div
                    className="card-container"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                  >
              <motion.div className="card" variants={imageAnimateVariants}> */}
            <Image alt="headshot" src='/headshot1.webp' layout='responsive' height={3} width={2}></Image>
            {/* </motion.div>
          </motion.div> */}
        </Grid>
        <Grid item key={'firstRep'} xs={12} sm= {8} md={8} lg={8}>
            <Typography sx={firstRepStyle.root} padding={3}>
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipiscing velit, sed quia non numquam do eius modi tempora incididunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrumd exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? uis autem vel eum irure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?  At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </Typography>
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
            <Image alt="headshot" src='/headshot2.jpeg' layout='responsive' height={3} width={2}></Image>
          {/* </motion.div>
        </motion.div> */}
      </Grid>
      <Grid item key={'secondRep'} xs={12} sm={8} md={8} lg={8} padding={3}>
            <Typography sx={firstRepStyle.root} padding={3}>
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipiscing velit, sed quia non numquam do eius modi tempora incididunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrumd exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? uis autem vel eum irure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?  At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </Typography>
      </Grid>
    </Grid>
    </> : <></>}
    <Grid container sx={expanderStyle.root}>
      <Grid item key={'testimonialSelector'} onClick={toggleTestimonialExpanded}>
        <Typography sx={firstRepStyle.root} padding={3}>
          Testimonials {testimonialExpanded ? <ExpandMoreIcon></ExpandMoreIcon> : <ExpandLessIcon></ExpandLessIcon>}
        </Typography>
      </Grid>
    </Grid>
    {testimonialExpanded ? <Stack sx={astyle.root} padding={3} direction={'row'}>
      {/* <Grid className={styles.right} item key={'firstTestimonial'} xs={12} md={12} lg={12}> */}
      <ChevronLeft onClick={decrementTestimonial}></ChevronLeft>
        <Typography sx={testimonialStyle.root} >
          {testimonialTexts[testimonial]}
        </Typography>
      <ChevronRight onClick={incrementTestimonial}></ChevronRight>
      {/* </Grid> */}
    </Stack> : <></>}
    </>
  );
};

export default AboutContent;
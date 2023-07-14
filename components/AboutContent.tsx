import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from "next/image"

import { Typography, Grid } from '@mui/material';
import { aboutstyles, textFirstRepStyles } from './AboutContentStyles';
import { useTheme } from '@mui/material/styles';

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
	const aboutStyle = aboutstyles(theme);
	const firstRepStyle = textFirstRepStyles(theme);

	return (
		<>
			<Grid container sx={aboutStyle.rep1}>
				<Grid item key={'pic'} xs={12} sm={4} md={4} lg={4} padding={3}>
					{/* <motion.div
						className="card-container"
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.2 }}
					>
						<motion.div className="card" variants={imageAnimateVariantsPaula}> */}
					<Image alt="headshot" src='/Paula Headshot Postcard.JPG' layout='responsive' height={3} width={3}></Image>
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
			<Grid container sx={aboutStyle.rep2}>
				<Grid item key={'pic'} xs={12} sm={0} md={0} lg={0} xl={0} padding={6} sx={{display: {
					xs: 'grid',
					sm: 'none'
				}}}>
					{/* <motion.div
						className="card-container"
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.2 }}
					>
						<motion.div className="card" variants={imageAnimateVariants}> */}
					<Image alt="headshot" src='/Ashley Headshot Postcard.png' layout='responsive' height={3} width={2}></Image>
					{/* </motion.div> */}
					{/* </motion.div> */}
				</Grid>
				<Grid item key={'secondRep'} xs={12} sm={8} md={8} lg={8} >
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
				<Grid item key={'pic'} xs={0} sm={4}  md={4} lg={4} padding={3} sx={{display: {
					xs: 'none',
					sm: 'grid'
				}}}>
					{/* <motion.div
						className="card-container"
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.2 }}
					>
						<motion.div className="card" variants={imageAnimateVariants}> */}
					<Image alt="headshot" src='/Ashley Headshot Postcard.png' layout='responsive' height={3} width={2}></Image>
					{/* </motion.div> */}
					{/* </motion.div> */}
				</Grid>
			</Grid>
		</>
	);
};

export default AboutContent;
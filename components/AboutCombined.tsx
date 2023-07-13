import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from "next/image"
import styles from '../styles/Home.module.css'

import { Typography, Grid, Box, Theme, Icon, Stack } from '@mui/material';
import { aboutstyles, textFirstRepStyles, testimonialStyles } from './AboutContentStyles';
import { sloganStyles } from './HomeContentStyles';
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

const AboutCombined = () => {

	const theme = useTheme();
	const aboutStyle = aboutstyles(theme);
	const sloganStyle = sloganStyles(theme);
	const firstRepStyle = textFirstRepStyles(theme);

	return (
		<div style={{padding: '10px'}}>
			<Grid container sx={aboutStyle.rep1} direction={'row'}>
				<Grid container xs={12} md={6} direction={'row'} justifyContent={'center'}>
					<Grid item xs={12} md={6}>
						<Typography sx={sloganStyle.about}>
							ABOUT US
						</Typography>
					</Grid>
					<Grid item key={'pic'} xs={12} md={6} sx={{margin: {xs: '80px', md: '10px'}}}>
						<Image alt="headshot" src='/group-1.JPG' layout='responsive' width={3456} height={5184}></Image>
					</Grid>
				</Grid>
				<Grid container xs={12} md={6} direction={'column'} justifyContent={'center'}>
					<Grid item key={'firstRep'} xs={12} md={6}>
						<Typography sx={firstRepStyle.root}>
				Our real estate team brings years of industry knowledge and experience to the table. We understand the market trends, local neighborhoods, and the intricacies of the buying and selling process.
	We believe in delivering a personalized experience tailored to your unique needs. We take the time to understand your preferences and goals.
	Over the years, we have built a vast network of professionals in the real estate industry - from mortgage brokers and lawyers to home inspectors and contractors. 
	When it comes to pricing, we conduct thorough market analysis to help you determine the best value for your property.
	Our ultimate goal is your satisfaction. We measure our success by the positive experiences and successful outcomes our clients enjoy. 
	Choose our real estate team for a professional, personalized, and rewarding real estate experience.  </Typography>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default AboutCombined;
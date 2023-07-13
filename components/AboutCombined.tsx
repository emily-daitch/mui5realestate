import React from 'react';
import { Variants } from 'framer-motion';
import Image from "next/image"

import { Typography, Grid, Button } from '@mui/material';
import { aboutstyles, textFirstRepStyles } from './AboutContentStyles';
import { sloganStyles } from './HomeContentStyles';
import { useTheme } from '@mui/material/styles';

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
					<Grid item key={'pic'} xs={12} md={6} sx={
						{
							marginTop: {xs: '20px', md: '30px'},
							marginBottom: {xs: '20px', md: '30px'},
							marginLeft: {xs: '20px', sm: '100px', md: '80px'},
							marginRight: {xs: '20px', sm: '100px', md: '80px'}
						}
					}>
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
					<Grid item key={'readMore'} xs={12} md={6}>
						<div style={{display: 'flex', justifyContent: 'center'}}>
							<Button
								size="large"
								variant="contained"
								href={'/About'}
								sx={{borderRadius: '0px', margin: '10px', borderColor: '#000000', border: '1px', backgroundColor: '#eeeeee'}}
							>
								Read More
							</Button>
						</div>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default AboutCombined;
import React, { useState } from 'react';

import { Typography, Box, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { aboutstyles, testimonialStyles } from './AboutContentStyles';
import { contactFormStyles, sloganStyles } from './HomeContentStyles';
import { testimonialTextStyles } from './TestimonialContentStyles';
import { useTheme } from '@mui/material/styles';

const testimonialTexts = [
	{ 
		testimonial: `\"Ashley is hands down the best agent to work with in Decatur! She
    knows the area, is very personable and understands what you
    need (maybe even better than you do)! It’s great to work with
    someone that is part of a team as well, Paula was able to show us
    homes quickly when needed and is also a joy. Thank you Ashley
    and Paula for helping us land the perfect home for our family!\"`,
		name: 'Emily',
	},
	{ 
		testimonial: `\"My fiance and I cannot say enough good things about Paula!
    As first time homebuyers we asked a lot of questions,
    and she always made herself available to us and was extremely helpful.
    She made the process so smooth and stress-free,
    I don't know what we would have done without her!
    We will be recommending Paula to others looking to buy homes as well.\"`,
		name: 'Chris',
	},
	{ 
		testimonial: `\"We wanted to give a big shout out to Ashley Bowman and her staging
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
    company!\"`,
		name: 'J&S',
	}
];

const TestimonialContent = () => {
	const theme = useTheme();
	const testimonialTextStyle = testimonialTextStyles(theme);
	const sloganStyle = sloganStyles(theme);

	const Item = ({testimonial, name}) => {
		return (
			<Box sx={testimonialTextStyle.box} >
				<Typography key='testimonial' sx={testimonialTextStyle.p} >{testimonial} <br/><br/> {name}</Typography>
			</Box>
		);
	};

	const [testimonial, setTestimonial] = useState(0);

	const incrementTestimonial = () => {
		const testimonialNext = testimonial >= 2 ? 0 : testimonial + 1;
		setTestimonial(testimonialNext);
	}
	const decrementTestimonial = () => {
		const testimonialNext = testimonial <= 0 ? 2 : testimonial - 1;
		setTestimonial(testimonialNext);
	}

	return ( 
		<div style={{padding: '10px'}}>
			<Grid container sx={testimonialTextStyle.topContainer} direction={'row'} >
				<Grid item xs={12} md={6}>
					<Typography sx={sloganStyle.testimonial} >
						TESTIMONIALS
					</Typography>
				</Grid>
				<Grid item xs={12} md={6}  sx={testimonialTextStyle.gridCarousel}>
					<Carousel autoPlay={false} sx={testimonialTextStyle.carousel} >
						{testimonialTexts.map((item, i) => (
							<div key={i} style={{marginBottom: '10px'}}>
								<Item key={i} {...item} />
								<div style={{height: '5px'}}>
								</div>
							</div>
						))}
					</Carousel>
				</Grid>
			</Grid>
		</div>
	)};

export default TestimonialContent;
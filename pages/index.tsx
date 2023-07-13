import React from 'react';

import type { NextPage } from 'next'

import AboutCombined from '../components/AboutCombined';
import LandingGraphic from '../components/LandingGraphic';
import TestimonialContent from '../components/TestimonialContent';
import ContactForm from "../components/ContactForm";
// import InstagramPreview from "../components/InstagramPreview"
import HeadComponent from "../components/Head";
import { HomeSearchForm } from '../components/HomeSearchForm';
import { indexStyles } from '../components/HomeContentStyles';
import Carousel from 'react-material-ui-carousel';

import { Typography, Grid, Link, Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const Home: NextPage = ({feed}: any) => {
	const images = feed.data.filter((image) => image.media_type === 'CAROUSEL_ALBUM');

	const sliderItems: number = images.length > 2 ? 2 : images.length;
	const items: Array<any> = [];

	for (let i = 0; i < images.length; i += sliderItems) {
		if (i % sliderItems === 0) {
			items.push(
				<Grid container className="BannerGrid" justifyContent={'center'} direction={'row'}>
					{images.slice(i, i + sliderItems).map((da, index) => {
						return (
							<Grid item key={index}>
								<Grid container justifyContent={'center'} direction={'column'}>
									<img 
										style={{padding: '5px', borderRadius: '20px'}} 
										width={'220px'} 
										height={'220px'} 
										key={index.toString()} 
										src={da.media_url} 
									/>
								</Grid>
							</Grid>);
					})}
				</Grid>
			);
		}
	}

	const theme = useTheme();
	const indexStyle = indexStyles(theme);

	return (
		<div style={indexStyle.container}>
			<HeadComponent title={'Paula and Ashley Homes'} metaData={'Paula and Ashley Homes'} />
			<LandingGraphic></LandingGraphic>

			<Typography style={indexStyle.text1}>This site currently uses a test server for MLS data. It is limited, and not all zip codes will return results.<br/>
       You may use Property Type: House, Zip: 78704, Beds/Baths: 1+, Min Price: $100000, Max Price: 500000 to get some good results.</Typography>
			<HomeSearchForm></HomeSearchForm>
			<br/>
			<AboutCombined></AboutCombined>
			<TestimonialContent></TestimonialContent>
			<div style={{backgroundColor: '#dddddd'}}>
				<ContactForm></ContactForm>
			</div>
			{/* InstagramPreview To be implemented, must pass data from get static props here */}
			{/* <InstagramPreview></InstagramPreview> */}
			{images && 
			<div style={{padding: '10px'}}>
				<Grid container sx={indexStyle.instaSection}>
        	<Grid item sx={indexStyle.instaText} xs={12} md={6}>
        		<Grid container sx={indexStyle.instaTextGrid}>
        			<Grid item >
        				<Typography 
        					sx={{
        						fontSize: '2rem',
        						color: '#6D2164'}} 
        					display={'flex'} 
        					flexDirection={'row'} 
        					justifyContent={'center'}>
                    Follow us on Instagram! &nbsp;
        				</Typography>
        			</Grid>
        			<Grid item>
        				<Typography><Link href='https://www.instagram.com/27.plants/'>@27.plants</Link></Typography>
        			</Grid>
        		</Grid>
        	</Grid>
        	<Grid item xs={12} md={6} sx={indexStyle.instaCarousel}>
        		<Carousel animation="slide" autoPlay={false} cycleNavigation>
        			{items}
        		</Carousel>
        	</Grid>
				</Grid></div>
			}
		</div>
	)
}

export const getStaticProps = async () => {
	const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
	const data = await fetch(url);
	const feed = await data.json();

	return {
		props: {
			feed
		}
	}
}

export default Home

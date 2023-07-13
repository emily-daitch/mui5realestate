import { Theme } from '@mui/material';

export const testimonialTextStyles = (theme: Theme) => ({
	carousel: {
		[theme.breakpoints.down("md")]: {
			justifyContent: 'center',
			backdropFilter: `blur(10px) brightness(60%)`,
			marginTop: '5px',
			marginBottom: '5px',
			marginLeft: '5px',
			marginRight: '5px'		},
		[theme.breakpoints.up("md")]: {
			justifyContent: 'center',
			backdropFilter: `blur(10px) brightness(60%)`,
			marginTop: '10px',
			marginBottom: '5px',
			marginLeft: '10px',
			marginRight: '10px'
		},
	},
	p: {
		[theme.breakpoints.down("md")]: {
			textSize: '4vw',
			color: 'white',
			textAlign: 'center',
		},
		[theme.breakpoints.up("md")]: {
			textSize: '4vw',
			color: 'white',
			textAlign: 'center',
		},
	},
	box: {
		[theme.breakpoints.down("md")]: {
			justifyContent: 'center', 
			alignContent: 'center', 
			alignItems:'center',
			margin: '15px',
			paddingTop: '5px',
		},
		[theme.breakpoints.up("md")]: {
			justifyContent: 'center', 
			alignContent: 'center', 
			alignItems:'center',
			margin: '10px',
			paddingTop: '15px'
		},
	},
	gridCarousel: {
		[theme.breakpoints.down("md")]: {
			margin: '10px',
		},
		[theme.breakpoints.up("md")]: {
			marginTop: '40px',
			marginBottom: '20px'
		},
	},
	topContainer: {
		[theme.breakpoints.down("md")]: {
			backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/4.jpg)`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat'
		},
		[theme.breakpoints.up("md")]: {
			backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/4.jpg)`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat'
		},
	}
});
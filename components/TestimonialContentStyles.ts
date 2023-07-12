import { Theme } from '@mui/material';

export const testimonialTextStyles = (theme: Theme) => ({
	carousel: {
		[theme.breakpoints.down("md")]: {
			justifyContent: 'center',
			//backgroundColor: `rgba(255,255,255,.4)`,
			marginTop: '5px',
			marginBottom: '5px',
			marginLeft: '15px',
			marginRight: '15px'		},
		[theme.breakpoints.up("md")]: {
			justifyContent: 'center',
			backdropFilter: `blur(10px) brightness(60%)`,
			marginTop: '10px',
			marginBottom: '5px',
			marginLeft: '30px',
			marginRight: '30px'
		},
	},
	paper: {
		[theme.breakpoints.down("md")]: {
			justifyContent:'center', display:'flex', flexDirection:'row',
			marginTop: '5px',
			backgroundColor: '#cccccc',
		},
		[theme.breakpoints.up("md")]: {
			justifyContent:'center', display:'flex', flexDirection:'row',
			//backgroundImage: `url(4.jpg)`,
			backdropFilter: `opacity(60%)`,
			height: '500px',
			opacity: '0%',
			//backgroundSize: 'cover'
		},
	},
	p: {
		[theme.breakpoints.down("md")]: {
			textAlign:'center', 
			color: '#444444',
			//backdropFilter: `blur(6px) brightness(.7)`, 
			backgroundColor: '#cccccc',
			margin: 'auto',
			fontSize: '.8rem'
		},
		[theme.breakpoints.up("md")]: {
			// textAlign:'center', 
			// color: '#444444',
			// //backdropFilter: `blur(6px) brightness(.7)`, 
			// backgroundColor: '#cccccc',
			// margin: 'auto',
			textSize: '4vw',
			color: 'white',
			textAlign: 'center',
			// backdropFilter: `blur(10px) brightness(60%)`,
		},
	},
	box: {
		[theme.breakpoints.down("md")]: {
			justifyContent: 'center', 
			alignContent: 'center', 
			alignItems:'center',
			backgroundImage: 'none',
			backgroundSize: 'contain',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			//backdropFilter: `opacity(.2)`,
			paddingTop: '5px',
		},
		[theme.breakpoints.up("md")]: {
			justifyContent: 'center', 
			alignContent: 'center', 
			alignItems:'center',
			//backgroundImage: `url(4.jpg)`,
			//backgroundSize: 'contain',
			//backgroundRepeat: 'no-repeat',
			//backgroundPosition: 'center',
			//backdropFilter: `opacity(.2)`,
			//height: '400px',
			//width: '800px',
			margin: '20px',
			paddingTop: '15px'
		},
	},
	gridCarousel: {
		[theme.breakpoints.down("md")]: {
			marginTop: '20px',
			marginBottom: '10px',
			marginRight: '50px',
			marginLeft: '50px'
		},
		[theme.breakpoints.up("md")]: {
			marginTop: '40px',
			marginBottom: '20px'
		},
	},
	topContainer: {
		[theme.breakpoints.down("md")]: {
			// backgroundColor: '#dddddd',
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
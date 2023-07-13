import { Theme } from '@mui/material';

export const aboutstyles = (theme: Theme) => ({
	rep1: {
		[theme.breakpoints.down("md")]: {
			placeItems: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(2.jpg)`,
		},
		[theme.breakpoints.up("md")]: {
			placeItems: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(2.jpg)`,
		},
	},
	rep2: {
		[theme.breakpoints.down("sm")]: {
			marginTop: '5px',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			placeItems: 'center',
			backgroundImage: 'none',
			backgroundColor: '#cccccc',
		},
		[theme.breakpoints.up("sm")]: {
			marginTop: '5px',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			placeItems: 'center',
			backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(3.jpg)`,
		},
	}
});

export const textFirstRepStyles = (theme: Theme) => ({
	root: {
		[theme.breakpoints.down("md")]: {
			color: 'white',
			textAlign: 'center',
			margin: '10px',
			backdropFilter: `blur(10px) brightness(60%)`,
			padding: '10px',
		},
		[theme.breakpoints.up("md")]: {
			color: 'white',
			textAlign: 'center',
			marginTop: '50px',
			marginBottom: '50px',
			marginLeft: '10px',
			marginRight: '10px',
			backdropFilter: `blur(10px) brightness(60%)`,
			padding: '10px'
		},
	},
});

export const testimonialStyles = (theme: Theme) => ({
	root: {
		[theme.breakpoints.down("sm")]: {
			color: 'white',
			textAlign: 'center',
		},
		[theme.breakpoints.up("sm")]: {
			color: 'white',
			textAlign: 'center',
			marginLeft: '50px',
			marginRight: '50px',
		},
	},
});
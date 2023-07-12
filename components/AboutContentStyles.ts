import { Theme } from '@mui/material';

export const aboutstyles = (theme: Theme) => ({
	rep1: {
		//   padding: theme.spacing(1),
		[theme.breakpoints.down("md")]: {
			// placeItems: 'center',
			// backgroundColor: '#cccccc',
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
		//   padding: theme.spacing(1),
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
	},
	photo: {
		// 3456 x 5184
		[theme.breakpoints.down("md")]: {
			transform: `translate(0rem, -105%)`, marginLeft: '2rem',
			position: 'absolute',
			height: '51vw',
			width: '34vw'
		},
		[theme.breakpoints.up("md")]: {
			transform: `translate(0rem, -105%)`, marginLeft: '2rem',
			position: 'absolute',
			height: '51vw',
			width: '34vw'
		},
	}
});

export const expanderStyles = (theme: Theme) => ({
	root: {
		//   padding: theme.spacing(1),
		[theme.breakpoints.down("sm")]: {
			marginTop: '5px',
			height: '40px',
			maxWidth: '200px',
			color: 'white',
			display: 'flex',
			flexDirection: 'row',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundImage: 'none',
			backgroundColor: 'red',
			justifyContent: 'center'
		},
		[theme.breakpoints.up("sm")]: {
			marginTop: '5px',
			height: '1%',
			maxWidth: '200px',
			color: 'white',
			display: 'flex',
			flexDirection: 'row',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundColor: 'red',
			justifyContent: 'center'
		},
	},
});

export const expanderTextStyles = (theme: Theme) => ({
	root: {
		//   padding: theme.spacing(1),
		[theme.breakpoints.down("sm")]: {
			height: '30px',
			color: 'white',
			width: '200px',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			placeItems: 'center',
			backgroundImage: 'none',
			backgroundColor: 'gray',
			padding: '5px',
			margin: '5px',
			borderRadius: '2px'
		},
		[theme.breakpoints.up("sm")]: {
			height: '1%',
			color: 'white',
			width: '200px',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			placeItems: 'center',
			backgroundColor: 'gray',
			padding: '5px',
			margin: '5px',
			borderRadius: '2px'
		},
	},
});

export const textFirstRepStyles = (theme: Theme) => ({
	root: {
		[theme.breakpoints.down("md")]: {
			color: 'white',
			textAlign: 'center',
			margin: '20px',
			backdropFilter: `blur(10px) brightness(60%)`,
		},
		[theme.breakpoints.up("md")]: {
			color: 'white',
			textAlign: 'center',
			marginTop: '50px',
			marginBottom: '50px',
			marginLeft: '10px',
			marginRight: '10px',
			backdropFilter: `blur(10px) brightness(60%)`,
		},
	},
});

export const testimonialStyles = (theme: Theme) => ({
	root: {
		//   padding: theme.spacing(1),
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
import { Theme } from '@mui/material';

/* default breakpoints
    xs, extra-small: 0px
    sm, small: 600px
    md, medium: 900px
    lg, large: 1200px
    xl, extra-large: 1536px
*/

export const sloganStyles = (theme: Theme) => ({
	root: {
		[theme.breakpoints.down("md")]: {
			color: '#373737',
			backgroundColor: `rgba(255,255,255,.7)`,
			fontFamily: 'Archivo Narrow',
			borderRadius: '3px',
			fontSize: '4vw',
			textAlign: 'center',
		},
		[theme.breakpoints.up("md")]: {
			color: '#373737',
			backgroundColor: `rgba(255,255,255,.7)`,
			fontFamily: 'Archivo Narrow',
			borderRadius: '5px',
			fontSize: '4vw',
			textAlign: 'center',
		},
	},
	testimonial: {
		[theme.breakpoints.down("md")]: {
			color: '#373737',
			backgroundColor: `rgba(255,255,255,.7)`,
			fontFamily: 'Archivo Narrow',
			borderRadius: '3px',
			fontSize: '2rem',
			textAlign: 'center',
			margin: '20px',
			marginBottom: '5px'
		},
		[theme.breakpoints.up("md")]: {
			color: '#373737',
			backgroundColor: `rgba(255,255,255,.7)`,
			fontFamily: 'Archivo Narrow',
			borderRadius: '5px',
			fontSize: '3rem',
			textAlign: 'center',
			margin: '50px',
		},
	},
	about: {
		[theme.breakpoints.down("md")]: {
			color: '#373737',
			backgroundColor: `rgba(255,255,255,.7)`,
			fontFamily: 'Archivo Narrow',
			borderRadius: '3px',
			fontSize: '2rem',
			textAlign: 'center',
			margin: '20px',
			marginBottom: '5px'
		},
		[theme.breakpoints.up("md")]: {
			color: '#373737',
			backgroundColor: `rgba(255,255,255,.7)`,
			fontFamily: 'Archivo Narrow',
			borderRadius: '5px',
			fontSize: '3rem',
			textAlign: 'center',
			margin: '10px',
		},
	},
});

export const footerStyles = (theme: Theme) => ({
	root: {
		[theme.breakpoints.up("xs")]: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			textAlign: 'center',
		},
		[theme.breakpoints.up("md")]: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			textAlign: 'center',
		},
	},
	a: {
		[theme.breakpoints.up("xs")]: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexGrow: '1'
		},
	},
	logo: {
		[theme.breakpoints.up("xs")]: {
			height: '1em',
			marginLeft: '0.5rem'
		},
	},
})

export const contactFormStyles = (theme: Theme) => ({
	root: {
		[theme.breakpoints.up("xs")]: {
			color: '#000000',
			padding: '1rem',
			flex: '1',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			textAlign: 'center',
			fontFamily: 'Archivo Narrow'
		},
	},
	text2: {
		[theme.breakpoints.up("xs")]: {
			color: '#8D5286',
			flex: '1',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			textAlign: 'center',
			fontFamily: 'Archivo Narrow'
		},
	}
})

export const indexStyles = (theme: Theme) => ({
	container: {
		[theme.breakpoints.up("xs")]: {
			padding: '0 0',
			justifyContent: 'center',
			display: 'grid',
			flexDirection: 'column'
		},
	},
	grid: {
		[theme.breakpoints.down("md")]: {
			placeItems: 'center',
			backgroundRepeat: 'none',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundImage: `url(MichaelLewisPostcard_Short.jpg)`
		},
		[theme.breakpoints.up("md")]: {
			placeItems: 'center',
			backgroundRepeat: 'none',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundImage: `url(MichaelLewisPostcard_Short.jpg)`,
		},
	},
	main: {
		[theme.breakpoints.up("xs")]: {
			flex: '1',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignContent: 'center',
			textAlign: 'center'
		},
	},
	text1: {
		[theme.breakpoints.up("xs")]: {
			color: '#000000',
			padding: '1rem',
			flex: '1',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			textAlign: 'center'
		},
	},
	instaText: {
		[theme.breakpoints.up("xs")]: {
			color: '#000000',
			padding: '1rem',
			flex: '1',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			textAlign: 'center',
			margin: 'auto'
		},
	},
	instaTextGrid: {
		[theme.breakpoints.up("xs")]: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		},
	},
	instaSection: {
		[theme.breakpoints.up("xs")]: {
			border: '1px',
			borderStyle: 'solid',
			borderColor: 'purple',
		},
	},
	instaCarousel: {
		[theme.breakpoints.up("xs")]: {
			width: '600px',
			margin: '10px'
		},
	}
});
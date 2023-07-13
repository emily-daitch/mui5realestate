import '../styles/globals.css'
import Layout from "../components/Layout";
import { createTheme, ThemeProvider } from '@mui/material'

function MyApp({ Component, pageProps, props}) {//props }) {
	// const props = {
	// 	deviceType: 'mobile'
	// }
	console.log('props', props);
	const theme = createTheme({
		palette: {
			mode: "light",
			primary: {
				main: '#c0c0c0'
			}
		}
	});

	return (
		<ThemeProvider theme={theme}>
			<Layout {...props}>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	)

}

MyApp.getInitialProps = async(context) => {
	console.log('getInitialProps');
	const UA = context.ctx.req.headers['user-agent'];
	const isMobile = Boolean(UA?.match(
	  /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
	))
	console.log('isMobile', isMobile);
	
	return {
	  props: {
			deviceType: isMobile ? 'mobile' : 'desktop'
	  }
	}
}

export default MyApp

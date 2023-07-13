import '../styles/globals.css'
import Layout from "../components/Layout";
import { createTheme, ThemeProvider } from '@mui/material'

function MyApp({ Component, pageProps, }) {//props }) {
	const props = {
		deviceType: 'mobile'
	}
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

// MyApp.getInitialProps = async(context) => {
// 	const UA = context.ctx.req.headers['user-agent'];
// 	const isMobile = Boolean(UA?.match(
// 	  /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
// 	))
	
// 	return {
// 	  props: {
// 			deviceType: isMobile ? 'mobile' : 'desktop'
// 	  }
// 	}
// }

export default MyApp

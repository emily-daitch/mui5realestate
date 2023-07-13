import '../styles/globals.css'
import Layout from "../components/Layout";
import { createTheme, ThemeProvider } from '@mui/material'

function MyApp({ Component, pageProps}) {//props }) {
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
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	)

}

export default MyApp

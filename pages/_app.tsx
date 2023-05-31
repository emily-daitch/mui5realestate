import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import Maintenance from "../components/Maintenance";
import { createTheme, ThemeProvider } from '@mui/material'

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: '#c0c0c0'
      }
    }
  });

    if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'false') {
      return (
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      )
    } else {
      return <Maintenance />
  }

}

export default MyApp

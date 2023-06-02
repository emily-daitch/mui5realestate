import Head from "next/head";
import AboutContent from "../../components/AboutContent";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div style={{marginTop: 70}}>
        <AboutContent></AboutContent>
      </div>
    </>
  )
}

export default About;

import Head from "next/head";
import AboutContent from "../../components/AboutContent";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About Paula and Ashley" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <AboutContent></AboutContent>
    </>
  )
}

export default About;

import Head from "next/head";
import AboutContent from "../../components/AboutContent";
import TestimonialContent from "../../components/TestimonialContent";

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
				<TestimonialContent></TestimonialContent>
			</div>
		</>
	)
}

export default About;

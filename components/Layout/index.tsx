//import HomeHeader from "../homeHeader";
import NavBarWrapper from "../../components/NavBarWrapper"
import ContactFoooter from "../../components/contactFooter";
import Footer from "../footer";
import ContactFooter from "../contactFooter";

const Layout = ({children} : JSX.ElementChildrenAttribute) => {
	return (
		<>
			<NavBarWrapper />
			{children}
			<ContactFooter />
			<Footer />
		</>
	)
}

export default Layout;

import NavBarWrapper from "../../components/NavBarWrapper"
import Footer from "../footer";
import ContactFooterWrapper from "../contactFooter/ContactFooterWrapper";

const Layout = ({children}) => {
	return (
		<>
			<NavBarWrapper/>
			{children}
			<ContactFooterWrapper/>
			<Footer />
		</>
	)
}

export default Layout;

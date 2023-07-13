import NavBarWrapper from "../../components/NavBarWrapper"
import Footer from "../footer";
import ContactFooter from "../contactFooter";

const Layout = ({children, deviceType}) => {
	return (
		<>
			<NavBarWrapper {...{deviceType: deviceType}}/>
			{children}
			<ContactFooter {...{deviceType: deviceType}}/>
			<Footer />
		</>
	)
}

export default Layout;

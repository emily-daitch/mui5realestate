//import HomeHeader from "../homeHeader";
import NavBarWrapper from "../../components/NavBarWrapper"
import Footer from "../footer";

const Layout = ({children} : JSX.ElementChildrenAttribute) => {
  return (
    <>
      <NavBarWrapper />
      {children}
      <Footer />
    </>
  )
}

export default Layout;

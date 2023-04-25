//import HomeHeader from "../homeHeader";
import NavBar from "../../components/NavBar"
import Footer from "../footer";

const Layout = ({children} : JSX.ElementChildrenAttribute) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout;

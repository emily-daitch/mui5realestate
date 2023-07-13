import dynamic from "next/dynamic";

const NavBarComponent = dynamic(
	() => {
		return import("../components/NavBar");
	},
	{ ssr: false }
);

const NavBarWrapper = ({deviceType}) => {
	return (
		<div>
			<NavBarComponent {...{deviceType: deviceType}}></NavBarComponent>
		</div>

	)
}

export default NavBarWrapper;
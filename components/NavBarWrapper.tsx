import dynamic from "next/dynamic";

const NavBarComponent = dynamic(
	() => {
		return import("../components/NavBar");
	},
	{ ssr: false }
);

const NavBarWrapper = () => {
	return (
		<div>
			<NavBarComponent></NavBarComponent>
		</div>

	)
}

export default NavBarWrapper;
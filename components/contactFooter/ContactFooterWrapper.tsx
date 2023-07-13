import dynamic from "next/dynamic";

const ContactFooterComponent = dynamic(
	() => {
		return import("./footer");
	},
	{ ssr: false }
);

const ContactFooterWrapper = () => {
	return (
		<div>
			<ContactFooterComponent></ContactFooterComponent>
		</div>

	)
}

export default ContactFooterWrapper;
import { footerStyles } from "../HomeContentStyles";
import { useTheme } from '@mui/material/styles';

import Image from "next/image";

const Footer = () => {
	const theme = useTheme();
	const footerStyle = footerStyles(theme);
	return (
		<footer style={footerStyle.root}>
			<a
				href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
				style={footerStyle.a}
			>
        Powered by{' '}
				<span style={footerStyle.logo}>
					<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
				</span>
			</a>
		</footer>
	)
}

export default Footer;

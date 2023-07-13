import { useTheme } from '@mui/material/styles';
import { Paper, Grid, Typography, Link } from "@mui/material";
import { Call, Facebook, Fax, Google, Instagram, Mail } from '@mui/icons-material';
import { indexStyles, footerStyles } from '../../components/HomeContentStyles';

import Image from "next/image";

const ContactFooter = ({deviceType}) => {
	const theme = useTheme();
	const indexStyle = indexStyles(theme);
	const footerStyle = footerStyles(theme);
	return (
		<Paper sx={{backgroundColor: 'grey'}}>
			<Grid container sx={{justifyContent: 'center', padding: '10px'}}>
				<Grid sx={footerStyle.root} item key={'link1'} xs={12} md={3} lg={3} paddingLeft={1} paddingRight={2}>
					<Typography style={indexStyle.text1}>
						{deviceType === 'mobile' ? 
							<><Call /> Office:<br/> <a style={{textDecoration: 'underline'}} href="tel:+4045645560">(404)-564-5560</a></>
							: <><Call /> Office:<br/> (404)-564-5560</>
						}
					</Typography>
					<Typography style={indexStyle.text1}>
						{deviceType === 'mobile' ? 
							<><Call /> Cell:<br/> <a style={{textDecoration: 'underline'}} href="tel:+7707224897">(770)-722-4897</a></>
							: <><Call /> Cell:<br/> (770)-722-4897</>
						}
					</Typography>
					<Typography style={indexStyle.text1}>
						<Fax /> Fax:<br/> (404)-564-5561
					</Typography>
				</Grid>
				<Grid sx={footerStyle.root} item key={'addy'} xs={12} md={6} lg={6} paddingLeft={1} paddingRight={1}>
					<Image alt="logo" src='/PA house logo.png' layout='intrinsic' height={306} width={1078}></Image>
				</Grid>
				<Grid sx={footerStyle.root} item key={'link2'} xs={12} md={3} lg={3} paddingLeft={2} paddingRight={1}>
					<Typography style={indexStyle.text1}>
						<Link color='#000000' href='mailto:PGirvan@kw.com'>
							<Mail /><br/>PGirvan@kw.com
						</Link>
					</Typography>
					<Typography style={indexStyle.text1}>
						<Link color='#000000' href='https://www.facebook.com/paulaandashleyhomes/'>
							<Facebook /><br/>Follow us on Facebook!
						</Link>
					</Typography>
					<Typography style={indexStyle.text1}>
						<Link color='#000000' href='https://www.instagram.com/paula.ashley.homes/'>
							<Instagram /><br/>Follow us on Instagram!
						</Link>
					</Typography>
				</Grid>
				<Grid sx={footerStyle.root} item key={'addy'} xs={12} md={12} lg={12} paddingLeft={5} paddingRight={5}>
					<Typography style={indexStyle.text1}><br/>315 W Ponce de Leon Ave Suite 100, Decatur, GA 30030</Typography>
					<Link href='https://goo.gl/maps/QN7E6Eh1g5xYhXd48?coh=178571&entry=tt'>
						<Typography style={indexStyle.text1}>
							<Google/><br/>We would love to hear your feedback, write a review!
						</Typography>
					</Link>
				</Grid>
				<Grid sx={footerStyle.root} item key={'addy'} xs={12} md={12} lg={12} paddingLeft={5} paddingRight={5}>
				</Grid>
			</Grid>
		</Paper>
	)
}

export default ContactFooter;

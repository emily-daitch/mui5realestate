
import { Grid, Container, Typography } from "@mui/material";
import Image from "next/image"

import { sloganStyles, indexStyles } from '../components/HomeContentStyles';
import { useTheme } from '@mui/material/styles';

const LandingGraphic = () => {
	const theme = useTheme();
	const indexStyle = indexStyles(theme);
	const sloganStyle = sloganStyles(theme);

	return (
		<>
			<Container sx={{height: '70px'}}></Container>
			{/* <div style={{display: 'flex', justifyContent: 'center'}}>
				<Image alt="logo" layout='intrinsic' height={306} width={1078} src='/PA house logo.png'></Image>
			</div> */}
			<Grid container direction={'row'} sx={indexStyle.grid}>
				<Grid container xs={12} md={12} direction={'row'} justifyContent={'center'}>
					<Grid item xs={12} md={12} marginTop={'25px'} marginBottom={'20px'} sx={
						{	backgroundColor: `rgba(255, 255, 255, 0.75)`,
							marginLeft: {xs:'3vw', md:'16vw'},
							marginRight: {xs:'3vw', md:'16vw'}}
					}>
						<Image alt="logo" layout='responsive' height={306} width={1078} src='/PA house logo.png'></Image>
					</Grid>
					<Grid item xs={8} md={8} height={'30vw'} marginTop={'5vw'}>
						<Typography sx={sloganStyle.root}>Passionate &#x2022; Personal &#x2022; Professional</Typography>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default LandingGraphic;
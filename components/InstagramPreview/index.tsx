import { useTheme } from '@mui/material/styles';
import { Paper } from "@mui/material";
import { indexStyles, footerStyles } from '../../components/HomeContentStyles';

/*
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '809252040572976',
      xfbml      : true,
      version    : 'v17.0'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
*/

const InstagramPreview = () => {
	const theme = useTheme();

	return (
		<Paper sx={{backgroundColor: 'grey'}}>

		</Paper>
	)
}

export default InstagramPreview;

import { Theme } from '@mui/material';

  export const testimonialTextStyles = (theme: Theme) => ({
    carousel: {
    [theme.breakpoints.down("sm")]: {
      },
      [theme.breakpoints.up("md")]: {
        height: '500px',
        justifyContent: 'center',
        paddingTop: '10px'
        //backgroundImage: `url(4.jpg)`,
        //backgroundSize: 'contain',
        //backgroundRepeat: 'no-repeat',
        //backgroundPosition: 'center'
      },
    },
    paper: {
        [theme.breakpoints.down("sm")]: {
            justifyContent:'center', display:'flex', flexDirection:'row',
            marginTop: '5px',
            backgroundColor: '#cccccc',
        },
          [theme.breakpoints.up("md")]: {
            justifyContent:'center', display:'flex', flexDirection:'row',
            //backgroundImage: `url(4.jpg)`,
            backdropFilter: `opacity(60%)`,
            height: '500px',
            opacity: '0%',
            //backgroundSize: 'cover'
        },
    },
    p: {
        [theme.breakpoints.down("sm")]: {
            textAlign:'center',
            backgroundColor: '#cccccc',
            color: 'white'
        },
            [theme.breakpoints.up("md")]: {
                width: '500px',
                textAlign:'center', 
                color: 'white',
                backdropFilter: `blur(6px) brightness(.7)`, 
                margin: 'auto'
        },
    },
    box: {
        [theme.breakpoints.down("sm")]: {
            justifyContent: 'center', 
            alignContent: 'center', 
            alignItems:'center',
            backgroundImage: 'none',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            //backdropFilter: `opacity(.2)`,
            width: '800px',
            paddingTop: '5px'
        },
        [theme.breakpoints.up("md")]: {
                justifyContent: 'center', 
                alignContent: 'center', 
                alignItems:'center',
                backgroundImage: `url(4.jpg)`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                //backdropFilter: `opacity(.2)`,
                height: '400px',
                width: '800px',
                paddingTop: '15px'
        },
    },
  });
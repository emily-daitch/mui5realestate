import { Theme } from '@mui/material';

  export const aboutstyles = (theme: Theme) => ({
    root: {
    //   padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
        marginTop: '5px',
        height: '20%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        placeItems: 'center',
        backgroundImage: 'none',
        backgroundColor: 'gray',
      },
      [theme.breakpoints.up("md")]: {
        marginTop: '5px',
        height: '20%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        placeItems: 'center',
        backgroundImage: `url(2.jpg)`,
      },
    },
  });

  export const expanderStyles = (theme: Theme) => ({
    root: {
    //   padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
        marginTop: '5px',
        height: '20%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        placeItems: 'center',
        backgroundImage: 'none',
        backgroundColor: 'gray',
      },
      [theme.breakpoints.up("md")]: {
        marginTop: '5px',
        height: '20%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        placeItems: 'center',
        backgroundColor: 'gray',
      },
    },
  });

  export const textFirstRepStyles = (theme: Theme) => ({
    root: {
    //   padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
        color: 'white',
        textAlign: 'center',
        backdropFilter: `blur(10px)`,
      },
      [theme.breakpoints.up("md")]: {
        color: 'white',
        textAlign: 'center',
        marginLeft: '50px',
        marginRight: '50px',
        backdropFilter: `blur(10px)`,
      },
    },
  });

  export const testimonialStyles = (theme: Theme) => ({
    root: {
    //   padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
        color: 'white',
        textAlign: 'center',
        backdropFilter: `blur(10px)`,
      },
      [theme.breakpoints.up("md")]: {
        color: 'white',
        textAlign: 'center',
        marginLeft: '50px',
        marginRight: '50px',
        backdropFilter: `blur(10px)`,
      },
    },
  });
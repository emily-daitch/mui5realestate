import { Theme } from '@mui/material';

  export const aboutstyles = (theme: Theme) => ({
    rep1: {
    //   padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
        marginTop: '5px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        placeItems: 'center',
        backgroundImage: 'none',
        backgroundColor: '#cccccc',
      },
      [theme.breakpoints.up("md")]: {
        marginTop: '5px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        placeItems: 'center',
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(2.jpg)`,
      },
    },
    rep2: {
      //   padding: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
          marginTop: '5px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          placeItems: 'center',
          backgroundImage: 'none',
          backgroundColor: '#cccccc',
        },
        [theme.breakpoints.up("md")]: {
          marginTop: '5px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          placeItems: 'center',
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(3.jpg)`,
        },
      },
  });

  export const expanderStyles = (theme: Theme) => ({
    root: {
    //   padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
        marginTop: '5px',
        height: '40px',
        color: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        placeItems: 'center',
        backgroundImage: 'none',
        backgroundColor: 'gray',
        justifyContent: 'center'
      },
      [theme.breakpoints.up("md")]: {
        marginTop: '5px',
        height: '1%',
        color: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        placeItems: 'center',
        backgroundColor: 'gray',
        justifyContent: 'center'
      },
    },
  });

  export const expanderTextStyles = (theme: Theme) => ({
    root: {
    //   padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
        height: '30px',
        color: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        placeItems: 'center',
        backgroundImage: 'none',
        backgroundColor: 'gray',
      },
      [theme.breakpoints.up("md")]: {
        height: '1%',
        color: 'white',
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
    [theme.breakpoints.down("sm")]: {
        color: 'white',
        textAlign: 'center',
      },
      [theme.breakpoints.up("md")]: {
        color: 'white',
        textAlign: 'center',
        marginLeft: '50px',
        marginRight: '50px',
        backdropFilter: `blur(10px) brightness(60%)`,
      },
    },
  });

  export const testimonialStyles = (theme: Theme) => ({
    root: {
    //   padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
        color: 'white',
        textAlign: 'center',
      },
      [theme.breakpoints.up("md")]: {
        color: 'white',
        textAlign: 'center',
        marginLeft: '50px',
        marginRight: '50px',
      },
    },
  });
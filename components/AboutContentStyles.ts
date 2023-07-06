import { Theme, withTheme } from '@mui/material';

  export const aboutstyles = (theme: Theme) => ({
    root: {
    //   padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
        marginTop: '5px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        placeItems: 'center',
        backgroundImage: 'none',
        backgroundColor: 'gray',
      },
      [theme.breakpoints.up("md")]: {
        marginTop: '5px',
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
        height: '40px',
        color: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        placeItems: 'center',
        backgroundImage: 'none',
        backgroundColor: 'gray',
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
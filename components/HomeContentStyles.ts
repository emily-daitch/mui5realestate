import { Theme } from '@mui/material';

  export const sloganStyles = (theme: Theme) => ({
    root: {
    //   padding: theme.spacing(1),
    [theme.breakpoints.up("xs")]: {
        color: '#373737',
        fontSize: '6vw',
        fontFamily: 'Archivo Narrow',
        /* position: absolute; */
        /* top: 40%;
        left: 30%; */
        width: '60vw',
        transform: `translate(0%, -700%)`,
        backdropFilter: `blur(2px)`,
      },
    },
  });

  export const titleStyles = (theme: Theme) => ({
    root: {
    //   padding: theme.spacing(1),
    [theme.breakpoints.up("xs")]: {
        color: '#373737',
        fontSize: '6vw',
        fontFamily: 'Archivo Narrow',
        /* position: absolute; */
        /* top: 40%;
        left: 30%; */
        width: '40vw',
        transform: `translate(20%, -700%)`,
        backdropFilter: `blur(2px)`,
      },
    },
  });

  export const logoStyles = (theme: Theme) => ({
    root: {
    //   padding: theme.spacing(1),
    [theme.breakpoints.up("xs")]: {
        position: 'relative',
        textAlign: 'center',
        color: 'white',
      },
    },
  });
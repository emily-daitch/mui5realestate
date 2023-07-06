import { Theme } from '@mui/material';

/* default breakpoints
    xs, extra-small: 0px
    sm, small: 600px
    md, medium: 900px
    lg, large: 1200px
    xl, extra-large: 1536px
*/
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
        width: '80vw',
        transform: `translate(1%, -50vw)`,
        backdropFilter: `blur(2px)`,
      },
    [theme.breakpoints.up("md")]: {
        color: '#373737',
        fontSize: '48px',
        fontFamily: 'Archivo Narrow',
        /* position: absolute; */
        /* top: 40%;
        left: 30%; */
        width: '80vw',
        transform: `translate(1%, -50vw)`,
        backdropFilter: `blur(2px)`,
      },
    },
  });

  export const footerStyles = (theme: Theme) => ({
    root: {
    [theme.breakpoints.up("xs")]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      },
    [theme.breakpoints.up("md")]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      },
    }
  })

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
        width: '60vw',
        transform: `translate(1%, -55vw)`,
        backdropFilter: `blur(2px)`,
      },
    [theme.breakpoints.up("md")]: {
        color: '#373737',
        fontSize: '48px',
        fontFamily: 'Archivo Narrow',
        /* position: absolute; */
        /* top: 40%;
        left: 30%; */
        width: '80vw',
        transform: `translate(1%, -55vw)`,
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
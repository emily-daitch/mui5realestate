import { Theme } from '@mui/material';

/* default breakpoints
    xs, extra-small: 0px
    sm, small: 600px
    md, medium: 900px
    lg, large: 1200px
    xl, extra-large: 1536px
*/

  export const titleStyles = (theme: Theme) => ({
    root: {
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

  export const sloganStyles = (theme: Theme) => ({
    root: {
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
    },
    a: {
      [theme.breakpoints.up("xs")]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: '1'
      },
    },
    logo: {
      [theme.breakpoints.up("xs")]: {
        height: '1em',
        marginLeft: '0.5rem'
      },
    }
  })

  export const homeHeaderStyles = (theme: Theme) => ({
    root: {
      [theme.breakpoints.up("xs")]: {
        margin: '0',
        lineHeight: '1.15',
        fontSize: '4rem',
        textAlign: 'center'
      }
    }
  })

  export const contactFormStyles = (theme: Theme) => ({
    root: {
    [theme.breakpoints.up("xs")]: {
        color: '#000000',
        padding: '1rem',
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      },
    },
    text2: {
      [theme.breakpoints.up("xs")]: {
        color: '#8D5286',
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      },
    }
  })

  export const logoStyles = (theme: Theme) => ({
    root: {
    [theme.breakpoints.up("xs")]: {
        position: 'relative',
        textAlign: 'center',
        color: 'white',
      },
    },
  });

  export const indexStyles = (theme: Theme) => ({
    container: {
      [theme.breakpoints.up("xs")]: {
        padding: '0 0'
      },
    },
    headerImageContainer: {
      [theme.breakpoints.up("xs")]: {
          position: 'relative',
          textAlign: 'center',
          color: 'white'
      },
    },
    main: {
      [theme.breakpoints.up("xs")]: {
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          textAlign: 'center'
      },
    },
    text1: {
      [theme.breakpoints.up("xs")]: {
          color: '#000000',
          padding: '1rem',
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
      },
    },
    link1: {
      [theme.breakpoints.up("xs")]: {
          color: '#000000',
          padding: '1rem',
          flex: '1',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
      },
    }
  });
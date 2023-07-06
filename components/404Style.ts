import { Theme } from '@mui/material';

  export const fourStyles = (theme: Theme) => ({
    container404: {
        [theme.breakpoints.up("xs")]: {
            minHeight: '75vh',
            flex: '1 1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
    },
    header404: {
        [theme.breakpoints.up("xs")]: {
            color: 'red'
        }
    },
    button404: {
        [theme.breakpoints.up("xs")]: {
            color: '#0070f3',
            border: '1px solid blue',
            borderRadius: '4px',
            padding: '5px'
        }
    }
  });
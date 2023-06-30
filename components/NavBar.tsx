// from https://mui.com/material-ui/react-app-bar/

import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import { AppBar, Box, Button, Container, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
  IconButton, Link, Menu, MenuItem, Toolbar, Tooltip, Typography, useScrollTrigger  } from '@mui/material';
import Image from 'next/image';
import logo from './images/PA White Logo.png';

// const pages = ['Home', 'About', 'Properties', 'Communities', 'Buyers', 'Sellers', 'Contact'];
const pages = ['Home', 'About', 'Contact', 'MapSearch'];

function ResponsiveAppBar(props: any) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleContactUs = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window : undefined
  });

  return (
    <AppBar position="fixed" sx={{color:'#8D5286', height: 70, background: { xs: '#ddd', md: trigger ? "#ddd" : "transparent" }}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#D8C3D5',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <img src='/output-onlinepngtools.png' height={50} width={100} alt="Logo" />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Tooltip title="Menu">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color={trigger ? "secondary" : "default"}
              >
                <MenuIcon />
              </IconButton>
              </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {/* <Typography textAlign="center">{page}</Typography> */}
                  <Button
                    key={page}
                    href={`/${page == 'Home' ? '' : page}`}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#808080', display: 'block' }}
                  >
                    {page}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 0,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#8D5286',
              textDecoration: 'none',
            }}
          >

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                href={`/${page == 'Home' ? '' : page}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: trigger? '#a0a0a0' : '#303030', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Call Us">
              <a href="tel:+4045645560" onClick={(e) => { if (window.innerWidth > 768) { e.preventDefault(); handleOpenDialog(); } }} style={{ textDecoration: 'none', color: 'inherit' }}>
                <IconButton sx={{ p: 0 }}>
                  <CallIcon />
                </IconButton>
              </a>
            </Tooltip>
          </Box>
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Call Us</DialogTitle>
            <DialogContent>
              <DialogContentText>Please call us at: +4045645560</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
          <Box sx={{ flexGrow: 0, paddingLeft: 5}}>
            <Tooltip title="Contact Us">
              <IconButton href={`/Contact`} sx={{ p: 0 }}>
                <MailIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

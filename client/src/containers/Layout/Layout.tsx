import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom';
import * as classes from './Layout.style';
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Link } from 'react-router-dom';

function Layout(): JSX.Element {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={classes.appBar} position='sticky'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
                Blogify
              </Link>
            </Typography>
            <Stack direction='row' spacing={2}>
              <Button
                startIcon={<LoginIcon />}
                variant='contained'
                color='primary'
              >
                Login
              </Button>
              <Button
                startIcon={<VpnKeyIcon />}
                variant='contained'
                color='secondary'
              >
                Register
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </div>
  );
}

export default Layout;

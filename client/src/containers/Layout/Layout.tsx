import React from 'react';
import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import * as classes from './Layout.style';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.jpeg';
import { RootState } from '../../store/Store';
import { useSelector, useDispatch } from 'react-redux';
import axios, { baseUrl } from '../../axiosInstance';
import * as actionCreators from '../../store/actions';

function Layout(): JSX.Element {
  const state = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [loading, setLoading] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = async () => {
    setLoading(true);
    try {
      await axios.get('/api/v1/users/logout');
      dispatch({ type: actionCreators.AuthAction.LOGOUT });
      setAnchorEl(null);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  return (
    <div>
      {/* <Box sx={{ flexGrow: 1 }}> */}
      <AppBar sx={classes.appBar} position='relative'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
              <img
                style={{
                  display: 'block',
                  width: '5rem',
                  borderRadius: '1rem',
                }}
                src={logo}
                alt='logo'
              />
            </Link>
          </Typography>
          <Stack direction='row' spacing={2}>
            {/* <Link
              to='/auth/signup'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Button
                startIcon={<VpnKeyIcon />}
                variant='contained'
                color='secondary'
              >
                Register
              </Button>
            </Link> */}
            {state.user && (
              <>
                <Button
                  startIcon={
                    <Avatar
                      src={`${baseUrl}/static/images/${state.user.photo}`}
                      sx={{ width: 30, height: 30 }}
                    />
                  }
                  variant='outlined'
                  size='small'
                  sx={{ borderRadius: 24 }}
                  id='basic-button'
                  aria-controls='basic-menu'
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  {state.user.firstname} {state.user.lastname}
                </Button>
                <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={logout}>
                    {loading ? 'Logging out...' : 'Logout'}
                  </MenuItem>
                </Menu>
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      {/* </Box> */}
      <Outlet />
    </div>
  );
}

export default Layout;

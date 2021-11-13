import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import * as classes from './Profile.style';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { blueGrey } from '@mui/material/colors';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Profile.module.css';
import { person } from './../../utils/images';

function Profile(): JSX.Element {
  const setActiveClassName = (active: { isActive: boolean }) => {
    if (active.isActive) {
      return `${styles.navBtnActive}`;
    } else {
      return styles.navBtn;
    }
  };
  return (
    <Box>
      {/* TOP SECTION */}
      <Box sx={classes.topContainer}>
        {/* COVER PHOTO SECTION */}
        <Box sx={classes.coverPhoto}>Add</Box>
        {/* USER SUMMARY SECTION */}
        <Box sx={{ padding: '0 4rem', marginBottom: '1rem' }}>
          <Stack
            direction='row'
            sx={{ marginTop: '-3rem' }}
            spacing={4}
            alignItems='flex-end'
          >
            {/* USER AVATAR */}
            <Badge
              overlap='circular'
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={
                <Avatar sx={{ bgcolor: blueGrey[900] }}>
                  <CameraAltIcon sx={{ color: blueGrey[100] }} />
                </Avatar>
              }
            >
              <Avatar
                sx={{ width: 170, height: 170 }}
                alt='Travis Howard'
                src={person[5]}
              />
            </Badge>
            <Stack direction='column'>
              <Typography variant='h4' color={blueGrey[100]} component='div'>
                Shambho Ji Shrestha
              </Typography>
              <Typography variant='h6' color={blueGrey[100]} component='div'>
                72 mutual friends
              </Typography>
              <AvatarGroup max={4}>
                <Avatar alt='Remy Sharp' src={person[0]} />
                <Avatar alt='Travis Howard' src={person[1]} />
                <Avatar alt='Cindy Baker' src={person[2]} />
                <Avatar alt='Agnes Walker' src={person[3]} />
                <Avatar alt='Trevor Henderson' src={person[4]} />
              </AvatarGroup>
            </Stack>
          </Stack>
          <Divider sx={{ borderColor: 'var(--divider)', marginTop: '2rem' }} />
        </Box>

        {/* TAB BAR SECTION */}
        <Stack direction='row' sx={{ padding: '0 4rem' }} spacing={4}>
          <NavLink
            className={(active) => setActiveClassName(active)}
            to='/profile'
          >
            Posts
          </NavLink>
          <NavLink
            className={(active) => setActiveClassName(active)}
            color='secondary'
            to='/profile/about'
          >
            About
          </NavLink>
          <NavLink
            className={(active) => setActiveClassName(active)}
            to='/profile/photos'
          >
            Photos
          </NavLink>
        </Stack>
      </Box>
      {/* BOTTOM SECTION */}
      <Box sx={classes.bottomContainer}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Profile;

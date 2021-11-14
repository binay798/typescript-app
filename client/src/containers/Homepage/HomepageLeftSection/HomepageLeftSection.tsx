import {
  Box,
  Avatar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Button,
} from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Link } from 'react-router-dom';
import * as images from './../../../utils/images';

function HomepageLeftSection(): JSX.Element {
  return (
    <Box
      sx={{
        overflowY: 'scroll',
        height: '88vh',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <List>
        <Link to='profile' style={{ color: 'inherit', textDecoration: 'none' }}>
          <ListItemButton>
            <ListItemIcon>
              <Avatar src={images.person[4]} alt='B' />
            </ListItemIcon>
            <ListItemText primary='Binay shrestha' />
          </ListItemButton>
        </Link>

        <Divider sx={{ borderColor: 'var(--divider)' }} />
        <Link style={{ color: 'inherit', textDecoration: 'none' }} to='/groups'>
          <ListItemButton>
            <ListItemIcon>
              <GroupsIcon sx={{ color: 'var(--light)', fontSize: '3rem' }} />
            </ListItemIcon>
            <ListItemText primary='Groups' />
          </ListItemButton>
        </Link>
        <Link
          style={{ color: 'inherit', textDecoration: 'none' }}
          to='/groups/create'
        >
          <ListItemButton>
            <ListItemIcon>
              <GroupAddIcon sx={{ color: 'var(--light)', fontSize: '3rem' }} />
            </ListItemIcon>
            <ListItemText primary='Create group' />
          </ListItemButton>
        </Link>
      </List>

      {/* RECENTELY ADDED GROUPS */}
      <List
        sx={{ width: '100%' }}
        component='nav'
        aria-labelledby='nested-list-subheader'
      >
        <Typography
          variant='subtitle1'
          sx={{
            color: 'var(--heading-primary)',
            fontWeight: '600',
            marginLeft: '1rem',
            marginBottom: '1rem',
          }}
          component='div'
        >
          Recently added groups
        </Typography>
        <ListItemButton>
          <ListItemIcon>
            <Avatar src={images.groups[0]} alt='A' />
          </ListItemIcon>
          <ListItemText primary='Animal lovers' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar src={images.groups[1]} alt='A' />
          </ListItemIcon>
          <ListItemText primary='Aerospace' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar src={images.groups[2]} alt='A' />
          </ListItemIcon>
          <ListItemText primary='Meme group' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar src={images.groups[3]} alt='A' />
          </ListItemIcon>
          <ListItemText primary='Javascript Programming' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar src={images.groups[4]} alt='A' />
          </ListItemIcon>
          <ListItemText primary='Technology' />
        </ListItemButton>

        <Button sx={{ margin: '2rem' }} variant='contained'>
          Explore more groups
        </Button>
      </List>
    </Box>
  );
}

export default HomepageLeftSection;

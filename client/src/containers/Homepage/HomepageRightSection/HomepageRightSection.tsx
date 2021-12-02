import {
  Box,
  Avatar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
} from '@mui/material';
import * as images from './../../../utils/images';

function HomepageRightSection() {
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
      {/* PEOPLE YOU MAY KNOW */}
      <List>
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
          People you may know
        </Typography>
        <ListItemButton>
          <ListItemIcon>
            <Avatar src={images.person[0]} alt='B' />
          </ListItemIcon>
          <ListItemText primary='Obama Riot' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar src={images.person[1]} alt='B' />
          </ListItemIcon>
          <ListItemText primary='Christine Smith' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar src={images.person[2]} alt='B' />
          </ListItemIcon>
          <ListItemText primary='Julia Mendosa' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar src={images.person[3]} alt='B' />
          </ListItemIcon>
          <ListItemText primary='Robert Smith' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar src={images.person[4]} alt='B' />
          </ListItemIcon>
          <ListItemText primary='Binay shrestha' />
        </ListItemButton>
        <Button sx={{ width: '95%' }} variant='contained'>
          See more users
        </Button>
      </List>
    </Box>
  );
}

export default HomepageRightSection;

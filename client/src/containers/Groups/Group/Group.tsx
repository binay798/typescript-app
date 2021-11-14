import {
  Box,
  Stack,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Button,
} from '@mui/material';
import { groups, person } from '../../../utils/images';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublicIcon from '@mui/icons-material/Public';
import AddIcon from '@mui/icons-material/Add';
import Post from './../../../components/Post/Post';

export const groupPhotoContainer = {
  height: '35rem',
  borderRadius: '0 0 1rem 1rem',
  overflow: 'hidden',
  margin: '0 4rem',
};

export const groupMainContainer = {
  padding: '4rem',
};
function Group() {
  return (
    <Box>
      {/* GROUP PHOTO */}
      <Box position='relative' sx={groupPhotoContainer}>
        <img
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src={groups[2]}
          alt='group'
        />
        <Box
          position='absolute'
          sx={{ background: 'green', width: '100%', padding: '0.5rem 1rem' }}
          bottom={0}
          left={0}
        >
          <Typography variant='body2' color='secondary.light'>
            Group by:{' '}
            <span style={{ fontWeight: 600 }}>DN Javascript Developers</span>
          </Typography>
        </Box>
      </Box>
      {/* GROUP BASIC DETAIL */}
      <Box
        sx={{
          padding: '8rem 4rem 4rem 4rem',
          background: 'var(--appbar)',
          marginTop: '-4rem',
        }}
      >
        <Typography variant='h4' color='secondary.light' gutterBottom>
          DN: JavaScript Developers Nepal
        </Typography>
        <Typography color='secondary'>
          <Stack direction='row' spacing={1}>
            <PublicIcon />

            <span>Public. 120k members</span>
          </Stack>
        </Typography>
      </Box>
      {/* GROUP MAIN CONTENT IE. POSTS ETC. */}
      <GroupContainer />
    </Box>
  );
}

function GroupContainer(): JSX.Element {
  return (
    <Grid container sx={groupMainContainer} spacing={3}>
      <Grid item sm={7}>
        <Box>
          <CreateNewGroupPost />
          <Stack direction='column' sx={{ marginTop: '3rem' }} spacing={3}>
            <Post />
            <Post />
            <Post />
            <Post />
          </Stack>
        </Box>
      </Grid>
      <Grid item sm={5}>
        <Box position='sticky' top={20}>
          <Paper sx={{ padding: '2rem' }}>
            <Typography gutterBottom variant='h6'>
              About
            </Typography>
            <Typography variant='body2' color='secondary'>
              The main purpose of this group is to network among the developers.
            </Typography>
            {/* LIST */}
            <List>
              <ListItem>
                <ListItemIcon>
                  <PublicIcon />
                </ListItemIcon>
                <ListItemText
                  primary='Public'
                  secondary='Anyone can see who is in the group and what they post.'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant='body2' sx={{ fontWeight: 600 }}>
                      Kathmandu, Nepal
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}

function CreateNewGroupPost(): JSX.Element {
  return (
    <Paper sx={{ padding: '2rem' }}>
      <Stack direction='row' spacing={2} alignItems='center'>
        <Avatar src={person[3]} alt='person' />
        <Button
          sx={{ width: '100%' }}
          startIcon={<AddIcon />}
          variant='contained'
          color='secondary'
        >
          Create New Post
        </Button>
      </Stack>
    </Paper>
  );
}
export default Group;

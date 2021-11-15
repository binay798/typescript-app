import {
  Box,
  Paper,
  Typography,
  Grid,
  Stack,
  TextField,
  InputAdornment,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { person } from './../../utils/images';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const leftSideStyle = {
  background: 'var(--appbar)',
  maxHeight: '100vh',
  height: '100%',
  '&::-webkit-scrollbar': { display: 'none' },
  borderRight: '1px solid gray',
};

const rightSideStyle = {
  background: 'var(--body)',
  maxHeight: '100vh',
  height: '100%',
  padding: '4rem',
};

function Users(): JSX.Element {
  return (
    <Grid container>
      <Grid item sm={3}>
        <Box sx={{ ...leftSideStyle, overflowY: 'scroll' }}>
          <LeftContainer />
        </Box>
      </Grid>
      <Grid item sm={9}>
        <Box
          sx={{
            ...rightSideStyle,
            overflowY: 'scroll',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          <RightContainer />
        </Box>
      </Grid>
    </Grid>
  );
}

function LeftContainer(): JSX.Element {
  return (
    <Box>
      <Typography
        gutterBottom
        sx={{ fontWeight: 600, padding: '1rem' }}
        color='secondary.light'
        variant='h5'
      >
        Users
      </Typography>
      {/* USER SEARCH FORM */}
      <form style={{ padding: '1rem' }}>
        <Stack direction='column' spacing={2} sx={{ marginBottom: '2rem' }}>
          <TextField
            sx={{ width: '100%' }}
            variant='outlined'
            label='Search User'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button variant='contained' color='secondary'>
            Search
          </Button>
        </Stack>
      </form>
      {/* MY FRIENDS */}
      <Typography
        variant='body1'
        color='secondary.light'
        sx={{ fontWeight: 600, padding: '1rem' }}
      >
        Your Friends
      </Typography>
      {/* FRIEND LISTS */}
      <List>
        {person.map((el, id) => {
          return (
            <ListItem key={id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar src={el} alt='person' />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant='body1'
                      sx={{ fontWeight: 600 }}
                      color='secondary.light'
                    >
                      John Smith
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

function RightContainer(): JSX.Element {
  return (
    <Paper sx={{ padding: '1rem', background: 'var(--appbar)' }}>
      <Typography
        gutterBottom
        sx={{ fontWeight: 600, padding: '1rem' }}
        color='secondary.light'
        variant='h5'
      >
        People You May Know
      </Typography>

      {/* USERS CONTAINER */}
      <Grid container spacing={4} sx={{ padding: '1rem 4rem' }}>
        {person.map((el, id) => {
          return (
            <Grid key={id} item sm={6}>
              <Paper sx={{ padding: '2rem 3rem' }}>
                <Stack direction='row' spacing={2} alignItems='center'>
                  <Avatar src={el} />
                  <ListItemText
                    primary={
                      <Typography
                        variant='body1'
                        color='secondary.light'
                        sx={{ fontWeight: 600 }}
                      >
                        Angelina
                      </Typography>
                    }
                    secondary={
                      <Typography variant='body2' color='secondary'>
                        125 followers
                      </Typography>
                    }
                  />
                  <IconButton>
                    <PersonAddIcon />
                  </IconButton>
                </Stack>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
}

export default Users;

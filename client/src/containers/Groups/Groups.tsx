import {
  Grid,
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { groups } from '../../utils/images';
import { blueGrey } from '@mui/material/colors';
import { Outlet } from 'react-router-dom';

const leftSideStyle = {
  background: 'var(--appbar)',
  maxHeight: '100vh',
  padding: '1rem',
  height: '100%',
  '&::-webkit-scrollbar': { display: 'none' },
};

const rightSideStyle = {
  background: 'var(--body)',
  maxHeight: '100vh',
  height: '100%',
};

const img = {
  display: 'block',
  width: '5rem',
  borderRadius: '1rem',
};

function Groups() {
  return (
    <Grid container>
      <Grid item sm={3}>
        <Box sx={{ ...leftSideStyle, overflowY: 'scroll' }}>
          <Typography
            color='secondary.light'
            style={{ fontWeight: 600, marginBottom: '1rem' }}
            variant='h5'
          >
            Groups
          </Typography>
          {/* SEARCH GROUPS */}
          <TextField
            sx={{ width: '100%' }}
            id='outlined-basic'
            label='Search groups'
            variant='outlined'
            type='text'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          {/* CREATE NEW GROUP BUTTON */}
          <Button
            startIcon={<AddIcon />}
            sx={{ width: '100%', marginTop: '2rem' }}
            variant='contained'
          >
            Create New Group
          </Button>
          {/* GROUPS THAT YOU HAVE JOINED */}
          <YourGroupList />
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
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
}

function YourGroupList(): JSX.Element {
  return (
    <Box>
      <Typography
        sx={{ fontWeight: 600, marginTop: '1rem' }}
        color='secondary'
        variant='body1'
      >
        Groups you've joined
      </Typography>
      {/* MAIN GROUP LIST CONTAINER */}
      <List>
        {groups.map((el) => {
          return (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img style={img} alt='hello' src={el} />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: blueGrey[100] }}
                  primary={
                    <Typography
                      color='secondary.light'
                      sx={{ fontWeight: 600 }}
                      variant='body2'
                    >
                      DN:Javascript Developers
                    </Typography>
                  }
                  secondary='1.6k members'
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default Groups;

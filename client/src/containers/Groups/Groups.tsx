import { useEffect } from 'react';
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
import { blueGrey } from '@mui/material/colors';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../axiosInstance';
import * as Actions from '../../store/actions/index';
import { RootState } from '../../store/Store';
import { Group } from '../../store/reducers/group.reducer';
import { baseUrl } from '../../axiosInstance';

const leftSideStyle = {
  background: 'var(--appbar)',
  minHeight: 'calc(100vh - 6rem)',
  padding: '1rem',
  height: '100%',
  '&::-webkit-scrollbar': { display: 'none' },
  borderRight: '1px solid gray',
};

const rightSideStyle = {
  background: 'var(--body)',
  height: 'calc(100vh - 6rem)',
  overflowY: 'scroll',
};

const img = {
  display: 'block',
  width: '5rem',
  borderRadius: '1rem',
};

function Groups() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.group);
  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get('/api/v1/groups');
        dispatch({
          type: Actions.GroupAction.GET_GROUPS,
          payload: res.data,
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, [dispatch]);
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
          <Link
            style={{ color: 'inherit', textDecoration: 'none' }}
            to='/groups/create'
          >
            <Button
              startIcon={<AddIcon />}
              sx={{ width: '100%', marginTop: '2rem' }}
              variant='contained'
            >
              Create New Group
            </Button>
          </Link>

          {/* GROUPS THAT YOU HAVE JOINED */}
          <YourGroupList groups={state.groups} />
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

interface YourGroupListProps {
  groups: Group[];
}

function YourGroupList(props: YourGroupListProps): JSX.Element {
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
        {props.groups.map((el, id) => {
          return (
            <Link
              to={`/groups/${el._id}`}
              key={id}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img
                      style={img}
                      alt={el.name}
                      src={`${baseUrl}/static/images/${el.photo}`}
                    />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: blueGrey[100] }}
                    primary={
                      <Typography
                        color='secondary.light'
                        sx={{ fontWeight: 600 }}
                        variant='body2'
                      >
                        {el.name}
                      </Typography>
                    }
                    secondary='1.6k members'
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Box>
  );
}

export default Groups;

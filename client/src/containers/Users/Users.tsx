import { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Stack,
  TextField,
  InputAdornment,
  Button,
  ListItemText,
  Avatar,
  Pagination,
  CircularProgress,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios, { baseUrl } from '../../axiosInstance';
import { User } from '../../store/reducers/auth.reducer';

const leftSideStyle = {
  background: 'var(--appbar)',
  maxHeight: '100vh',
  height: '100%',
  '&::-webkit-scrollbar': { display: 'none' },
  borderRight: '1px solid gray',
};

const rightSideStyle = {
  background: 'var(--body)',
  height: '100vh',
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
    </Box>
  );
}

function RightContainer(): JSX.Element {
  const [users, setUsers] = useState<User[] | null>(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 4;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/api/v1/users/count`);
        setTotal(res.data.users);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    setUsers(null);
    (async () => {
      try {
        const res = await axios.get(
          `/api/v1/users?limit=${limit}&page=${page}`
        );
        setUsers(res.data.users);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [page]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
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
      {!users && (
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={1}
          sx={{ paddingBottom: '2rem' }}
        >
          <CircularProgress />
          <Typography variant='body2' color='secondary'>
            Loading...
          </Typography>
        </Stack>
      )}
      <Grid container spacing={4} sx={{ padding: '1rem 4rem' }}>
        {users &&
          users.length !== 0 &&
          users.map((el, id) => {
            return (
              <Grid key={id} item sm={6}>
                <Paper sx={{ padding: '2rem 3rem' }}>
                  <Stack direction='row' spacing={2} alignItems='center'>
                    <Avatar src={`${baseUrl}/static/images/${el.photo}`} />
                    <ListItemText
                      primary={
                        <Typography
                          variant='body1'
                          color='secondary.light'
                          sx={{ fontWeight: 600 }}
                        >
                          {`${el.firstname} ${el.lastname}`}
                        </Typography>
                      }
                      secondary={
                        <Typography variant='body2' color='secondary'>
                          125 followers
                        </Typography>
                      }
                    />
                    <Button size='small' variant='outlined' color='primary'>
                      View
                    </Button>
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
      </Grid>
      <Stack direction='row' justifyContent='center' sx={{ padding: '1rem 0' }}>
        <Pagination
          page={page}
          count={Math.ceil(total / limit)}
          onChange={handleChange}
          color='primary'
        />
      </Stack>
    </Paper>
  );
}

export default Users;

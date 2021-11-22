import { useEffect, useState } from 'react';
import {
  Grid,
  Paper,
  Stack,
  Typography,
  ListItemIcon,
  Button,
  Box,
} from '@mui/material';
import * as images from './../../../utils/images';

import AddPost from '../../../components/AddPost/AddPost';
import * as classes from './Posts.style';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';
import { purple, blueGrey } from '@mui/material/colors';
import Post from '../../../components/Post/Post';
import axios from '../../../axiosInstance';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/Store';
import { Post as SinglePost } from '../../../store/reducers/post.reducer';

function Posts(): JSX.Element {
  const state = useSelector((state: RootState) => state.auth);
  const [posts, setPosts] = useState<SinglePost[] | null>(null);
  // GET YOUR POST
  useEffect(() => {
    (async () => {
      try {
        if (!state.user) return;
        const authorId = state.user._id;
        let res = await axios.get(
          `/api/v1/posts?author=${authorId}&limit=5&populate=author`
        );
        setPosts(res.data.posts);
      } catch (err) {
        console.log(err);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item sm={5}>
        <Stack direction='column' spacing={2}>
          <Intro />

          <Photos />
          <Friends />
        </Stack>
      </Grid>
      <Grid item sm={7}>
        <AddPost />

        {/* ALL POSTS */}
        <Stack direction='column' sx={{ margin: '2rem auto' }} spacing={4}>
          {posts &&
            posts.map((el) => {
              return <Post data={el} key={el._id} />;
            })}
        </Stack>
      </Grid>
    </Grid>
  );
}

function Photos(): JSX.Element {
  const photos = [...images.person];
  return (
    <Paper sx={classes.paper}>
      <Stack
        direction='row'
        sx={{ marginBottom: '1rem' }}
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography variant='h6'>Photos</Typography>
        <Link
          style={{ color: purple[700], textDecoration: 'none' }}
          to='/profile/photos'
        >
          <Button>See all photos</Button>
        </Link>
      </Stack>
      {/* PHOTOS */}
      <Box sx={classes.photoContainer}>
        {photos.map((el, id) => {
          return (
            <Box key={id}>
              <img
                style={{ display: 'block', width: '100%', cursor: 'pointer' }}
                src={el}
                alt='hello'
              />
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
}

function Intro(): JSX.Element {
  return (
    <Paper sx={classes.paper}>
      <Typography variant='h6' gutterBottom component='div'>
        Intro
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant='body2'>
                Went to
                <span style={{ fontWeight: 600, display: 'block' }}>
                  Amrit Science Campus
                </span>
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant='body2'>
                Went to
                <span style={{ fontWeight: 600, display: 'block' }}>
                  Everest Innovative College
                </span>
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant='body2'>
                Lives in
                <span style={{ fontWeight: 600, display: 'block' }}>
                  Kathmandu,Nepal
                </span>
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant='body2'>
                From
                <span style={{ fontWeight: 600, display: 'block' }}>
                  Kathmandu, Nepal
                </span>
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Paper>
  );
}
function Friends(): JSX.Element {
  return (
    <Paper sx={classes.paper}>
      <Stack
        direction='row'
        sx={{ marginBottom: '1rem' }}
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography variant='h6'>Friends</Typography>
        <Link
          style={{ color: purple[700], textDecoration: 'none' }}
          to='/profile/photos'
        >
          <Button>See all friends</Button>
        </Link>
      </Stack>

      {/* FRIENDS */}
      <Box sx={classes.photoContainer}>
        <FriendCard img={images.person[1]} name='John smith' />
        <FriendCard img={images.person[1]} name='John smith' />

        <FriendCard img={images.person[1]} name='John smith' />

        <FriendCard img={images.person[1]} name='John smith' />
      </Box>
    </Paper>
  );
}

interface FriendCardProps {
  img: string;
  name: string;
}

function FriendCard(props: FriendCardProps): JSX.Element {
  return (
    <Stack direction='column'>
      <img
        style={{ ...classes.img, borderRadius: '1rem' }}
        src={props.img}
        alt={props.name}
      />
      <Typography
        style={{ fontWeight: 600, marginTop: '.5rem' }}
        variant='caption'
        color={blueGrey[200]}
      >
        {props.name}
      </Typography>
    </Stack>
  );
}

export default Posts;

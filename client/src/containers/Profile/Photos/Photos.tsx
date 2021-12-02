import { useState, useEffect } from 'react';
import { Typography, Box, Paper, CircularProgress, Stack } from '@mui/material';
import * as classes from './Photos.style';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/Store';
import axios, { baseUrl } from '../../../axiosInstance';
import { Post as SinglePost } from '../../../store/reducers/post.reducer';

function Photos() {
  const state = useSelector((state: RootState) => state.auth);
  const [posts, setPosts] = useState<SinglePost[] | null>(null);
  // GET YOUR POST
  useEffect(() => {
    (async () => {
      try {
        if (!state.user) return;
        const authorId = state.user._id;
        let res = await axios.get(
          `/api/v1/posts?author=${authorId}&limit=5&populate=author&fields=photo`
        );
        setPosts(res.data.posts);
      } catch (err) {
        console.log(err);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Paper sx={classes.container}>
      <Typography style={{ marginBottom: '1rem' }} variant='h5'>
        Photos
      </Typography>
      {!posts && (
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='center'
          spacing={1}
        >
          <CircularProgress />
          <Typography variant='body2' color='secondary'>
            Loading...
          </Typography>
        </Stack>
      )}

      <Box sx={classes.photoContainer}>
        {posts &&
          posts.map((el, id) => {
            return (
              <img
                style={classes.img}
                src={`${baseUrl}/static/images/${el.photo}`}
                alt='hello'
              />
            );
          })}
      </Box>
    </Paper>
  );
}

export default Photos;

import { useState } from 'react';
import { Grid, Box, Stack, CircularProgress, Typography } from '@mui/material';
import { useEffect } from 'react';
import * as classes from './Homepage.style';
import HomepageLeftSection from './HomepageLeftSection/HomepageLeftSection';
import HomepageRightSection from './HomepageRightSection/HomepageRightSection';
import Post from './../../components/Post/Post';
import AddPost from '../../components/AddPost/AddPost';

import axios from '../../axiosInstance';
import { Post as SinglePost } from '../../store/reducers/post.reducer';
import axiosMain from 'axios';

function Homepage(): JSX.Element {
  const [posts, setPosts] = useState<SinglePost[] | null>(null);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    const cancelToken = axiosMain.CancelToken.source();
    (async () => {
      if (posts && posts.length !== 0) return;

      // setLoading(true);
      try {
        let res = await axios.get('/api/v1/posts?limit=5&populate=author', {
          cancelToken: cancelToken.token,
        });
        setPosts(res.data.posts);
        // setLoading(false);
      } catch (err) {
        console.log(err);
        // setLoading(false);
      }
    })();
    return () => {
      cancelToken.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Grid
      container
      justifyContent='space-between'
      sx={classes.container}
      columnSpacing={{ md: 8, xs: 1 }}
    >
      <Box
        component={Grid}
        item
        md={3}
        display={{ sm: 'none', md: 'block', xs: 'none' }}
      >
        <HomepageLeftSection />
      </Box>
      <Grid item md={5} sm={8}>
        <Box
          sx={{
            margin: '0 auto',
            marginTop: '2rem',
            overflowY: 'scroll',
            height: '85vh',
            // width: '75%',
          }}
        >
          <AddPost />
          {/* POSTS */}

          {!posts ? (
            <Stack
              sx={{ padding: '2rem' }}
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
          ) : null}

          <Stack spacing={8} sx={{ margin: '0 auto', marginTop: '3rem' }}>
            {posts &&
              posts.map((el, id) => {
                return <Post key={id} data={el} />;
              })}
          </Stack>
        </Box>
      </Grid>
      <Box
        component={Grid}
        item
        md={3}
        sm={4}
        display={{ md: 'block', xs: 'none', sm: 'block' }}
      >
        <HomepageRightSection />
      </Box>
    </Grid>
  );
}

export default Homepage;

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

function Homepage(): JSX.Element {
  const [posts, setPosts] = useState<SinglePost[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        if (posts.length !== 0) return;
        let res = await axios.get('/api/v1/posts?limit=5&populate=author');
        setPosts(res.data.posts);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Grid container sx={classes.container} spacing={8}>
      <Grid item sm={3}>
        <HomepageLeftSection />
      </Grid>
      <Grid item sm={6}>
        <Box
          sx={{
            margin: '0 auto',
            marginTop: '2rem',
            overflowY: 'scroll',
            height: '85vh',
            width: '75%',
          }}
        >
          <AddPost />
          {/* POSTS */}

          {loading ? (
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
            {posts.length !== 0 &&
              posts.map((el, id) => {
                return <Post key={id} data={el} />;
              })}
          </Stack>
        </Box>
      </Grid>
      <Grid item sm={3}>
        <HomepageRightSection />
      </Grid>
    </Grid>
  );
}

export default Homepage;

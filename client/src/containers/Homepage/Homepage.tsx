import { Grid, Box, Stack } from '@mui/material';
import { useEffect } from 'react';
import * as classes from './Homepage.style';
import HomepageLeftSection from './HomepageLeftSection/HomepageLeftSection';
import HomepageRightSection from './HomepageRightSection/HomepageRightSection';
import Post from './../../components/Post/Post';
import AddPost from '../../components/AddPost/AddPost';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../../store/Store';
import axios from '../../axiosInstance';
import * as Actions from './../../store/actions/index';

function Homepage(): JSX.Element {
  const state = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        if (state.posts.length !== 0) return;
        let res = await axios.get('/api/v1/posts?limit=5&populate=author');
        dispatch({ type: Actions.PostAction.GET_POSTS, payload: res.data });
      } catch (err) {
        console.log(err);
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

          <Stack spacing={8} sx={{ margin: '0 auto', marginTop: '3rem' }}>
            {state.posts.length !== 0 &&
              state.posts.map((el, id) => {
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

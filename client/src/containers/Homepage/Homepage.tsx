import { Grid, Box, Stack } from '@mui/material';

import * as classes from './Homepage.style';
import HomepageLeftSection from './HomepageLeftSection/HomepageLeftSection';
import HomepageRightSection from './HomepageRightSection/HomepageRightSection';
import Post from './../../components/Post/Post';
import AddPost from '../../components/AddPost/AddPost';

function Homepage(): JSX.Element {
  return (
    <Grid container sx={classes.container} spacing={8}>
      <Grid item sm={3}>
        <HomepageLeftSection />
      </Grid>
      <Grid item sm={6}>
        <Box
          sx={{
            marginTop: '2rem',
            overflowY: 'scroll',
            height: '85vh',
          }}
        >
          <AddPost />
          {/* POSTS */}

          <Stack
            spacing={8}
            sx={{ margin: '0 auto', marginTop: '3rem', width: '75%' }}
          >
            <Post />
            <Post />
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

import { Grid, Paper, Box, Stack, Avatar, Divider } from '@mui/material';

import * as classes from './Homepage.style';
import HomepageLeftSection from './HomepageLeftSection/HomepageLeftSection';
import HomepageRightSection from './HomepageRightSection/HomepageRightSection';
import Post from './../../components/Post/Post';

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
          <Paper sx={classes.addPostPaper}>
            <Stack spacing={4} direction='row'>
              <Avatar src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' />

              <Box sx={classes.postBtn}>What's on your mind John?</Box>
            </Stack>
            <Divider
              sx={{ borderColor: 'var(--divider)', marginTop: '2rem' }}
            />
          </Paper>
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

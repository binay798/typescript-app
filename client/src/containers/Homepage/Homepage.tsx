import { Grid } from '@mui/material';

import * as classes from './Homepage.style';
import HomepageLeftSection from './HomepageLeftSection/HomepageLeftSection';
import HomepageRightSection from './HomepageRightSection/HomepageRightSection';

function Homepage(): JSX.Element {
  return (
    <Grid container sx={classes.container} spacing={2}>
      <Grid item sm={3}>
        <HomepageLeftSection />
      </Grid>
      <Grid item sm={6}>
        Two
      </Grid>
      <Grid item sm={3}>
        <HomepageRightSection />
      </Grid>
    </Grid>
  );
}

export default Homepage;

import { Typography, Box, Paper } from '@mui/material';
import * as classes from './Photos.style';
import { person, groups } from './../../../utils/images';

function Photos() {
  const photos = [...person, ...groups];
  return (
    <Paper sx={classes.container}>
      <Typography style={{ marginBottom: '1rem' }} variant='h5'>
        Photos
      </Typography>

      <Box sx={classes.photoContainer}>
        {photos.map((el) => {
          return <img style={classes.img} src={el} alt='hello' />;
        })}
      </Box>
    </Paper>
  );
}

export default Photos;

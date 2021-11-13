import { Avatar, Divider, Paper, Stack } from '@mui/material';
import { Box } from '@mui/system';
import * as classes from './AddPost.style';

function AddPost() {
  return (
    <Paper sx={classes.addPostPaper}>
      <Stack spacing={4} direction='row'>
        <Avatar src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' />

        <Box sx={classes.postBtn}>What's on your mind John?</Box>
      </Stack>
      <Divider sx={{ borderColor: 'var(--divider)', marginTop: '2rem' }} />
    </Paper>
  );
}

export default AddPost;

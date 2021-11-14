import React, { useState } from 'react';
import {
  Avatar,
  Divider,
  Paper,
  Stack,
  Modal,
  Typography,
  IconButton,
  ListItemText,
  TextField,
  Input,
  Button,
} from '@mui/material';
import { Box } from '@mui/system';
import * as classes from './AddPost.style';
import CloseIcon from '@mui/icons-material/Close';
import { person } from '../../utils/images';
import PublicIcon from '@mui/icons-material/Public';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'var(--appbar)',
  boxShadow: 24,
  p: 2,
};

function AddPost(): JSX.Element {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Paper sx={classes.addPostPaper}>
      <Stack spacing={4} direction='row'>
        <Avatar src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' />

        <Box onClick={handleOpen} sx={classes.postBtn}>
          What's on your mind John?
        </Box>
      </Stack>
      <Divider sx={{ borderColor: 'var(--divider)', marginTop: '2rem' }} />

      {/* CREATE POST MODAL */}
      <CreatePostModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </Paper>
  );
}

interface CreatePostModalProps {
  open: boolean;
  handleOpen(): void;
  handleClose(): void;
}

function CreatePostModal(props: CreatePostModalProps): JSX.Element {
  const [file, setFile] = useState<ArrayBuffer | null | string>();

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    const reader = new FileReader();

    reader.addEventListener('load', function () {
      setFile(reader.result);
    });
    if (file) {
      reader.readAsDataURL(file[0]);
    }
  };
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Paper sx={style}>
        <Typography
          id='modal-modal-title'
          color='secondary.light'
          variant='h5'
          component='h1'
          align='center'
          gutterBottom
        >
          Create Post
        </Typography>
        <Divider sx={{ borderColor: 'var(--divider)', marginBottom: '2rem' }} />

        {/* CLOSE BUTTON */}
        <IconButton
          sx={{ position: 'absolute' as 'absolute', top: 10, right: 10 }}
          onClick={props.handleClose}
        >
          <CloseIcon />
        </IconButton>
        {/* USER DETAIL */}
        <Stack direction='row' spacing={2} sx={{ marginBottom: '1rem' }}>
          <Avatar src={person[2]} alt='person' />
          <ListItemText
            primary={
              <Typography variant='body1' sx={{ fontWeight: 600 }}>
                Binay shrestha
              </Typography>
            }
            secondary={
              <Stack direction='row' spacing={1} alignItems='center'>
                <PublicIcon sx={{ width: 20, height: 20 }} />
                <Typography variant='caption'>Public</Typography>
              </Stack>
            }
          />
        </Stack>

        {/* FORM */}
        <form>
          <Stack direction='column' spacing={2}>
            <TextField
              id='standard-multiline-static'
              label='What is on your mind Binay? '
              multiline
              rows={4}
              variant='outlined'
              sx={{ width: '100%' }}
            />
            <Stack direction='row' alignItems='center'>
              <Typography
                color='secondary'
                variant='body1'
                sx={{ fontWeight: 600 }}
              >
                Add Photo:
              </Typography>
              <label htmlFor='icon-button-file'>
                <Input
                  sx={{ display: 'none' }}
                  id='icon-button-file'
                  type='file'
                  onChange={fileChangeHandler}
                />
                <IconButton
                  color='primary'
                  aria-label='upload picture'
                  component='span'
                >
                  <AddAPhotoIcon />
                </IconButton>
              </label>
            </Stack>
            {/* BUTTON */}
            <Button variant='contained' color='secondary'>
              Create Post
            </Button>
          </Stack>
        </form>
      </Paper>
    </Modal>
  );
}

export default AddPost;

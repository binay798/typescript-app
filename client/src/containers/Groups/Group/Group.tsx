import { useEffect, useState } from 'react';
import {
  Box,
  Stack,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Button,
  Chip,
  IconButton,
  Input,
  TextField,
  Divider,
  Modal,
} from '@mui/material';
import { person } from '../../../utils/images';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublicIcon from '@mui/icons-material/Public';
import AddIcon from '@mui/icons-material/Add';
import { useSelector, useDispatch } from 'react-redux';
import axios, { baseUrl } from '../../../axiosInstance';
import * as Actions from '../../../store/actions/index';
import { RootState } from '../../../store/Store';
import { useParams } from 'react-router-dom';
import { Group as GroupMain } from '../../../store/reducers/group.reducer';
import * as actionCreators from '../../../store/actionCreators/index';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CloseIcon from '@mui/icons-material/Close';
import { Post as SinglePost } from '../../../store/reducers/post.reducer';

export const groupPhotoContainer = {
  height: '35rem',
  borderRadius: '0 0 1rem 1rem',
  overflow: 'hidden',
  margin: '0 4rem',
};

export const groupMainContainer = {
  padding: '4rem',
};
function Group() {
  const state = useSelector((state: RootState) => state.group);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get(`/api/v1/groups/${params.id}`);
        dispatch({
          type: Actions.GroupAction.SELECT_GROUP,
          payload: { groups: [res.data.group] },
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, [params.id, dispatch]);
  if (!state.selectedGroup) {
    return <div>Loading...</div>;
  }
  return (
    <Box>
      {/* GROUP PHOTO */}
      <Box position='relative' sx={groupPhotoContainer}>
        <img
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src={`${baseUrl}/static/images/${state.selectedGroup.photo}`}
          alt='group'
        />
        <Box
          position='absolute'
          sx={{ background: 'green', width: '100%', padding: '0.5rem 1rem' }}
          bottom={0}
          left={0}
        >
          <Typography variant='body2' color='secondary.light'>
            Group by:{' '}
            <span style={{ fontWeight: 600 }}>
              {state.selectedGroup.admin?.firstname}{' '}
              {state.selectedGroup.admin?.lastname}
            </span>
          </Typography>
        </Box>
      </Box>
      {/* GROUP BASIC DETAIL */}
      <Box
        sx={{
          padding: '8rem 4rem 4rem 4rem',
          background: 'var(--appbar)',
          marginTop: '-4rem',
        }}
      >
        <Stack
          direction='row'
          alignItems='center'
          spacing={1}
          justifyContent='space-between'
        >
          <Box>
            <Typography variant='h4' color='secondary.light' gutterBottom>
              {state.selectedGroup.name}
            </Typography>
            <Typography color='secondary' component='div'>
              <Stack direction='row' spacing={1}>
                <PublicIcon />

                <span>Public. 120k members</span>
              </Stack>
            </Typography>
          </Box>
          <JoinGroup group={state.selectedGroup} />
        </Stack>
      </Box>
      {/* GROUP MAIN CONTENT IE. POSTS ETC. */}
      <GroupContainer group={state.selectedGroup} />
    </Box>
  );
}

interface GroupContainerProps {
  group: GroupMain;
}

function GroupContainer(props: GroupContainerProps): JSX.Element {
  const [posts, setPosts] = useState<SinglePost[] | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `/api/v1/groups/${props.group._id}/group-post`
        );
        setPosts(res.data.posts);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [props.group._id]);
  return (
    <Grid container sx={groupMainContainer} spacing={3}>
      <Grid item sm={7}>
        <Box>
          <CreateNewGroupPost />
          <Stack direction='column' sx={{ marginTop: '3rem' }} spacing={3}>
            {/* <Post />
            <Post />
            <Post />
            <Post /> */}
            {/* {posts &&
              posts.map((el: SinglePost) => {
                return <Post  key={el._id} data={el} />;
              })} */}
          </Stack>
        </Box>
      </Grid>
      <Grid item sm={5}>
        <Box position='sticky' top={20}>
          <Paper sx={{ padding: '2rem' }}>
            <Typography gutterBottom variant='h6'>
              About
            </Typography>
            <Typography variant='body2' color='secondary'>
              {props.group.description}
            </Typography>
            {/* LIST */}
            <List>
              <ListItem>
                <ListItemIcon>
                  <PublicIcon />
                </ListItemIcon>
                <ListItemText
                  primary='Public'
                  secondary='Anyone can see who is in the group and what they post.'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant='body2' sx={{ fontWeight: 600 }}>
                      {props.group.location}
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}

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
function CreateNewGroupPost(): JSX.Element {
  const state = useSelector((state: RootState) => state.group);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [file, setFile] = useState<File>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgSrc, setImgSrc] = useState<string>();
  const [loading, setLoading] = useState(false);

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const reader = new FileReader();
    if (!files) return;
    setFile(files[0]);

    reader.addEventListener('load', function () {
      setImgSrc(reader.result as string);
    });
    if (files) {
      reader.readAsDataURL(files[0]);
    }
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (title === '' || description === '' || file === undefined) return;
    dispatch(
      actionCreators.createGroupPost(
        { title, description, photo: file },
        state.selectedGroup?._id as string,
        setLoading
      )
    );
  };
  return (
    <Paper sx={{ padding: '2rem' }}>
      <Stack direction='row' spacing={2} alignItems='center'>
        <Avatar src={person[3]} alt='person' />
        <Button
          sx={{ width: '100%' }}
          startIcon={<AddIcon />}
          variant='contained'
          color='secondary'
          onClick={() => setOpen(true)}
        >
          Create New Post
        </Button>
      </Stack>
      {/* MODAL */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
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
            Create Group Post
          </Typography>
          <Divider
            sx={{ borderColor: 'var(--divider)', marginBottom: '2rem' }}
          />

          {/* CLOSE BUTTON */}
          <IconButton
            sx={{ position: 'absolute' as 'absolute', top: 10, right: 10 }}
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconButton>
          {/* USER DETAIL */}

          {/* FORM */}
          <form onSubmit={submitHandler}>
            <Stack direction='column' spacing={2}>
              <TextField
                label='Title'
                variant='outlined'
                sx={{ width: '100%' }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                id='standard-multiline-static'
                label='What is on your mind Binay? '
                multiline
                rows={4}
                variant='outlined'
                sx={{ width: '100%' }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
              {/* SELECTED IMAGE */}
              {imgSrc && (
                <img
                  src={imgSrc}
                  style={{
                    display: 'block',
                    height: '10rem',
                    objectFit: 'contain',
                    borderRadius: '4px',
                  }}
                  alt='selected'
                />
              )}
              {/* BUTTON */}
              <Button
                disabled={loading}
                variant='contained'
                type='submit'
                color='secondary'
              >
                Create Post
              </Button>
            </Stack>
          </form>
        </Paper>
      </Modal>
    </Paper>
  );
}

interface JoinProps {
  group: GroupMain;
}
function JoinGroup(props: JoinProps): JSX.Element {
  const state = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [leaveLoading, setLeaveLoading] = useState(false);

  const joinGroup = () => {
    if (!props.group.slug) return;
    dispatch(actionCreators.joinGroup({ name: props.group.slug }, setLoading));
  };
  const leaveGroup = () => {
    if (!props.group.slug) return;
    dispatch(
      actionCreators.leaveGroup({ name: props.group.slug }, setLeaveLoading)
    );
  };
  if (!state.user || !props.group.admin) {
    return <div></div>;
  }
  if (props.group.users?.includes(state.user._id as string)) {
    return (
      <Stack direction='row' spacing={2} alignItems='center'>
        <Chip label='Joined' variant='outlined' />
        <Button
          onClick={leaveGroup}
          disabled={leaveLoading}
          variant='outlined'
          color='secondary'
        >
          Leave
        </Button>
      </Stack>
    );
  }

  return (
    <Box>
      {state.user._id !== props.group.admin._id && (
        <Button
          onClick={joinGroup}
          startIcon={<AddIcon />}
          variant='contained'
          color='secondary'
          disabled={loading}
        >
          Join group
        </Button>
      )}
      {state.user._id === props.group.admin._id && (
        <Stack direction='row' spacing={2} alignItems='center'>
          <Chip label='Joined' variant='outlined' />
        </Stack>
      )}
    </Box>
  );
}

export default Group;

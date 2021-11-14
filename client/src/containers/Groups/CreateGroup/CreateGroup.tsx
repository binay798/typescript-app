import {
  Paper,
  Box,
  Stack,
  Breadcrumbs,
  Typography,
  TextField,
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

const container = {
  padding: '4rem',
};
const paper = {
  padding: '2rem',
  background: 'var(--appbar)',
};

const addGroupPhoto = {
  border: '1px dashed gray',

  width: '25rem',
  height: '25rem',
};
function CreateGroup(): JSX.Element {
  return (
    <Box sx={container}>
      <Paper sx={paper}>
        {/* BREADCRUMBS */}
        <Stack direction='row' sx={{ marginBottom: '1rem' }}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize='small' />}
            aria-label='breadcrumb'
          >
            [
            <Link
              style={{ color: 'inherit', textDecoration: 'none' }}
              to='/groups'
            >
              Groups
            </Link>
            , <Typography>Create</Typography>]
          </Breadcrumbs>
        </Stack>
        {/* CREATE GROUP HEADING */}
        <Typography variant='h5' gutterBottom color='secondary.light'>
          Create Group
        </Typography>
        {/* MAIN FORM CONTAINER */}
        <form>
          <Stack direction='row' spacing={3}>
            <Stack direction='column' spacing={2} sx={{ flex: 1 }}>
              <TextField
                sx={{ width: '100%' }}
                variant='outlined'
                label='Title'
              />
              <TextField
                sx={{ width: '100%' }}
                variant='outlined'
                label='Description'
                multiline
                rows={4}
              />
              <FormControl component='fieldset'>
                <FormLabel component='legend'>Visibility</FormLabel>
                <RadioGroup
                  row
                  aria-label='gender'
                  name='row-radio-buttons-group'
                >
                  <FormControlLabel
                    value='public'
                    control={<Radio />}
                    label='Public'
                  />
                  <FormControlLabel
                    value='private'
                    control={<Radio />}
                    label='Private'
                  />
                </RadioGroup>
              </FormControl>
              <Button startIcon={<AddIcon />} variant='contained'>
                Create Group
              </Button>
            </Stack>
            <Stack
              direction='column'
              alignItems='center'
              justifyContent='center'
              sx={addGroupPhoto}
            >
              <AddIcon sx={{ width: '4rem', height: '4rem' }} />
              <Typography>Add Photo</Typography>
            </Stack>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}

export default CreateGroup;

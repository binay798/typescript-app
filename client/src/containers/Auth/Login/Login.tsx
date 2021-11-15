import { useState } from 'react';
import {
  Paper,
  Typography,
  Stack,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import logo from './../../../assets/logo.jpeg';
import { blueGrey } from '@mui/material/colors';
import LoginIcon from '@mui/icons-material/Login';
import { Link, useNavigate } from 'react-router-dom';
import axios from './../../../axiosInstance';
import { useDispatch } from 'react-redux';
import * as Actions from './../../../store/actions/index';

const container = {
  padding: '2rem',
  background: 'white',
  color: '#333',
  maxWidth: '65rem',
  width: '100%',
};

const img = {
  display: 'block',
  width: '15rem',
  objectFit: 'contain' as 'contain',
};
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let res = await axios.post('/api/v1/users/login', { email, password });
      const data = res.data;
      dispatch({ type: Actions.AuthAction.LOGIN, payload: data });
      setLoading(false);
      navigate('/');
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  return (
    <Paper elevation={8} sx={container}>
      <Stack direction='row' spacing={12}>
        <img style={img} src={logo} alt='logo' />
        <Stack sx={{ flex: 1 }} direction='column' spacing={2}>
          <Typography variant='h5' align='center' color={blueGrey[500]}>
            Login
          </Typography>
          <form onSubmit={submitHandler}>
            <Stack direction='column' spacing={2}>
              <TextField
                sx={{ width: '100%' }}
                variant='outlined'
                label='Email address'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                sx={{ width: '100%' }}
                variant='outlined'
                label='Password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Stack direction='row' spacing={1} justifyContent='space-between'>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={<Typography variant='body2'>Remember me</Typography>}
                />
                <Button
                  sx={{ textTransform: 'none', fontSize: '1.4rem' }}
                  variant='text'
                >
                  Forgot password?
                </Button>
              </Stack>
              <Button
                startIcon={<LoginIcon />}
                variant='contained'
                color='primary'
                type='submit'
                disabled={loading}
              >
                Login
              </Button>
              <Link
                to='/auth/signup'
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <Button
                  sx={{
                    textTransform: 'none',
                    fontSize: '1.4rem',
                    width: '100%',
                  }}
                  variant='text'
                >
                  Don't have an account? Signup
                </Button>
              </Link>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default Login;

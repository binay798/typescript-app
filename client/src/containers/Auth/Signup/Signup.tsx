import React, { useState } from 'react';
import { Paper, Typography, Stack, TextField, Button } from '@mui/material';
import logo from './../../../assets/logo.jpeg';
import { blueGrey } from '@mui/material/colors';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import axios from './../../../axiosInstance';
import { User } from './../../../store/reducers/auth.reducer';
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
function Signup() {
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // ------NEEDS TO BE REFACTORED FOR VALIDATION------
  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post<User>('/api/v1/users/signup', {
        firstname,
        lastname,
        username,
        email,
        password,
        confirmPassword,
      });
      const data = res.data;

      dispatch({ type: Actions.AuthAction.SIGNUP, payload: data });
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <Paper elevation={8} sx={container}>
      <Stack direction='row' spacing={12}>
        <img style={img} src={logo} alt='logo' />
        <Stack sx={{ flex: 1 }} direction='column' spacing={2}>
          <Typography variant='h5' align='center' color={blueGrey[500]}>
            Create New Account
          </Typography>
          <form onSubmit={submitHandler}>
            <Stack direction='column' spacing={2}>
              <Stack direction='row' spacing={2}>
                <TextField
                  sx={{ width: '100%' }}
                  variant='outlined'
                  label='Firstname'
                  type='text'
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <TextField
                  sx={{ width: '100%' }}
                  variant='outlined'
                  label='Lastname'
                  type='text'
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                />
              </Stack>
              <TextField
                sx={{ width: '100%' }}
                variant='outlined'
                label='Username'
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
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
              <TextField
                sx={{ width: '100%' }}
                variant='outlined'
                label='Confirm Password'
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <Button
                startIcon={<LoginIcon />}
                variant='contained'
                color='primary'
                type='submit'
                disabled={loading}
              >
                Signup
              </Button>
              <Link
                to='/auth'
                style={{
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                <Button
                  sx={{
                    textTransform: 'none',
                    fontSize: '1.4rem',
                    width: '100%',
                  }}
                  variant='text'
                >
                  Already have an account? Please Login
                </Button>
              </Link>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default Signup;

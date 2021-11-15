import React, { useEffect } from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import Posts from './containers/Profile/Posts/Posts';
import About from './containers/Profile/About/About';
import Photos from './containers/Profile/Photos/Photos';
import GroupMain from './containers/Groups/GroupMain/GroupMain';
import Group from './containers/Groups/Group/Group';
import Login from './containers/Auth/Login/Login';
import Signup from './containers/Auth/Signup/Signup';
import Auth from './containers/Auth/Auth';
import LazyComponent from './components/LazyComponent/LazyComponent';
import { useSelector } from 'react-redux';
import { RootState } from './store/Store';
import { useNavigate } from 'react-router-dom';

const Homepage = React.lazy(() => import('./containers/Homepage/Homepage'));
const Profile = React.lazy(() => import('./containers/Profile/Profile'));
const Groups = React.lazy(() => import('./containers/Groups/Groups'));
const Users = React.lazy(() => import('./containers/Users/Users'));
const CreateGroup = React.lazy(
  () => import('./containers/Groups/CreateGroup/CreateGroup')
);

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
  },
  palette: {
    mode: 'dark',
  },
});

function App(): JSX.Element {
  const navigate = useNavigate();
  const state = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!state.user) {
      navigate('/auth');
    }
  }, [navigate, state.user]);

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Layout />}>
            {/* USER DEPENDENT ROUTE */}
            {state.user && (
              <>
                <Route
                  index
                  element={<LazyComponent component={<Homepage />} />}
                />
                <Route
                  path='profile'
                  element={<LazyComponent component={<Profile />} />}
                >
                  <Route index element={<Posts />} />
                  <Route path='about' element={<About />} />
                  <Route path='photos' element={<Photos />} />
                </Route>
                <Route
                  path='groups'
                  element={<LazyComponent component={<Groups />} />}
                >
                  <Route index element={<GroupMain />} />
                  <Route path=':id' element={<Group />} />
                  <Route
                    path='create'
                    element={<LazyComponent component={<CreateGroup />} />}
                  />
                </Route>
                <Route
                  path='users'
                  element={<LazyComponent component={<Users />} />}
                />
              </>
            )}
            {/* USER NOT DEPENDENT ROUTE */}
            <Route path='auth' element={<Auth />}>
              <Route index element={<Login />} />
              <Route path='signup' element={<Signup />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

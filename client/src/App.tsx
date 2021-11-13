import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import Homepage from './containers/Homepage/Homepage';
import Profile from './containers/Profile/Profile';
import Posts from './containers/Profile/Posts/Posts';
import About from './containers/Profile/About/About';
import Photos from './containers/Profile/Photos/Photos';
import Groups from './containers/Groups/Groups';

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
  },
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='profile' element={<Profile />}>
              <Route index element={<Posts />} />
              <Route path='about' element={<About />} />
              <Route path='photos' element={<Photos />} />
            </Route>
            <Route path='groups' element={<Groups />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

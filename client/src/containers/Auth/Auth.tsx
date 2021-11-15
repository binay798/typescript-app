import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    htmlFontSize: 10,
  },
});
function Auth() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4rem',
        }}
      >
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default Auth;

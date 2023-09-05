import Container from '@mui/material/Container';
import { ErrorBoundary } from 'react-error-boundary';
import { Offline } from 'react-detect-offline';
import { Nav, FallbackComponent, Typography } from 'components';
import { Routes } from './Routes';

function App() {
  return (
    <>
      <Nav />
      <Container maxWidth="md">
        <ErrorBoundary fallback={FallbackComponent}>
          <Routes />
        </ErrorBoundary>
        <Offline>
          <Typography
            variant="titleMedium"
            sx={{ color: (theme) => theme.palette.error.main }}
          >
            You are offline. Please check your internet connection.
          </Typography>
        </Offline>
      </Container>
    </>
  );
}

export default App;

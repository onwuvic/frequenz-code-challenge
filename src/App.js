import Container from '@mui/material/Container';
import { Nav } from 'components';
import { Routes } from './Routes';

function App() {
  return (
    <>
      <Nav />
      <Container maxWidth="md">
        <Routes />
      </Container>
    </>
  );
}

export default App;

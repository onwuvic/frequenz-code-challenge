import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Nav } from 'components/Nav';

export function Home() {
  return (
    <>
      <Container maxWidth="md">
        <Nav />
        <Box sx={{ height: '100vh' }} />
      </Container>
    </>
  );
}


import Button from '@mui/material/Button';
import { ContentContainer } from 'views/NotFound/NotFound.styles';
import { Typography } from 'components';

export function FallbackComponent({ error, resetErrorBoundary }) {
  return (
    <ContentContainer>
      <Typography variant="headline">Something went wrong:</Typography>
      <pre>{error.message}</pre>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </ContentContainer>
  );
}

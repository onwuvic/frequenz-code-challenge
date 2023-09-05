import { Typography } from 'components/Typography';
import { ContentContainer } from './NotFound.styles';

export function NotFound() {
  return (
    <ContentContainer>
      <Typography variant="headline">Not Found</Typography>
      <Typography variant="smallHeadline">
        Whoops... This page doesn&apos;t exist
      </Typography>
    </ContentContainer>
  );
}

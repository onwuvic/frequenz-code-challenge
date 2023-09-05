import Skeleton from '@mui/material/Skeleton';
import {
  Container,
  OrganizationDetails,
} from '../OrganizationSummary/OrganizationSummary.styles';
import { FilterFields } from 'views/Home/Home.styles';

export function SearchResultSkeleton() {
  return (
    <>
      <Container>
        <Skeleton variant="rectangular" width={80} height={80} />
        <OrganizationDetails>
          <Skeleton variant="text" width={100} />
          <Skeleton variant="text" width={200} />
          <Skeleton variant="text" width={400} />
        </OrganizationDetails>
      </Container>
      <Skeleton variant="text" width={300} sx={{ marginTop: '12px' }} />
      <FilterFields>
        <Skeleton variant="text" width={400} height={80} />
        <Skeleton variant="text" width={200} height={80} />
        <Skeleton variant="text" width={200} height={80} />
      </FilterFields>
      <Skeleton variant="text" width="100%" height={80} />
    </>
  );
}

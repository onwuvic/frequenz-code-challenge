import PeopleIcon from '@mui/icons-material/People';
import PlaceIcon from '@mui/icons-material/Place';
import LinkIcon from '@mui/icons-material/Link';
import EmailIcon from '@mui/icons-material/Email';
import Chip from '@mui/material/Chip';

import { Typography } from 'components';
import {
  Container,
  OrganizationAvatar,
  OrganizationDetails,
  OrganizationStatWrapper,
  OrganizationStat,
} from './OrganizationSummary.styles';

export function OrganizationSummary() {
  return (
    <Container>
      <OrganizationAvatar
        variant="square"
        alt="Remy Sharp"
        src="/broken-image.jpg"
      >
        N
      </OrganizationAvatar>
      <OrganizationDetails>
        <Typography variant="titleMedium">Organization Name</Typography>
        <Typography variant="bodySmall">
          Develop. Preview. Ship. Creators of Next.js.
        </Typography>
        <OrganizationStatWrapper>
          <OrganizationStat>
            <PeopleIcon sx={{ fontSize: '16px' }} />
            <Typography variant="bodySmall">10k followers</Typography>
          </OrganizationStat>
          <OrganizationStat>
            <PlaceIcon sx={{ fontSize: '16px' }} />
            <Typography variant="bodySmall">
              United States of America
            </Typography>
          </OrganizationStat>
          <OrganizationStat>
            <LinkIcon sx={{ fontSize: '16px' }} />
            <Typography variant="bodySmall">https://vercel.com</Typography>
          </OrganizationStat>
          <OrganizationStat>
            <EmailIcon sx={{ fontSize: '16px' }} />
            <Typography variant="bodySmall">contactus@vercel.com</Typography>
          </OrganizationStat>
          <Chip
            label="Verified"
            color="success"
            variant="outlined"
            size="small"
            sx={{ height: '16px' }}
          />
        </OrganizationStatWrapper>
      </OrganizationDetails>
    </Container>
  );
}

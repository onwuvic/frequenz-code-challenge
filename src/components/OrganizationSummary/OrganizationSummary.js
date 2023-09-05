import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import LinkIcon from '@mui/icons-material/Link';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PeopleIcon from '@mui/icons-material/People';

import { Typography } from 'components';
import { initialName, abbrNumber } from 'utils';
import {
  Container,
  OrganizationAvatar,
  OrganizationDetails,
  OrganizationStatWrapper,
  OrganizationStat,
} from './OrganizationSummary.styles';

export function OrganizationSummary({ data }) {
  return (
    <>
      <Container>
        <OrganizationAvatar
          variant="square"
          alt={data?.name || data?.login}
          src={data?.avatar_url}
        >
          {initialName(data?.name || data?.login)}
        </OrganizationAvatar>
        <OrganizationDetails>
          <Typography
            variant="titleMedium"
            sx={{ textTransform: 'capitalize' }}
          >
            {data?.name || data?.login}
          </Typography>
          <Typography variant="bodySmall">
            {data?.description || 'No description'}
          </Typography>
          <OrganizationStatWrapper>
            {data?.followers >= 0 && (
              <OrganizationStat>
                <PeopleIcon sx={{ fontSize: '16px' }} />
                <Typography variant="bodySmall">
                  {data?.followers ? abbrNumber(data?.followers) : 0} followers
                </Typography>
              </OrganizationStat>
            )}
            {data?.location && (
              <OrganizationStat>
                <PlaceIcon sx={{ fontSize: '16px' }} />
                <Typography variant="bodySmall">{data?.location}</Typography>
              </OrganizationStat>
            )}
            {data?.blog && (
              <OrganizationStat>
                <LinkIcon sx={{ fontSize: '16px' }} />
                <Typography variant="bodySmall">{data?.blog}</Typography>
              </OrganizationStat>
            )}
            {data?.email && (
              <OrganizationStat>
                <EmailIcon sx={{ fontSize: '16px' }} />
                <Typography variant="bodySmall">{data?.email}</Typography>
              </OrganizationStat>
            )}
            {data?.is_verified && (
              <Chip
                label="Verified"
                color="success"
                variant="outlined"
                size="small"
                sx={{ height: '16px' }}
              />
            )}
          </OrganizationStatWrapper>
        </OrganizationDetails>
      </Container>
      <Divider />
    </>
  );
}

OrganizationSummary.propTypes = {
  data: PropTypes.object,
};

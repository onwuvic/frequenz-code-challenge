import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';

import { Typography } from 'components';

export function ClearButton({ onClick }) {
  return (
    <Button
      startIcon={<CancelIcon />}
      sx={{ height: '11px', fontSize: '12px' }}
      onClick={onClick}
    >
      <Typography variant="bodySmall">Clear filters</Typography>
    </Button>
  );
}

ClearButton.propTypes = {
  onClick: PropTypes.func,
};

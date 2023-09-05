import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const FilterFields = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  marginTop: theme.spacing(2),
}));

export const Main = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(12),
  padding: theme.spacing(0, 4, 4, 4),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const SubTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginTop: theme.spacing(1),
}));

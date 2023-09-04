import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';

import { Typography, OrganizationSummary, Table } from 'components';
import { useOrganizationsQuery } from 'services/organizations';
import { ContentContainer } from 'views/NotFound/NotFound.styles'

const Main = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(12),
  padding: theme.spacing(0, 4, 4, 4),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const SubTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginTop: theme.spacing(3),
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('milk', 159, 6.0, 24, 4.0),
  createData('cow', 237, 9.0, 37, 4.3),
  createData('me', 262, 16.0, 24, 6.0),
  createData('goat', 305, 3.7, 67, 4.3),
  createData('yam', 356, 16.0, 49, 3.9),
];

export function Home() {
  const { data: organizations, isLoading, isError } = useOrganizationsQuery();

  if (isLoading) {
    return (
      <ContentContainer>
        <CircularProgress />
      </ContentContainer>
    );
  }

  return (
    <Main>
      <OrganizationSummary />
      <Divider />
      <Autocomplete
        id="search-organization"
        freeSolo
        options={organizations.map((option) => option.login)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Organization"
            helperText={isError && "Fail fetching organizations autocomplete list"}
          />
        )}
      />

      <SubTitle>
        <CollectionsBookmarkIcon />
        <Typography variant="titleMedium">Repositories</Typography>
      </SubTitle>

      <Box sx={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
        <Box sx={{ flex: 1 }}>
          <TextField
            label="Find a repository…"
            id="outlined-start-adornment"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">kg</InputAdornment>
              ),
            }}
          />
        </Box>
        <Box>
          <TextField
            label="Min open issues"
            size="small"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          />
        </Box>
        <Box>
          <TextField
            label="Max open issues"
            size="small"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          />
        </Box>
      </Box>

      <Box>
        <Table rows={rows} />
      </Box>
    </Main>
  );
}

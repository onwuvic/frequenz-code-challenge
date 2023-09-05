import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDebounce } from '@uidotdev/usehooks';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

import {
  Typography,
  OrganizationSummary,
  Table,
  SearchResultSkeleton,
  ClearButton,
} from 'components';
import {
  useOrganizationsQuery,
  useLazyGetOrganizationQuery,
  useLazyGetOrganizationReposQuery,
} from 'services/organizations';
import { ContentContainer } from 'views/NotFound/NotFound.styles';
import { FilterFields, Main, SubTitle } from './Home.styles';

const MIN = 0;

export function Home() {
  const [organizationName, setOrganizationName] = useState('');
  const [searchRepository, setSearchRepository] = useState('');
  const [minOpenIssues, setMinOpenIssues] = useState(MIN);
  const [maxOpenIssues, setMaxOpenIssues] = useState(Infinity);

  const debouncedOrganizationName = useDebounce(organizationName, 1000);
  const debouncedSearchRepository = useDebounce(searchRepository, 500);

  const {
    data: organizations = [],
    isLoading,
    isError,
    error,
  } = useOrganizationsQuery();

  const {
    data: organization,
    isFetching: isSingleOrgFetching,
    isError: isSingleOrgError,
    error: singleOrgError,
  } = useLazyGetOrganizationQuery(debouncedOrganizationName);

  const {
    data: repositoriesData,
    isFetching: isFetchingRepo,
    isError: isRepoError,
    error: repoError,
  } = useLazyGetOrganizationReposQuery(debouncedOrganizationName);

  const isFetching = isSingleOrgFetching || isFetchingRepo;
  const isFetchError = isSingleOrgError || isRepoError;

  const repositories = useMemo(
    () =>
      repositoriesData?.filter((repo) => {
        if (
          repo.name
            .toLowerCase()
            .includes(debouncedSearchRepository.toLowerCase())
        ) {
          if (
            repo.open_issues_count >= minOpenIssues &&
            repo.open_issues_count <= maxOpenIssues
          ) {
            return true;
          }
        }
        return false;
      }),
    [debouncedSearchRepository, repositoriesData, minOpenIssues, maxOpenIssues]
  );

  const showClearFiltersButton = useMemo(() => {
    if (searchRepository || minOpenIssues > MIN || maxOpenIssues < Infinity) {
      return true;
    }
    return false;
  }, [maxOpenIssues, minOpenIssues, searchRepository]);

  const isInvalidMinOpenIssues = useMemo(() => {
    if (Number(minOpenIssues) < MIN) {
      return true;
    }
    return false;
  }, [minOpenIssues]);

  const isInvalidMaxOpenIssues = useMemo(() => {
    if (Number(maxOpenIssues) < Number(minOpenIssues)) {
      return true;
    }
    return false;
  }, [maxOpenIssues, minOpenIssues]);

  const clearFilters = () => {
    setSearchRepository('');
    setMinOpenIssues(MIN);
    setMaxOpenIssues(Infinity);
  };

  if (isLoading) {
    return (
      <ContentContainer>
        <CircularProgress />
      </ContentContainer>
    );
  }

  if (isError) {
    return (
      <ContentContainer>
        <Typography variant="headline">{error.message}</Typography>
      </ContentContainer>
    );
  }

  return (
    <Main>
      <Autocomplete
        id="search-organization"
        freeSolo
        options={organizations?.map((option) => option.login)}
        onChange={(event, value) => {
          setOrganizationName(value);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Organization"
            helperText={
              isError && 'Failed to fetch organizations. Try again later.'
            }
          />
        )}
      />

      {isFetchError ? (
        <ContentContainer sx={{ height: '40vh' }}>
          <Typography variant="headline">
            {singleOrgError?.message || repoError?.message}
          </Typography>
        </ContentContainer>
      ) : (
        <>
          {isFetching && <SearchResultSkeleton />}

          {!isFetching && organization && (
            <OrganizationSummary data={organization} />
          )}

          {repositoriesData && (
            <>
              <SubTitle>
                <CollectionsBookmarkIcon />
                <Typography variant="titleMedium">Repositories</Typography>
              </SubTitle>

              <FilterFields>
                <Box sx={{ flex: 1 }}>
                  <TextField
                    value={searchRepository}
                    onChange={(e) => setSearchRepository(e.target.value)}
                    label="Find a repository…"
                    id="search-repository"
                    size="small"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box>
                  <TextField
                    value={minOpenIssues}
                    onChange={(e) => setMinOpenIssues(e.target.value)}
                    label="Min open issues"
                    size="small"
                    type="number"
                    error={isInvalidMinOpenIssues}
                    helperText={
                      isInvalidMinOpenIssues &&
                      `Min value can not be less than ${MIN}`
                    }
                    inputProps={{
                      inputMode: 'numeric',
                      min: MIN,
                      pattern: '[0-9]*',
                    }}
                  />
                </Box>
                <Box>
                  <TextField
                    value={maxOpenIssues}
                    onChange={(e) => setMaxOpenIssues(e.target.value)}
                    label="Max open issues"
                    size="small"
                    type="number"
                    error={isInvalidMaxOpenIssues}
                    helperText={
                      isInvalidMaxOpenIssues &&
                      `Max value can not be less than min value`
                    }
                    inputProps={{
                      inputMode: 'numeric',
                      min: minOpenIssues,
                      pattern: '[0-9]*',
                    }}
                  />
                </Box>
              </FilterFields>

              {showClearFiltersButton && (
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                  <ClearButton onClick={clearFilters} />
                </Box>
              )}
              <Table rows={repositories} />
            </>
          )}
        </>
      )}
    </Main>
  );
}

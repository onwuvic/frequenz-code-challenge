import { useQuery } from '@tanstack/react-query';

export function useOrganizationsQuery() {
  const fetchOrganizations = async () => {
    const response = await fetch('https://api.github.com/organizations');
    const data = await response.json();
    if (!response.ok) {
      if (response.status === 403) {
        throw new Error('You have reach your API rate limit. Try again later.');
      }
      throw new Error('Something went wrong');
    }
    return data;
  };

  const result = useQuery({
    queryKey: ['organizations'],
    queryFn: fetchOrganizations,
  });

  return result;
}

export function useLazyGetOrganizationQuery(name) {
  const fetchOrganization = async (name) => {
    const response = await fetch(`https://api.github.com/orgs/${name}`);
    const data = await response.json();
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Organization not found');
      }
      if (response.status === 403) {
        throw new Error('You have reach your API rate limit. Try again later.');
      }
      throw new Error('Something went wrong');
    }
    return data;
  };

  const result = useQuery(
    ['organization', name],
    () => fetchOrganization(name),
    {
      enabled: !!name,
    }
  );

  return result;
}

export function useLazyGetOrganizationReposQuery(name) {
  const fetchOrganizationRepos = async (name) => {
    const response = await fetch(`https://api.github.com/orgs/${name}/repos`);
    const data = await response.json();
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Repositories not found');
      }
      if (response.status === 403) {
        throw new Error('You have reach your API rate limit. Try again later.');
      }
      throw new Error('Something went wrong');
    }
    return data;
  };

  const result = useQuery(
    ['repositories', name],
    () => fetchOrganizationRepos(name),
    {
      enabled: !!name,
    }
  );

  return result;
}

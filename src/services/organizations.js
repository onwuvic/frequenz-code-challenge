import { useQuery } from '@tanstack/react-query';

export function useOrganizationsQuery() {
  const fetchOrganizations = async () => {
    const response = await fetch('https://api.github.com/organizations');
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  };

  const result = useQuery({
    queryKey: ['organizations'],
    queryFn: fetchOrganizations,
  });

  return result;
}

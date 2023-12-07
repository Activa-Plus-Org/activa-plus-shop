import { useQuery } from 'react-query';
import { API_ENDPOINTS } from '@/data/client/endpoints';
import client from '@/data/client';
import { useMe } from './user';
import { ViewUserServices } from '@/types';

export function useViewServices() {
  const { me } = useMe();
  const { data, isLoading, error } = useQuery<ViewUserServices[], Error>(
    API_ENDPOINTS.VIEWS_SERVICES_BY_USER,
    () => client.viewServiceUser.getViewsByUser(me?.id ?? '0')
  );

  return {
    viewServices: data ?? [],
    isLoading,
    error,
  };
}

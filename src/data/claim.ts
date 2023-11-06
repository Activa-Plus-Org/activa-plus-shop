import type { Claim, Cause, User } from '@/types';
import { useQuery } from 'react-query';
import { API_ENDPOINTS } from '@/data/client/endpoints';
import client from '@/data/client';

export function useClaims() {
  const { data, isLoading, error } = useQuery<Claim[], Error>(
    API_ENDPOINTS.CLAIMS,
    () => client.claims.all()
  );

  return {
    claims: data ?? [],
    isLoading,
    error,
  };
}

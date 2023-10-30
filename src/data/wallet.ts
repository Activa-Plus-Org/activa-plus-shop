import type { WalletChangeRespone } from '@/types';
import useAuth from '@/components/auth/use-auth';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import client from './client';
import { API_ENDPOINTS } from './client/endpoints';
import { useMe } from './user';

export function useWallet() {
  const { isAuthorized } = useAuth();
  const { me } = useMe();
  const { data, isLoading, error } = useQuery<WalletChangeRespone, Error>(
    [API_ENDPOINTS.WALLET_USER_ID],
    () => client.wallet.getWalletByUserId(me?.id as string),
    {
      enabled: isAuthorized,
    }
  );
  return {
    data: data,
    isLoading,
    error,
    isAuthorized,
  };
}

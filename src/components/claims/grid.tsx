import React from 'react';
import type { Claim } from '@/types';
import Card from './card';
import ItemNotFound from '../ui/item-not-found';
import { useTranslation } from 'next-i18next';

interface GridProps {
  claims: Claim[];
  isLoading?: boolean;
}

export default function Grid({ claims, isLoading }: GridProps) {
  const { t } = useTranslation('common');
  if (!isLoading && !claims.length) {
    return (
      <ItemNotFound
        title={t('text-no-claims-found')}
        message={t('text-no-claims-found-message')}
        className="px-4 pt-5 pb-10 md:px-6 md:pt-6 lg:px-7 lg:pb-12 3xl:px-8"
      />
    );
  }
  return (
    <div className="m-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {claims.map((claim: Claim, index: number) => (
        <Card key={index} claim={claim} />
      ))}
    </div>
  );
}

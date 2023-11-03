import Layout from '@/layouts/_layout';
import { Claim, NextPageWithLayout } from '@/types';
import Grid from '@/components/claims/grid';
import { useClaims } from '@/data/claim';

function HistoryClaim() {
  const { claims, isLoading } = useClaims();

  return (
    <>
      <Grid claims={claims} isLoading={isLoading} />
    </>
  );
}

const Claims: NextPageWithLayout = () => {
  return (
    <>
      <HistoryClaim />
    </>
  );
};

Claims.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Claims;

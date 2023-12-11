import Layout from '@/layouts/_layout';
import { Claim, NextPageWithLayout } from '@/types';
import Grid from '@/components/claims/grid';
import { useClaims } from '@/data/claim';
import DashboardLayout from '@/layouts/_dashboard';

function ClaimPage() {
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
      <ClaimPage />
    </>
  );
};

Claims.authorization = true;

Claims.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Claims;

import useAuth from '@/components/auth/use-auth';
import Button from '@/components/ui/button';
import { useMe } from '@/data/user';
import { useWallet } from '@/data/wallet';
import DashboardLayout from '@/layouts/_dashboard';
import { fadeInBottom } from '@/lib/framer-motion/fade-in-bottom';
import { NextPageWithLayout } from '@/types';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next/types';
import { useQueryClient } from 'react-query';

const WalletPage: NextPageWithLayout = () => {
  const { data, isLoading, error } = useWallet();

  console.log(data);
  return (
    <motion.div
      variants={fadeInBottom()}
      className="flex min-h-full flex-grow flex-col"
    >
      <h1 className="mb-5 text-15px font-medium text-dark dark:text-light sm:mb-6">
        {'Wallet'}
      </h1>
      <p>Puntos disponibles: {data?.availablePoints}</p>
      <p>Puntos usados: {data?.pointsUsed}</p>
      <p>Puntos totales: {data?.totalPoints} </p>
      <div className="mt-auto flex items-center gap-4 pb-3 lg:justify-end">
        <Button onClick={() => {}}>Recargar saldo</Button>
      </div>
    </motion.div>
  );
};

WalletPage.authorization = true;

WalletPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
    },
    revalidate: 60, // In seconds
  };
};

export default WalletPage;

import useAuth from '@/components/auth/use-auth';
import Button from '@/components/ui/button';
import { useMe } from '@/data/user';
import { useWallet } from '@/data/wallet';
import DashboardLayout from '@/layouts/_dashboard';
import { fadeInBottom } from '@/lib/framer-motion/fade-in-bottom';
import { NextPageWithLayout, WalletRechargeInput } from '@/types';
import { motion } from 'framer-motion';
import client from '@/data/client';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next/types';
import { useMutation } from 'react-query';
import toast from 'react-hot-toast';

const WalletPage: NextPageWithLayout = () => {
  //const { data, isLoading, error } = useWallet();

  const { mutate, isLoading } = useMutation(
    (data: { id: string; input: WalletRechargeInput }) =>
      client.wallet.rechargeWallet(data.id, data.input),
    {
      onSuccess: (res) => {
        console.log(res);
      },
      onError: (err: any) => {
        toast.error(<b>Something went wrong!</b>);
        console.log(err.response.data.message);
      },
    }
  );

  const rechargeMyWallet = (id: string, input: WalletRechargeInput) => {
    mutate({ id, input });
  };

  //console.log(data);
  return (
    <motion.div
      variants={fadeInBottom()}
      className="flex min-h-full flex-grow flex-col"
    >
      <></>
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

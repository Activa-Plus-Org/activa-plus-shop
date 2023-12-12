import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import type { NextPageWithLayout, UpdateProfileInput } from '@/types';
import type { SubmitHandler } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import DashboardLayout from '@/layouts/_dashboard';
import { Form } from '@/components/ui/forms/form';
import Input from '@/components/ui/forms/input';
import Textarea from '@/components/ui/forms/textarea';
import { ReactPhone } from '@/components/ui/forms/phone-input';
import Button from '@/components/ui/button';
import client from '@/data/client';
import { fadeInBottom } from '@/lib/framer-motion/fade-in-bottom';
import { useMe } from '@/data/user';
import pick from 'lodash/pick';
import { API_ENDPOINTS } from '@/data/client/endpoints';
import Uploader from '@/components/ui/forms/uploader';
import * as yup from 'yup';

const profileValidationSchema = yup.object().shape({
  //id: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  numberPhone: yup.string().required(),
  email: yup.string().required(),
  // profile: yup.object().shape({
  //   id: yup.string(),
  //   bio: yup.string(),
  //   contact: yup.string(),
  //   avatar: yup
  //     .object()
  //     .shape({
  //       id: yup.string(),
  //       thumbnail: yup.string(),
  //       original: yup.string(),
  //     })
  //     .optional()
  //     .nullable(),
  // }),
});
const ProfilePage: NextPageWithLayout = () => {
  const { t } = useTranslation('common');
  const queryClient = useQueryClient();
  const { me } = useMe();
  const userMutation = useMutation(
    (data: UpdateProfileInput) => {
      return client.users.update(me?.id as string, data);
    },
    {
      onSuccess: () => {
        toast.success(<b>{t('text-profile-page-success-toast')}</b>, {
          className: '-mt-10 xs:mt-0',
        });
      },
      onError: (error) => {
        toast.error(<b>{t('text-profile-page-error-toast')}</b>, {
          className: '-mt-10 xs:mt-0',
        });
        console.log(error);
      },
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.USERS_ME);
      },
    }
  );
  const onSubmit: SubmitHandler<UpdateProfileInput> = (data) => {
    console.log(data);
    userMutation.mutate(data);
  };

  return (
    <motion.div
      variants={fadeInBottom()}
      className="flex min-h-full flex-grow flex-col"
    >
      <h1 className="mb-5 text-15px font-medium text-dark dark:text-light sm:mb-6">
        {t('text-profile-page-title')}
      </h1>
      <Form<UpdateProfileInput>
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: pick(me, [
            'firstName',
            'phoneNumber',
            'lastName',
            'email',
          ]),
        }}
        validationSchema={profileValidationSchema}
        className="flex flex-grow flex-col"
      >
        {({ register, reset, control, formState: { errors } }) => (
          <>
            <fieldset className="mb-6 grid gap-5 pb-5 sm:grid-cols-2 md:pb-9 lg:mb-8">
              {/* <Controller
                name="phoneNumber"
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <div className="sm:col-span-2">
                    <span className="block cursor-pointer pb-2.5 font-normal text-dark/70 dark:text-light/70">
                      {t('text-profile-avatar')}
                    </span>
                    <div className="text-xs">
                      <Uploader {...rest} multiple={false} />
                    </div>
                  </div>
                )}
              /> */}
              <Input
                label={'Nombre'}
                {...register('firstName')}
                error={errors.firstName?.message}
              />
              <Input
                label={'Apellido'}
                {...register('lastName')}
                error={errors.lastName?.message}
              />
              <div>
                <span className="block cursor-pointer pb-2.5 font-normal text-dark/70 dark:text-light/70">
                  {t('text-profile-contact')}
                </span>
                <Controller
                  name="numberPhone"
                  control={control}
                  render={({ field }) => <ReactPhone country="bo" {...field} />}
                />

                {errors.numberPhone?.message && (
                  <span
                    role="alert"
                    className="block pt-2 text-xs text-warning"
                  >
                    {'contact field is required'}
                  </span>
                )}
              </div>
              <Input
                label={'Email'}
                {...register('email')}
                error={errors.email?.message}
              />
              {/* <Textarea
                label={t('text-profile-bio')}
                {...register('phoneNumber')}
                error={errors.phoneNumber?.message && 'bio field is required'}
                className="sm:col-span-2"
              /> */}
            </fieldset>
            <div className="mt-auto flex items-center gap-4 pb-3 lg:justify-end">
              <Button
                type="reset"
                onClick={() =>
                  reset({
                    //id: me?.id,
                    firstName: me?.firstName,
                    numberPhone: me?.numberPhone,
                  })
                }
                disabled={userMutation.isLoading}
                variant="outline"
                className="flex-1 lg:flex-none"
              >
                {t('text-cancel')}
              </Button>
              <Button
                className="flex-1 lg:flex-none"
                isLoading={userMutation.isLoading}
                disabled={userMutation.isLoading}
              >
                {t('text-save-changes')}
              </Button>
            </div>
          </>
        )}
      </Form>
    </motion.div>
  );
};

ProfilePage.authorization = true;
ProfilePage.getLayout = function getLayout(page) {
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

export default ProfilePage;

import * as yup from 'yup';
import { staggerTransition } from '@/lib/framer-motion/stagger-transition';
import { motion } from 'framer-motion';
import Input from '../ui/forms/input';
import { useState } from 'react';
import Button from '../ui/button';
import { PurchaseIcon } from '../icons/purchase-icon';
import { Form } from '../ui/forms/form';
import { PaymentInput } from '@/types';
import { SubmitHandler } from 'react-hook-form';

const paymentValidationSchema = yup.object().shape({
  amount: yup.string().required(),
});

export function Recharge() {
  const [number, setNumber] = useState<number | ''>('');
  let [serverError, setServerError] = useState<PaymentInput | null>(null);

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let nuevoValor = e.target.value;
    if (parseInt(nuevoValor) > 100000) return;
    if (isNaN(parseInt(nuevoValor)) || parseInt(nuevoValor) < 0) {
      nuevoValor = '';
    }

    setNumber(nuevoValor as number | '');
  };

  const onSubmit: SubmitHandler<PaymentInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="px-4 pt-5 pb-9 md:px-6 md:pb-10 md:pt-6 lg:px-7 lg:pb-12 3xl:px-8">
      <motion.div
        variants={staggerTransition(0.025)}
        className="grid grid-cols-1 gap-2"
      >
        <h1 className="mb-0.5 truncate text-center text-2xl font-semibold uppercase text-dark-100 dark:text-light">
          RECARGA TU BILLETERA
        </h1>
        <h2 className="mb-0.5 truncate text-xl font-medium uppercase text-dark-100 dark:text-light ">
          MONTO
        </h2>

        <Form<PaymentInput>
          onSubmit={onSubmit}
          validationSchema={paymentValidationSchema}
          serverError={serverError}
          className="flex flex-col items-stretch space-y-4 lg:space-y-5"
        >
          {({ register, formState: { errors } }) => (
            <>
              <Input
                inputClassName="text-center uppercase font-semibold text-lg lg:text-xl xl:text-xl 2xl:text-xl 4xl:text-xl mb-1"
                label=""
                type="number"
                {...register('amount')}
                error={errors.amount?.message}
                value={number}
                placeholder="ESCRIBA EL MONTO EN BOLIVIANOS"
                onChange={handleChangeNumber}
              />
              <Button type="submit" className="self-center uppercase">
                <div className="flex space-x-1">
                  <PurchaseIcon className="h-4 w-4" />
                  <p>Continuar el Pago</p>
                </div>
              </Button>
            </>
          )}
        </Form>
      </motion.div>
    </div>
  );
}

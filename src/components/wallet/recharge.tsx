import { staggerTransition } from '@/lib/framer-motion/stagger-transition';
import { motion } from 'framer-motion';
import Input from '../ui/forms/input';
import { useState } from 'react';
import Button from '../ui/button';
import { PurchaseIcon } from '../icons/purchase-icon';

export function Recharge() {
  const [number, setNumber] = useState<number | ''>('');

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let nuevoValor = e.target.value;
    if (parseInt(nuevoValor) > 100000) return;
    if (isNaN(parseInt(nuevoValor)) || parseInt(nuevoValor) < 0) {
      nuevoValor = '';
    }

    setNumber(nuevoValor as number | '');
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
        <Input
          inputClassName="text-center uppercase font-semibold text-xl mb-1"
          label=""
          type="number"
          value={number}
          placeholder="ESCRIBA EL MONTO EN BOLIVIANOS"
          onChange={handleChangeNumber}
        />
        <Button className="place-self-center uppercase">
          <div className="flex space-x-1">
            <PurchaseIcon className="h-4 w-4" />
            <p>Continuar el Pago</p>
          </div>
        </Button>
      </motion.div>
    </div>
  );
}

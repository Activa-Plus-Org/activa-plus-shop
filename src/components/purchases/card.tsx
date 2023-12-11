import { ViewUserServices } from '@/types';
import Image from '@/components/ui/image';
import { motion } from 'framer-motion';
import placeholder from '@/assets/images/placeholders/netflix.jpg';
import { FiCalendar, FiUser, FiKey } from 'react-icons/fi';

interface CardProps {
  viewService: ViewUserServices;
  handlerShowModal: () => void;
}

export default function Card({ viewService, handlerShowModal }: CardProps) {
  const stringDate = new Date(viewService.dateExpired);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const fullDate = stringDate.toLocaleDateString('default', options);

  return (
    <motion.div
      className="my-1 flex justify-around rounded border border-2 border-white border-opacity-25 p-2 shadow-md"
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ opacity: 0.85, scale: 0.99 }}
      transition={{ ease: 'easeOut', duration: 0.1 }}
    >
      <div className="group relative flex aspect-[3/2] w-1/5 justify-center overflow-hidden">
        <Image
          alt={viewService.productName}
          layout="fill"
          quality={100}
          objectFit="cover"
          src={placeholder /*image?.thumbnail ?? placeholder*/}
          className="rounded bg-light-500 dark:bg-dark-400"
        />
      </div>
      <div className="ml-3 flex flex-col justify-center space-y-3 text-sm text-gray-500 dark:text-gray-300">
        <span className="text-lg font-semibold">{viewService.productName}</span>
        <div className="flex items-center">
          <FiCalendar className="mr-1" />
          <span>Fecha de Expiración: {fullDate}</span>
        </div>
        <div className="flex items-center">
          <FiUser className="mr-1" />
          <span>Proveedor: {viewService.providerFullName}</span>
        </div>
      </div>
      <div className="flex flex-col self-center">
        <div className="flex items-center">
          <FiKey className="mr-1" />
          <span className="self-start">Credenciales: </span>
        </div>
        <button
          className="ml-3 rounded border border-green-700 py-2 px-4 font-bold text-white hover:bg-green-800"
          onClick={handlerShowModal}
        >
          Ver Credenciales
        </button>
      </div>
    </motion.div>
  );
}

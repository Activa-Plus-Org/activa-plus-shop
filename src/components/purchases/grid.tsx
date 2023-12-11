import { ViewUserServices } from '@/types';
import Card from './card';
import { useState } from 'react';
import CredentialsModal from './credentialsModal';

interface GridProps {
  viewServices: ViewUserServices[];
  isLoading?: boolean;
}

export default function Grid({ viewServices, isLoading }: GridProps) {
  const [showModal, setShowModal] = useState(false);

  const handlerShowModal = () => {
    setShowModal(true);
  };
  const handlerHideModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1 className="col-span-6 flex items-center text-15px font-medium text-dark dark:text-light">
        Mi Lista De Compras
        <span className="ml-1 text-light-900">({viewServices.length})</span>
      </h1>
      <div className="flex flex-col">
        {viewServices.length
          ? viewServices.map((value, index) => (
              <>
                <Card
                  key={index}
                  viewService={value}
                  handlerShowModal={handlerShowModal}
                />
                {showModal && (
                  <CredentialsModal
                    handlerHideModal={handlerHideModal}
                    credentials={value.credentials}
                  />
                )}
              </>
            ))
          : null}
      </div>
    </div>
  );
}

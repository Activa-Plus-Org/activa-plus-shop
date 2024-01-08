import React, { useEffect, useState } from 'react';
import { useModalAction, useModalState } from '../modal-views/context';

interface CredentialsProps {
  credentials?: JSON;
  handlerHideModal?: () => void;
}

const formatCredentials = (credentials: Record<string, any> = {}) => {
  return Object.entries(credentials)
    .map(([key, value]) => {
      return `${key}: ${value}`;
    })
    .join('\n');
};

export default function CredentialsModal({ credentials }: CredentialsProps) {
  const { closeModal } = useModalAction();

  const handlerHideModal = () => {
    closeModal();
  };
  const { data } = useModalState();
  console.log(data);
  // console.log(payload)
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative my-6 mx-auto w-2/3">
          {/*content*/}
          <div className="relative flex w-full flex-col rounded-lg border border-light border-opacity-25 bg-dark-100 shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between rounded-t border-b border-solid border-light border-opacity-25 p-5">
              <h3 className="text-2xl font-semibold">Ver Credenciales</h3>
            </div>
            {/*body*/}
            <div className="relative flex flex-col items-center justify-center bg-dark-250 p-6">
              {Object.entries(data!).map(([key, value]) => (
                <p
                  key={key}
                  className="text-center text-xl"
                >{`${key}: ${value}`}</p>
              ))}
              {/* {data} */}
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end rounded-b border-t border-solid border-light border-opacity-25 p-6">
              <button
                className="mr-1 mb-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                type="button"
                onClick={handlerHideModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
}

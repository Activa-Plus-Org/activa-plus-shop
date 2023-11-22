import React, { useState } from 'react';
import CustomDropdown from './dropdown/customDropdown';

interface CreateClaimProps {
  handlerHideModal: () => void;
}

export default function CreateClaim({ handlerHideModal }: CreateClaimProps) {
  const list = [
    'Compra 1',
    'Compra 2',
    'Compra 3',
    'Compra 4',
    'Compra 5',
    'Compra 6',
    'Compra 7',
    'Compra 8',
    'Compra 9',
    'Compra 10',
  ];

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative my-6 mx-auto w-2/3">
          {/*content*/}
          <div className="relative flex w-full flex-col rounded-lg border border-light border-opacity-25 bg-dark-100 shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between rounded-t border-b border-solid border-light border-opacity-25 p-5">
              <h3 className="text-3xl font-semibold">Generar Reclamo</h3>
            </div>
            {/*body*/}
            <div className="relative flex items-center justify-center bg-dark-250 p-6">
              <form action="POST" className="w-full max-w-lg">
                <CustomDropdown
                  options={list}
                  initial="Selecciona una compra"
                />
                <div className="my-5 border border-light border-opacity-25" />
                <div className="mb-3 grid grid-cols-4 items-center gap-6">
                  <label htmlFor="txtTitle">Título:</label>
                  <input
                    className="col-span-3 rounded-md border border-light border-opacity-25 bg-dark-100 hover:border-opacity-75 dark:text-light"
                    type="text"
                    name="txtTitle"
                  />
                </div>
                <div className="mb-3 grid grid-cols-4 items-center gap-6">
                  <label htmlFor="txtSocialReason">Razón social:</label>
                  <input
                    className="col-span-3 rounded-md border border-light border-opacity-25 bg-dark-100 hover:border-opacity-75 dark:text-light"
                    type="text"
                    name="txtSocialReason"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-6">
                  <label htmlFor="cmbCause">Causa:</label>
                  <div className="col-span-3">
                    <CustomDropdown
                      options={list}
                      initial="Selecciona una causa"
                    />
                  </div>
                </div>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end rounded-b border-t border-solid border-light border-opacity-25 p-6">
              <button
                className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                type="button"
                onClick={handlerHideModal}
              >
                Cancelar
              </button>
              <button
                className="mr-1 mb-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                type="button"
                onClick={handlerHideModal}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
}

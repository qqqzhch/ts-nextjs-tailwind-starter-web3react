'use client';
import { Dialog, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useWeb3React } from '@web3-react/core';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { When } from 'react-if';
import { useCookie } from 'react-use';

import AccountInfo from '@/components/accountInfo';

import { connectors } from '../../app/ProviderWeb3';

import Metamask from '~/icon/metamask.svg';

export default function MyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { account } = useWeb3React();
  const [value, updateCookie] = useCookie('walletIsConnectedTo');

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const Img = useCallback((name: string) => {
    if (name.toLowerCase() == 'metamask')
      return <Metamask className=' mr-3 h-6 w-6'></Metamask>;
  }, []);
  useEffect(() => {
    if (value !== undefined && value !== null) {
      connectors.forEach((item) => {
        if (item[2].toLowerCase() && value.toLowerCase()) {
          if (item[0].connectEagerly) {
            try {
              void item[0].connectEagerly();
            } catch (error) {
              console.error(error);
            }
          }
        }
      });
    }
  }, [value]);

  // useEffect(() => {
  //   void metaMask.connectEagerly().catch(() => {
  //     console.debug('Failed to connect eagerly to metamask')
  //   })
  // }, [])

  return (
    <>
      <When condition={account !== undefined}>
        <AccountInfo>
          <div className='mr-1 hidden py-1 text-xl sm:block '>
            {/* <Image alt='' className='h-12 w-12' src={Metamask}></Image> */}
            <Metamask className=' h-4 w-4'></Metamask>
          </div>
          <div className='mr-1  flex  flex-col text-sm'>
            {/* <div className="">{walletName}</div> */}
            <div className=''>
              {account?.substring(0, 4)}...{account?.substring(38, 42)}
            </div>
          </div>
          <div className='py-1'>
            <ChevronDownIcon className=' h-4 w-4'></ChevronDownIcon>
          </div>
        </AccountInfo>
      </When>
      <When condition={account === undefined}>
        <button
          onClick={openModal}
          type='button'
          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr-2 rounded-lg px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5'
        >
          Connect wallet
        </button>
      </When>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    Select Wallet
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      {connectors.map((item, index) => {
                        return (
                          <div className='my-1 flex-1' key={index}>
                            <button
                              onClick={() => {
                                updateCookie(item[2], {
                                  expires: 30,
                                  path: '/',
                                });
                                item[0].activate(1);
                                closeModal();
                              }}
                              type='button'
                              className='mb-2 mr-2 inline-flex w-full min-w-full items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                            >
                              {Img(item[2])}
                              {item[2]}
                            </button>
                          </div>
                        );
                      })}
                    </p>
                    {/* <p>
                      {connectors.map((item, index) => {
                        return (
                          <div
                            onClick={() => {
                              // item[0].deactivate();
                              if (item[0]?.deactivate) {
                                void item[0].deactivate();
                              } else {
                                void item[0].resetState();
                              }
                            }}
                            className=' m-4'
                            key={index}
                          >
                            {item[2]} out
                          </div>
                        );
                      })}
                    </p> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

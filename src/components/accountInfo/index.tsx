import { Popover } from '@headlessui/react';
import { PowerIcon } from '@heroicons/react/24/solid';
import { useWeb3React } from '@web3-react/core';
import React, { FC, useCallback } from 'react';
import { useCookie } from 'react-use';

import CopyAddressBtn from '../linkAndCopy/CopyAddressBtn';
import { connectors } from '../../app/ProviderWeb3';
import { cutOut } from '../../utils';

type Props = {
  children?: React.ReactNode;
};
const AccountInfo: FC<Props> = ({ children }) => {
  const { account } = useWeb3React();
  const [value, , deleteCookie] = useCookie('walletIsConnectedTo');
  const deactivate = useCallback(() => {
    if (value !== undefined && value !== null) {
      connectors.forEach((item) => {
        if (item[2].toLowerCase() && value.toLowerCase()) {
          try {
            if (item[0].deactivate) {
              void item[0].deactivate();
            } else {
              item[0].resetState();
            }
          } catch (error) {
            // console.error(error);
          }
        }
      });
    }
  }, [value]);

  const onLogout = useCallback(() => {
    deleteCookie();
    deactivate();
  }, [deactivate, deleteCookie]);

  return (
    <Popover className='relative'>
      <Popover.Button className='mr-2 flex flex-row items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:px-5 lg:py-2.5   '>
        {children}
      </Popover.Button>

      <Popover.Panel className='absolute   left-2/3  z-10 mt-4 max-w-sm    -translate-x-1/2 transform px-4 sm:px-0     md:left-1/2 lg:max-w-3xl'>
        <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
          <div className='relative   grid w-64 gap-4 bg-white p-6 '>
            <div className='-m-3 flex items-center justify-between rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'>
              <span>{account && cutOut(account, 4, 4)}</span>
              <CopyAddressBtn addr={account}></CopyAddressBtn>
            </div>
            <div
              onClick={onLogout}
              className=' flex cursor-pointer items-center justify-center  break-words rounded-lg p-2 transition duration-150 ease-in-out hover:bg-blue-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
            >
              <PowerIcon className=' h-6 w-6 text-red-700  '></PowerIcon>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default AccountInfo;

import {
  ArrowPathIcon,
  ShieldCheckIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid';

import TokenAndChain from '@/app/components/TokenAndChain';

//shield-check

const TxList = () => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
        <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Source Transaction Hash
            </th>
            <th scope='col' className='px-6 py-3'>
              Status
            </th>
            <th scope='col' className='px-6 py-3'>
              Source Transaction
            </th>
            <th scope='col' className='px-6 py-3'>
              Destination Transaction
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'>
            <th
              scope='row'
              className=' flex flex-col whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
            >
              <a href='#' className=' text-base  font-medium text-black'>
                0x62423267...835b906270
              </a>
              <div className=' text-sm text-gray-400'>
                Tue, 15 Aug 2023 01:16:24 UTC
              </div>
            </th>
            <td className='px-6 py-4'>
              <ShieldCheckIcon className='inline-block h-6 w-6 text-green-600'></ShieldCheckIcon>
              Successful
            </td>
            <td className='px-6 py-4'>Laptop</td>
            <td className='px-6 py-4'>$2999</td>
          </tr>
          <tr className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'>
            <th
              scope='row'
              className=' flex flex-col whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
            >
              <a href='#' className=' text-base  font-medium text-black'>
                0x62423267...835b906270
              </a>
              <div className=' text-sm text-gray-400'>
                Tue, 15 Aug 2023 01:16:24 UTC
              </div>
            </th>
            <td className='px-6 py-4'>
              <XCircleIcon className='inline-block h-6 w-6 text-red-600'></XCircleIcon>
              Error
            </td>
            <td className='px-6 py-4'>Laptop</td>
            <td className='px-6 py-4'>$2999</td>
          </tr>
          <tr className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'>
            <th
              scope='row'
              className=' flex flex-col whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
            >
              <a href='#' className=' text-base  font-medium text-black'>
                0x62423267...835b906270
              </a>
              <div className=' text-sm text-gray-400'>
                Tue, 15 Aug 2023 01:16:24 UTC
              </div>
            </th>
            <td className='px-6 py-4'>
              <XCircleIcon className='inline-block h-6 w-6 text-red-600'></XCircleIcon>
              Error
            </td>
            <td className=' px-6  py-4'>
              <TokenAndChain></TokenAndChain>
            </td>
            <td className='px-6 py-4'>
              <TokenAndChain></TokenAndChain>
            </td>
          </tr>
          <tr className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'>
            <th
              scope='row'
              className=' flex flex-col whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
            >
              <a href='#' className=' text-base  font-medium text-black'>
                0x62423267...835b906270
              </a>
              <div className=' text-sm text-gray-400'>
                Tue, 15 Aug 2023 01:16:24 UTC
              </div>
            </th>
            <td className='px-6 py-4'>
              <ArrowPathIcon className='inline-block h-6 w-6 animate-spin text-yellow-600'></ArrowPathIcon>
              loading
            </td>
            <td className='px-6 py-4'>Laptop</td>
            <td className='px-6 py-4'>$2999</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TxList;

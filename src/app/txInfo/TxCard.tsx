import {
  ArrowTopRightOnSquareIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { FC } from 'react';

import demoimg from '~/images/smalllogo.png';

type props = {
  isFrom: boolean;
};

const TxCard: FC<props> = ({ isFrom }) => {
  return (
    <div className=' flex w-full flex-col   rounded-md  border p-4 sm:w-1/2'>
      <div className=' my-3 text-black'>
        {isFrom ? 'SOURCE' : 'DESTINATION'} TRANSACTION
      </div>
      <div className='my-2'>
        <p>Source Tx Hash</p>
        <p className=' inline-flex  items-center space-x-2   text-black'>
          <span>0xc5adb53f045d10e1a8e0828c8f4e</span>
          <ArrowTopRightOnSquareIcon className=' inline-block h-4 w-4 text-blue-600'></ArrowTopRightOnSquareIcon>
          <DocumentDuplicateIcon className=' inline-block h-4 w-4 text-blue-600'></DocumentDuplicateIcon>
        </p>
      </div>
      <div className='my-2'>
        <p>{isFrom ? 'Sender' : 'Receiver'} Address</p>
        <p className=' inline-flex  items-center space-x-2 text-black'>
          <span>0xc5adb53f058cb166a9e0...</span>
          <ArrowTopRightOnSquareIcon className=' inline-block h-4 w-4 text-blue-600'></ArrowTopRightOnSquareIcon>
          <DocumentDuplicateIcon className=' inline-block h-4 w-4 text-blue-600'></DocumentDuplicateIcon>
        </p>
      </div>
      <div className=' flex flex-row justify-between'>
        <div className='my-2  w-1/2'>
          <p>Token {isFrom ? 'Sent' : 'Received'}</p>
          <p className=' space-x-1  text-black'>
            <Image
              className=' inline-block'
              alt='x'
              src={demoimg}
              width={25}
              height={25}
            ></Image>
            <span>11usdc</span>
          </p>
        </div>
        <div className='my-2 w-1/2'>
          <p>Chain</p>
          <p className=' space-x-1 text-black'>
            <Image
              className=' inline-block'
              alt='x'
              src={demoimg}
              width={25}
              height={25}
            ></Image>
            <span>Arbitrum</span>
          </p>
        </div>
      </div>
      <div className='my-2'>
        <p>Timestamp</p>
        <p className=' text-black'>04 Aug 2023 08:00:55 UTC</p>
      </div>
    </div>
  );
};

export default TxCard;

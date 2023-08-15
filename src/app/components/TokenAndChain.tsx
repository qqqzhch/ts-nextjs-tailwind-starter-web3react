import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

import demoimg from '~/images/smalllogo.png';

const TokenAndChain = () => {
  return (
    <div className='flex flex-col'>
      <div className=' inline-flex items-center space-x-1'>
        <span>Token:</span>
        <Image
          className=' inline-block'
          alt='x'
          src={demoimg}
          width={20}
          height={20}
        ></Image>
        <span>11 usdt</span>
      </div>
      <div className=' inline-flex items-center space-x-1'>
        <span>Chain:</span>
        <Image
          className=' inline-block'
          alt='x'
          src={demoimg}
          width={20}
          height={20}
        ></Image>
        <span>Arbitrum</span>
        <ArrowTopRightOnSquareIcon className='h-4 w-4'></ArrowTopRightOnSquareIcon>
      </div>
    </div>
  );
};

export default TokenAndChain;

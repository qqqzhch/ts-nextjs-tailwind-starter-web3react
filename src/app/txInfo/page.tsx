import { ShieldCheckIcon } from '@heroicons/react/24/solid';
import React from 'react';

import TxCard from '@/app/txInfo/TxCard';

const TxInfo = () => {
  return (
    <main className=' min-h-screen '>
      <section className=' body-font bg-white text-gray-600'>
        <div className='container mx-auto px-5 '>
          <h1 className=' break-words  text-xl'>
            Status for
            0x1a3b2abd0b3d14e7e1a456c416586c0424d9d373cbfb66f7f927c92ba91c1df3
          </h1>
          <div className='  flex flex-col space-y-1 py-6 '>
            <div>
              <ShieldCheckIcon className='inline-block h-6 w-6 text-green-600'></ShieldCheckIcon>
              <span className='    ml-2 text-base text-green-600'>
                Successful
              </span>
            </div>
            <div>Tue, 15 Aug 2023 01:16:24 UTC</div>
          </div>
          <div className=' flex flex-col items-stretch  justify-between  sm:flex-row'>
            <TxCard isFrom={true}></TxCard>
            <div className=' flex '>
              <div className=' m-auto p-2 '>{'>'}</div>
            </div>
            <TxCard isFrom={false}></TxCard>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TxInfo;

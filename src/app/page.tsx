import * as React from 'react';

import TxList from '@/app/components/TxListClient';

import txinfoType from '@/types/txinfo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.
/*
background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
*/
async function getData() {
  const res = await fetch(
    'https://express-hello-world-gamma.vercel.app/api/search/?txhash=0x46c9276d9563b44e8bb671f6aeebe47a4cfb7bf78c1731a38f257f07f510d288'
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json() as unknown as txinfoType;
}

export default async function HomePage() {
  const data = await getData();

  return (
    <main className='min-h-screen '>
      <section className=' body-font bg-white text-gray-600'>
        <div className='container mx-auto px-5 '>
          <div className=' mb-10 flex w-full flex-col '>
            <h1 className='title-font mb-1 text-xl font-medium text-gray-900 sm:text-2xl'>
              Latest Transactions
            </h1>
            <p className=' text-base leading-relaxed lg:w-2/3'>
              Latest 10 out of 775 latest transactions
            </p>
          </div>
          <TxList data={data}></TxList>
        </div>
      </section>
    </main>
  );
}

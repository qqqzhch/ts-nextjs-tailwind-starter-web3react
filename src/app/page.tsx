import * as React from 'react';

import TxList from '@/app/components/TxList';

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
export default function HomePage() {
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
          <TxList></TxList>
        </div>
      </section>
    </main>
  );
}

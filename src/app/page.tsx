import * as React from 'react';

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

export default async function HomePage() {
  return (
    <main className='container mx-auto min-h-screen bg-white'>
      <section className=' body-font  text-gray-600'>
        <div className=' px-5 '>
          <div className=' mb-10 flex w-full flex-col '>
            <h1 className='title-font mb-1 text-xl font-medium text-gray-900 sm:text-2xl'>
              Latest Transactions
            </h1>
            <p className=' text-base leading-relaxed lg:w-2/3'>
              Latest 10 out of 775 latest transactions
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

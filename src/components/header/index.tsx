import { Bars3Icon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { FC } from 'react';
import 'flowbite';

import Mobilelogo from '~/images/smalllogo.png';
import Logo from '~/images/ValueRouter.png';

// import Connectwallet from '../connectwallet'
// import ChainList from '../chainList/index'
// import Noticeinfo from '../noticeinfo'

// import { useNavigate } from 'react-router-dom'

export const Header: FC = () => {
  // const Navigate = useNavigate()

  return (
    <header className='body-font text-gray-600'>
      <nav className='border-gray-200 bg-white px-4 py-2.5  lg:px-6'>
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between'>
          <a className='flex cursor-pointer items-center'>
            <Image
              src={Mobilelogo}
              className='mr-3  h-12 w-12    '
              alt=' Logo'
            ></Image>
            <Image
              src={Logo}
              className=' mr-3  hidden    w-32 sm:block    '
              alt='logo'
            ></Image>
          </a>
          <div className='flex  flex-1  items-center justify-end  lg:order-2'>
            {/* <Noticeinfo></Noticeinfo>
            <ChainList></ChainList>
            <Connectwallet></Connectwallet> */}
            <button
              data-collapse-toggle='mobile-menu-2'
              type='button'
              className='ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden'
              aria-controls='mobile-menu-2'
              aria-expanded='false'
            >
              <Bars3Icon className=' h-6 w-6'></Bars3Icon>
            </button>
          </div>
          <div
            className='hidden  w-full flex-1 items-center justify-between sm:ml-8 lg:order-1 lg:flex lg:w-auto'
            id='mobile-menu-2'
          >
            <ul className='mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8'>
              {/* <li>
                        <a  onClick={()=>{Navigate('/swap')}}  className="block cursor-pointer py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">USDC Router</a>
                    </li> */}
              <li>
                <a
                  href='#'
                  className='lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white'
                >
                  Doc
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

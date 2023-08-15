import React from 'react';

import SearchIcon from '~/svg/Search.svg';

const Search = () => {
  return (
    <div className=' flex flex-col  space-y-3  text-center   '>
      <h1>Value Router Explorer</h1>
      <p>
        Track all your bridge transactions across Ethereum,Arbitrum, Avalanche.
      </p>
      <div className=' flex items-center -space-x-8'>
        <input
          type='text'
          className=' flex-1 rounded-md  border-white outline-none'
        ></input>
        <SearchIcon className=' h-6 w-6'></SearchIcon>
      </div>
    </div>
  );
};

export default Search;

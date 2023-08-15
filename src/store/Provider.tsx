'use client';
import React, { FC } from 'react';
import { Provider } from 'react-redux';

import store from './index';

const ProviderStore: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderStore;

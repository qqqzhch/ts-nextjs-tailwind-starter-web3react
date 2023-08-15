'use client';
import React, { FC } from 'react';

import { useAppSelector } from '@/store/hooks';

import TxList from '@/app/components/TxList';

import txinfoType from '@/types/txinfo';

const TxListClient: FC<{ data: txinfoType }> = ({ data }) => {
  const icon = useAppSelector((state) => state.icon.data);
  return <TxList data={icon || data}></TxList>;
};

export default TxListClient;

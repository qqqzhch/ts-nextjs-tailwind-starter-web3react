'use client';
import React, { FC, useEffect } from 'react';

import { iconMoon } from '@/store/features/icon-slice';
import { useAppDispatch } from '@/store/hooks';

import txinfoType from '@/types/txinfo';

const SaveDataStore: FC<{ data: txinfoType }> = ({ data }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(iconMoon(data));
  }, [data, dispatch]);
  return <></>;
};

export default SaveDataStore;

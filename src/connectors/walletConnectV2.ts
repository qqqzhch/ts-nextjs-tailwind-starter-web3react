'use client';
import { initializeConnector } from '@web3-react/core';
import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2';

import { MAINNET_CHAINS } from '../chains';

const [mainnet, ...optionalChains] = Object.keys(MAINNET_CHAINS).map(Number);

const NEXT_PUBLIC_WalletConnectProjectId =
  process.env['NEXT_PUBLIC_WalletConnectProjectId'] || '';

export const [walletConnectV2, hooks] = initializeConnector<WalletConnectV2>(
  (actions) =>
    new WalletConnectV2({
      actions,
      options: {
        projectId: NEXT_PUBLIC_WalletConnectProjectId,
        chains: [mainnet],
        optionalChains: [mainnet, ...optionalChains],
        showQrModal: true,
        rpcMap: {
          1: MAINNET_CHAINS[1].urls,
        },
      },
    })
);

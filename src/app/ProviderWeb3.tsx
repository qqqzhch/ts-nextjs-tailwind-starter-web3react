'use client';
import type { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core';
import type { MetaMask } from '@web3-react/metamask';
import type { Network } from '@web3-react/network';
import type { WalletConnect } from '@web3-react/walletconnect';
import type { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2';
import React from 'react';

import {
  coinbaseWallet,
  hooks as coinbaseWalletHooks,
} from '../connectors/coinbaseWallet';
import { hooks as metaMaskHooks, metaMask } from '../connectors/metaMask';
import { hooks as networkHooks, network } from '../connectors/network';
import {
  hooks as walletConnectV2Hooks,
  walletConnectV2,
} from '../connectors/walletConnectV2';

export const connectors: [
  MetaMask | WalletConnect | WalletConnectV2 | CoinbaseWallet | Network,
  Web3ReactHooks,
  string
][] = [
  [metaMask, metaMaskHooks, 'metaMask'],
  // [walletConnect, walletConnectHooks, 'walletConnect'],
  [walletConnectV2, walletConnectV2Hooks, 'walletConnectV2'],
  [coinbaseWallet, coinbaseWalletHooks, 'coinbaseWallet'],
  [network, networkHooks, 'network'],
];

// function Child() {
//   const { connector } = useWeb3React();
//   console.log(`Priority Connector is: ${getName(connector)}`);
//   return null;
// }

export default function ProviderWeb3({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Web3ReactProvider connectors={connectors}>{children}</Web3ReactProvider>
  );
}

import { Metadata } from 'next';
import * as React from 'react';
import { Toaster } from 'react-hot-toast';

import '@/styles/globals.css';

import { Header } from '@/components/header/index';
import UnderlineLink from '@/components/links/UnderlineLink';

import ProviderStore from '@/store/Provider';

import ProviderWeb3 from '@/app/ProviderWeb3';
import { siteConfig } from '@/constant/config';
// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/smalllogo.png',
    apple: '/favicon/smalllogo.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ProviderWeb3>
          <Header></Header>
          <section className=' to-[#c2e9fb  bg-gradient-to-t from-[#a1c4fd]'>
            <ProviderStore>{children}</ProviderStore>
          </section>
          <footer className='bottom-2 mx-auto flex   min-h-[100px]   items-center justify-center bg-[#a1c4fc]  text-black'>
            <div>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='/'>web demo</UnderlineLink>
            </div>
          </footer>
        </ProviderWeb3>
        <Toaster />
      </body>
    </html>
  );
}

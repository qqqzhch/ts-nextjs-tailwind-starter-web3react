import { Metadata } from 'next';
import * as React from 'react';
import { Toaster } from 'react-hot-toast';

import '@/styles/globals.css';

import { Header } from '@/components/header/index';
import UnderlineLink from '@/components/links/UnderlineLink';

import ProviderStore from '@/store/Provider';

import Search from '@/app/components/Search';
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
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
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
          <section className=' to-[#c2e9fb mb-14 bg-gradient-to-b from-[#a1c4fd]'>
            <div className='layout relative flex   flex-col  py-12'>
              <Search></Search>
            </div>
          </section>
          <ProviderStore>{children}</ProviderStore>
          <footer className='bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href=''>Value Router</UnderlineLink>
          </footer>
        </ProviderWeb3>
        <Toaster />
      </body>
    </html>
  );
}

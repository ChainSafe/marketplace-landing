import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local';
import React from 'react';

const neueMontreal = localFont({
  src: [
    {
      path: './fonts/NeueMontreal-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NeueMontreal-Medium.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={neueMontreal.className}>
      <Component {...pageProps} />
    </main>
  );
}

import React from 'react';
import About from '@/sections/About';
import HowToBuild from '@/sections/HowToBuild';
import Features from '@/sections/Features';
import Integrate from '@/sections/Integrate';
import Hero from '@/sections/Hero';
import FormSectionCentered from '@/sections/FormSectionCentered';
import Footer from '../components/Footer';
import { HubspotProvider } from '@aaronhayes/react-use-hubspot-form';
import Navbar from '../components/Navbar';
import Head from 'next/head';

export default function Home() {
  return (
    <HubspotProvider>
      <Head>
        <title>
          The interoperability layer for building cross-blockchain applications
          | Sygma
        </title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content="Build on Sygma's cross-chain infrastructure with our TypeScript SDK
            for seamless communication across EVM, Substrate, Cosmos and more."
        />
        {/*<!-- OG Meta Tags -->*/}
        <meta
          property='og:url'
          content='https://buildwithsygma.com/'
          key='ogurl'
        />
        <meta
          property='og:image'
          content='https://imagedelivery.net/qdx9xDn6TxxInQGWsuRsVg/3593c6f4-4eb9-4e82-cdd9-564d4ddc5c00/public'
          key='ogimage'
        />
        <meta
          property='og:site_name'
          content='Sygma Website'
          key='ogsitename'
        />
        <meta
          property='og:title'
          content='The interoperability layer for building cross-blockchain
            applications | Sygma'
          key='ogtitle'
        />
        <meta
          property='og:description'
          content="Build on Sygma's cross-chain infrastructure with our TypeScript SDK
            for seamless communication across EVM, Substrate, Cosmos and more."
          key='ogdesc'
        />
        {/*<!-- Twitter Meta Tags -->*/}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@buildwithsygma' />
        <meta
          name='twitter:title'
          content='The interoperability layer for building cross-blockchain
            applications'
        />
        <meta
          name='twitter:description'
          content="Build on Sygma's cross-chain infrastructure with our TypeScript SDK
            for seamless communication across EVM, Substrate, Cosmos and more."
        />
        <meta
          name='twitter:image'
          content='https://imagedelivery.net/qdx9xDn6TxxInQGWsuRsVg/3593c6f4-4eb9-4e82-cdd9-564d4ddc5c00/public'
        />
        <script
          type='text/javascript'
          id='hs-script-loader'
          async
          defer
          src='//js.hs-scripts.com/39701769.js'></script>
        <script
          defer
          data-domain='buildwithsygma.com'
          src='https://plausible.io/js/script.outbound-links.js'></script>
      </Head>
      <Navbar />
      <Hero />
      <About />
      <HowToBuild />
      <Integrate />
      <Features />
      <FormSectionCentered />
      <Footer />
    </HubspotProvider>
  );
}

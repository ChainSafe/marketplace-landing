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
import CaseStudy from '@/sections/CaseStudy';

export default function Home() {
  return (
    <HubspotProvider>
      <Head>
        <title>ChainSafe Gaming Marketplace</title>
        {/* create marketplace plausible script */}
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content="Create a player-centric in-game marketplace with ChainSafe's Marketplace. Own & control your ecosystem, enabling seamless access to assets during gameplay."
        />
        {/*<!-- OG Meta Tags -->*/}
        <meta
          property='og:url'
          content='https://marketplace.chainsafe.io/'
          key='ogurl'
        />
        <meta
          property='og:image'
          content='https://imagedelivery.net/qdx9xDn6TxxInQGWsuRsVg/73764230-eea4-4d79-71a7-721a06a87e00/public'
          key='ogimage'
        />
        <meta
          property='og:site_name'
          content='ChainSafe Gaming Marketplace'
          key='ogsitename'
        />
        <meta
          property='og:title'
          content='Gaming-focussed NFT marketplace | ChainSafe Gaming'
          key='ogtitle'
        />
        <meta
          property='og:description'
          content="Create a player-centric marketplace with ChainSafe's Marketplace. Own & control your ecosystem, enabling seamless access to assets during gameplay."
          key='ogdesc'
        />
        {/*<!-- Twitter Meta Tags -->*/}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@ChainSafeth' />
        <meta
          name='twitter:title'
          content='Gaming-focussed NFT marketplace | ChainSafe Gaming'
        />
        <meta
          name='twitter:description'
          content="Create a player-centric marketp`lace with ChainSafe's Marketplace. Own & control your ecosystem, enabling seamless access to assets during gameplay."
        />
        <meta
          name='twitter:image'
          content='https://imagedelivery.net/qdx9xDn6TxxInQGWsuRsVg/73764230-eea4-4d79-71a7-721a06a87e00/public'
        />
        <script
          defer
          data-domain='marketplace.chainsafe.io'
          src='https://plausible.io/js/script.outbound-links.js'></script>
      </Head>
      <Navbar />
      <Hero />
      <About />
      <HowToBuild />
      <Integrate />
      <CaseStudy />
      <Features />
      <FormSectionCentered />
      <Footer />
    </HubspotProvider>
  );
}

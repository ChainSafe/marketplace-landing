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
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <HubspotProvider>
      <Layout/>
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

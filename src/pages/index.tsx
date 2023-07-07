import React from 'react';
import About from '@/sections/About';
import HowToBuild from '@/sections/HowToBuild';
import Features from '@/sections/Features';
import Integrate from '@/sections/Integrate';
import Hero from '@/sections/Hero';
import FormSectionCentered from '@/sections/FormSectionCentered';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HowToBuild />
      <Integrate />
      <Features />
      <FormSectionCentered />
    </>
  );
}

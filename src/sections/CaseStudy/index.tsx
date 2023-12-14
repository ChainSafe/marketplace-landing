/* eslint-disable @next/next/no-img-element */
import StepCard from '@/components/StepCard';
import { motion } from 'framer-motion';
import { parentVariant, childVariants } from '@/styles/animations';

const cardContents = [
  {
    heading: 'Open Web3.unity in Unity',
    desc: 'Download from gaming.chainsafe.io',
  },
  {
    heading: 'Drag & drop',
    desc: 'Marketplace building kit',
  },
  {
    heading: 'Follow documentation',
    desc: '5 simple steps',
  },
  {
    heading: 'Finish it off ',
    desc: 'Deploy your marketplace',
  },
];

export default function CaseStudy() {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.5 }}
      className='overflow-hidden bg-gray-900 py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 py-8'>
          <div className='flex flex-col items-center justify-center lg:pt-4'>
            <p className='my-3 text-center text-xl text-brand-200'>
              Case Study
            </p>
            <h1 className='max-w-2xl text-center text-6xl font-bold tracking-tight text-gray-100'>
              Read about how we built a marketplace for Echelon.
            </h1>
          </div>
        </div>
        <a href="https://blog.chainsafe.io/echelon-nft-marketplace/" target="_blank" rel="noopener noreferrer" className='mx-auto transition-all hover:brightness-75 h-full max-w-7xl rounded-3xl'>
          <img src="/echelon.png" alt="Echelon Parallel case study"/>
        </a>
    </div>
    </motion.div>
  );
}

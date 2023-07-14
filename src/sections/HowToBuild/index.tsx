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
    desc: 'Marketplace prefab',
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

export default function HowToBuild() {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.5 }}
      className='overflow-hidden bg-gray-900 py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 '>
          <div className='flex flex-col items-center justify-center lg:pt-4'>
            <p className='my-3 text-center text-xl text-brand-200'>
              Get ahead of the curve
            </p>
            <h1 className='max-w-xl text-center text-6xl font-bold tracking-tight text-gray-100'>
              Build your marketplace in one day.
            </h1>
          </div>
        </div>

        <motion.div
          variants={parentVariant}
          initial='offscreen'
          whileInView='onscreen'
          transition={{ duration: 1.2, delay: 0.5 }}
          className='grid-col-1 mx-auto mt-8 grid gap-y-4 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4'>
          {cardContents.map((item: any, cardIndex: number) => (
            <motion.div key={item.heading} variants={childVariants}>
              <StepCard
                heading={item.heading}
                index={cardIndex + 1}
                desc={item.desc}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

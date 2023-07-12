import React from 'react';
import { motion } from 'framer-motion';
import {
  parentVariant,
  fadeInVariant,
  childVariants,
} from '@/styles/animations';

export default function Features() {
  const cardStyles = `relative lg:max-w-sm min-h-[45vh] py-8 px-8 flex flex-col gap-x-2 rounded-xl bg-gray-100`;
  const cardHeadingStyles = `text-2xl font-semibold text-gray-800 text-center`;
  const cardDescriptionStyles = `text-xl text-gray-800 absolute top-[70%] tracking-tight max-w-[90%]`;

  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.5 }}
      className='isolate bg-gray-900 px-6 py-32 shadow-2xl lg:px-8 lg:py-32'>
      <motion.div
        variants={fadeInVariant}
        className='mx-auto max-w-2xl sm:text-center'>
        <h3 className='mx-auto text-center text-3xl font-medium text-white md:mx-auto md:text-4xl lg:max-w-[80%]'>
          1000+ games are building with ChainSafe Gaming
        </h3>
      </motion.div>
      <motion.div
        variants={parentVariant}
        initial='offscreen'
        whileInView='onscreen'
        transition={{ duration: 0.8, delay: 0.1 }}
        className='mx-auto grid grid-cols-1 justify-center space-y-4 lg:grid-cols-3-fixed lg:items-stretch lg:space-x-2 lg:space-y-0'>
        <motion.div variants={childVariants} className={cardStyles}>
          <h3 className={cardHeadingStyles}>
            Highly customizable to your game&apos;s design
          </h3>
          <p className={cardDescriptionStyles}>
            Change your marketplace design to suit your game visuals
          </p>
        </motion.div>
        <motion.div variants={childVariants} className={cardStyles}>
          <h3 className={cardHeadingStyles}>
            Simple step-by-step documentation
          </h3>
          <p className={cardDescriptionStyles}>
            All steps are listed out in super simple language in our SDK
            documentation
          </p>
        </motion.div>
        <motion.div variants={childVariants} className={cardStyles}>
          <h3 className={cardHeadingStyles}>Reliable tiers of support</h3>
          <p className={cardDescriptionStyles}>
            Contact ChainSafe support via Discord or work with us to have a
            dedicated support line
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

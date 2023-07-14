import { motion } from 'framer-motion';
import { parentVariant, childVariants } from '@/styles/animations';

export default function Integrate() {
  const baseCardStyles = `flex flex-col justify-center rounded-3xl border-2 border-gray-900`;
  return (
    <div className='overflow-hidden bg-gray-900 lg:py-8'>
      <div className='mx-auto h-full max-w-7xl rounded-3xl bg-gradient-to-b from-[#B4FF68] to-white '>
        <div className='mx-4 grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='px-8 py-8 md:py-16'>
            <div className='lg:max-w-lg'>
              <h2 className='mt-2 text-5xl font-bold tracking-tight text-black'>
                Seamlessly blend in-game and web experiences to captivate your
                audience like never before.
              </h2>
              <h3 className='my-4 text-xl text-black'>
                Craft your in-game marketplace with ease using our web
                dashboard.
              </h3>
            </div>
          </div>
          <div className='rounded-2xl from-white to-[#B4FF68] lg:bg-gradient-to-b'>
            <div className='relative grid grid-cols-3 gap-x-2 lg:left-[-50px]'>
              <motion.div
                variants={parentVariant}
                initial='offscreen'
                whileInView='onscreen'
                transition={{ duration: 1.5, delay: 3 }}
                className='relative mb-4 grid grid-cols-1 grid-rows-3 gap-x-2 gap-y-8 lg:mt-12'>
                <motion.div
                  variants={childVariants}
                  className={`${baseCardStyles} row-start-1 row-end-2  bg-[#B4FF68] px-4 py-8`}>
                  <p className='text-center text-xl text-black'>
                    Accessible inside and outside of your game
                  </p>
                </motion.div>
                <motion.div
                  variants={childVariants}
                  className={`${baseCardStyles} row-start-2 row-end-3  bg-brand-800 px-4 py-10`}>
                  <p className='text-center text-xl text-brand-200'>
                    Earn royalties on sales
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                variants={parentVariant}
                initial='offscreen'
                whileInView='onscreen'
                transition={{ duration: 3, delay: 3 }}
                className='col-span-2 mb-4 mt-16 grid grid-cols-2 grid-rows-3 justify-items-end gap-y-4'>
                <motion.div
                  variants={childVariants}
                  className={`${baseCardStyles} col-span-2 row-start-1 row-end-3  bg-brand-200 px-4 py-8`}>
                  <p className='text-center text-xl text-black'>
                    No Solidity or smart contract knowledge necessary
                  </p>
                </motion.div>
                <motion.div
                  variants={childVariants}
                  className={`${baseCardStyles} col-start-2 col-end-2 row-start-3 row-end-4  bg-brand-800 px-8 py-3 text-center text-brand-200`}>
                  <p className='text-center text-xl text-brand-200'>
                    Easy web-to-Unity import
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

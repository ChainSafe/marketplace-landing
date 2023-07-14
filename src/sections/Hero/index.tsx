import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';
import React from 'react';

export type FormPageProps = {
  hsFormId?: string;
  hsPortalId?: string;
  targetName?: string;
};


export default function Hero({}: FormPageProps) {
  const { loaded, error } = useHubspotForm({
    portalId: (process.env.NEXT_PUBLIC_HS_PORTAL_ID as string) || '7667626',
    formId: '0f93c610-6f6d-4deb-9b1a-9ecc0f4134fa',
    target: '#waitlist',
  });

  return (
    <div className='relative isolate h-screen overflow-hidden bg-gray-900 py-24 lg:py-8'>
      {/* background */}
      <div className='lg:grid-cols:4 relative hidden grid-cols-2 lg:grid '>
        <div className='absolute left-[-120px] top-[350px] z-0 flex gap-x-4'>
          <img src='/Toshimon.png' alt='' />
          <img src='/Birbz.png' alt='' />
          <img src='/Arsenal.png' alt='' />
        </div>
        <div className='absolute left-[-130px] top-[500px] z-0 flex gap-x-4'>
          <img src='/GalacticPioneers.png' alt='' />
          <img src='/Binamon.png' alt='' />
        </div>
        <div className='absolute right-[-50px] top-[30px] z-0 flex gap-x-4'>
          <img src='/GalacticPioneers.png' alt='' />
          <img src='/Binamon.png' alt='' />
          <img src='/Birbz.png' alt='' />
        </div>
        <div className='absolute right-[100px] top-[180px] z-0 flex gap-x-4'>
          <img src='/Binamon.png' alt='' />
          <img src='/Arsenal.png' alt='' />
        </div>
      </div>
      <div className='relative mx-auto grid max-w-7xl grid-cols-1 px-6 pt-12 lg:static lg:px-8 lg:pt-32 '>
        <div className='rounded-3xl bg-gradient-to-b from-[#B4FF68] to-white px-4 py-8 lg:max-w-[40%]'>
          <p className='text-sm text-black'>01</p>
          <h1 className='max-w-2xl text-6xl font-bold tracking-tight text-black'>
            <u>Join our waitlist.</u>
          </h1>
        </div>
        <div className='relative mt-4 max-w-xl justify-self-end'>
          <p className='mt-6 text-sm opacity-60'>02</p>
          <h2 className='max-w-2xl text-6xl font-bold tracking-tight text-white'>
            Build the best in-game/ web marketplace you&apos;ve been waiting
            for.
          </h2>
        </div>
        <div className='absolute bottom-0 left-1/2 hidden translate-x-[-50%] flex-col items-center justify-center md:flex lg:bottom-3'>
          <p className='text-center text-base text-white'>Learn More</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='mx-auto h-6 w-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 8.25l-7.5 7.5-7.5-7.5'
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

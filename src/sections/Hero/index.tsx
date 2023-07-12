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
    <div className='relative isolate bg-gray-900 py-8 '>
      <div className='mx-auto grid max-w-7xl grid-cols-1 '>
        <div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48 '>
          <div className='mx-auto max-w-xl justify-center'>
            <p className='text-sm'>01</p>
            <h1 className='max-w-2xl text-6xl font-bold tracking-tight text-white'>
              Join our waitlist.
            </h1>
            <p className='mt-6 text-sm opacity-60'>02</p>
            <h2 className='max-w-2xl text-6xl font-bold tracking-tight text-white opacity-60'>
              Build the best in-game/ web marketplace you&apos;ve been waiting
              for.
            </h2>
          </div>
        </div>
      </div>
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
  );
}

import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';
import React from 'react';

export type FormPageProps = {
  hsFormId?: string;
  hsPortalId?: string;
  targetName?: string;
};

export default function FormSectionCentered({}: FormPageProps) {
  const { loaded, error } = useHubspotForm({
    portalId: process.env.NEXT_PUBLIC_HS_PORTAL_ID as string,
    formId: '0f93c610-6f6d-4deb-9b1a-9ecc0f4134fa',
    target: '#waitlist',
  });

  console.log(loaded);

  return (
    <div className='relative isolate bg-gray-900 py-8 '>
      <div className='mx-auto flex max-w-7xl flex-col'>
        <div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48 '>
          <div className='mx-auto max-w-3xl'>
            <h1 className='text-center text-5xl font-bold tracking-tight text-white'>
              Revolutionize game-play with ChainSafe`&apos;`s upcoming web
              marketplace
            </h1>
            <p className='my-6 text-center text-xl tracking-tight text-white'>
              Empower players to buy, sell, and trade digital assets both in
              your game and on the web.
            </p>
          </div>
          <form className='px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48'>
            <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
              <div id='waitlist'></div>
            </div>
            {error && <div>There was a problem loading this form.</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

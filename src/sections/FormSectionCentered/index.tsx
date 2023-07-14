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

  return (
    <div className='relative isolate bg-gray-100 py-8'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='mx-auto max-w-2xl px-2 pt-10 lg:py-12 lg:pl-12'>
          <h1 className='text-3xl font-bold tracking-tight text-black lg:text-5xl'>
            Revolutionize game-play with ChainSafe&apos;s upcoming web
            marketplace
          </h1>
          <p className='mt-4 text-xl tracking-tight text-gray-900 lg:text-2xl'>
            Empower players to buy, sell, and trade digital assets both in your
            game and on the web.
          </p>
        </div>
        <form className='px-2 pt-20 lg:px-7 lg:py-12'>
          <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
            <div id='waitlist'></div>
          </div>
          {error && <div>There was a problem loading this form.</div>}
        </form>
      </div>
    </div>
  );
}

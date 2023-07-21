import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';
import React from 'react';

export type FormPageProps = {
  hsFormId?: string;
  hsPortalId?: string;
  targetName?: string;
};

export default function FormSectionCentered({}: FormPageProps) {
  const { error } = useHubspotForm({
    portalId: '7667626',
    formId: '0f93c610-6f6d-4deb-9b1a-9ecc0f4134fa',
    target: '#waitlist',
  });

  return (
    <div className='relative isolate bg-gray-100 py-16 lg:py-8'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
        <div className='mx-auto max-w-2xl px-2 pt-10 lg:py-12 lg:pl-12'>
          <h1 className='text-3xl font-bold tracking-tight text-black lg:text-5xl'>
            Use ChainSafe&apos;s web marketplace to mint, organize and promote
            your NFTs
          </h1>
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

import Image from 'next/image'
import SubscribeNewsletter from '@/sections/SubscribeNewsletter';
import FormPageTemplate from '@/sections/FormPageTemplate';

export default function Home() {
  return (
    <>
      <FormPageTemplate
        hsPortalId='39701769'
        hsFormId='0126779e-c437-4c5d-b478-60e0e16b4341'
        targetName='#contributor-program-form'
      />
      <SubscribeNewsletter />
    </>
  );
}

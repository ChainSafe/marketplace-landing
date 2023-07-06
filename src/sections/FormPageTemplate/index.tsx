import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';
export type FormPageProps = {
  hsFormId: string;
  hsPortalId: string;
  targetName: string;
};

export default function FormPageTemplate({
  hsFormId,
  hsPortalId,
  targetName,
}: FormPageProps) {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: hsPortalId,
    formId: hsFormId,
    target: targetName,
  });

  return (
    <div className='relative isolate bg-gray-200 py-8 '>
      <div className='border-warm-white mx-auto grid max-w-7xl grid-cols-1 border-b-4 lg:grid-cols-2'>
        <div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48 '>
          <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-4xl'>
            <h1 className='text-6xl font-bold tracking-tight text-black'>
              Join our waitlist.
            </h1>
            <h2 className='my-8 text-6xl font-bold tracking-tight text-gray-600'>
              Build the best in-game/web marketplace you’ve been waiting for.
            </h2>
          </div>
        </div>

        <form className='bg-gray-200 px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48'>
          <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
            <div id={targetName.substring(1)}></div>
          </div>
        </form>
      </div>
    </div>
  );
}

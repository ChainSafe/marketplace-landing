import Image from 'next/image';

export default function Integrate() {
  return (
    <div className='overflow-hidden bg-gray-900 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:pr-8 lg:pt-4'>
            <div className='lg:max-w-lg'>
              <p className='mt-2 text-xl text-brand-200'>
                Integrate innovation
              </p>
              <h2 className='mt-2 text-4xl font-bold tracking-tight text-white sm:text-4xl'>
                Seamlessly blend in-game and web experiences to captivate your
                audience like never before.
              </h2>
              <h3 className='my-4 text-2xl text-white'>
                Craft your in-game marketplace with ease using our web
                dashboard.
              </h3>
            </div>
          </div>
          <Image
            src='/placeholder.png'
            alt='Product screenshot'
            className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0'
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}

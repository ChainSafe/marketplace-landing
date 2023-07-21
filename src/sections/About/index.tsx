export default function About() {
  return (
    <div className='overflow-hidden bg-gray-200 py-24 sm:py-32' id='about'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-4 lg:gap-y-8'>
          <div className='lg:p1-4 flex flex-col justify-center lg:pt-4'>
            <h1 className='mx-auto max-w-2xl text-center text-6xl font-bold tracking-tight text-gray-900'>
              Create an ecosystem that you own and control.
            </h1>
            <h3 className='my-6 text-center text-xl text-gray-900'>
              No need to disrupt gameplay with third party marketplaces anymore.
              Use the ChainSafe Gaming marketplace building kit to make
              something that <strong>looks</strong> and <em>feels</em> like your
              own.{' '}
            </h3>
          </div>
          <img
            src='/demo.png'
            alt='Product screenshot'
            className='rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0'
          />
        </div>
      </div>
    </div>
  );
}

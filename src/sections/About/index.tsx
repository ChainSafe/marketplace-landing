import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
];

export default function About() {
  return (
    <div className='overflow-hidden bg-gray-200 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20'>
          <div className='lg:p1-4 flex flex-col justify-center lg:pt-4'>
            <h1 className='max-w-2xl text-center text-6xl font-bold tracking-tight text-gray-900'>
              Create an ecosystem that you own and control.
            </h1>
            <h3 className='my-6 text-center text-xl text-gray-900'>
              No need to rely on third party marketplaces anymore. Use our
              marketplace building kit to make something that{' '}
              <strong>looks</strong> and <em>feels</em> like your own.
            </h3>
          </div>
          <Image
            src='/placeholder.png'
            alt='Product screenshot'
            className='ounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0'
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}

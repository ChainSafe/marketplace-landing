import StepCard, { StepCardProps } from '@/pages/components/StepCard';
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';
import { ReactNode } from 'react';

const cardContents = [
  {
    heading: 'Open Web3.unity in Unity',
    desc: 'Download from gaming.chainsafe.io',
  },
  {
    heading: 'Drag & drop',
    desc: 'Download from gaming.chainsafe.io',
  },
  {
    heading: 'Follow documentation',
    desc: 'Download from gaming.chainsafe.io',
  },
  {
    heading: 'Finish it off ',
    desc: 'Download from gaming.chainsafe.io',
  },
];

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

export default function HowToBuild() {
  return (
    <div className='overflow-hidden bg-gray-900 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 '>
          <div className='flex flex-col items-center justify-center lg:pt-4'>
            <p className='my-3 text-center text-xl text-brand-200'>
              Get ahead of the curve
            </p>
            <h1 className='max-w-xl text-center text-6xl font-bold tracking-tight text-gray-100'>
              Build your marketplace in one day.
            </h1>
          </div>
        </div>

        <div className='grid-col-1 mx-auto mt-8 grid gap-y-4 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4'>
          {cardContents.map((item: any, cardIndex: number) => (
            <StepCard
              key={item.heading}
              heading={item.heading}
              index={cardIndex + 1}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
      <div className='relative overflow-hidden pt-16'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <Image
            src='/placeholder.png'
            alt='App screenshot'
            className='mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10'
            width={2432}
            height={1442}
          />
          <div className='relative' aria-hidden='true'>
            <div className='absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]' />
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type navbarLink = {
  name: string;
  href: string;
};

const navbarLinks = [
  {
    name: 'ChainSafe Gaming',
    href: 'https://gaming.chainsafe.io',
  },
  {
    name: 'Case Study',
    href: 'https://blog.chainsafe.io/echelon-nft-marketplace/',
  },
  {
    name: 'Web3.Unity Documentation',
    href: 'https://docs.gaming.chainsafe.io',
  },
  {
    name: 'Contact Us',
    href: 'mailto:info@chainsafe.io',
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-gray-900 opacity-90'>
      <nav
        className='flex items-center justify-between p-3 lg:px-8'
        aria-label='Global'>
        <Link href='/' className='flex lg:flex-1'>
          <img
            className='h-10'
            src='/stacked-white.png'
            alt='ChainSafe Gaming'
          />
        </Link>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='text-primary-100 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5'
            onClick={() => setMobileMenuOpen(true)}>
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        {/* navbar  */}
        <div className='hidden lg:flex lg:gap-x-1'>
          {navbarLinks.map((item: navbarLink) => (
            <Link
              key={item.name}
              href={item.href}
              className='p-2.5 text-gray-100 transition-all hover:brightness-75'>
              <u>{item.name}</u>
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>ChainSafe Gaming</span>
              <img
                className='h-8 w-auto'
                src='/favicon-32x32.png'
                alt='ChainSafe Gaming'
              />
            </Link>
            <button
              type='button'
              className='text-primary-200 -m-2.5 rounded-md p-2.5'
              onClick={() => setMobileMenuOpen(false)}>
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-12 flow-root'>
            <div className='divide-y divide-gray-500/10'>
              {navbarLinks.map((item: navbarLink) => (
                <div
                  key={item.name}
                  className='focus:border-primary-400 focus: border-1 space-y-4 py-3 transition-all hover:text-brand-400 lg:space-y-2'>
                  <Link
                    href={item.href}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <u>{item.name}</u>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

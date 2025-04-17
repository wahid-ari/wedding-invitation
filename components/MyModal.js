import { Fragment } from 'react';
import { Merienda } from 'next/font/google';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import cn from 'classnames';

import { config } from '@data/config';

import { Gradient } from './Gradient';
import { Border } from './MobileNav';

const merienda = Merienda({ subsets: ['latin'] });

export default function MyModal({ isOpen, closeModal }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-[51]' title='Welcome' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-90' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative flex h-screen min-h-full w-full transform items-center justify-center overflow-hidden bg-black/80 shadow-xl transition-all'>
                <div className='onboard flex items-center justify-center'>
                  <Gradient width={1000} height={700} className='top-[-200px] opacity-20' conic />
                  <div className='relative flex h-[200px] w-full items-center justify-center'>
                    <div className='absolute z-10 min-h-[680px] min-w-[680px] sm:min-h-[800px] sm:min-w-[800px]'>
                      <Image
                        alt='Turborepo'
                        src='/pack-hexagons.svg'
                        fill='true'
                        // className="block"
                      />
                    </div>
                    <div className='absolute z-10 flex h-64 w-64 items-center justify-center'>
                      <Gradient small width={120} height={120} conic className='opacity-50' />
                    </div>
                    <div className='z-10'>
                      <h1
                        className={cn(
                          merienda.className,
                          'mb-2 mt-8 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-[40px] font-bold text-transparent text-white sm:text-5xl',
                        )}
                      >
                        {/* {config.man} & {config.woman} */}
                        {config.man}{' '}
                        <span
                          className={cn(
                            merienda.className,
                            'bg-gradient-to-r from-yellow-700 via-green-500 to-sky-500 bg-clip-text text-[40px] font-extrabold text-transparent sm:text-5xl md:text-center',
                          )}
                        >
                          &
                        </span>{' '}
                        {config.woman}
                      </h1>
                      {/* <h3 className="text-5xl font-bold text-white mb-2 mt-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-green-600 to-sky-500">Arik & Evin</h3> */}

                      <Border className='mx-auto w-56 sm:w-auto' />

                      <h2 className='mb-2 mt-2 text-lg font-semibold text-white sm:mt-4 sm:text-xl'>{config.date}</h2>
                      <h2 className='text-lg font-semibold text-white sm:text-xl'>{config.location}</h2>
                      <div className='mt-4 sm:mt-8'>
                        <button
                          onClick={closeModal}
                          className='group relative mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-yellow-600 via-green-500 to-sky-500 p-0.5 text-sm font-medium text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-1 focus-visible:ring-green-500 focus-visible:ring-offset-1 focus-visible:ring-offset-black group-hover:from-yellow-600 group-hover:via-green-600 group-hover:to-sky-500'
                        >
                          <span className='relative rounded-md bg-black px-6 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0'>
                            Buka
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

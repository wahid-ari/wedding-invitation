import { useRef, useState } from 'react';
import { EB_Garamond } from 'next/font/google';
import { ClockIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import moment, { updateLocale } from 'moment';
import useSWR, { useSWRConfig } from 'swr';

import Pattern from '@components/Pattern';

const eb = EB_Garamond({ subsets: ['latin'] });

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function CommentComp() {
  const scroolToNewComment = useRef(null);
  const name = useRef();
  const comment = useRef();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_WEB_URL}/api`, fetcher);
  const { mutate } = useSWRConfig();

  async function onSubmit(e) {
    e.preventDefault();
    setIsSubmiting(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_WEB_URL}/api`, {
        method: 'POST',
        body: JSON.stringify({
          name: name.current.value,
          comment: comment.current.value,
        }),
      });
      if (!res.ok) {
        throw new Error('fail to save comment');
      }
      mutate(`${process.env.NEXT_PUBLIC_WEB_URL}/api`);
      name.current.value = '';
      comment.current.value = '';
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmiting(false);
      scroolToNewComment.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }
  }

  return (
    <section className='relative min-h-screen overflow-hidden pb-32'>
      <Ornament />
      <div className='absolute top-0 h-0.5 w-full bg-gradient-to-r from-orange-500 to-sky-500 opacity-10' />
      <span className='absolute bottom-0 left-0 right-0 z-[1] h-16 w-full bg-gradient-to-t from-black to-transparent' />
      <div className='py-10 pt-16'>
        <h1 className='relative z-10 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text p-4 text-center text-5xl font-extrabold text-transparent md:text-6xl'>
          <span className={eb.className}>Comment</span>
        </h1>
        <div className='relative z-10 flex justify-center'>
          <Pattern />
        </div>
      </div>
      <div className='pointer-events-none absolute inset-x-0 bottom-0 top-0 z-0 flex justify-center'>
        <div className='grid h-full min-h-screen w-full grid-cols-3 gap-3.5 px-4 sm:grid-cols-4 md:grid-cols-5'>
          <div className='h-full w-full rounded-md border border-dashed border-black bg-gradient-to-br from-sky-600/20 via-green-600/20 to-yellow-600/20 px-[1px]'>
            <div className='flex h-full w-full items-center justify-center bg-black'></div>
          </div>
          <div className='h-full w-full rounded-md border border-dashed border-black bg-gradient-to-br from-yellow-600/20 via-blue-600/20 to-green-600/20 px-[1px]'>
            <div className='flex h-full w-full items-center justify-center bg-black'></div>
          </div>
          <div className='h-full w-full rounded-md border border-dashed border-black bg-gradient-to-br from-green-600/20 via-yellow-600/20 to-blue-600/20 px-[1px]'>
            <div className='flex h-full w-full items-center justify-center bg-black'></div>
          </div>
          <div className='hidden h-full w-full rounded-md border border-dashed border-black bg-gradient-to-br from-green-600/20 via-yellow-600/20 to-blue-600/20 px-[1px] sm:block'>
            <div className='flex h-full w-full items-center justify-center bg-black'></div>
          </div>
          <div className='hidden h-full w-full rounded-md border border-dashed border-black bg-gradient-to-br from-blue-600/20 via-yellow-600/20 to-green-600/20 px-[1px] md:block'>
            <div className='flex h-full w-full items-center justify-center bg-black'></div>
          </div>
        </div>
      </div>
      <div className='pointer-events-none absolute inset-x-0 z-0 flex justify-center'>
        <div className='grid h-full min-h-screen w-full grid-flow-col grid-rows-3 gap-3.5 py-4'>
          <div className='border-b-2 border-t-2 border-dashed border-b-green-600/20 border-t-yellow-600/20'></div>
          <div className='border-b-2 border-t-2 border-dashed border-b-yellow-600/20 border-t-sky-600/20'></div>
          <div className='border-b-2 border-t-2 border-dashed border-b-green-600/20 border-t-sky-600/20'></div>
        </div>
      </div>
      <div className='relative z-[10] mx-auto max-w-xl items-center gap-1.5 p-4'>
        <form className='' onSubmit={onSubmit}>
          <div className='rotate-border rotate-border-1 relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-transparent p-0.5'>
            <input
              ref={name}
              type='text'
              name='name'
              placeholder='Name'
              required
              autoComplete='off'
              className='relative z-10 flex h-full w-full rounded-md border border-neutral-600 bg-black px-3 py-2 text-sm placeholder:text-neutral-400 focus-visible:border-neutral-600 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-900'
            />
          </div>
          <div className='rotate-border rotate-border-2 relative mt-4 flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-transparent p-0.5'>
            <textarea
              type='text'
              ref={comment}
              name='comment'
              placeholder='Comment'
              required
              className='z-10 flex min-h-[100px] w-full rounded-md border border-neutral-600 bg-black px-3 py-2 text-sm placeholder:text-neutral-400 focus-visible:border-neutral-600 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-900'
            />
          </div>
          <button
            disabled={isSubmiting}
            type='submit'
            name='submit'
            className='group relative mt-4 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-yellow-600 via-green-500 to-sky-500 p-0.5 text-sm font-medium text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-green-500 focus-visible:ring-offset-1 focus-visible:ring-offset-black disabled:cursor-not-allowed group-hover:from-yellow-600 group-hover:via-green-600 group-hover:to-sky-500'
          >
            <span className='relative flex gap-2 rounded-md bg-black px-4 py-1.5 transition-all duration-75 ease-in group-hover:bg-opacity-0'>
              {isSubmiting && (
                <svg
                  className='h-5 w-5 animate-spin text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
              )}
              {isSubmiting ? 'Saving' : 'Submit'}
            </span>
          </button>
        </form>
        {isLoading && (
          <BorderFrame>
            <p className='mt-12 px-4 py-2'>Loading comment...</p>
          </BorderFrame>
        )}
        {error && (
          <BorderFrame>
            <p className='mt-12 px-4 py-2'>Error Loading comment...</p>
          </BorderFrame>
        )}
        {data && data.length > 0 ? (
          <BorderFrame>
            <div className='scrollbar-thumb-rounded mt-12 h-72 overflow-auto px-4 pb-2 scrollbar-thin'>
              <div ref={scroolToNewComment} className=''>
                &#8203;
              </div>
              {data.map((data) => (
                <div key={data.id} className='mb-3'>
                  <p className='text-base font-medium text-sky-500'>{data.name}</p>
                  <p className='mt-1 text-[15px] text-neutral-300'>{data.comment}</p>
                  <p className='mt-1 flex items-center gap-1 text-[12px] text-neutral-400'>
                    <ClockIcon className='h-4 w-4' />
                    {moment(new Date(data.created_at)).fromNow(
                      updateLocale('en', {
                        relativeTime: {
                          future: 'in %s',
                          past: '%s ',
                          s: 'baru saja',
                          m: '%d menit lalu',
                          mm: '%d menit lalu',
                          h: '%d jam lalu',
                          hh: '%d jam lalu',
                          d: '%d hari lalu',
                          dd: '%d hari lalu',
                          M: '1 bulan lalu',
                          MM: '%d bulan lalu',
                          y: '1 tahun lalu',
                          yy: '%d tahun lalu',
                        },
                      }),
                    )}
                  </p>
                </div>
              ))}
            </div>
          </BorderFrame>
        ) : (
          data &&
          data.length == 0 && (
            <BorderFrame>
              <p className='mt-12 px-4 py-2'>No comment found.</p>
            </BorderFrame>
          )
        )}
      </div>
    </section>
  );
}

function BorderFrame({ children }) {
  return (
    <div className='relative'>
      <div className='absolute -inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent sm:-inset-x-10 md:-inset-x-24 lg:-inset-x-56 xl:-inset-x-96' />
      <div className='absolute -inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent sm:-inset-x-10 md:-inset-x-24 lg:-inset-x-56 xl:-inset-x-96' />
      <div className='absolute -inset-y-24 left-0 w-px bg-gradient-to-b from-transparent via-green-500 to-transparent' />
      <div className='absolute -inset-y-24 right-0 w-px bg-gradient-to-b from-transparent via-orange-500 to-transparent' />
      {children}
    </div>
  );
}

function Ornament() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <>
      <motion.svg
        width='200'
        height='200'
        viewBox='0 0 600 600'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='absolute top-48 z-10 md:left-14'
      >
        <motion.circle
          cx='100'
          cy='100'
          r='80'
          className='fill-transparent stroke-yellow-500/40'
          variants={draw}
          custom={1}
        />
      </motion.svg>

      <motion.svg
        width='100'
        height='100'
        viewBox='0 0 200 200'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='absolute bottom-8 right-56 z-10 md:right-12'
      >
        <motion.circle
          cx='100'
          cy='100'
          r='80'
          className='fill-transparent stroke-yellow-500/30'
          variants={draw}
          custom={1}
        />
      </motion.svg>
      <motion.svg
        width='200'
        height='200'
        viewBox='0 0 600 600'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='absolute left-40 top-64 z-10'
      >
        <motion.rect
          width='140'
          height='140'
          x='410'
          y='30'
          rx='20'
          className='fill-transparent stroke-sky-500/40 stroke-1'
          variants={draw}
          custom={3}
        />
      </motion.svg>
      <motion.svg
        width='200'
        height='200'
        viewBox='0 0 600 600'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='absolute right-32 top-64 z-10'
      >
        <motion.rect
          width='140'
          height='140'
          x='410'
          y='30'
          rx='20'
          className='fill-transparent stroke-sky-500/40 stroke-1'
          variants={draw}
          custom={3}
        />
      </motion.svg>
      <motion.svg
        width='400'
        height='400'
        viewBox='0 0 600 600'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='absolute -bottom-40 z-10 md:-left-32'
      >
        <motion.rect
          width='140'
          height='140'
          x='410'
          y='30'
          rx='20'
          className='fill-transparent stroke-sky-500/30 stroke-1'
          variants={draw}
          custom={3}
        />
      </motion.svg>
      <motion.svg
        width='200'
        height='200'
        viewBox='0 0 600 600'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='absolute -right-8 top-5 z-10'
      >
        <motion.circle
          cx='100'
          cy='100'
          r='50'
          className='fill-transparent stroke-yellow-500/40'
          variants={draw}
          custom={1}
        />
      </motion.svg>
      <motion.svg
        width='200'
        height='200'
        viewBox='0 0 800 800'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='absolute right-8 top-64 z-10 md:right-64'
      >
        <motion.line x1='220' y1='30' x2='360' y2='170' className='stroke-yellow-500/70' variants={draw} custom={2} />
        <motion.line x1='220' y1='170' x2='360' y2='30' className='stroke-sky-500/70' variants={draw} custom={2.5} />
      </motion.svg>
      <motion.svg
        width='200'
        height='200'
        viewBox='0 0 600 600'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='absolute bottom-0 left-8 z-10'
      >
        <motion.line x1='220' y1='30' x2='360' y2='170' className='stroke-yellow-500/40' variants={draw} custom={2} />
        <motion.line x1='220' y1='170' x2='360' y2='30' className='stroke-sky-500/40' variants={draw} custom={2.5} />
      </motion.svg>
    </>
  );
}

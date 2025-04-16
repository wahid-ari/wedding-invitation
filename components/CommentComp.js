import { useEffect, useState } from 'react';
import { EB_Garamond } from 'next/font/google';
import { ClockIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import moment, { updateLocale } from 'moment';

import { supabase } from '@utils/supabase';

import { Gradient } from '@components/Gradient';

import Pattern from './Pattern';

const eb = EB_Garamond({ subsets: ['latin'] });

export default function CommentComp() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  // const [come, setCome] = useState('');
  const [fetched, setFetched] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const [commentData, setCommentData] = useState([]);
  const gusetCome = commentData.filter((item) => item.come == 1);
  const gusetNotCome = commentData.filter((item) => item.come == 2);
  const gusetNotSure = commentData.filter((item) => item.come == 3);

  useEffect(() => {
    if (!fetched) getComments();
  }, [fetched]);

  async function getComments() {
    const { data } = await supabase.from('invitation_comment').select().order('id', { ascending: false });
    setCommentData(data);
    setFetched(true);
  }

  async function onSubmit(e) {
    e.preventDefault();
    setIsSubmiting(true);
    const { error } = await supabase.from('invitation_comment').insert([
      {
        name: name,
        comment: comment,
        come: 0,
      },
    ]);
    if (!error) {
      setFetched(false);
      setName('');
      setComment('');
      // setCome('');
    }
    setIsSubmiting(false);
  }

  return (
    <section className='relative min-h-screen overflow-hidden pb-32'>
      {/* <Gradient width={1000} height={800} className='z-[2] rotate-90 opacity-10' conic /> */}
      {/* <Gradient width={1000} height={400} className='t-0 -right-64 z-[2] -rotate-90 opacity-10' conic /> */}
      <Ornament />
      {/* <Globe className='absolute z-[1] h-screen opacity-20 sm:h-full' /> */}
      <div className='absolute top-0 h-0.5 w-full bg-gradient-to-r from-orange-500 to-sky-500 opacity-10' />
      {/* <span className='absolute top-0 left-0 right-0 z-[1] h-16 w-full bg-gradient-to-b from-black to-transparent' /> */}
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
        {/* {fetched && commentData ? (
          <div className='mb-8 grid grid-cols-3 justify-between divide-x divide-neutral-700 rounded border border-neutral-700'>
            <div className='px-3 py-1'>
              <p className='bg-gradient-to-b from-green-500 to-sky-500 bg-clip-text text-center text-3xl font-bold text-transparent'>
                {gusetCome.length}
              </p>
              <p className='text-center text-base text-neutral-200'>Come</p>
            </div>
            <div className='px-3 py-1'>
              <p className='bg-gradient-to-b from-red-500 to-indigo-500 bg-clip-text text-center text-3xl font-bold text-transparent'>
                {gusetNotCome.length}
              </p>
              <p className='text-center text-base text-neutral-200'>Not Come</p>
            </div>
            <div className='px-3 py-1'>
              <p className='bg-gradient-to-b from-yellow-500 to-orange-500 bg-clip-text text-center text-3xl font-bold text-transparent'>
                {gusetNotSure.length}
              </p>
              <p className='text-center text-base text-neutral-200'>Not Sure</p>
            </div>
          </div>
        ) : null} */}

        <form className='' onSubmit={onSubmit}>
          <div className='rotate-border rotate-border-1 relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-transparent p-0.5'>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setComment(e.target.value)}
              type='text'
              value={comment}
              name='comment'
              placeholder='Comment'
              required
              className='z-10 flex min-h-[100px] w-full rounded-md border border-neutral-600 bg-black px-3 py-2 text-sm placeholder:text-neutral-400 focus-visible:border-neutral-600 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-900'
            />
          </div>
          {/* <div className='rotate-border rotate-border-3 relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-transparent p-0.5'>
            <select
              value={come}
              onChange={(e) => setCome(e.target.value)}
              required
              className='z-10 flex h-full w-full cursor-pointer rounded-md border border-neutral-600 bg-black px-3 py-2 text-sm placeholder:text-neutral-500 invalid:text-neutral-400 focus-visible:border-neutral-600 focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-900'
            >
              <option value='' disabled selected>
                Come ?
              </option>
              <option value='1'>come</option>
              <option value='2'>not come</option>
              <option value='3'>not sure</option>
            </select>
          </div> */}

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
              Submit
            </span>
          </button>
        </form>
        {fetched && commentData.length > 0 ? (
          <BorderFrame>
            <div className='scrollbar-thumb-rounded mt-12 h-72 overflow-auto px-4 py-2 scrollbar-thin'>
              {commentData.map((data, index) => (
                <div key={data.id} className='mb-3'>
                  <p className='text-base font-medium text-sky-500'>{data.name}</p>
                  {/* <p className='font-medium bg-gradient-to-r from-green-500 via-orange-500 to-sky-500 bg-clip-text text-transparent'>{data.name}</p> */}
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
                  {/* {index < commentData.length - 1 && <div className='mt-4 border-b border-b-neutral-800' />} */}
                </div>
              ))}
            </div>
          </BorderFrame>
        ) : fetched && commentData.length == 0 ? (
          <BorderFrame>
            <p className='mt-12 px-4 py-2'>No comment found.</p>
          </BorderFrame>
        ) : (
          <BorderFrame>
            <p className='mt-12 px-4 py-2'>Loading comment...</p>
          </BorderFrame>
        )}
      </div>
    </section>
  );
}

function BorderFrame({ children }) {
  return (
    <div className='relative'>
      <div className='absolute -inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent sm:-inset-x-10 md:-inset-x-24 lg:-inset-x-56 xl:-inset-x-96' />
      {/* <div
        style={{
          backgroundImage: `linear-gradient(to right, transparent, rgb(255 255 255 / 0.25) 24px, rgb(255 255 255 / 0.25) calc(100% - 24px), transparent)`,
        }}
        className='absolute -inset-x-0 -top-[15px] h-px sm:-inset-x-12 md:-inset-x-16'
      /> */}
      <div className='absolute -inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent sm:-inset-x-10 md:-inset-x-24 lg:-inset-x-56 xl:-inset-x-96' />
      {/* <div
        style={{
          backgroundImage: `linear-gradient(to right, transparent, rgb(255 255 255 / 0.25) 24px, rgb(255 255 255 / 0.25) calc(100% - 24px), transparent)`,
        }}
        className='absolute -inset-x-0 -bottom-[15px] h-px sm:-inset-x-12 md:-inset-x-16'
      /> */}
      <div className='absolute -inset-y-24 left-0 w-px bg-gradient-to-b from-transparent via-green-500 to-transparent' />
      {/* <div
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, rgb(255 255 255 / 0.25) 24px, rgb(255 255 255 / 0.25) calc(100% - 24px), transparent)`,
        }}
        className='absolute -inset-y-16 -left-[15px] w-px'
      /> */}
      <div className='absolute -inset-y-24 right-0 w-px bg-gradient-to-b from-transparent via-orange-500 to-transparent' />
      {/* <div
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, rgb(255 255 255 / 0.25) 24px, rgb(255 255 255 / 0.25) calc(100% - 24px), transparent)`,
        }}
        className='absolute -inset-y-16 -right-[15px] w-px'
      /> */}
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

function Globe({ ...props }) {
  return (
    <svg
      aria-hidden='true'
      height='100%'
      style={{
        overflow: 'visible',
      }}
      viewBox='-1 -1 802 402'
      width='100%'
      {...props}
    >
      <g data-testid='globe-wireframe' mask='url(#globe-gradient-mask)'>
        <circle cx={400} cy={400} fill='var(--ds-background-100)' r={400} />
        <path
          d='M 400 800 A -400 400 0 0 0 400 0'
          fill='none'
          stroke='#313131'
          strokeWidth={1}
          vectorEffect='non-scaling-stroke'
        />
        <path
          d='M 400 800 A -328.701 400 0 0 0 400 0'
          fill='none'
          stroke='#313131'
          strokeWidth={1}
          vectorEffect='non-scaling-stroke'
        />
        <path
          d='M 400 800 A -235.355 400 0 0 0 400 0'
          fill='none'
          stroke='#313131'
          strokeWidth={1}
          vectorEffect='non-scaling-stroke'
        />
        <path
          d='M 400 800 A -123.097 400 0 0 0 400 0'
          fill='none'
          stroke='#313131'
          strokeWidth={1}
          vectorEffect='non-scaling-stroke'
        />
        <path
          d='M 400 800 A 0 400 0 0 0 400 0'
          fill='none'
          stroke='#313131'
          strokeWidth={1}
          vectorEffect='non-scaling-stroke'
        />
        <path
          d='M 400 0 A 123.097 400 0 0 0 400 800'
          fill='none'
          stroke='#313131'
          strokeWidth={1}
          vectorEffect='non-scaling-stroke'
        />
        <path
          d='M 400 0 A 235.355 400 0 0 0 400 800'
          fill='none'
          stroke='#313131'
          strokeWidth={1}
          vectorEffect='non-scaling-stroke'
        />
        <path
          d='M 400 0 A 328.701 400 0 0 0 400 800'
          fill='none'
          stroke='#313131'
          strokeWidth={1}
          vectorEffect='non-scaling-stroke'
        />
        <path
          d='M 400 0 A 400 400 0 0 0 400 800'
          fill='none'
          stroke='#313131'
          strokeWidth={1}
          vectorEffect='non-scaling-stroke'
        />
        <path d='M135.425,100 h529.15' fill='none' stroke='#313131' strokeWidth={1} vectorEffect='non-scaling-stroke' />
        <path d='M53.59,200 h692.82' fill='none' stroke='#313131' strokeWidth={1} vectorEffect='non-scaling-stroke' />
        <path d='M12.702,300 h774.597' fill='none' stroke='#313131' strokeWidth={1} vectorEffect='non-scaling-stroke' />
        <path d='M0,400 h800' fill='none' stroke='#313131' strokeWidth={1} vectorEffect='non-scaling-stroke' />
        <path d='M12.702,500 h774.597' fill='none' stroke='#313131' strokeWidth={1} vectorEffect='non-scaling-stroke' />
        <path d='M53.59,600 h692.82' fill='none' stroke='#313131' strokeWidth={1} vectorEffect='non-scaling-stroke' />
        <path d='M135.425,700 h529.15' fill='none' stroke='#313131' strokeWidth={1} vectorEffect='non-scaling-stroke' />
      </g>
      <mask id='globe-gradient-mask'>
        <rect fill='url(#globe-mask-gradient)' height='100%' width='100%' x={0} y={0} />
      </mask>
      <g id='lldll33' mask='url(#globe-gradient-mask)' opacity={1}>
        <path
          d='M617.415,100 h-61.743M555.673,100 h-74.252M 506.605 200 A 123.097 400 0 0 0 481.421 100M506.605,200 h-106.605M400,200 h-106.605'
          fill='none'
          stroke='url(#lldll33-gradient)'
          strokeLinecap='round'
          strokeWidth={2}
          vectorEffect='non-scaling-stroke'
        >
          <animate
            attributeName='opacity'
            dur='6.5s'
            id='opacity-lldll33'
            keyTimes='0;0.088;0.176;0.264;0.352;0.44;0.527;0.615;1'
            repeatCount='indefinite'
            values='0;1;1;1;1;1;1;0;0'
          />
        </path>
        <defs>
          <radialGradient
            className='path_gradient__z0qlN'
            cx={100}
            cy={100}
            gradientUnits='userSpaceOnUse'
            id='lldll33-gradient'
            r={0}
            style={{
              '--normal-color': '#EBE51A',
              '--p3-color': 'color(display-p3 0.9176 0.898 0.3137)',
            }}
          >
            <stop offset={0} stopColor='var(--color)' />
            <stop offset={0.4} stopColor='var(--color)' />
            <stop offset={1} stopColor='var(--color)' stopOpacity={0} />
            <animate
              attributeName='cx'
              dur='6.5s'
              id='cx-lldll33'
              keyTimes='0;0.088;0.176;0.264;0.352;0.44;0.527;0.615;1'
              repeatCount='indefinite'
              values='617.415;617.415;555.673;481.421;506.605;400;293.395;293.395;0'
            />
            <animate
              attributeName='cy'
              dur='6.5s'
              id='cy-lldll33'
              keyTimes='0;0.088;0.176;0.264;0.352;0.44;0.527;0.615;1'
              repeatCount='indefinite'
              values='100;100;100;100;200;200;200;200;0'
            />
            <animate
              attributeName='r'
              dur='6.5s'
              id='r-lldll33'
              keyTimes='0;0.088;0.176;0.264;0.352;0.44;0.527;0.615;1'
              repeatCount='indefinite'
              values='0;50;50;50;50;50;50;0;0'
            />
          </radialGradient>
        </defs>
      </g>
      <g id='ld22' mask='url(#globe-gradient-mask)' opacity={1}>
        <path
          d='M603.824,200 h-97.219M 519.188 300 A 123.097 400 0 0 0 506.605 200'
          fill='none'
          stroke='url(#ld22-gradient)'
          strokeLinecap='round'
          strokeWidth={2}
          vectorEffect='non-scaling-stroke'
        >
          <animate
            attributeName='opacity'
            dur='4.1s'
            id='opacity-ld22'
            keyTimes='0;0.098;0.195;0.293;0.39;1'
            repeatCount='indefinite'
            values='0;1;1;1;0;0'
          />
        </path>
        <defs>
          <radialGradient
            className='path_gradient__z0qlN'
            cx={100}
            cy={100}
            gradientUnits='userSpaceOnUse'
            id='ld22-gradient'
            r={0}
            style={{
              '--normal-color': '#A4E600',
              '--p3-color': 'color(display-p3 0.698 0.8941 0.2667)',
            }}
          >
            <stop offset={0} stopColor='var(--color)' />
            <stop offset={0.4} stopColor='var(--color)' />
            <stop offset={1} stopColor='var(--color)' stopOpacity={0} />
            <animate
              attributeName='cx'
              dur='4.1s'
              id='cx-ld22'
              keyTimes='0;0.098;0.195;0.293;0.39;1'
              repeatCount='indefinite'
              values='603.824;603.824;506.605;519.188;519.188;0'
            />
            <animate
              attributeName='cy'
              dur='4.1s'
              id='cy-ld22'
              keyTimes='0;0.098;0.195;0.293;0.39;1'
              repeatCount='indefinite'
              values='200;200;200;300;300;0'
            />
            <animate
              attributeName='r'
              dur='4.1s'
              id='r-ld22'
              keyTimes='0;0.098;0.195;0.293;0.39;1'
              repeatCount='indefinite'
              values='0;50;50;50;0;0'
            />
          </radialGradient>
        </defs>
      </g>
      <g id='lull31' mask='url(#globe-gradient-mask)' opacity={1}>
        <path
          d='M718.264,300 h-90.382M 627.882 300 A 235.355 400 0 0 0 603.824 200M603.824,200 h-97.219M506.605,200 h-106.605'
          fill='none'
          stroke='url(#lull31-gradient)'
          strokeLinecap='round'
          strokeWidth={2}
          vectorEffect='non-scaling-stroke'
        >
          <animate
            attributeName='opacity'
            dur='5.7s'
            id='opacity-lull31'
            keyTimes='0;0.094;0.187;0.281;0.374;0.468;0.561;1'
            repeatCount='indefinite'
            values='0;1;1;1;1;1;0;0'
          />
        </path>
        <defs>
          <radialGradient
            className='path_gradient__z0qlN'
            cx={100}
            cy={100}
            gradientUnits='userSpaceOnUse'
            id='lull31-gradient'
            r={0}
            style={{
              '--normal-color': '#2DDD69',
              '--p3-color': 'color(display-p3 0.4235 0.8549 0.4627)',
            }}
          >
            <stop offset={0} stopColor='var(--color)' />
            <stop offset={0.4} stopColor='var(--color)' />
            <stop offset={1} stopColor='var(--color)' stopOpacity={0} />
            <animate
              attributeName='cx'
              dur='5.7s'
              id='cx-lull31'
              keyTimes='0;0.094;0.187;0.281;0.374;0.468;0.561;1'
              repeatCount='indefinite'
              values='718.264;718.264;627.882;603.824;506.605;400;400;0'
            />
            <animate
              attributeName='cy'
              dur='5.7s'
              id='cy-lull31'
              keyTimes='0;0.094;0.187;0.281;0.374;0.468;0.561;1'
              repeatCount='indefinite'
              values='300;300;300;200;200;200;200;0'
            />
            <animate
              attributeName='r'
              dur='5.7s'
              id='r-lull31'
              keyTimes='0;0.094;0.187;0.281;0.374;0.468;0.561;1'
              repeatCount='indefinite'
              values='0;50;50;50;50;50;0;0'
            />
          </radialGradient>
        </defs>
      </g>
      <g id='llld21' mask='url(#globe-gradient-mask)' opacity={1}>
        <path
          d='M627.882,300 h-108.694M519.188,300 h-119.188M400,300 h-119.188M 280.812 300 A -123.097 400 0 0 0 276.903 400'
          fill='none'
          stroke='url(#llld21-gradient)'
          strokeLinecap='round'
          strokeWidth={2}
          vectorEffect='non-scaling-stroke'
        >
          <animate
            attributeName='opacity'
            dur='5.7s'
            id='opacity-llld21'
            keyTimes='0;0.094;0.187;0.281;0.374;0.468;0.561;1'
            repeatCount='indefinite'
            values='0;1;1;1;1;1;0;0'
          />
        </path>
        <defs>
          <radialGradient
            className='path_gradient__z0qlN'
            cx={100}
            cy={100}
            gradientUnits='userSpaceOnUse'
            id='llld21-gradient'
            r={0}
            style={{
              '--normal-color': '#FF904D',
              '--p3-color': 'color(display-p3 0.9843 0.5882 0.3608)',
            }}
          >
            <stop offset={0} stopColor='var(--color)' />
            <stop offset={0.4} stopColor='var(--color)' />
            <stop offset={1} stopColor='var(--color)' stopOpacity={0} />
            <animate
              attributeName='cx'
              dur='5.7s'
              id='cx-llld21'
              keyTimes='0;0.094;0.187;0.281;0.374;0.468;0.561;1'
              repeatCount='indefinite'
              values='627.882;627.882;519.188;400;280.812;276.903;276.903;0'
            />
            <animate
              attributeName='cy'
              dur='5.7s'
              id='cy-llld21'
              keyTimes='0;0.094;0.187;0.281;0.374;0.468;0.561;1'
              repeatCount='indefinite'
              values='300;300;300;300;300;400;400;0'
            />
            <animate
              attributeName='r'
              dur='5.7s'
              id='r-llld21'
              keyTimes='0;0.094;0.187;0.281;0.374;0.468;0.561;1'
              repeatCount='indefinite'
              values='0;50;50;50;50;50;0;0'
            />
          </radialGradient>
        </defs>
      </g>
      <g id='lld-13' mask='url(#globe-gradient-mask)' opacity={1}>
        <path
          d='M318.579,100 h-74.252M244.327,100 h-61.743M 182.585 100 A -328.701 400 0 0 0 115.336 200'
          fill='none'
          stroke='url(#lld-13-gradient)'
          strokeLinecap='round'
          strokeWidth={2}
          vectorEffect='non-scaling-stroke'
        >
          <animate
            attributeName='opacity'
            dur='4.9s'
            id='opacity-lld-13'
            keyTimes='0;0.098;0.196;0.294;0.392;0.49;1'
            repeatCount='indefinite'
            values='0;1;1;1;1;0;0'
          />
        </path>
        <defs>
          <radialGradient
            className='path_gradient__z0qlN'
            cx={100}
            cy={100}
            gradientUnits='userSpaceOnUse'
            id='lld-13-gradient'
            r={0}
            style={{
              '--normal-color': '#62DE00',
              '--p3-color': 'color(display-p3 0.5176 0.8588 0.251)',
            }}
          >
            <stop offset={0} stopColor='var(--color)' />
            <stop offset={0.4} stopColor='var(--color)' />
            <stop offset={1} stopColor='var(--color)' stopOpacity={0} />
            <animate
              attributeName='cx'
              dur='4.9s'
              id='cx-lld-13'
              keyTimes='0;0.098;0.196;0.294;0.392;0.49;1'
              repeatCount='indefinite'
              values='318.579;318.579;244.327;182.585;115.336;115.336;0'
            />
            <animate
              attributeName='cy'
              dur='4.9s'
              id='cy-lld-13'
              keyTimes='0;0.098;0.196;0.294;0.392;0.49;1'
              repeatCount='indefinite'
              values='100;100;100;100;200;200;0'
            />
            <animate
              attributeName='r'
              dur='4.9s'
              id='r-lld-13'
              keyTimes='0;0.098;0.196;0.294;0.392;0.49;1'
              repeatCount='indefinite'
              values='0;50;50;50;50;0;0'
            />
          </radialGradient>
        </defs>
      </g>
      <g id='lld-22' mask='url(#globe-gradient-mask)' opacity={1}>
        <path
          d='M196.176,200 h-80.84M115.336,200 h-61.747M 53.59 200 A -400 400 0 0 0 12.702 300'
          fill='none'
          stroke='url(#lld-22-gradient)'
          strokeLinecap='round'
          strokeWidth={2}
          vectorEffect='non-scaling-stroke'
        >
          <animate
            attributeName='opacity'
            dur='4.9s'
            id='opacity-lld-22'
            keyTimes='0;0.098;0.196;0.294;0.392;0.49;1'
            repeatCount='indefinite'
            values='0;1;1;1;1;0;0'
          />
        </path>
        <defs>
          <radialGradient
            className='path_gradient__z0qlN'
            cx={100}
            cy={100}
            gradientUnits='userSpaceOnUse'
            id='lld-22-gradient'
            r={0}
            style={{
              '--normal-color': '#FFBB3D',
              '--p3-color': 'color(display-p3 0.9608 0.7451 0.3412)',
            }}
          >
            <stop offset={0} stopColor='var(--color)' />
            <stop offset={0.4} stopColor='var(--color)' />
            <stop offset={1} stopColor='var(--color)' stopOpacity={0} />
            <animate
              attributeName='cx'
              dur='4.9s'
              id='cx-lld-22'
              keyTimes='0;0.098;0.196;0.294;0.392;0.49;1'
              repeatCount='indefinite'
              values='196.176;196.176;115.336;53.59;12.702;12.702;0'
            />
            <animate
              attributeName='cy'
              dur='4.9s'
              id='cy-lld-22'
              keyTimes='0;0.098;0.196;0.294;0.392;0.49;1'
              repeatCount='indefinite'
              values='200;200;200;200;300;300;0'
            />
            <animate
              attributeName='r'
              dur='4.9s'
              id='r-lld-22'
              keyTimes='0;0.098;0.196;0.294;0.392;0.49;1'
              repeatCount='indefinite'
              values='0;50;50;50;50;0;0'
            />
          </radialGradient>
        </defs>
      </g>
      <g id='llld-11' mask='url(#globe-gradient-mask)' opacity={1}>
        <path
          d='M280.812,300 h-108.694M172.118,300 h-90.382M81.736,300 h-69.035M 12.702 300 A -400 400 0 0 0 0 400'
          fill='none'
          stroke='url(#llld-11-gradient)'
          strokeLinecap='round'
          strokeWidth={2}
          vectorEffect='non-scaling-stroke'
        >
          <animate
            attributeName='opacity'
            dur='5.7s'
            id='opacity-llld-11'
            keyTimes='0;0.094;0.187;0.281;0.374;0.468;0.561;1'
            repeatCount='indefinite'
            values='0;1;1;1;1;1;0;0'
          />
        </path>
        <defs>
          <radialGradient
            className='path_gradient__z0qlN'
            cx={100}
            cy={100}
            gradientUnits='userSpaceOnUse'
            id='llld-11-gradient'
            r={0}
            style={{
              '--normal-color': '#F8E52C',
              '--p3-color': 'color(display-p3 0.9608 0.8988 0.3412)',
            }}
          >
            <stop offset={0} stopColor='var(--color)' />
            <stop offset={0.4} stopColor='var(--color)' />
            <stop offset={1} stopColor='var(--color)' stopOpacity={0} />
            <animate
              attributeName='cx'
              dur='5.7s'
              id='cx-llld-11'
              keyTimes='0;0.094;0.187;0.281;0.374;0.468;0.561;1'
              repeatCount='indefinite'
              values='280.812;280.812;172.118;81.736;12.702;0;0;0'
            />
            <animate
              attributeName='cy'
              dur='5.7s'
              id='cy-llld-11'
              keyTimes='0;0.094;0.187;0.281;0.374;0.468;0.561;1'
              repeatCount='indefinite'
              values='300;300;300;300;300;400;400;0'
            />
            <animate
              attributeName='r'
              dur='5.7s'
              id='r-llld-11'
              keyTimes='0;0.094;0.187;0.281;0.374;0.468;0.561;1'
              repeatCount='indefinite'
              values='0;50;50;50;50;50;0;0'
            />
          </radialGradient>
        </defs>
      </g>
      <defs>
        <linearGradient gradientUnits='userSpaceOnUse' id='globe-gradient' x1={0} x2={0} y1={0} y2={400}>
          <stop offset='0%' stopColor='var(--guide-color)' />
          <stop offset='100%' stopColor='var(--guide-color)' />
        </linearGradient>
        <linearGradient gradientTransform='rotate(90)' id='globe-mask-gradient'>
          <stop offset={0.7} stopColor='white' stopOpacity={1} />
          <stop offset={1} stopColor='white' stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
}

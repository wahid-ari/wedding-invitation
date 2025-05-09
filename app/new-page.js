'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { EB_Garamond, Merienda } from 'next/font/google';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import cn from 'classnames';
import { motion, useScroll, useTime, useTransform } from 'framer-motion';
import Countdown from 'react-countdown';
import Carousel, { Modal, ModalGateway } from 'react-images';

import styles from '@components/index.module.css';

import bri from '../public/bri.png';

import '@splidejs/react-splide/css';

import { albums } from '@data/albums';
import { config } from '@data/config';
import { recipients } from '@data/recipients';
import { useShowModal } from '@utils/GlobalContext';
import titleCase from '@utils/helper';

import { FadeIn } from '@components/FadeIn';
import { FlipText } from '@components/FlipText';
import { GlobeDraggable } from '@components/Globe';
import { Gradient } from '@components/Gradient';
import HoverCard from '@components/HoverCard';
import MobileNav, { Border } from '@components/MobileNav';
import MyModal from '@components/MyModal';
import Pattern from '@components/Pattern';
import { TextAnimate } from '@components/TextAnimate';
import { TypingAnimation } from '@components/TypingAnimation';

import CommentComp from './CommentComp';

const eb = EB_Garamond({ subsets: ['latin'] });
const merienda = Merienda({ subsets: ['latin'] });

const RoundedText = dynamic(() => import('@components/RoundedText'), {
  ssr: false,
});

export default function NewPage({ slug }) {
  const [copied, setCopied] = useState(false);
  const { modalOpen, setModalOpen } = useShowModal();
  let recipient = recipients.find((item) => item.slug == slug);
  if (recipient == undefined) {
    if (slug) recipient = { name: titleCase(slug) };
    else recipient = { name: 'Tamu Undangan' };
  }
  const time = useTime();
  const rotate = useTransform(time, [0, 15000], [0, 360], { clamp: false });
  const rainbow = [
    '#fff',
    '#f5f5f5',
    // '#eab308',
    // '#22c55e',
    // '#0ea5e9',
    // '#eab308',
    // '#22c55e',
    // '#0ea5e9',
    // '#eab308',
    // '#22c55e',
    // '#0ea5e9',
    // '#eab308',
    // '#22c55e',
    // '#0ea5e9',
  ];
  const rainboww = [
    '#fff',
    '#f5f5f5',
    // '#0ea5e9',
    // '#eab308',
    // '#22c55e',
    // '#0ea5e9',
    // '#eab308',
    // '#22c55e',
    // '#0ea5e9',
    // '#eab308',
    // '#22c55e',
    // '#0ea5e9',
    // '#eab308',
    // '#22c55e',
  ];
  const { scrollYProgress } = useScroll();
  const range = Array.from(Array(rainbow.length).keys()).map((v) => v / (rainbow.length - 1));
  const rainbowColors = useTransform(scrollYProgress, range, rainbow);
  const rainbowColorss = useTransform(scrollYProgress, range, rainboww);
  const forwardX = useTransform(scrollYProgress, [0, 1], ['-87%', '300%']);
  const backwardsX = useTransform(scrollYProgress, [0, 1], ['87%', '-300%']);

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

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  function handleOpenGallery(id) {
    setCurrentImage(id);
    setViewerIsOpen(true);
  }

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const lightboxStyles = {
    header: (base) => {
      const opacity = 1;
      const transform = 'translateY(10px)';
      const top = '-10';
      return { ...base, opacity, transform, top };
    },
    view: () => ({
      // height: 400,
    }),
    navigation: (base) => {
      const opacity = 1;
      const background = 'rgba(0, 0, 0, 0.8)';
      return { ...base, opacity, background };
    },
    navigationPrev: (base) => {
      const background = 'rgba(0, 0, 0, 0.5) !important';
      return { ...base, background };
    },
    navigationNext: (base) => {
      const background = 'rgba(0, 0, 0, 0.5) !important';
      return { ...base, background };
    },
    footer: (base) => {
      const opacity = 1;
      const transform = 'translateY(-10px)';
      const bottom = '-10';
      return { ...base, opacity, transform, bottom };
    },
  };

  const [showMap, setShowMap] = useState(false);

  return (
    <>
      <MyModal isOpen={modalOpen} closeModal={() => setModalOpen(false)} />

      {!modalOpen && (
        <main className='relative min-h-screen overflow-hidden bg-black text-white'>
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  styles={lightboxStyles}
                  showNavigationOnTouchDevice={true}
                  currentIndex={currentImage}
                  views={albums.map((x) => ({
                    ...x,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>

          <MobileNav />

          <section
            id='welcome'
            className='relative flex min-h-screen items-center justify-center pb-36 pt-20 md:pb-16 md:pt-10 xl:pt-6'
          >
            <Gradient width={1200} height={500} className='top-[-250px] opacity-30' conic />
            <div className='z-10'>
              <h1
                className={cn(
                  eb.className,
                  'mx-auto max-w-lg px-4 text-center text-[22px] font-semibold min-[400px]:text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl',
                )}
              >
                <span className='min-[380px]:hidden'>WE INVITE YOU TO CELEBRATE OUR WEDDING</span>
                <p className='hidden tracking-wide min-[380px]:block'>
                  <RoundedText />
                </p>
              </h1>
              <h1
                className={cn(
                  eb.className,
                  'mx-auto hidden max-w-lg px-4 text-center text-[22px] font-semibold tracking-wider min-[380px]:block min-[400px]:text-2xl sm:-mt-2 sm:text-3xl md:text-4xl 2xl:text-6xl',
                )}
              >
                OUR WEDDING
              </h1>
              <div className='mb-2 mt-4 flex justify-center'>
                <Pattern />
              </div>
              <div className='my-20 flex items-center justify-center gap-4 px-4 sm:my-16'>
                <h1
                  className={cn(
                    merienda.className,
                    'hidden bg-gradient-to-b from-white via-neutral-300 to-neutral-500 bg-clip-text py-1 text-[40px] font-bold text-transparent md:block md:text-left',
                  )}
                >
                  {config.man_fullname}
                </h1>
                <h1
                  className={cn(
                    merienda.className,
                    'bg-gradient-to-b from-white via-neutral-300 to-neutral-500 bg-clip-text py-1 text-[40px] font-bold text-transparent md:hidden md:text-left',
                  )}
                >
                  {config.man}
                </h1>
                <h1
                  className={cn(
                    merienda.className,
                    'bg-gradient-to-b from-yellow-500 via-green-500 to-sky-500 bg-clip-text text-5xl font-extrabold text-transparent md:text-center',
                  )}
                >
                  &
                </h1>
                <h1
                  className={cn(
                    merienda.className,
                    'hidden bg-gradient-to-t from-white via-neutral-300 to-neutral-500 bg-clip-text px-2 py-1 text-[40px] font-bold text-transparent md:block md:text-left',
                  )}
                >
                  {config.woman_fullname}
                </h1>
                <h1
                  className={cn(
                    merienda.className,
                    'bg-gradient-to-t from-white via-neutral-300 to-neutral-500 bg-clip-text px-2 py-1 text-[40px] font-bold text-transparent md:hidden md:text-left',
                  )}
                >
                  {config.woman}
                </h1>
              </div>
              <p className='mb-4 text-center text-lg text-neutral-200'>Kepada Bapak/Ibu/Saudara/i</p>
              <h2 className={cn(eb.className, 'mx-auto max-w-lg px-4 text-center text-3xl font-semibold sm:text-4xl')}>
                {recipient.name}
              </h2>
              {recipient.name != 'Tamu Undangan' && (
                <p className='mt-8 px-4 text-center text-xs italic text-neutral-400'>
                  *Mohon Maaf Apabila Ada Kesalahan Dalam Penulisan Nama/Gelar
                </p>
              )}
            </div>
          </section>

          <section
            id='pattern'
            className='relative flex h-full min-h-screen w-full items-center justify-center pb-16 pt-16 sm:pb-8 sm:pt-8 md:pb-0 md:pt-0'
          >
            <div className='flex w-full flex-col items-center justify-center gap-8 md:flex-row lg:gap-24'>
              <FadeIn delay={0.3}>
                <div className={cn(styles['counter-border'], 'pointer-events-none mt-20 no-underline md:mt-0')}>
                  <motion.i
                    initial='visible'
                    animate={{ opacity: 1 }}
                    variants={{
                      hidden: { opacity: 0 },
                      active: { opacity: 1 },
                    }}
                    aria-hidden='true'
                  ></motion.i>
                  <div className='p-6'>
                    <div className='relative flex items-center justify-center'>
                      <div className='w-54 h-54 absolute inset-0 z-10' />
                      <div className='relative h-72 w-64'>
                        <Image
                          alt={config.woman}
                          src={`/${config.woman_image}`}
                          fill='true'
                          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          className='rounded-3xl object-cover object-center'
                        />
                      </div>
                    </div>
                    <div className='flex justify-center'></div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className='relative z-10 flex items-center justify-center bg-gradient-to-r from-yellow-500 via-green-500 to-sky-500 bg-clip-text text-6xl font-semibold text-transparent sm:text-8xl'>
                  &
                </div>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div className={cn(styles['counter-border-blue'], 'pointer-events-none no-underline')}>
                  <motion.i
                    initial='visible'
                    animate={{ opacity: 1 }}
                    variants={{
                      hidden: { opacity: 0 },
                      active: { opacity: 1 },
                    }}
                    aria-hidden='true'
                  ></motion.i>
                  <div className='p-6'>
                    <div className='relative flex items-center justify-center'>
                      <div className='w-54 h-54 absolute inset-0 z-10' />
                      <div className='relative h-72 w-64'>
                        <Image
                          alt={config.man}
                          src={`/${config.man_image}`}
                          fill='true'
                          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          className='rounded-3xl object-cover object-center'
                        />
                      </div>
                    </div>
                    <div className='flex justify-center'></div>
                  </div>
                </div>
              </FadeIn>
            </div>
            <Gradient width={1000} height={300} className='opacity-20' conic />
            <div className='absolute top-0 z-10 h-32 w-full bg-gradient-to-b from-black to-transparent' />
          </section>

          <section id='title' className='relative flex h-screen min-h-screen w-full items-center sm:py-32'>
            <div className='w-full text-center'>
              <motion.p
                className='whitespace-nowrap bg-gradient-to-b from-black to-neutral-800 bg-clip-text py-16 text-6xl font-bold tracking-wide text-transparent lg:text-8xl'
                style={{
                  x: forwardX,
                  WebkitTextStrokeColor: rainbowColors,
                  WebkitTextStroke: '2px currentColor',
                }}
              >
                <span className={eb.className}>
                  <i>{config.man_fullname}</i>
                </span>
              </motion.p>
              <h1 className='z-10 bg-gradient-to-b from-yellow-500 via-green-500 to-sky-500 bg-clip-text p-4 text-5xl font-extrabold text-transparent md:text-center lg:text-6xl'>
                /
              </h1>
              <motion.p
                className='whitespace-nowrap bg-gradient-to-b from-black to-neutral-800 bg-clip-text py-16 text-6xl font-bold tracking-wide text-transparent md:pb-32 lg:text-8xl'
                style={{
                  x: backwardsX,
                  WebkitTextStrokeColor: rainbowColorss,
                  WebkitTextStroke: '2px currentColor',
                }}
              >
                <span className={eb.className}>
                  <i>{config.woman_fullname}</i>
                </span>
              </motion.p>
            </div>
            <span className='absolute left-0 right-0 top-0 h-10 w-full bg-gradient-to-b from-black to-transparent' />
            <span className='absolute bottom-0 left-0 right-0 z-[1] h-10 w-full bg-gradient-to-t from-black to-transparent' />
            <Gradient width={1500} height={300} className='bottom-[-200px] opacity-10' small conic />
          </section>

          <section id='grid' className='flex h-screen w-full items-center justify-center'>
            <div className='grid-radial'></div>
            <motion.div
              id='gridd-bg'
              animate={{
                scale: [1, 1.1, 1, 0.9],
              }}
            />
            <div className={cn(eb.className, 'z-10 mx-4 max-w-xl text-center text-xl text-white sm:text-2xl')}>
              {/* <FadeIn delay={0.5}> */}
              <TextAnimate
                animation='blurIn'
                duration={2}
                once={true}
                className='bg-gradient-to-b from-white via-neutral-100 to-neutral-200 bg-clip-text text-xl sm:text-2xl'
              >
                Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
              </TextAnimate>
              {/* <p className='bg-gradient-to-b from-white via-neutral-100 to-neutral-200 bg-clip-text px-4 text-center text-xl font-semibold text-transparent sm:text-2xl'>
                  Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari
                  (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan
                  kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah)
                  bagi kaum yang berpikir.
                </p> */}
              {/* </FadeIn> */}
              <Border className='mx-auto my-2 mt-8' />
              {/* <FadeIn delay={0.7}> */}
              <TextAnimate
                animation='slideLeft'
                by='character'
                duration={1}
                once={true}
                className='-mt-2 font-medium italic'
              >
                (Q.S Ar-Rum : 21)
              </TextAnimate>
              {/* <span className='-mt-2 font-medium italic'>(Q.S Ar-Rum : 21)</span> */}
              {/* </FadeIn> */}
            </div>
          </section>

          <section id='date' className='relative my-10 flex h-screen w-full items-center justify-center md:my-20'>
            <motion.div
              className='absolute inset-0'
              style={{
                rotate,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50%',
                backgroundImage: 'url(/ring-small.svg)',
              }}
            />
            <div className='home_spotlight'></div>
            <div className='z-10 text-white'>
              <h1 className='z-10 mx-6 mb-4 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-center text-4xl font-extrabold leading-tight md:text-5xl'>
                <span className={eb.className}>
                  <TextAnimate animation='slideLeft' by='character' duration={0.5}>
                    The Date
                  </TextAnimate>
                </span>
              </h1>
              <div className='mb-12 flex justify-center'>
                <Pattern />
              </div>
              <FadeIn delay={0.5}>
                <h1 className='z-10 mx-6 mb-4 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-center text-3xl font-extrabold leading-tight text-transparent lg:text-4xl'>
                  <span className={eb.className}>{config.date}</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.8}>
                <h1 className='z-10 mx-6 mb-4 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-center text-2xl font-extrabold leading-tight text-transparent lg:text-3xl'>
                  <span className={eb.className}>{config.time}</span>
                </h1>
              </FadeIn>
              <div className='flex w-full justify-center'>
                <a
                  target='_blank'
                  href='https://calendar.google.com/calendar/u/0/r/eventedit?text=The+Wedding+of+Arik+%26+Evin&dates=20250531T030000Z/20250531T070000Z&location=Gampeng,+Ngluyu,+Nganjuk&details=The+Wedding+of+Arik+%26+Evin'
                  className='group relative mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-yellow-600 via-green-500 to-sky-500 p-0.5 text-sm font-medium text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-green-500 focus-visible:ring-offset-1 focus-visible:ring-offset-black group-hover:from-yellow-600 group-hover:via-green-600 group-hover:to-sky-500'
                >
                  <span className='relative rounded-md bg-black px-6 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0'>
                    Save to Calendar
                  </span>
                </a>
              </div>
            </div>
          </section>

          <div
            id='location'
            className='relative flex h-screen min-h-screen items-center justify-center pb-28 pt-16 md:pt-44'
          >
            <div>
              <h1 className='mb-4 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-center text-5xl font-extrabold md:-mt-32 md:text-6xl'>
                <span className={eb.className}>
                  <TextAnimate animation='slideRight' by='character' duration={0.5}>
                    Location
                  </TextAnimate>
                </span>
              </h1>
              <div className='mb-16 flex justify-center'>
                <Pattern />
              </div>
              <FadeIn delay={0.5}>
                <h1 className='z-10 mx-6 mb-2 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text pb-2 text-center text-3xl font-extrabold leading-tight text-transparent lg:text-4xl'>
                  <span className={eb.className}>{config.street}</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.8}>
                <h1 className='z-10 mx-6 mb-2 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text pb-2 text-center text-3xl font-extrabold leading-tight text-transparent lg:text-4xl'>
                  <span className={eb.className}>{config.address}</span>
                </h1>
                <div className='mb-4 flex justify-center pt-4'>
                  <button
                    onClick={() => setShowMap(!showMap)}
                    className='group relative mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-yellow-600 via-green-500 to-sky-500 p-0.5 text-sm font-medium text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-green-500 focus-visible:ring-offset-1 focus-visible:ring-offset-black group-hover:from-yellow-600 group-hover:via-green-600 group-hover:to-sky-500'
                  >
                    <span className='relative rounded-md bg-black px-6 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0'>
                      {showMap ? 'Hide Map' : 'Show Map'}
                    </span>
                  </button>
                </div>
              </FadeIn>
              {showMap ? (
                <div className='relative z-20 flex justify-center rounded-2xl shadow-xl shadow-green-600/40'>
                  <div className='iframe-container rounded-2xl shadow-[1px_4px_10px_0px_rgba(255,155,0,1)]'>
                    <iframe
                      title='Maps'
                      className='iframe-responsive'
                      src='https://maps.google.com/maps?q=-7.439484865855791, 111.96515246402664&hl=es;z=18&amp;output=embed'
                    />
                  </div>
                </div>
              ) : (
                <div className='flex justify-center'>
                  <GlobeDraggable globeWidth={350} globeHeight={350} className='md:hidden' />
                  <GlobeDraggable globeWidth={450} globeHeight={450} className='hidden md:block' />
                </div>
              )}
            </div>
          </div>

          <section
            id='gallery'
            className='relative flex min-h-screen items-center justify-between pb-36 pt-20 md:pb-16'
          >
            <div>
              <h1 className='relative z-20 mb-4 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-center text-5xl font-extrabold md:text-6xl'>
                <span className={eb.className}>
                  <TextAnimate animation='slideLeft' by='character' duration={0.5}>
                    Gallery
                  </TextAnimate>
                </span>
              </h1>
              <div className='relative z-10 mb-20 flex justify-center md:mb-14'>
                <Pattern />
              </div>
              <div className='relative z-10 flex w-screen items-center justify-center'>
                <Splide
                  className='block md:hidden'
                  aria-label='Images'
                  options={{
                    type: 'loop',
                    drag: false,
                    focus: 'center',
                    pagination: false,
                    arrows: false,
                    perPage: 3,
                    rewind: true,
                    autoScroll: {
                      speed: 0.5,
                      pauseOnHover: false,
                    },
                  }}
                  extensions={{ AutoScroll }}
                >
                  <SplideSlide>
                    <div className='p-8'>
                      <div
                        onClick={() => handleOpenGallery(0)}
                        className='group relative h-80 rotate-3 cursor-pointer rounded-xl bg-black/50 shadow-lg shadow-orange-500/40'
                      >
                        <Image
                          alt='Arik Evin'
                          src={`${albums[0].src}`}
                          fill='true'
                          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          className='rounded-xl object-cover object-center'
                        />
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className='p-8'>
                      <div
                        onClick={() => handleOpenGallery(1)}
                        className='group relative h-80 -rotate-3 cursor-pointer rounded-xl bg-black/50 shadow-lg shadow-yellow-500/40'
                      >
                        <Image
                          alt='Arik Evin'
                          src={`${albums[1].src}`}
                          fill='true'
                          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          className='rounded-xl object-cover object-center'
                        />
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className='p-8'>
                      <div
                        onClick={() => handleOpenGallery(2)}
                        className='group relative h-80 cursor-pointer rounded-xl bg-black/50 shadow-lg shadow-teal-500/40'
                      >
                        <Image
                          alt='Arik Evin'
                          src={`${albums[2].src}`}
                          fill='true'
                          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          className='rounded-xl object-cover object-center'
                        />
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className='p-8'>
                      <div
                        onClick={() => handleOpenGallery(3)}
                        className='group relative h-80 rotate-3 cursor-pointer rounded-xl bg-black/50 shadow-lg shadow-sky-600/40'
                      >
                        <Image
                          alt='Arik Evin'
                          src={`${albums[3].src}`}
                          fill='true'
                          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          className='rounded-xl object-cover object-center'
                        />
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className='p-8'>
                      <div
                        onClick={() => handleOpenGallery(4)}
                        className='group relative h-80 -rotate-3 cursor-pointer rounded-xl bg-black/50 shadow-lg shadow-purple-600/40'
                      >
                        <Image
                          alt='Arik Evin'
                          src={`${albums[4].src}`}
                          fill='true'
                          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          className='rounded-xl object-cover object-center'
                        />
                      </div>
                    </div>
                  </SplideSlide>
                </Splide>

                <div className='hidden md:block'>
                  <FadeIn delay={0.3}>
                    <div className='flex justify-center gap-2 overflow-hidden py-10'>
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        className='group cursor-pointer'
                        onClick={() => handleOpenGallery(0)}
                      >
                        <HoverCard>
                          <div className='relative aspect-[9/10] w-72 flex-none rotate-3 rounded-2xl bg-black/50 shadow-lg shadow-orange-500/40'>
                            <Image
                              alt='Arik Evin'
                              src={`${albums[0].src}`}
                              fill='true'
                              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                              className='rounded-2xl object-cover object-center blur-sm brightness-90 transition-all duration-500 group-hover:blur-none group-hover:brightness-100'
                            />
                          </div>
                        </HoverCard>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        className='group cursor-pointer'
                        onClick={() => handleOpenGallery(1)}
                      >
                        <HoverCard>
                          <div className='relative aspect-[9/10] w-72 flex-none -rotate-3 rounded-2xl bg-black/50 shadow-lg shadow-yellow-500/40'>
                            <Image
                              alt='Arik Evin'
                              src={`${albums[1].src}`}
                              fill='true'
                              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                              className='rounded-2xl object-cover object-center blur-sm brightness-90 transition-all duration-500 group-hover:blur-none group-hover:brightness-100'
                            />
                          </div>
                        </HoverCard>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        className='group cursor-pointer'
                        onClick={() => handleOpenGallery(2)}
                      >
                        <HoverCard>
                          <div className='relative aspect-[9/10] w-72 flex-none rounded-2xl bg-black/50 shadow-lg shadow-teal-500/40'>
                            <Image
                              alt='Arik Evin'
                              src={`${albums[2].src}`}
                              fill='true'
                              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                              className='rounded-2xl object-cover object-center blur-sm brightness-90 transition-all duration-500 group-hover:blur-none group-hover:brightness-100'
                            />
                          </div>
                        </HoverCard>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        className='group cursor-pointer'
                        onClick={() => handleOpenGallery(3)}
                      >
                        <HoverCard>
                          <div className='relative aspect-[9/10] w-72 flex-none rotate-3 rounded-2xl bg-black/50 shadow-lg shadow-sky-600/40'>
                            <Image
                              alt='Arik Evin'
                              src={`${albums[3].src}`}
                              fill='true'
                              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                              className='rounded-2xl object-cover object-center blur-sm brightness-90 transition-all duration-500 group-hover:blur-none group-hover:brightness-100'
                            />
                          </div>
                        </HoverCard>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        className='group cursor-pointer'
                        onClick={() => handleOpenGallery(4)}
                      >
                        <HoverCard>
                          <div className='relative aspect-[9/10] w-72 flex-none -rotate-3 rounded-2xl bg-black/50 shadow-lg shadow-purple-600/40'>
                            <Image
                              alt='Arik Evin'
                              src={`${albums[4].src}`}
                              fill='true'
                              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                              className='rounded-2xl object-cover object-center blur-sm brightness-90 transition-all duration-500 group-hover:blur-none group-hover:brightness-100'
                            />
                          </div>
                        </HoverCard>
                      </motion.div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>

          <section
            id='interstellar'
            className='relative flex min-h-screen w-full items-center justify-center overflow-hidden'
          >
            <div>
              {/* <FadeIn delay={0.3}> */}
              <div
                className={cn(
                  eb.className,
                  'max-w-lg bg-gradient-to-b from-white via-neutral-100 to-neutral-200 bg-clip-text px-4 text-center text-xl font-semibold sm:text-2xl',
                )}
              >
                <TextAnimate animation='blurIn' duration={2} once={true}>
                  Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan
                  memberikan doa restu. Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
                </TextAnimate>
                {/* Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan
                  memberikan doa restu. Atas kehadiran dan doa restunya, kami mengucapkan terima kasih. */}
              </div>
              {/* </FadeIn> */}
              <FadeIn delay={0.4}>
                <div className='mt-12 flex justify-center'>
                  <Border />
                </div>
              </FadeIn>
              {/* <FadeIn delay={0.5}> */}
              <div className='mt-8 flex items-center justify-center gap-4 px-4 italic'>
                {/* <h1
                    className={cn(
                      eb.className,
                      'bg-gradient-to-b from-white via-neutral-300 to-neutral-500 bg-clip-text py-2 pl-2 text-3xl font-bold italic text-transparent sm:text-4xl md:text-left md:text-5xl',
                    )}
                  >
                    <i>{config.man}</i>{' '}
                    <span className='bg-gradient-to-b from-yellow-500 via-green-500 to-sky-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl md:text-center md:text-5xl'>
                      &
                    </span>{' '}
                    <i>{config.woman}</i>
                  </h1> */}
                <h1
                  className={cn(
                    eb.className,
                    'text-transparen bg-gradient-to-b from-white via-neutral-300 to-neutral-500 bg-clip-text py-2 pl-2 text-3xl font-bold italic sm:text-4xl md:text-left md:text-5xl',
                  )}
                >
                  <i>
                    <TextAnimate animation='blurInUp' duration={2} by='character' once={true}>
                      Arik & Evin
                    </TextAnimate>
                  </i>
                </h1>
              </div>
              {/* </FadeIn> */}
            </div>
          </section>

          {/* <CommentComp /> */}

          <section id='bank' className='relative h-full min-h-screen w-full overflow-hidden'>
            <div className='absolute top-0 h-0.5 w-full bg-gradient-to-r from-orange-500 to-sky-500 opacity-10' />
            <div className='pb-28 pt-24'>
              <h1 className='bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text p-4 text-center text-5xl font-extrabold md:text-6xl'>
                <span className={eb.className}>
                  <TextAnimate animation='slideLeft' by='character' duration={0.5}>
                    Gift
                  </TextAnimate>
                </span>
              </h1>
              <div className='relative z-10 flex justify-center'>
                <Pattern />
              </div>
            </div>
            <div className='flex items-center justify-center pb-32'>
              <div className='mx-16 grid grid-cols-1 gap-16 sm:grid-cols-1 xl:gap-32'>
                {/* <FadeIn delay={0.3}>
                  <div className='flex flex-col items-center justify-center gap-3'>
                    <Image
                      alt='Mandiri'
                      src={`/mandiri.png`}
                      width={250}
                      height={100}
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      className='object-cover object-center'
                    />
                    <p
                      className={cn(
                        eb.className,
                        'bg-gradient-to-t from-white via-neutral-300 to-neutral-500 bg-clip-text px-2 py-2 text-3xl font-bold italic text-transparent md:text-left md:text-4xl',
                      )}
                    >
                      <i>{config.woman_fullname} Nasikin A</i>
                    </p>
                    <p className='bg-gradient-to-t from-white via-neutral-300 to-neutral-500 bg-clip-text text-3xl font-semibold text-transparent'>
                      {config.man_card_number}
                    </p>
                  </div>
                </FadeIn> */}
                <FadeIn delay={0.4}>
                  <div className='flex flex-col items-center justify-center gap-3'>
                    <Image
                      alt='BRI'
                      src={bri}
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 3vw'
                      className='object-cover object-center'
                      width={150}
                      height={80}
                    />
                    <p
                      className={cn(
                        eb.className,
                        'bg-gradient-to-t from-white via-neutral-300 to-neutral-500 bg-clip-text px-2 pb-2 pt-10 text-center text-3xl font-bold italic text-transparent md:text-left md:text-4xl',
                      )}
                    >
                      <i>{config.woman_fullname} Nasikin A</i>
                    </p>
                    <p className='text-center text-xl font-semibold text-white sm:text-2xl md:text-3xl'>
                      {config.woman_card_number}
                    </p>
                  </div>
                  <div className='mt-4 flex justify-center'>
                    <button
                      title='Copy Account Number'
                      onClick={() => {
                        navigator.clipboard.writeText('64170 10441 14537');
                        setCopied(true);
                      }}
                      className='group relative mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-yellow-600 via-green-500 to-sky-500 p-0.5 text-sm font-medium text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-green-500 focus-visible:ring-offset-1 focus-visible:ring-offset-black group-hover:from-yellow-600 group-hover:via-green-600 group-hover:to-sky-500'
                    >
                      <span className='relative rounded-md bg-black px-6 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0'>
                        {copied ? 'Number Copied' : 'Copy Number'}
                      </span>
                    </button>
                  </div>
                </FadeIn>
              </div>
            </div>
            <Gradient width={1200} height={300} className='top-[-200px] opacity-10' conic small />
            <Gradient width={1500} height={300} className='bottom-[-200px] opacity-15' conic />
          </section>

          <section
            id='countdown'
            className='relative mt-16 flex h-screen min-h-screen items-center justify-center overflow-hidden sm:mt-8 md:mt-0'
          >
            <span className={cn(styles.leftLights, 'opacity-100')} />
            <span className={cn(styles.rightLights, 'opacity-100')} />
            <span className='absolute left-0 right-0 top-0 h-[70vh] w-full bg-gradient-to-b from-black to-transparent'></span>
            <span className='absolute bottom-0 left-0 right-0 h-64 w-full bg-gradient-to-t from-black to-transparent' />
            <motion.svg
              width='200'
              height='200'
              viewBox='0 0 600 600'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='absolute top-20 z-10 md:left-14'
            >
              <motion.circle
                cx='100'
                cy='100'
                r='80'
                className='fill-transparent stroke-yellow-500/50'
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
              className='absolute -left-40 top-14 z-10 md:-left-10'
            >
              <motion.rect
                width='140'
                height='140'
                x='410'
                y='30'
                rx='20'
                className='fill-transparent stroke-sky-500/50 stroke-1'
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
              className='absolute -right-32 top-16'
            >
              <motion.circle cx='100' cy='100' r='50' className='stroke-yellow-500/50' variants={draw} custom={1} />
            </motion.svg>
            <motion.svg
              width='200'
              height='200'
              viewBox='0 0 600 600'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='absolute -right-16 top-16'
            >
              <motion.line
                x1='220'
                y1='30'
                x2='360'
                y2='170'
                className='stroke-yellow-500/50'
                variants={draw}
                custom={2}
              />
              <motion.line
                x1='220'
                y1='170'
                x2='360'
                y2='30'
                className='stroke-sky-500/50'
                variants={draw}
                custom={2.5}
              />
            </motion.svg>
            <div className='relative flex min-h-screen items-center justify-center'>
              <div>
                <h1 className='bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text p-4 text-center text-5xl font-extrabold md:text-6xl'>
                  <span className={eb.className}>
                    <TextAnimate animation='slideRight' by='character' duration={0.5}>
                      Countdown
                    </TextAnimate>
                  </span>
                </h1>
                <div className='relative z-10 mb-16 flex justify-center sm:mb-32'>
                  <Pattern />
                </div>
                <Countdown
                  date={config.date_countdown}
                  renderer={(props) => (
                    <div className='mx-auto grid max-w-2xl grid-cols-1 gap-8 pb-32 sm:grid-cols-4 md:gap-16'>
                      <FadeIn delay={0.2}>
                        <div className='text-center'>
                          <p
                            suppressHydrationWarning={true}
                            className='bg-gradient-to-b from-yellow-500 via-green-500 to-sky-500 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl'
                          >
                            {props.days}
                          </p>
                          <p className='mt-2 text-xl font-medium text-neutral-300'>Days</p>
                        </div>
                      </FadeIn>
                      <FadeIn delay={0.3}>
                        <div className='text-center'>
                          <p
                            suppressHydrationWarning={true}
                            className='bg-gradient-to-t from-yellow-500 via-green-500 to-sky-500 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl'
                          >
                            {props.hours}
                          </p>
                          <p className='mt-2 text-xl font-medium text-neutral-300'>Hours</p>
                        </div>
                      </FadeIn>
                      <FadeIn delay={0.4}>
                        <div className='text-center'>
                          <p
                            suppressHydrationWarning={true}
                            className='bg-gradient-to-l from-yellow-500 via-green-500 to-sky-500 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl'
                          >
                            {props.minutes}
                          </p>
                          <p className='mt-2 text-xl font-medium text-neutral-300'>Minutes</p>
                        </div>
                      </FadeIn>
                      <FadeIn delay={0.5}>
                        <div className='text-center'>
                          <p
                            suppressHydrationWarning={true}
                            className='bg-gradient-to-r from-yellow-500 via-green-500 to-sky-500 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl'
                          >
                            {props.seconds}
                          </p>
                          <p className='mt-2 text-xl font-medium text-neutral-300'>Seconds</p>
                        </div>
                      </FadeIn>
                    </div>
                  )}
                />
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}

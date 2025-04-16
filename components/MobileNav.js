import { useContext, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link as LinkScroll } from 'react-scroll';

import { config } from '@data/config';
import { GlobalContext } from '@utils/GlobalContext';

function Heart({ className }) {
  return (
    <svg className={className} viewBox='0 0 22 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.7484 18.8538C8.46358 17.5179 6.33801 15.9456 4.40978 14.1652C3.05414 12.8829 2.02211 11.3198 1.39273 9.59539C0.260151 6.25031 1.58308 2.42083 5.28539 1.28752C7.23117 0.692435 9.35626 1.03255 10.9959 2.20148C12.6361 1.03398 14.7605 0.693978 16.7064 1.28752C20.4087 2.42083 21.7411 6.25031 20.6086 9.59539C19.9792 11.3198 18.9471 12.8829 17.5915 14.1652C15.6633 15.9456 13.5377 17.5179 11.2529 18.8538L11.0054 19L10.7484 18.8538Z'
        stroke='#BABABA'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.4'
        d='M14.9362 5.05273C16.0575 5.39303 16.8543 6.34944 16.9539 7.47472'
        stroke='#BABABA'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
function HeartIcon({ className }) {
  return (
    <svg className={className} viewBox='0 0 22 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.7484 18.8538C8.46358 17.5179 6.33801 15.9456 4.40978 14.1652C3.05414 12.8829 2.02211 11.3198 1.39273 9.59539C0.260151 6.25031 1.58308 2.42083 5.28539 1.28752C7.23117 0.692435 9.35626 1.03255 10.9959 2.20148C12.6361 1.03398 14.7605 0.693978 16.7064 1.28752C20.4087 2.42083 21.7411 6.25031 20.6086 9.59539C19.9792 11.3198 18.9471 12.8829 17.5915 14.1652C15.6633 15.9456 13.5377 17.5179 11.2529 18.8538L11.0054 19L10.7484 18.8538Z'
        stroke='url(#paint0_linear_138_9)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <g opacity='0.4'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14.9362 5.05273C16.0575 5.39303 16.8543 6.34944 16.9539 7.47472Z'
          fill='url(#paint1_linear_138_9)'
        />
        <path
          d='M14.9362 5.05273C16.0575 5.39303 16.8543 6.34944 16.9539 7.47472'
          stroke='url(#paint2_linear_138_9)'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <linearGradient id='paint0_linear_138_9' x1='11' y1='1' x2='11' y2='19' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#CB9F01' />
          <stop offset='0.505208' stopColor='#10710B' />
          <stop offset='1' stopColor='#014576' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_138_9'
          x1='15.945'
          y1='5.05273'
          x2='15.945'
          y2='7.47472'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#B59A02' />
          <stop offset='1' stopColor='#D9D9D9' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_138_9'
          x1='15.945'
          y1='5.05273'
          x2='15.945'
          y2='7.47472'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#B89B02' />
          <stop offset='1' stopColor='#034B69' />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Gallery({ className }) {
  return (
    <svg className={className} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.3034 0.750488H5.65443C2.63943 0.750488 0.750427 2.88449 0.750427 5.90449V14.0535C0.750427 17.0735 2.63143 19.2075 5.65443 19.2075H14.3024C17.3264 19.2075 19.2074 17.0735 19.2074 14.0535V5.90449C19.2074 2.88449 17.3264 0.750488 14.3034 0.750488Z'
        stroke='#BABABA'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.4'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.70333 6.78545C8.70333 7.80445 7.87633 8.63145 6.85733 8.63145C5.83933 8.63145 5.01233 7.80445 5.01233 6.78545C5.01233 5.76645 5.83933 4.93945 6.85733 4.93945C7.87633 4.93945 8.70333 5.76645 8.70333 6.78545Z'
        stroke='#BABABA'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.4'
        d='M19.2068 12.9505C18.2128 12.0855 17.3478 11.0445 16.2078 10.3575C15.0658 9.67054 13.8388 10.0945 13.0468 11.1195C12.2818 12.1105 11.8038 13.4435 10.6488 14.0685C9.22576 14.8395 8.38976 13.5965 7.20276 13.0985C5.87776 12.5435 4.87176 13.5415 4.09776 14.5005C3.32276 15.4605 2.53776 16.4105 1.74976 17.3605'
        stroke='#BABABA'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
function GalleryIcon({ className }) {
  return (
    <svg className={className} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.3034 0.750488H5.65443C2.63943 0.750488 0.750427 2.88449 0.750427 5.90449V14.0535C0.750427 17.0735 2.63143 19.2075 5.65443 19.2075H14.3024C17.3264 19.2075 19.2074 17.0735 19.2074 14.0535V5.90449C19.2074 2.88449 17.3264 0.750488 14.3034 0.750488Z'
        stroke='url(#paint0_linear_138_4)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.4'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.70333 6.78545C8.70333 7.80445 7.87633 8.63145 6.85733 8.63145C5.83933 8.63145 5.01233 7.80445 5.01233 6.78545C5.01233 5.76645 5.83933 4.93945 6.85733 4.93945C7.87633 4.93945 8.70333 5.76645 8.70333 6.78545Z'
        stroke='url(#paint1_linear_138_4)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.4'
        d='M19.2068 12.9505C18.2128 12.0855 17.3478 11.0445 16.2078 10.3575C15.0658 9.67054 13.8388 10.0945 13.0468 11.1195C12.2818 12.1105 11.8038 13.4435 10.6488 14.0685C9.22576 14.8395 8.38976 13.5965 7.20276 13.0985C5.87776 12.5435 4.87176 13.5415 4.09776 14.5005C3.32276 15.4605 2.53776 16.4105 1.74976 17.3605'
        stroke='url(#paint2_linear_138_4)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <defs>
        <linearGradient
          id='paint0_linear_138_4'
          x1='9.97893'
          y1='0.750488'
          x2='9.97893'
          y2='19.2075'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#CB9E00' />
          <stop offset='0.526042' stopColor='#006D0B' />
          <stop offset='1' stopColor='#004476' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_138_4'
          x1='6.85783'
          y1='4.93945'
          x2='6.85783'
          y2='8.63145'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#CB9E00' />
          <stop offset='0.526042' stopColor='#006D0B' />
          <stop offset='1' stopColor='#004476' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_138_4'
          x1='10.4783'
          y1='10.022'
          x2='10.4783'
          y2='17.3605'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#CB9E00' />
          <stop offset='0.526042' stopColor='#006D0B' />
          <stop offset='1' stopColor='#004476' />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Calendar({ className }) {
  return (
    <svg className={className} viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        opacity='0.4'
        d='M1.09265 8.40445H18.9166'
        stroke='#BABABA'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.4'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.80786 12.3096C4.80786 11.8954 5.14365 11.5596 5.55786 11.5596H5.56713C5.98134 11.5596 6.31713 11.8954 6.31713 12.3096C6.31713 12.7238 5.98134 13.0596 5.56713 13.0596H5.55786C5.14365 13.0596 4.80786 12.7238 4.80786 12.3096ZM10.0046 11.5596C9.59037 11.5596 9.25459 11.8954 9.25459 12.3096C9.25459 12.7238 9.59037 13.0596 10.0046 13.0596H10.0138C10.4281 13.0596 10.7638 12.7238 10.7638 12.3096C10.7638 11.8954 10.4281 11.5596 10.0138 11.5596H10.0046ZM14.442 11.5596C14.0278 11.5596 13.692 11.8954 13.692 12.3096C13.692 12.7238 14.0278 13.0596 14.442 13.0596H14.4513C14.8655 13.0596 15.2013 12.7238 15.2013 12.3096C15.2013 11.8954 14.8655 11.5596 14.4513 11.5596H14.442ZM14.442 15.446C14.0278 15.446 13.692 15.7818 13.692 16.196C13.692 16.6103 14.0278 16.946 14.442 16.946H14.4513C14.8655 16.946 15.2013 16.6103 15.2013 16.196C15.2013 15.7818 14.8655 15.446 14.4513 15.446H14.442ZM9.25459 16.196C9.25459 15.7818 9.59037 15.446 10.0046 15.446H10.0138C10.4281 15.446 10.7638 15.7818 10.7638 16.196C10.7638 16.6103 10.4281 16.946 10.0138 16.946H10.0046C9.59037 16.946 9.25459 16.6103 9.25459 16.196ZM5.55786 15.446C5.14365 15.446 4.80786 15.7818 4.80786 16.196C4.80786 16.6103 5.14365 16.946 5.55786 16.946H5.56713C5.98134 16.946 6.31713 16.6103 6.31713 16.196C6.31713 15.7818 5.98134 15.446 5.56713 15.446H5.55786Z'
        fill='#BABABA'
      />
      <path d='M14.0437 1V4.29078' stroke='#BABABA' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M5.96552 1V4.29078' stroke='#BABABA' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.2383 2.5791H5.77096C2.83427 2.5791 1 4.21504 1 7.22213V16.2718C1 19.3261 2.83427 20.9999 5.77096 20.9999H14.229C17.175 20.9999 19 19.3545 19 16.3474V7.22213C19.0092 4.21504 17.1842 2.5791 14.2383 2.5791Z'
        stroke='#BABABA'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
function CalendarIcon({ className }) {
  return (
    <svg className={className} viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        opacity='0.4'
        d='M1.09265 8.40445H18.9166'
        stroke='url(#paint0_linear_138_13)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.4'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.80786 12.3096C4.80786 11.8954 5.14365 11.5596 5.55786 11.5596H5.56713C5.98134 11.5596 6.31713 11.8954 6.31713 12.3096C6.31713 12.7238 5.98134 13.0596 5.56713 13.0596H5.55786C5.14365 13.0596 4.80786 12.7238 4.80786 12.3096ZM10.0046 11.5596C9.59037 11.5596 9.25459 11.8954 9.25459 12.3096C9.25459 12.7238 9.59037 13.0596 10.0046 13.0596H10.0138C10.4281 13.0596 10.7638 12.7238 10.7638 12.3096C10.7638 11.8954 10.4281 11.5596 10.0138 11.5596H10.0046ZM14.442 11.5596C14.0278 11.5596 13.692 11.8954 13.692 12.3096C13.692 12.7238 14.0278 13.0596 14.442 13.0596H14.4513C14.8655 13.0596 15.2013 12.7238 15.2013 12.3096C15.2013 11.8954 14.8655 11.5596 14.4513 11.5596H14.442ZM14.442 15.446C14.0278 15.446 13.692 15.7818 13.692 16.196C13.692 16.6103 14.0278 16.946 14.442 16.946H14.4513C14.8655 16.946 15.2013 16.6103 15.2013 16.196C15.2013 15.7818 14.8655 15.446 14.4513 15.446H14.442ZM9.25459 16.196C9.25459 15.7818 9.59037 15.446 10.0046 15.446H10.0138C10.4281 15.446 10.7638 15.7818 10.7638 16.196C10.7638 16.6103 10.4281 16.946 10.0138 16.946H10.0046C9.59037 16.946 9.25459 16.6103 9.25459 16.196ZM5.55786 15.446C5.14365 15.446 4.80786 15.7818 4.80786 16.196C4.80786 16.6103 5.14365 16.946 5.55786 16.946H5.56713C5.98134 16.946 6.31713 16.6103 6.31713 16.196C6.31713 15.7818 5.98134 15.446 5.56713 15.446H5.55786Z'
        fill='url(#paint1_linear_138_13)'
      />
      <path
        d='M14.0437 1V4.29078'
        stroke='url(#paint2_linear_138_13)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.96552 1V4.29078'
        stroke='url(#paint3_linear_138_13)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.2383 2.5791H5.77096C2.83427 2.5791 1 4.21504 1 7.22213V16.2718C1 19.3261 2.83427 20.9999 5.77096 20.9999H14.229C17.175 20.9999 19 19.3545 19 16.3474V7.22213C19.0092 4.21504 17.1842 2.5791 14.2383 2.5791Z'
        stroke='url(#paint4_linear_138_13)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <defs>
        <linearGradient
          id='paint0_linear_138_13'
          x1='13'
          y1='8.00024'
          x2='6.5'
          y2='9.50024'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#C39D02' />
          <stop offset='1' stopColor='#014576' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_138_13'
          x1='10.0046'
          y1='11.5596'
          x2='10.0046'
          y2='16.946'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#BC9C02' />
          <stop offset='1' stopColor='#014576' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_138_13'
          x1='14.5437'
          y1='1'
          x2='14.5437'
          y2='4.29078'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#CB9F01' />
          <stop offset='1' stopColor='#014576' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_138_13'
          x1='5.96552'
          y1='1'
          x2='5.96552'
          y2='4.29078'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#014576' />
          <stop offset='1' stopColor='#CB9F01' />
        </linearGradient>
        <linearGradient
          id='paint4_linear_138_13'
          x1='10'
          y1='2.5791'
          x2='10'
          y2='20.9999'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#CB9F01' />
          <stop offset='0.520833' stopColor='#10710A' />
          <stop offset='1' stopColor='#014576' />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Play({ className }) {
  return (
    <svg className={className} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
        stroke='#006D0B'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.4'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.0501 11.4668C13.3211 12.2528 11.3371 13.5828 10.3221 14.0098C10.1601 14.0778 9.74709 14.2218 9.65809 14.2238C9.46909 14.2298 9.28709 14.1238 9.19909 13.9538C9.16509 13.8878 9.06509 13.4568 9.03309 13.2648C8.93809 12.6808 8.88909 11.7738 8.89009 10.8618C8.88909 9.90483 8.94209 8.95483 9.04809 8.37683C9.07609 8.22083 9.15809 7.86183 9.18209 7.80383C9.22709 7.69583 9.30909 7.61083 9.40809 7.55783C9.48409 7.51683 9.57109 7.49483 9.65809 7.49783C9.74709 7.49983 10.1091 7.62683 10.2331 7.67583C11.2111 8.05583 13.2801 9.43383 14.0401 10.2438C14.1081 10.3168 14.2951 10.5128 14.3261 10.5528C14.3971 10.6428 14.4321 10.7518 14.4321 10.8618C14.4321 10.9638 14.4011 11.0678 14.3371 11.1548C14.3041 11.1998 14.1131 11.3998 14.0501 11.4668Z'
        stroke='#CB9F01'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function Pause({ className }) {
  return (
    <svg className={className} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
        stroke='#CB9F01'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M12.4632 9V12.2908' stroke='#006D0B' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M10 9V12.2908' stroke='#006D0B' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

function Map({ className }) {
  return (
    <svg className={className} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.23914 9.39148C1.25354 5.15089 4.7029 1.7249 8.94348 1.7393C13.1841 1.75371 16.6101 5.20306 16.5957 9.44365V9.53061C16.5435 12.2871 15.0044 14.835 13.1174 16.8263C12.0382 17.9469 10.8331 18.939 9.52609 19.7828C9.1766 20.0851 8.6582 20.0851 8.3087 19.7828C6.3602 18.5145 4.65007 16.9133 3.25653 15.0523C2.01449 13.4296 1.3093 11.4599 1.23914 9.41756L1.23914 9.39148Z'
        stroke='#BABABA'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle
        opacity='0.4'
        cx='8.91741'
        cy='9.53948'
        r='2.46087'
        stroke='#BABABA'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
function MapIcon({ className }) {
  return (
    <svg className={className} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.23914 9.39148C1.25354 5.15089 4.7029 1.7249 8.94348 1.7393C13.1841 1.75371 16.6101 5.20306 16.5957 9.44365V9.53061C16.5435 12.2871 15.0044 14.835 13.1174 16.8263C12.0382 17.9469 10.8331 18.939 9.52609 19.7828C9.1766 20.0851 8.6582 20.0851 8.3087 19.7828C6.3602 18.5145 4.65007 16.9133 3.25653 15.0523C2.01449 13.4296 1.3093 11.4599 1.23914 9.41756L1.23914 9.39148Z'
        stroke='url(#paint0_linear_138_26)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle
        opacity='0.4'
        cx='8.91741'
        cy='9.53948'
        r='2.46087'
        stroke='url(#paint1_linear_138_26)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <defs>
        <linearGradient
          id='paint0_linear_138_26'
          x1='8.91742'
          y1='1.73926'
          x2='8.91742'
          y2='20.0095'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#C89F01' />
          <stop offset='0.515625' stopColor='#29770D' />
          <stop offset='1' stopColor='#044A6C' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_138_26'
          x1='8.91741'
          y1='7.07861'
          x2='8.91741'
          y2='12.0004'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#C89F01' />
          <stop offset='0.515625' stopColor='#29770D' />
          <stop offset='1' stopColor='#044A6C' />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Time({ className }) {
  return (
    <svg className={className} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.2498 10.0005C19.2498 15.1095 15.1088 19.2505 9.99982 19.2505C4.89082 19.2505 0.749817 15.1095 0.749817 10.0005C0.749817 4.89149 4.89082 0.750488 9.99982 0.750488C15.1088 0.750488 19.2498 4.89149 19.2498 10.0005Z'
        stroke='#BABABA'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.4'
        d='M13.4314 12.9427L9.66144 10.6937V5.84668'
        stroke='#BABABA'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
function TimeIcon({ className }) {
  return (
    <svg className={className} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.5 10.25C19.5 15.359 15.359 19.5 10.25 19.5C5.141 19.5 1 15.359 1 10.25C1 5.141 5.141 1 10.25 1C15.359 1 19.5 5.141 19.5 10.25Z'
        stroke='url(#paint0_linear_160_10)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.4'
        d='M13.6816 13.1922L9.91162 10.9432V6.09619'
        stroke='url(#paint1_linear_160_10)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <defs>
        <linearGradient id='paint0_linear_160_10' x1='10.25' y1='1' x2='10.25' y2='19.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#C69F01' />
          <stop offset='0.510417' stopColor='#31790C' />
          <stop offset='1' stopColor='#044A6C' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_160_10'
          x1='11.7966'
          y1='6.09619'
          x2='11.7966'
          y2='13.1922'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#C69F01' />
          <stop offset='0.520833' stopColor='#467F0B' />
          <stop offset='1' stopColor='#044A6C' />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Border({ className }) {
  return (
    <svg
      className={className}
      width='250'
      height='63'
      viewBox='0 0 440 63'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M205.459 56.2496C196.98 33.138 129.64 28.6744 75.6013 48.5663C67.5091 50.8115 61.3581 52.6033 54.077 52.3469C50.2383 52.2117 46.7225 51.3036 43.6707 49.3575C34.3999 43.4455 36.4605 25.5001 50.7103 26.8674M50.7103 26.8674C51.1182 26.9065 51.5361 26.9615 51.9641 27.033M50.7103 26.8674C51.1325 26.8863 51.5517 26.9429 51.9641 27.033M50.7103 26.8674C50.6234 26.8635 50.5364 26.8612 50.4493 26.8605M51.9641 27.033C52.0638 27.0497 52.164 27.0672 52.2648 27.0857M51.9641 27.033C57.0883 28.1529 61.1496 34.4457 56.6095 37.7798C53.4013 40.1358 48.4663 38.2683 48.7637 33.4053'
        stroke='url(#paint0_linear_155_14)'
        strokeWidth='3'
      />
      <path
        d='M234.208 56.2496C242.687 33.138 310.027 28.6744 364.065 48.5663C372.158 50.8115 378.309 52.6033 385.59 52.3469C389.428 52.2117 392.944 51.3036 395.996 49.3575C405.267 43.4455 403.206 25.5001 388.956 26.8674M388.956 26.8674C388.549 26.9065 388.131 26.9615 387.703 27.033M388.956 26.8674C388.534 26.8863 388.115 26.9429 387.703 27.033M388.956 26.8674C389.043 26.8635 389.13 26.8612 389.217 26.8605M387.703 27.033C387.603 27.0497 387.503 27.0672 387.402 27.0857M387.703 27.033C382.578 28.1529 378.517 34.4457 383.057 37.7798C386.265 40.1358 391.201 38.2683 390.903 33.4053'
        stroke='url(#paint1_linear_155_14)'
        strokeWidth='3'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M224.252 30.5672C225.406 27.6734 226.133 23.4769 226.133 18.8074C226.133 15.3463 223.595 6.1615 220.464 3C217.333 6.1615 214.795 15.3463 214.795 18.8074C214.795 23.6524 215.577 27.9883 216.808 30.8879C204.773 22.291 195.076 30.7502 189.022 33.0888C197.275 32.7736 207.979 37.6503 214.28 43.8511C216.872 46.4026 218.904 49.2969 220.375 52.3857C221.874 48.8032 224.102 45.4466 227.059 42.5361C233.11 36.5814 243.404 31.6973 251.334 31.7517C244.896 28.9724 235.638 22.3335 224.252 30.5672Z'
        stroke='url(#paint2_linear_155_14)'
        strokeWidth='3'
      />
      <path
        d='M408.195 48.5675C411.182 49.4511 415.428 49.7884 420.077 49.3591C423.524 49.041 433.578 45.1158 436.438 41.7078C428.152 39.3828 418.406 38.4904 414.945 38.4475C409.317 38.3777 412.589 41.9062 408.195 48.5675Z'
        stroke='url(#paint3_linear_155_14)'
        strokeWidth='3'
      />
      <path
        d='M31.8054 48.5675C28.8178 49.4511 24.5722 49.7884 19.9225 49.3591C16.4761 49.041 6.42244 45.1158 3.5621 41.7078C11.8479 39.3828 21.5942 38.4904 25.055 38.4475C30.6834 38.3777 27.4111 41.9062 31.8054 48.5675Z'
        stroke='url(#paint4_linear_155_14)'
        strokeWidth='3'
      />
      <path
        d='M31.8054 48.5675C28.8178 49.4511 24.5722 49.7884 19.9225 49.3591C16.4761 49.041 6.42244 45.1158 3.5621 41.7078C11.8479 39.3828 21.5942 38.4904 25.055 38.4475C30.6834 38.3777 27.4111 41.9062 31.8054 48.5675Z'
        stroke='url(#paint5_linear_155_14)'
        strokeWidth='3'
      />
      <defs>
        <linearGradient
          id='paint0_linear_155_14'
          x1='120.889'
          y1='24.1376'
          x2='122.187'
          y2='59.3229'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF9900' />
          <stop offset='0.494792' stopColor='#08AC36' />
          <stop offset='1' stopColor='#00B2FF' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_155_14'
          x1='318.778'
          y1='24.1376'
          x2='317.48'
          y2='59.3229'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF9900' />
          <stop offset='0.494792' stopColor='#08AC36' />
          <stop offset='1' stopColor='#00B2FF' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_155_14'
          x1='220.178'
          y1='3'
          x2='220.178'
          y2='52.3857'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF9900' />
          <stop offset='0.494792' stopColor='#08AC36' />
          <stop offset='1' stopColor='#00B2FF' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_155_14'
          x1='436.476'
          y1='42.1229'
          x2='407.844'
          y2='44.7659'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF9900' />
          <stop offset='0.494792' stopColor='#08AC36' />
          <stop offset='1' stopColor='#00B2FF' />
        </linearGradient>
        <linearGradient
          id='paint4_linear_155_14'
          x1='3.52378'
          y1='42.1229'
          x2='32.1563'
          y2='44.7659'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF9900' />
          <stop offset='0.494792' stopColor='#08AC36' />
          <stop offset='1' stopColor='#00B2FF' />
        </linearGradient>
        <linearGradient
          id='paint5_linear_155_14'
          x1='3.52378'
          y1='42.1229'
          x2='32.1563'
          y2='44.7659'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF9900' />
          <stop offset='0.494792' stopColor='#08AC36' />
          <stop offset='1' stopColor='#00B2FF' />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function MobileNav() {
  const { modalOpen } = useContext(GlobalContext);
  const [activeLink, setActiveLink] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [audio, setAudio] = useState(null);
  // useEffect(() => {
  //   // only run once on the first render on the client
  //   setAudio(new Audio(`/${config.music}`))
  // }, [])
  const audioRef = useRef();

  useEffect(() => {
    if (!modalOpen) {
      playAudio();
    }
    // [modalOpen, audio]
  }, [modalOpen]);

  function playAudio() {
    setIsPlaying(true);
    // audio?.play();
    audioRef.current.play();
  }

  function pauseAudio() {
    setIsPlaying(false);
    // audio?.pause();
    audioRef.current.pause();
  }

  return (
    <>
      <nav className='shadow-t fixed bottom-0 left-0 right-0 z-50'>
        <audio
          controls='controls'
          controlsList='nodownload'
          preload='auto'
          autobuffer='true'
          loop={true}
          style={{ display: 'none' }}
          ref={audioRef}
        >
          <source src={`/${config.music}`} />
        </audio>
        <div className='absolute bottom-2 left-0 mx-2 hidden rounded-lg bg-black/90 px-1.5 py-0.5 backdrop-blur sm:block'>
          <motion.div
            className='flex cursor-pointer flex-col py-1 transition-all'
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            {isPlaying ? (
              <button aria-label='Play' title='Pause' onClick={pauseAudio}>
                <Pause className='h-[26px] w-[26px] xs:h-[24px] xs:w-[24px]' />{' '}
              </button>
            ) : (
              <button aria-label='Pause' title='Play' onClick={playAudio}>
                <Play className='h-[26px] w-[26px] xs:h-[24px] xs:w-[24px]' />{' '}
              </button>
            )}
          </motion.div>
        </div>

        <div className='scrollbar-thumb-rounded mx-2 flex items-center justify-between space-x-3 overflow-auto rounded-t-lg bg-black/90 px-4 pb-2 pt-2 backdrop-blur scrollbar scrollbar-thin scrollbar-thumb-neutral-900 sm:mx-auto sm:max-w-lg sm:pb-3'>
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className='relative'
          >
            <LinkScroll
              activeClass='active'
              to='welcome'
              href='/#welcome'
              spy={true}
              smooth={true}
              aria-label='Welcome'
              title='Welcome'
              duration={1000}
              onSetActive={() => {
                setActiveLink('welcome');
              }}
              className={`animation-hover 
            ${activeLink === 'welcome' ? 'animation-active bg-gradient-to-br from-sky-500 via-green-500 to-yellow-500 bg-clip-text text-transparent' : 'bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-transparent'} 
            flex cursor-pointer flex-col items-center gap-2 px-0.5 py-1 text-sm font-bold transition-all`}
            >
              <span className='hidden sm:block'>WELCOME</span>
              {activeLink === 'welcome' ? (
                <HeartIcon className='block h-6 w-6 pb-1 sm:hidden' />
              ) : (
                <Heart className='block h-6 w-6 pb-1 sm:hidden' />
              )}
            </LinkScroll>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className='relative'
          >
            <LinkScroll
              activeClass='active'
              to='event'
              href='/#event'
              spy={true}
              smooth={true}
              aria-label='Schedule'
              title='Schedule'
              duration={1000}
              onSetActive={() => {
                setActiveLink('event');
              }}
              className={`animation-hover 
            ${activeLink === 'event' ? ' animation-active bg-gradient-to-br from-sky-500 via-green-500 to-yellow-500 bg-clip-text text-transparent' : 'bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-transparent'} 
            flex cursor-pointer flex-col items-center gap-2 px-0.5 py-1 text-sm font-bold transition-all`}
            >
              <span className='hidden sm:block'>SCHEDULE</span>
              {activeLink === 'event' ? (
                <CalendarIcon className='block h-6 w-6 pb-1 sm:hidden' />
              ) : (
                <Calendar className='block h-6 w-6 pb-1 sm:hidden' />
              )}
            </LinkScroll>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className='relative'
          >
            <LinkScroll
              activeClass='active'
              to='location'
              href='/#location'
              spy={true}
              smooth={true}
              aria-label='Location'
              title='Location'
              duration={1000}
              onSetActive={() => {
                setActiveLink('location');
              }}
              className={`animation-hover 
            ${activeLink === 'location' ? ' animation-active bg-gradient-to-br from-sky-500 via-green-500 to-yellow-500 bg-clip-text text-transparent' : 'bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-transparent'} 
            flex cursor-pointer flex-col items-center gap-2 px-0.5 py-1 text-sm font-bold transition-all`}
            >
              <span className='hidden sm:block'>LOCATION</span>
              {activeLink === 'location' ? (
                <MapIcon className='block h-6 w-6 pb-1 sm:hidden' />
              ) : (
                <Map className='block h-6 w-6 pb-1 sm:hidden' />
              )}
            </LinkScroll>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className='relative'
          >
            <LinkScroll
              activeClass='active'
              to='gallery'
              href='/#gallery'
              spy={true}
              smooth={true}
              duration={1000}
              aria-label='Gallery'
              title='Gallery'
              onSetActive={() => {
                setActiveLink('gallery');
              }}
              className={`animation-hover 
            ${activeLink === 'gallery' ? 'animation-active bg-gradient-to-br from-sky-500 via-green-500 to-yellow-500 bg-clip-text text-transparent' : 'bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-transparent'} 
            flex cursor-pointer flex-col items-center gap-2 px-0.5 py-1 text-sm font-bold transition-all`}
            >
              <span className='hidden sm:block'>GALLERY</span>
              {activeLink === 'gallery' ? (
                <GalleryIcon className='block h-6 w-6 pb-1 sm:hidden' />
              ) : (
                <Gallery className='block h-6 w-6 pb-1 sm:hidden' />
              )}
            </LinkScroll>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className='relative'
          >
            <LinkScroll
              activeClass='active'
              to='countdown'
              href='/#countdown'
              spy={true}
              smooth={true}
              duration={1000}
              aria-label='Countdown'
              title='Countdown'
              onSetActive={() => {
                setActiveLink('countdown');
              }}
              className={`animation-hover 
            ${activeLink === 'countdown' ? 'animation-active bg-gradient-to-br from-sky-500 via-green-500 to-yellow-500 bg-clip-text text-transparent' : 'bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-transparent'} 
            flex cursor-pointer flex-col items-center gap-2 px-0.5 py-1 text-sm font-bold transition-all`}
            >
              <span className='hidden sm:block'>COUNTDOWN</span>
              {activeLink === 'countdown' ? (
                <TimeIcon className='block h-6 w-6 pb-1 sm:hidden' />
              ) : (
                <Time className='block h-6 w-6 pb-1 sm:hidden' />
              )}
            </LinkScroll>
          </motion.div>

          <motion.div
            className='block cursor-pointer transition-all sm:hidden'
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            {isPlaying ? (
              <button aria-label='Play' title='Pause' onClick={pauseAudio}>
                <Pause className='h-[25px] w-[25px] pt-0.5 sm:h-[22px] sm:w-[22px]' />{' '}
              </button>
            ) : (
              <button aria-label='Pause' title='Play' onClick={playAudio}>
                <Play className='h-[25px] w-[25px] pt-0.5 sm:h-[22px] sm:w-[22px]' />{' '}
              </button>
            )}
          </motion.div>
        </div>
      </nav>
    </>
  );
}

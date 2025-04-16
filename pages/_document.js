import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='id'>
      <Head />
      <body className='scrollbar-thumb-rounded scrollbar-thin scrollbar-thumb-neutral-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { ImageResponse } from 'next/og';

export const config = {
  runtime: 'edge',
};

const wrapperClassName = {
  fontSize: 60,
  width: '100%',
  height: '100%',
  display: 'flex',
  position: 'relative',
};

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url);
    const hasTitle = searchParams.has('name');
    const titleLength = hasTitle ? searchParams.get('name')?.slice(0, 70) : 'Tamu Undangan';
    let title = titleLength.length == 70 ? titleLength + '...' : titleLength;
    title = title || 'Tamu Undangan';

    return new ImageResponse(
      (
        <div style={wrapperClassName}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt='bg'
            width='100%'
            height='100%'
            src={`${process.env.NEXT_PUBLIC_WEB_URL}/ogs.png`}
            style={{
              position: 'absolute',
            }}
          />

          <h1
            tw='h-full w-full flex items-center mt-56 justify-center'
            style={{
              fontSize: 50,
              fontWeight: 900,
              lineHeight: 1.1,
              textShadow: '0 2px 30px #000',
              letterSpacing: -1,
              // backgroundImage: 'linear-gradient(90deg, #fff 40%, #aaa)',
              // backgroundClip: 'text',
              // WebkitBackgroundClip: 'text',
              color: '#fff',
            }}
          >
            {title}
          </h1>
        </div>
      ),
      { width: 1200, height: 630 },
    );
  } catch (e) {
    console.error(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const wrapperClassName = {
  fontSize: 60,
  width: '100%',
  height: '100%',
  display: 'flex',
  position: 'relative',
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || 'Tamu Undangan';
  return new ImageResponse(
    (
      <div style={wrapperClassName}>
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
            color: '#fff',
          }}
        >
          {name}
        </h1>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

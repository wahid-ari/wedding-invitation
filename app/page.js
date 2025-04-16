import { config } from '@data/config';
import { recipients } from '@data/recipients';

import NewPage from './new-page';

export async function generateMetadata({ searchParams }, parent) {
  const recipient = recipients.find((item) => item.slug == searchParams.to) || { name: 'Tamu Undangan' };
  const image = recipient.name !== 'Tamu Undangan' ? `/og?name=${recipient.name}` : '/og.png';
  const previousImages = (await parent).openGraph?.images || [];
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_WEB_URL),
    title: config.title,
    description: config.description,
    openGraph: {
      title: config.title,
      description: config.description,
      url: process.env.NEXT_PUBLIC_WEB_URL,
      images: image,
      type: 'website',
      siteName: config.title,
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [image, ...previousImages],
    },
  };
}

export default function Page({ searchParams }) {
  return <NewPage slug={searchParams.to} />;
}

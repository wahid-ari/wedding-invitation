export default function sitemap() {
  return [
    {
      url: process.env.NEXT_PUBLIC_WEB_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}

import { getServerSideSitemapLegacy } from 'next-sitemap';
import { generateSlug } from '@/utils/generateSlug';

export const getServerSideProps = async (ctx) => {
  const mountains = await fetch(
    'https://lauwo-adventures-api.onrender.com/mountains'
  ).then((res) => res.json());

  const mountainSitemaps = mountains.map((item) => ({
    loc: `https://lauwo-adventures-client.vercel.app/mountain-trekking/${generateSlug(
      item.mountain_name
    )}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...mountainSitemaps];

  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Site() {}

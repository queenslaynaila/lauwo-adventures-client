import { getServerSideSitemapLegacy } from 'next-sitemap';
import { generateSlug } from '@/utils/generateSlug';
export const getServerSideProps = async (ctx) => {
  const dayTrips = await fetch(
    'https://lauwo-adventures-api.onrender.com/day_trips'
  ).then((res) => res.json());

  const dayTripsSitemaps = dayTrips.map((item) => ({
    loc: `https://lauwo-adventures-client.vercel.app/day-trips/${generateSlug(
      item.name
    )}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...dayTripsSitemaps];

  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Site() {}
